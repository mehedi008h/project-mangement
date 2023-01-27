import { Box } from "@chakra-ui/react";
import React from "react";
import TableContent from "./TableContent";

const TaskTable = () => {
    return (
        <Box mt={2} bg="blackAlpha.700" rounded="md">
            <TableContent />
            <TableContent />
            <TableContent />
        </Box>
    );
};

export default TaskTable;
