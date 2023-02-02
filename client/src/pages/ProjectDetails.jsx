import {Box, Flex, Text} from "@chakra-ui/react";
import React, {Fragment, useEffect} from "react";
import {
    Header,
    ProjectDetailsCard,
    Sidebar,
    TaskHeader,
    TaskTable,
} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {getProjectDetails} from "../app/service/projectService";
import {reset} from "../app/features/projectSlice";
import {toast} from "react-hot-toast";
import {useParams} from "react-router-dom";

const ProjectDetails = () => {
    const {success, loading, error, project} = useSelector((state) => state.project);
    console.log("Projects:", project);
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        dispatch(getProjectDetails({id}));
        if (success) {
            dispatch(reset())
        }
        if (error) {
            toast.error(error);
        }
    }, [])
    return (
        <Flex gap={3}>
            <Box display={{md: "flex", base: "none"}} width="300px">
                <Sidebar/>
            </Box>
            <Box className="header" marginRight="15px">
                <Header/>
                {
                    loading ? <Text>Loading</Text> :
                        <Fragment>
                            <ProjectDetailsCard project={project}/>
                            <TaskHeader/>
                            <TaskTable/>
                        </Fragment>
                }

            </Box>
        </Flex>
    );
};

export default ProjectDetails;
