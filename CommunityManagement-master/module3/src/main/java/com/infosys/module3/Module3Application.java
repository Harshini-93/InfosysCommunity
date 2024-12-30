package com.infosys.module3;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class Module3Application {

	public static void main(String[] args) {
		SpringApplication.run(Module3Application.class, args);
		System.out.println("Module 3 started...");
	}

}
