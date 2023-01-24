import { Box, Button, Center, Flex, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";
import { DiJira } from "react-icons/di";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const Auth = () => {
    // state
    const [signup, setSignup] = useState(false);
    return (
        <Flex
            height="100vh"
            width="100%"
            justify="space-between"
            direction={signup ? "row-reverse" : "row"}
        >
            <Box display={{ md: "flex", base: "none" }} width="100%">
                1
            </Box>
            <Center bg="white" width="100%">
                <Stack
                    align="center"
                    justify="center"
                    direction="column"
                    gap={3}
                >
                    <DiJira size={60} color="darkcyan" />
                    <Text color="black" fontSize="3xl" fontWeight="bold">
                        {signup ? "Sign up" : "Log in"}
                    </Text>
                    {/* social media login  */}
                    <Box
                        display="flex"
                        flexDirection="column"
                        gap={3}
                        width="100&"
                    >
                        <Button
                            leftIcon={<FcGoogle size={20} />}
                            bg="blackAlpha.200"
                            width="300px"
                            _hover={{ bg: "blackAlpha.100" }}
                            color="black"
                            px={4}
                            py={2}
                        >
                            Google
                        </Button>
                        <Button
                            leftIcon={<FaFacebook color="#4267B2" size={20} />}
                            bg="blackAlpha.200"
                            width="300px"
                            _hover={{ bg: "blackAlpha.100" }}
                            color="black"
                            px={4}
                            py={2}
                        >
                            Facebook
                        </Button>
                    </Box>
                    <Text
                        color="blackAlpha.500"
                        fontSize={14}
                        textTransform="uppercase"
                    >
                        or with email
                    </Text>
                    {/* login & signup form  */}
                    {signup ? (
                        <Signup signup={signup} />
                    ) : (
                        <Login signup={signup} />
                    )}

                    <Button
                        color="blackAlpha.700"
                        fontSize={13}
                        textTransform="uppercase"
                        _hover={{ color: "blue.400" }}
                        onClick={() => setSignup(!signup)}
                    >
                        {signup
                            ? "Already have an account? Login"
                            : "Don't have any account? Signup"}
                    </Button>
                </Stack>
            </Center>
        </Flex>
    );
};

export default Auth;
