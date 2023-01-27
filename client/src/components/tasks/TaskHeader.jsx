import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";

const TaskHeader = () => {
    return (
        <Box mt={5} bg="blackAlpha.700" rounded="md">
            <Grid templateColumns="repeat(7, 1fr)" gap={2}>
                <GridItem
                    colSpan={3}
                    w="100%"
                    h="10"
                    borderRight="1px"
                    borderColor="gray.800"
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    pl={5}
                    fontWeight="semibold"
                >
                    # Task Name
                </GridItem>
                <GridItem
                    w="100%"
                    borderRight="1px"
                    borderColor="gray.800"
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    pl={5}
                    fontWeight="semibold"
                >
                    Tag{" "}
                </GridItem>
                <GridItem
                    w="100%"
                    borderRight="1px"
                    borderColor="gray.800"
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    pl={5}
                    fontWeight="semibold"
                >
                    Hours{" "}
                </GridItem>
                <GridItem
                    w="100%"
                    borderRight="1px"
                    borderColor="gray.800"
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    pl={5}
                    fontWeight="semibold"
                >
                    Assign By{" "}
                </GridItem>
                <GridItem
                    w="100%"
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    pl={5}
                    fontWeight="semibold"
                >
                    Due Date{" "}
                </GridItem>
            </Grid>
        </Box>
    );
};

export default TaskHeader;
