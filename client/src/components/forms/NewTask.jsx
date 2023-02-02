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
import React, {useEffect} from "react";
import {Formik} from "formik";
import * as Yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-hot-toast";
import {createProject} from "../../app/service/projectService";

// Creating schema
const schema = Yup.object().shape({
    summary: Yup.string().required("Summary is a required field!"),
    name: Yup.string().required("Name is a required field!"),
    developer: Yup.string().required("Assign Developer is a required field!"),
    priority: Yup.string().required("Priority is a required field!"),
    dueDate: Yup.string().required("Due Date is a required field!"),
});

const NewTask = ({onClose}) => {
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
                name: "",
                developer: "",
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
                            <FormLabel>Task Name</FormLabel>
                            <Input
                                type="text"
                                placeholder="Enter your task name"
                                name="name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                            <FormHelperText color="red.400">
                                {errors.name &&
                                    touched.name &&
                                    errors.name}
                            </FormHelperText>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Task Summary</FormLabel>
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
                            <FormLabel>Assign Developer</FormLabel>
                            <Select
                                placeholder="Choose developer"
                                name="developer"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.developer}
                            >
                                <option value="Todo">Todo</option>
                                <option value="Progress">Progress</option>
                                <option value="Complete">Complete</option>
                            </Select>
                            <FormHelperText color="red.400">
                                {errors.developer &&
                                    touched.developer &&
                                    errors.developer}
                            </FormHelperText>
                        </FormControl>
                        {/* priority  */}
                        <FormControl isRequired>
                            <FormLabel>Task Priority</FormLabel>
                            <Select
                                placeholder="Enter your project priority"
                                name="priority"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.priority}
                            >
                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                            </Select>
                            <FormHelperText color="red.400">
                                {errors.priority &&
                                    touched.priority &&
                                    errors.priority}
                            </FormHelperText>
                        </FormControl>

                        {/* dueDate  */}
                        <FormControl isRequired>
                            <FormLabel>Due Date</FormLabel>
                            <Input
                                type="date"
                                name="dueDate"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.dueDate}
                            />
                            <FormHelperText color="red.400">
                                {errors.dueDate &&
                                    touched.dueDate &&
                                    errors.dueDate}
                            </FormHelperText>
                        </FormControl>
                        <Box style={{marginTop: "20px"}}>
                            <Button
                                width="100%"
                                type="submit"
                                bg="blue.600"
                                color="white"
                                _hover={{bg: "blue.500"}}
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
