package com.example.taskmanagement.modal;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @NotBlank(message = "Name is required!")
    private String name;
    @Email
    @Column(unique = true)
    @NotBlank(message = "Email is required!")
    private String email;
    private String phone;
    private String work;
    private String image;
    @NotBlank(message = "Password is required!")
    private String password;
    @Enumerated(EnumType.STRING)
    private Role role;
}
