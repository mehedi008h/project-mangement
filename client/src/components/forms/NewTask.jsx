import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
    Select,
    Stack,
    Textarea,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { createProject } from "../../app/service/projectService";

// Creating schema
const schema = Yup.object().shape({
    summary: Yup.string().required("Summary is a required field!"),
});

const NewTask = ({ onClose }) => {
    const dispatch = useDispatch();

    // handle error
    // useEffect(() => {
    //     if (error) {
    //         toast.error(error);
    //     }

    //     if (success) {
    //         toast.success("Project created successfully 😎");
    //         onClose();
    //     }
    // }, [error, success, onClose]);
    return (
        <Formik
            validationSchema={schema}
            initialValues={{
                summary: "",
                acceptanceCriteria: "",
                status: "",
                priority: "",
                dueDate: "",
            }}
            onSubmit={(values) => {
                console.log("Task Data: ", values);
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
                            <FormLabel>Project Summary</FormLabel>
                            <Textarea
                                type="text"
                                placeholder="Enter your project summary"
                                name="summary"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.summary}
                            />
                            <FormHelperText color="red.400">
                                {errors.summary &&
                                    touched.summary &&
                                    errors.summary}
                            </FormHelperText>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Acceptance Criteria</FormLabel>
                            <Input
                                type="text"
                                placeholder="Enter your criteria"
                                name="acceptanceCriteria"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.acceptanceCriteria}
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Project Status</FormLabel>
                            <Select
                                placeholder="Enter your project status"
                                name="status"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.status}
                            >
                                <option value="Todo">Todo</option>
                                <option value="Progress">Progress</option>
                                <option value="Complete">Complete</option>
                            </Select>
                        </FormControl>
                        {/* priority  */}
                        <FormControl isRequired>
                            <FormLabel>Project Priority</FormLabel>
                            <Select
                                placeholder="Enter your project priority"
                                name="priority"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.priority}
                            >
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                            </Select>
                        </FormControl>

                        {/* dueDate  */}
                        <FormControl isRequired>
                            <FormLabel>Start Date</FormLabel>
                            <Input
                                type="date"
                                name="dueDate"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.dueDate}
                            />
                        </FormControl>
                        <Box style={{ marginTop: "20px" }}>
                            <Button
                                width="100%"
                                type="submit"
                                bg="blue.600"
                                color="white"
                                _hover={{ bg: "blue.500" }}
                                // isLoading={loading}
                            >
                                Add Task
                            </Button>
                        </Box>
                    </Stack>
                </form>
            )}
        </Formik>
    );
};

export default NewTask;
