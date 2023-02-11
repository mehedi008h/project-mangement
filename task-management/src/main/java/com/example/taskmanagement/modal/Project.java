package com.example.taskmanagement.modal;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.util.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "project")
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank(message = "Project name is required!")
    private String projectName;
    @NotBlank(message = "Project Identifier is required!")
    @Size(min = 4, max = 5, message = "Please use 4 to 5 characters")
    @Column(updatable = false, unique = true)
    private String projectIdentifier;
    @NotBlank(message = "Project description is required!")
    private String description;
    @JsonFormat(pattern = "yyyy-mm-dd")
    private Date start_date;
    @JsonFormat(pattern = "yyyy-mm-dd")
    private Date end_date;
    private String projectLeader;
    // one to many with tag
    @OneToMany(
            cascade = CascadeType.REFRESH,
            fetch = FetchType.EAGER,
            mappedBy = "project",
            orphanRemoval = true
    )
    private List<Tag> tags = new ArrayList<>();
    private String image;
    @OneToOne(
            fetch = FetchType.EAGER,
            cascade = CascadeType.ALL,
            mappedBy = "project"
    )
    @JsonIgnore
    private Backlog backlog;
    @ManyToMany(
            fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            }
    )
    @JoinTable(name = "developers",
            joinColumns = {@JoinColumn(name = "project_id")},
            inverseJoinColumns = {@JoinColumn(name = "user_id")})
    private Set<User> users = new HashSet<>();
    @Column(
            name = "created_at",
            nullable = false,
            columnDefinition = "TIMESTAMP WITHOUT TIME ZONE",
            updatable = false)
    @JsonFormat(pattern = "yyyy-MM-dd", timezone="GMT")
    private Date createdAt;
    @Column(
            name = "updated_at",
            columnDefinition = "TIMESTAMP WITHOUT TIME ZONE"
    )
    @JsonFormat(pattern = "yyyy-MM-dd", timezone="GMT")
    private Date updatedAt;

    @PrePersist
    protected void onCreate() {
        this.createdAt = new Date();
    }
    @PreUpdate
    protected void onUpdate() {
        this.updatedAt = new Date();
    }

}
