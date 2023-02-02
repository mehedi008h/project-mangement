import { Box, Button, Center, Flex, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";
import { DiJira } from "react-icons/di";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { BiHomeSmile } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { reset } from "../app/features/authSlice";

const Auth = () => {
    // state
    const [signup, setSignup] = useState(false);
    const { success, loading, error } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    // handle error
    useEffect(() => {
        if (success) {
            toast.success(
                signup ? "Register successfully 😎" : "Login successfully 😎"
            );
            dispatch(reset());
            if (signup) {
                setSignup(false);
            } else {
                navigate("/");
            }
        }
        if (error) {
            toast.error(error);
        }
    }, [error, success, signup, dispatch, navigate]);
    return (
        <Flex
            height="100vh"
            width="100%"
            justify="space-between"
            direction={signup ? "row-reverse" : "row"}
            position="relative"
        >
            {/* home button  */}
            {signup ? (
                <Box position="absolute" top={5} right={5}>
                    <Link to="/" className="link">
                        <Box display="flex" alignItems="center" gap={2}>
                            <BiHomeSmile /> Back to home
                        </Box>
                    </Link>
                </Box>
            ) : (
                <Box position="absolute" top={5} left={5}>
                    <Link to="/" className="link">
                        <Box display="flex" alignItems="center" gap={2}>
                            <BiHomeSmile /> Back to home
                        </Box>
                    </Link>
                </Box>
            )}

            <Box display={{ md: "flex", base: "none" }} width="100%"></Box>
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
                    {/* toto  */}
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
                            leftIcon={<AiFillGithub color="black" size={20} />}
                            bg="blackAlpha.200"
                            width="300px"
                            _hover={{ bg: "blackAlpha.100" }}
                            color="black"
                            px={4}
                            py={2}
                        >
                            Github
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
                        <Signup signup={signup} loading={loading} />
                    ) : (
                        <Login signup={signup} loading={loading} />
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
