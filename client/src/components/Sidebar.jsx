import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import { DiJira } from "react-icons/di";
import { RxDashboard } from "react-icons/rx";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <Stack
            boxShadow="lg"
            bg="blackAlpha.600"
            py={4}
            width="100%"
            height="100vh"
            spacing={7}
        >
            <Box>
                <Link to="/">
                    <Box
                        display="flex"
                        gap={3}
                        alignItems="center"
                        justifyContent="center"
                    >
                        <DiJira size={55} color="darkcyan" />
                    </Box>
                </Link>
            </Box>

            <Stack spacing={1}>
                <Link to="/">
                    <Box
                        display="flex"
                        alignItems="center"
                        gap={4}
                        px={4}
                        py={2}
                        fontSize={18}
                        textTransform="uppercase"
                        _hover={{
                            bg: "blackAlpha.700",
                            borderRight: "1px",
                            borderColor: "darkcyan",
                            color: "darkcyan",
                        }}
                    >
                        <RxDashboard /> Dashboard
                    </Box>
                </Link>
                <Link to="/projects">
                    <Box
                        display="flex"
                        alignItems="center"
                        gap={4}
                        px={4}
                        py={2}
                        fontSize={18}
                        textTransform="uppercase"
                        _hover={{
                            bg: "blackAlpha.700",
                            borderRight: "1px",
                            borderColor: "darkcyan",
                            color: "darkcyan",
                        }}
                    >
                        <RxDashboard /> Projects
                    </Box>
                </Link>
                <Link to="/">
                    <Box
                        display="flex"
                        alignItems="center"
                        gap={4}
                        px={4}
                        py={2}
                        fontSize={18}
                        textTransform="uppercase"
                        _hover={{
                            bg: "blackAlpha.700",
                            borderRight: "1px",
                            borderColor: "darkcyan",
                            color: "darkcyan",
                        }}
                    >
                        <RxDashboard /> My Task
                    </Box>
                </Link>
            </Stack>
        </Stack>
    );
};

export default Sidebar;
