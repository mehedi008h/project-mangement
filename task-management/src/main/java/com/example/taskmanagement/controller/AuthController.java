package com.example.taskmanagement.controller;

import com.example.taskmanagement.modal.User;
import com.example.taskmanagement.payload.AuthenticationRequest;
import com.example.taskmanagement.payload.AuthenticationResponse;
import com.example.taskmanagement.service.UserService;
import com.example.taskmanagement.service.ValidationErrorService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RequestMapping("/api/v1/auth")
@RestController
public class AuthController {
    private final UserService userService;
    private final ValidationErrorService validationErrorService;

    @PostMapping("/register")
    public ResponseEntity<?> register(
            @Valid
            @RequestBody User user,
            BindingResult result
    ) {
        ResponseEntity<?> errorMap = validationErrorService.ValidationService(result);
        if (errorMap != null) return errorMap;

        User newUser = userService.register(user);
        return new ResponseEntity<User>(newUser, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest request
    ) {
        return ResponseEntity.ok(userService.login(request));
    }
}
