package fi.elisa.library.booklibrary;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;
@EntityScan("fi.elisa.library.booklibrary.entity")
@SpringBootApplication
public class BookLibraryApplication extends SpringBootServletInitializer {

    public static void main(String[] args) {
        SpringApplication.run(BookLibraryApplication.class, args);
    }

}