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
import React, {useEffect, useState} from "react";
import {Formik} from "formik";
import * as Yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-hot-toast";
import {createTask} from "../../app/service/taskService";
import {reset} from "../../app/features/taskSlice";

// Creating schema
const schema = Yup.object().shape({
    summary: Yup.string().required("Summary is a required field!"),
    name: Yup.string().required("Name is a required field!"),
    priority: Yup.string().required("Priority is a required field!"),
    dueDate: Yup.string().required("Due Date is a required field!"),
});

const NewTask = ({onClose, developers, projectId}) => {
    // state
    const[userEmail, setUserEmail] = useState("");
    const[emailError, setEmailError] = useState(false);
    const {success, loading, error} = useSelector((state) => state.task);

    console.log("Email:", userEmail);
    console.log("Error:", emailError)

    const dispatch = useDispatch();

    //handle error
    useEffect(() => {
        if (error) {
            toast.error(error);
        }

        if (success) {
            toast.success("Task created successfully 😎");
            onClose();
            dispatch(reset());
        }
    }, [error, success, onClose,dispatch]);
    return (
        <Formik
            validationSchema={schema}
            initialValues={{
                summary: "",
                name: "",
                priority: null,
                dueDate: "",
            }}
            onSubmit={(values) => {
                if(userEmail === "") {
                    setEmailError(true);
                }else {
                    setEmailError(false);
                }
                console.log("Task Data: ", values);
                dispatch(createTask({projectId, userEmail, values}));
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
                                name="userEmail"
                                onChange={(e) => setUserEmail(e.target.value)}
                                value={userEmail}
                            >
                                {
                                   developers && developers?.map((developer) => (
                                        <option key={developer?.id} value={developer?.email}>
                                            {developer?.name}
                                        </option>
                                    ))
                                }
                            </Select>
                            <FormHelperText color="red.400">
                                {emailError && "Assign Developer is required!"}
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
                                <option value={1}>High</option>
                                <option value={2}>Medium</option>
                                <option value={3}>Low</option>
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
                                isLoading={loading}
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
