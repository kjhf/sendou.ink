import { Box, Flex, IconButton } from "@chakra-ui/react";
import MyLink from "components/common/MyLink";
import { useActiveNavItem } from "hooks/common";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { navItems } from "utils/constants";
import { CSSVariables } from "utils/CSSVariables";
import UserItem from "./UserItem";

const Nav = () => {
  const router = useRouter();
  const navItem = useActiveNavItem();
  const [expanded, setExpanded] = useState(() =>
    JSON.parse(window.localStorage.getItem("nav-expanded") ?? "true")
  );

  if (router.pathname === "/") return null;

  return (
    <Box
      width={expanded ? "175px" : "60px"}
      marginRight={expanded ? "-175px" : "-60px"}
      as="nav"
      flexShrink={0}
      position="sticky"
      alignSelf="flex-start"
      display={["none", null, null, "block"]}
      className="scrollableNavigation"
    >
      {navItems.map(({ code, name, imageSrc }) => {
        const isActive = navItem?.code === code;
        return (
          <Box
            key={code}
            borderLeft="4px solid"
            borderColor={
              isActive ? CSSVariables.themeColor : CSSVariables.bgColor
            }
            pl={2}
          >
            <MyLink href={"/" + code} isColored={false} noUnderline>
              <Flex
                width="100%"
                rounded="lg"
                p={2}
                fontSize="sm"
                fontWeight="bold"
                align="center"
                whiteSpace="nowrap"
                _hover={{
                  bg: CSSVariables.secondaryBgColor,
                }}
              >
                <Image
                  src={`/layout/${imageSrc ?? code}.png`}
                  className={code === "splatoon3" ? "rounded" : undefined}
                  height={32}
                  width={32}
                  priority
                  alt={`${name} icon`}
                />
                {expanded && <Box ml={2}>{name}</Box>}
              </Flex>
            </MyLink>
          </Box>
        );
      })}
      <UserItem expanded={expanded} />

      <IconButton
        icon={expanded ? <FiArrowLeft /> : <FiArrowRight />}
        aria-label={expanded ? "Collapse menu" : "Expand menu"}
        variant="ghost"
        ml={4}
        mt={2}
        onClick={() => {
          window.localStorage.setItem("nav-expanded", String(!expanded));
          setExpanded(!expanded);
        }}
        borderRadius="50%"
      />
    </Box>
  );
};

export default Nav;
