import React, {useEffect} from 'react';
import {Box, Flex} from "@chakra-ui/react";
import {Header, Sidebar, UpdateProjectForm} from "../components";
import {getProjectDetails} from "../app/service/projectService";
import {toast} from "react-hot-toast";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

const UpdateProject = () => {
    const {loading, error, project} = useSelector((state) => state.project);

    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        dispatch(getProjectDetails({id}));

        if (error) {
            toast.error(error);
        }
    }, [dispatch,error, id])
    return (
        <Flex gap={3}>
            <Box display={{md: "flex", base: "none"}} width="300px">
                <Sidebar/>
            </Box>
            <Box className="header" marginRight="15px">
                <Header/>
                <UpdateProjectForm projectDetails={project} projectIdentifier={id}/>
            </Box>
        </Flex>
    );
};

export default UpdateProject;