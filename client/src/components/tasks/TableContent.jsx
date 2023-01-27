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

const TableContent = () => {
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
                pl={5}
                fontSize={14}
            >
                <Flex
                    width="100%"
                    gap={2}
                    justify="space-between"
                    alignItems="center"
                >
                    <Flex gap={2} alignItems="center">
                        <Text>02</Text>
                        <IoCheckmarkDoneCircleSharp size={16} color="green" />
                        <Text>Messanger Application</Text>
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
                pl={5}
            >
                <Stack direction="row">
                    <Badge colorScheme="red">Removed</Badge>
                    <Badge colorScheme="purple">New</Badge>
                </Stack>
            </GridItem>
            <GridItem
                w="100%"
                borderRight="1px"
                borderColor="gray.800"
                display="flex"
                alignItems="center"
                justifyContent="start"
                pl={5}
            >
                <Badge px={2} py={1}>
                    <Flex alignItems="center" gap={2}>
                        <GiSandsOfTime size={15} />
                        34:40
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
                pl={5}
                fontSize={14}
            >
                <Flex gap="2" align="center">
                    <Avatar size="xs" name="Mehedi Hasan" />
                    <Text>Mehedi Hasan</Text>
                </Flex>
            </GridItem>
            <GridItem
                w="100%"
                display="flex"
                alignItems="center"
                justifyContent="start"
                pl={5}
            >
                <Badge px={2} py={1} colorScheme="green">
                    <Flex alignItems="center" gap={2}>
                        <MdOutlineTimer size={15} />
                        <Text textTransform="uppercase">Today</Text>
                    </Flex>
                </Badge>
            </GridItem>
        </Grid>
    );
};

export default TableContent;
