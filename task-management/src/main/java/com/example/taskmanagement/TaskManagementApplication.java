package com.example.taskmanagement;

import com.cloudinary.Cloudinary;
import com.cloudinary.SingletonManager;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
@SpringBootApplication
public class TaskManagementApplication {

    public static void main(String[] args) {

        // Set Cloudinary instance
        Cloudinary cloudinary = new Cloudinary(ObjectUtils.asMap(
                "cloud_name", "mehedi08h", // insert here you cloud name
                "api_key", "978988226649835", // insert here your api code
                "api_secret", "Bq5r1QWlxUUqVTdbb3qJPc22Xu8")); // insert here your api secret
        SingletonManager manager = new SingletonManager();
        manager.setCloudinary(cloudinary);
        manager.init();

        SpringApplication.run(TaskManagementApplication.class, args);
    }

}
