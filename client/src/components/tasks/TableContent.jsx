import React from "react";
import {
    Avatar,
    Badge,
    Flex,
    Grid,
    GridItem,
    Stack,
    Text,
} from "@chakra-ui/react";
import {
    IoChatboxEllipsesOutline,
    IoCheckmarkDoneCircleSharp,
} from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineTimer } from "react-icons/md";
import { GiSandsOfTime } from "react-icons/gi";
import moment from "moment";

const TableContent = ({task}) => {
    // calculate days
    let a = moment(task?.dueDate);
    let b = moment(task?.createdAt);
    let remaining = a.diff(b, 'days');

    console.log(task);

    return (
        <Grid
            templateColumns="repeat(7, 1fr)"
            gap={2}
            borderBottom="1px"
            borderColor="gray.800"
        >
            <GridItem
                colSpan={3}
                w="100%"
                h="10"
                borderRight="1px"
                borderColor="gray.800"
                display="flex"
                alignItems="center"
                justifyContent="start"
                pl={3}
                fontSize={14}
            >
                <Flex
                    width="100%"
                    gap={2}
                    justify="space-between"
                    alignItems="center"
                >
                    <Flex gap={2} alignItems="center">
                        <Text>{task?.projectSequence}</Text>
                        <IoCheckmarkDoneCircleSharp size={16} color="green" />
                        <Text>{task?.name}</Text>
                    </Flex>
                    <Flex pr={4} gap="3">
                        <Flex gap={1} alignItems="center">
                            <IoChatboxEllipsesOutline size={16} color="green" />{" "}
                            <Text>20</Text>
                        </Flex>
                        <Flex
                            gap={1}
                            alignItems="center"
                            cursor="pointer"
                            _hover={{ color: "yellow" }}
                        >
                            <Text>Details</Text>
                            <IoIosArrowForward size={16} color="yellow" />{" "}
                        </Flex>
                    </Flex>
                </Flex>
            </GridItem>
            <GridItem
                w="100%"
                borderRight="1px"
                borderColor="gray.800"
                display="flex"
                alignItems="center"
                justifyContent="start"
                pl={3}
            >
                <Stack direction="row">
                    <Badge px={4} py={1} colorScheme="red">{task?.status}</Badge>
                </Stack>
            </GridItem>
            <GridItem
                w="100%"
                borderRight="1px"
                borderColor="gray.800"
                display="flex"
                alignItems="center"
                justifyContent="start"
                pl={3}
            >
                <Badge px={4} py={1}>
                    <Flex alignItems="center" gap={2}>
                        <GiSandsOfTime size={15} />
                        {remaining} days
                    </Flex>
                </Badge>
            </GridItem>
            <GridItem
                w="100%"
                borderRight="1px"
                borderColor="gray.800"
                display="flex"
                alignItems="center"
                justifyContent="start"
                pl={3}
                fontSize={14}
            >
                <Badge px={2} py={1} colorScheme="green">
                    <Flex alignItems="center" gap={2}>
                        <MdOutlineTimer size={15} />
                        <Text textTransform="uppercase">{task?.createdAt}</Text>
                    </Flex>
                </Badge>
            </GridItem>
            <GridItem
                w="100%"
                display="flex"
                alignItems="center"
                justifyContent="start"
                pl={3}
            >
                <Badge px={2} py={1} colorScheme="red">
                    <Flex alignItems="center" gap={2}>
                        <MdOutlineTimer size={15} />
                        <Text textTransform="uppercase">{task?.dueDate}</Text>
                    </Flex>
                </Badge>
            </GridItem>
        </Grid>
    );
};

export default TableContent;
