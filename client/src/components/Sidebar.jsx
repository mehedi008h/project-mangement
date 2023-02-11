import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import { DiJira } from "react-icons/di";
import { RxDashboard } from "react-icons/rx";
import { VscProject } from "react-icons/vsc";
import { BiTask } from "react-icons/bi";
import { BsCalendarWeek } from "react-icons/bs";
import { Link } from "react-router-dom";
import { RiTimerFlashLine } from "react-icons/ri";
import { GoReport } from "react-icons/go";
import { AiOutlineSetting } from "react-icons/ai";

const Sidebar = () => {
    return (
        <Stack
            boxShadow="lg"
            bg="blackAlpha.600"
            py={4}
            width="300px"
            height="100vh"
            spacing={7}
            position="fixed"
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

            <Stack spacing={3}>
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
                        <VscProject /> Projects
                    </Box>
                </Link>
                <Link to="/task">
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
                        <BiTask /> My Task
                    </Box>
                </Link>
                <Link to="/task">
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
                        <BsCalendarWeek /> Calendar
                    </Box>
                </Link>
                <Link to="/task">
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
                        <RiTimerFlashLine /> Time Management
                    </Box>
                </Link>
                <Link to="/task">
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
                        <GoReport /> Reports
                    </Box>
                </Link>
                <Link to="/task">
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
                        <AiOutlineSetting /> Setting
                    </Box>
                </Link>
            </Stack>
        </Stack>
    );
};

export default Sidebar;
