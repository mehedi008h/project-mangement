package com.example.taskmanagement.controller;

import com.example.taskmanagement.modal.User;
import com.example.taskmanagement.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RequiredArgsConstructor
@RequestMapping("/api/v1/user")
@RestController
public class UserController {
    private final UserService userService;

    // find all user
    @GetMapping
    public Iterable<User> getAllUser(Principal principal) {
        return userService.getUsers(principal.getName());
    }

    @GetMapping("/{email}")
    public ResponseEntity<?> getSingleUser(@PathVariable String email) {
        User user = userService.findSingleUser(email);
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

}
