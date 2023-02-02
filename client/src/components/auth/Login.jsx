import {
    Box,
    Button,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Text,
} from "@chakra-ui/react";
import { Formik } from "formik";
import * as Yup from "yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../app/service/authService";

// Creating schema
const schema = Yup.object().shape({
    email: Yup.string()
        .required("Email is a required field!")
        .email("Invalid email format!"),
    password: Yup.string()
        .required("Password is a required field!")
        .min(8, "Password must be at least 8 characters!"),
});

const Login = ({ signup, loading }) => {
    // state
    const [show, setShow] = useState(false);

    const dispatch = useDispatch();

    // show password
    const handleClick = () => setShow(!show);
    return (
        <Formik
            validationSchema={schema}
            initialValues={{
                email: "",
                password: "",
            }}
            onSubmit={(values) => {
                console.log(values);
                dispatch(login(values));
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
            }) => (
                <form noValidate onSubmit={handleSubmit}>
                    <Stack width="300px" spacing={4}>
                        <Box>
                            <Input
                                type="email"
                                border="1px"
                                color="blackAlpha.700"
                                borderColor={
                                    errors.email && touched.email
                                        ? "red"
                                        : "blackAlpha.500"
                                }
                                focusBorderColor="blackAlpha.500"
                                placeholder="Enter your email.."
                                _placeholder={{
                                    color: "blackAlpha.500",
                                }}
                                _hover={{
                                    border: "1px",
                                    borderColor: "blackAlpha.500",
                                }}
                                _focus={{ border: "1px" }}
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {/* If validation is not passed show errors */}
                            <Text color="red.400" fontSize={14} marginTop={2}>
                                {errors.email && touched.email && errors.email}
                            </Text>
                        </Box>

                        <Box>
                            <InputGroup size="md">
                                <Input
                                    pr="4.5rem"
                                    type={show ? "text" : "password"}
                                    color="blackAlpha.700"
                                    border="1px"
                                    borderColor={
                                        errors.password && touched.password
                                            ? "red"
                                            : "blackAlpha.500"
                                    }
                                    focusBorderColor="blackAlpha.500"
                                    placeholder="Enter your password.."
                                    _placeholder={{
                                        color: "blackAlpha.500",
                                    }}
                                    _hover={{
                                        border: "1px",
                                        borderColor: "blackAlpha.500",
                                    }}
                                    _focus={{
                                        border: "1px",
                                    }}
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                                <InputRightElement width="4.5rem">
                                    <Button
                                        h="1.75rem"
                                        size="sm"
                                        onClick={handleClick}
                                        color="blackAlpha.600"
                                    >
                                        {show ? (
                                            <AiOutlineEyeInvisible size={20} />
                                        ) : (
                                            <AiOutlineEye size={20} />
                                        )}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            {/* If validation is not passed show errors */}
                            <Text color="red.400" fontSize={14} marginTop={2}>
                                {errors.password &&
                                    touched.password &&
                                    errors.password}
                            </Text>
                        </Box>
                        <Button
                            type="submit"
                            bg="blue.600"
                            color="white"
                            _hover={{ bg: "blue.500" }}
                            isLoading={loading}
                        >
                            {signup ? "Sign up" : "Login"}
                        </Button>
                    </Stack>
                </form>
            )}
        </Formik>
    );
};

export default Login;
