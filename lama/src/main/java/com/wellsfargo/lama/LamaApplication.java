package com.wellsfargo.lama;

import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@EnableSwagger2
@SpringBootApplication
public class LamaApplication {

	public static void main(String[] args) {
		SpringApplication.run(LamaApplication.class, args);
		System.out.println("Hello!");
	}

}
