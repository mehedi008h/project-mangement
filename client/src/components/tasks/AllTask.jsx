import React from 'react';
import {Box, Stack, Text} from "@chakra-ui/react";
import {TaskHeader} from "../index";

const AllTask = () => {
    return (
        <Stack spacing={5} my={5}>
            {/*to_do */}
            <Box>
                <Text fontWeight="semibold" fontSize={18}>TO_DO Task</Text>
                <TaskHeader />
            </Box>

            {/*progress */}
            <Box>
                <Text fontWeight="semibold" fontSize={18}>PROGRESS Task</Text>
                <TaskHeader />
            </Box>
        </Stack>
    );
};

export default AllTask;