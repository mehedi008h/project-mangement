import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";
import { TbDots } from "react-icons/tb";
import { ProjectCard, FilterMenu } from "./index";

const Project = () => {
    return (
        <Box my={5}>
            <FilterMenu />
            {/* project count  */}
            <Flex justify="space-between" align="center" gap={8} my={6}>
                <Flex justify="space-between" align="center" width="100%">
                    <Text fontWeight="bold" fontSize={18}>
                        Working (03)
                    </Text>
                    <TbDots size={20} />
                </Flex>
                <Flex justify="space-between" align="center" width="100%">
                    <Text fontWeight="bold" fontSize={18}>
                        In Progress (03)
                    </Text>
                    <TbDots size={20} />
                </Flex>
                <Flex justify="space-between" align="center" width="100%">
                    <Text fontWeight="bold" fontSize={18}>
                        Complete (03)
                    </Text>
                    <TbDots size={20} />
                </Flex>
            </Flex>

            {/* projects  */}
            <Grid templateColumns="repeat(3, 1fr)" gap={8}>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </Grid>
        </Box>
    );
};

export default Project;
