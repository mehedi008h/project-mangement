import {
    Avatar,
    Box,
    Flex,
    Input,
    InputGroup,
    InputLeftElement,
    Stack,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Flex
            height="60px"
            justify="space-between"
            alignItems="center"
            px={{ base: "1rem", md: "4rem" }}
            bg="blackAlpha.600"
            borderRadius={10}
            marginTop="10px"
            width="100%"
        >
            <InputGroup width="40%" borderRadius={"full"}>
                <InputLeftElement
                    pointerEvents="none"
                    children={<BiSearchAlt size={20} color="gray.300" />}
                />
                <Input type="text" placeholder="Search ..." />
            </InputGroup>
            <Box>
                <Stack direction="row" spacing={5} align="center">
                    <IoNotificationsOutline size={25} />
                    {/* <Link to="/auth">
                        <AiOutlineUser size={25} />
                    </Link> */}
                    <Avatar size="sm" />
                </Stack>
            </Box>
        </Flex>
    );
};

export default Header;
