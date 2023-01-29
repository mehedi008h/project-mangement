package com.example.taskmanagement.service;

import com.example.taskmanagement.exceptions.EmailAlreadyExistsException;
import com.example.taskmanagement.modal.Role;
import com.example.taskmanagement.modal.User;
import com.example.taskmanagement.payload.AuthenticationRequest;
import com.example.taskmanagement.payload.AuthenticationResponse;
import com.example.taskmanagement.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    // register new user
    public User register(User user) {
        try {
            var newUser = User.builder()
                    .name(user.getName())
                    .email(user.getEmail())
                    .password(passwordEncoder.encode(user.getPassword()))
                    .role(Role.USER)
                    .build();
            return userRepository.save(newUser);
        } catch (Exception e) {
            throw new EmailAlreadyExistsException("Email '" + user.getEmail() + "' already exists");
        }
    }

    // login
    public AuthenticationResponse login(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );

        var user = userRepository.findByEmail(request.getEmail())
                .orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }
}
