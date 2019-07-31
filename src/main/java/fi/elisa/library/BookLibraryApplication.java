package fi.elisa.library;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.web.support.SpringBootServletInitializer;

@EntityScan("fi.elisa.library.entity")
@SpringBootApplication
public class BookLibraryApplication extends SpringBootServletInitializer {

    public static void main(String[] args) {
        SpringApplication.run(BookLibraryApplication.class, args);
    }

}