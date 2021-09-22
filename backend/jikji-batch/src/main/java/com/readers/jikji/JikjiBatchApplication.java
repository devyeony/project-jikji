package com.readers.jikji;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication(scanBasePackages = "com.readers.jikji")
public class JikjiBatchApplication {

	public static void main(String[] args) {
		SpringApplication.run(JikjiBatchApplication.class, args);
	}

}
