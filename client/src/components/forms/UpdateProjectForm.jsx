import React, {useEffect} from 'react';
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormHelperText,
    FormLabel,
    Input, Spinner,
    Stack,
    Text,
    Textarea
} from "@chakra-ui/react";
import {Formik} from "formik";
import * as Yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-hot-toast";
import {updateProject} from "../../app/service/projectService";
import {reset} from "../../app/features/projectSlice";
import {useNavigate} from "react-router-dom";

// Creating schema
const schema = Yup.object().shape({
    projectName: Yup.string().required("Project name is a required field!"),
    description: Yup.string().required("Description is a required field!"),
    start_date: Yup.string().required("Start date is a required field!"),
    end_date: Yup.string().required("End date is a required field!"),
});

const UpdateProjectForm = ({projectDetails, projectIdentifier}) => {
    const {loading, error, success} = useSelector((state) => state.project);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // handle error
    useEffect(() => {
        if (error) {
            toast.error(error);
        }

        if (success) {
            toast.success("Project update successfully 😎");
            dispatch(reset());
            navigate(`/project/${projectIdentifier}`)
        }
    }, [dispatch, error, success,navigate]);
    return (
        <Box width={"60%"} mx="auto" bg="black" mt={8} rounded="md">
            <Flex bg="gray.600" py={2} px={4} roundedTop="md" justifyContent="space-between" alignItems="center">
                <Text>Update Project</Text>
                {
                    loading && <Spinner color='red.500' />
                }
            </Flex>
            <Box my={4} px={4}>
                <Formik
                    validationSchema={schema}
                    initialValues={{
                        projectName: projectDetails?.projectName,
                        id: projectDetails?.id,
                        projectIdentifier: projectDetails?.projectIdentifier,
                        description: projectDetails?.description,
                        start_date: projectDetails?.start_date,
                        end_date: projectDetails?.end_date,
                    }}
                    onSubmit={(values) => {
                        dispatch(updateProject({projectIdentifier, values}));
                    }}
                >
                    {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                      }) => (
                        <form noValidate onSubmit={handleSubmit}>
                            <Stack py={4}>
                                <FormControl isRequired>
                                    <FormLabel>Project Name</FormLabel>
                                    <Input
                                        type="text"
                                        placeholder="Enter your project name"
                                        name="projectName"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.projectName}
                                    />
                                    <FormHelperText color="red.400">
                                        {errors.projectName &&
                                            touched.projectName &&
                                            errors.projectName}
                                    </FormHelperText>
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Description</FormLabel>
                                    <Textarea
                                        type="text"
                                        placeholder="Enter your project description"
                                        name="description"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.description}
                                    />
                                    <FormHelperText color="red.400">
                                        {errors.description &&
                                            touched.description &&
                                            errors.description}
                                    </FormHelperText>
                                </FormControl>
                                {/* start & end date  */}
                                <Flex gap={3}>
                                    <FormControl isRequired>
                                        <FormLabel>Start Date</FormLabel>
                                        <Input
                                            type="date"
                                            name="start_date"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.start_date}
                                        />
                                        <FormHelperText color="red.400">
                                            {errors.start_date &&
                                                touched.start_date &&
                                                errors.start_date}
                                        </FormHelperText>
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel>End Date</FormLabel>
                                        <Input
                                            type="date"
                                            name="end_date"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.end_date}
                                        />
                                        <FormHelperText color="red.400">
                                            {errors.end_date &&
                                                touched.end_date &&
                                                errors.end_date}
                                        </FormHelperText>
                                    </FormControl>
                                </Flex>
                                <Box style={{marginTop: "20px"}}>
                                    <Button
                                        width="100%"
                                        type="submit"
                                        bg="blue.600"
                                        color="white"
                                        _hover={{bg: "blue.500"}}
                                        isLoading={loading}
                                    >
                                        Update Project
                                    </Button>
                                </Box>
                            </Stack>
                        </form>
                    )}
                </Formik>
            </Box>
        </Box>
    );
};

export default UpdateProjectForm;