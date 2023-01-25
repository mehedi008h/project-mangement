import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Header, Project, Sidebar } from "../components";

const Projects = () => {
    return (
        <Flex gap={3}>
            <Box display={{ md: "flex", base: "none" }} width="300px">
                <Sidebar />
            </Box>
            <Box width="100%" marginRight="15px">
                <Header />
                <Project />
            </Box>
        </Flex>
    );
};

export default Projects;
