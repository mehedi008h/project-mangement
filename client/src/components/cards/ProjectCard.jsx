import {
    Avatar,
    Badge,
    Box,
    Flex,
    Image,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
} from "@chakra-ui/react";
import React from "react";
import {TbDots} from "react-icons/tb";
import {GiSandsOfTime} from "react-icons/gi";
import {MdOutlineTimer} from "react-icons/md";
import {CiViewList} from "react-icons/ci";
import {IoAddCircleOutline, IoChatboxEllipsesOutline} from "react-icons/io5";
import {RiAttachment2} from "react-icons/ri";
import {Link} from "react-router-dom";

const ProjectCard = ({project}) => {
    return (
        <Box bg="blackAlpha.700" p={4} width="100%" borderRadius="md">
            {/* image  */}
            <Box width="100%" height="170px">
                <Image
                    height="100%"
                    width="100%"
                    objectFit="cover"
                    borderRadius="md"
                    src="https://bit.ly/dan-abramov"
                    alt="Dan Abramov"
                />
            </Box>
            {/* header  */}
            <Flex justify="space-between" my={4}>
                <Link to={`/project/${project?.projectIdentifier}`}>
                    <Text fontSize={18} fontWeight="semibold">
                        {project?.projectName}
                    </Text>
                </Link>

                <Menu>
                    <MenuButton>
                        <TbDots size={20}/>
                    </MenuButton>
                    <MenuList>
                        <Link to={`/project/${project?.projectIdentifier}`}>
                            <MenuItem icon={<IoAddCircleOutline/>}>
                                View
                            </MenuItem>
                        </Link>

                        <MenuItem icon={<IoAddCircleOutline/>}>
                            Update
                        </MenuItem>
                        <MenuItem icon={<IoAddCircleOutline/>}>
                            Delete
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
            {/* info */}
            <Flex justify="space-between" my={4}>
                <Badge px={2} py={1}>
                    <Flex alignItems="center" gap={2}>
                        <GiSandsOfTime size={15}/>
                        34:40
                    </Flex>
                </Badge>
                <Badge px={2} py={1} colorScheme="green">
                    <Flex alignItems="center" gap={2}>
                        <MdOutlineTimer size={15}/>
                        <Text textTransform="uppercase">{project?.end_date
                        }</Text>
                    </Flex>
                </Badge>
            </Flex>
            <Flex flexWrap={"wrap"} gap={2}>
                <Badge px={2} py={1} colorScheme="green">
                    Javascript
                </Badge>
                <Badge px={2} py={1} colorScheme="red">
                    Chakra
                </Badge>
            </Flex>
            <Flex mt={4} justify="space-between">
                <Avatar size="sm" name="Mehedi Hasan"/>
                <Flex gap={3}>
                    <Flex align="center" gap={1}>
                        <RiAttachment2/>
                        20
                    </Flex>
                    <Flex align="center" gap={1}>
                        <IoChatboxEllipsesOutline color="white"/>
                        20
                    </Flex>
                    <Flex align="center" gap={1}>
                        <CiViewList/>
                        20
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    );
};

export default ProjectCard;
