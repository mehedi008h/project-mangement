import React from "react";
import { IoList } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import { BiAddToQueue } from "react-icons/bi";
import {
    Button,
    Flex,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
} from "@chakra-ui/react";
import NewProject from "../forms/NewProject";

const FilterMenu = () => {
    // open & close modal
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Flex justify="space-between" alignItems="center">
            <Flex gap={2}>
                <Button>
                    <IoList />
                </Button>
                <Button>
                    <CgMenuGridO />
                </Button>
            </Flex>
            <Button onClick={onOpen}>
                <BiAddToQueue style={{ marginRight: "8px" }} />
                Add Project
            </Button>
            {/* modal  */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg="black">
                    <ModalHeader>Create Project 😎</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <NewProject onClose={onClose} />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Flex>
    );
};

export default FilterMenu;
