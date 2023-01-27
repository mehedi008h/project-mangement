import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Header, Sidebar } from "../components";

const ProjectDetails = () => {
    return (
        <Flex gap={3}>
            <Box display={{ md: "flex", base: "none" }} width="300px">
                <Sidebar />
            </Box>
            <Box width="100%" marginRight="15px">
                <Header />
                <h1>Project Details</h1>
            </Box>
        </Flex>
    );
};

export default ProjectDetails;
