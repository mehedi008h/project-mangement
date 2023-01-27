import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import {
    Header,
    ProjectDetailsCard,
    Sidebar,
    TaskHeader,
    TaskTable,
} from "../components";

const ProjectDetails = () => {
    return (
        <Flex gap={3}>
            <Box display={{ md: "flex", base: "none" }} width="300px">
                <Sidebar />
            </Box>
            <Box className="header" marginRight="15px">
                <Header />
                <ProjectDetailsCard />
                <TaskHeader />
                <TaskTable />
            </Box>
        </Flex>
    );
};

export default ProjectDetails;
