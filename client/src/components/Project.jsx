import {Box, Flex, Grid, Text} from "@chakra-ui/react";
import React, {Fragment, useEffect} from "react";
import {TbDots} from "react-icons/tb";
import {ProjectCard, FilterMenu} from "./index";
import {useDispatch, useSelector} from "react-redux";
import {getProject} from "../app/service/projectService";
import {reset} from "../app/features/projectSlice";
import {toast} from "react-hot-toast";
import {ImFilesEmpty} from "react-icons/im";

const Project = () => {
    const {loading, error, projects} = useSelector((state) => state.project);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProject());
        if (error) {
            toast.error(error);
        }
    }, [])
    return (
        <Box my={5}>
            <FilterMenu/>
            {/* project count  */}
            <Flex justify="space-between" align="center" gap={8} my={6}>
                <Flex justify="space-between" align="center" width="100%">
                    <Text fontWeight="bold" fontSize={18}>
                        Working (03)
                    </Text>
                    <TbDots size={20}/>
                </Flex>
                <Flex justify="space-between" align="center" width="100%">
                    <Text fontWeight="bold" fontSize={18}>
                        In Progress (03)
                    </Text>
                    <TbDots size={20}/>
                </Flex>
                <Flex justify="space-between" align="center" width="100%">
                    <Text fontWeight="bold" fontSize={18}>
                        Complete (03)
                    </Text>
                    <TbDots size={20}/>
                </Flex>
            </Flex>

            {/* projects  */}
            <Grid templateColumns="repeat(3, 1fr)" gap={8}>
                {loading ? (<Text>Loading</Text>) : (<Fragment>
                    {projects && projects?.map((project) => (
                        <ProjectCard key={project?.id} project={project}/>
                    ))}
                </Fragment>)}
            </Grid>

            {
                projects.length === 0 && (
                    <Flex  mt={14} justifyContent="center"  width="100%">
                        <ImFilesEmpty size={70} color="teal"/>
                    </Flex>
                )

            }
        </Box>
    );
};

export default Project;
