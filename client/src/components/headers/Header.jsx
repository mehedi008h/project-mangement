import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { DiJira } from "react-icons/di";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Flex
            height="60px"
            justify="space-between"
            alignItems="center"
            px={{ base: "1rem", md: "4rem" }}
        >
            <Link to="/">
                <Box display="flex" gap={3} alignItems="center">
                    <DiJira size={35} color="darkcyan" />
                    <Text
                        display={{ md: "flex", base: "none" }}
                        fontSize="2xl"
                        fontWeight="bold"
                    >
                        Project Managment
                    </Text>
                </Box>
            </Link>
            <Box>
                <Stack direction="row">
                    <Link to="/auth">
                        <AiOutlineUser size={25} />
                    </Link>
                </Stack>
            </Box>
        </Flex>
    );
};

export default Header;
