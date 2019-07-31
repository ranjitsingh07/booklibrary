package fi.elisa.library.config;

import fi.elisa.library.entity.User;
import fi.elisa.library.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

    private final LoginRepository repository;

    @Autowired
    public DatabaseLoader(LoginRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception {
        this.repository.save(new User("ranjit@gmail.com", "ranjit", "RanjitSingh", "ranj@gmail.com", 8130791185l));
        this.repository.save(new User("ranjkumar@gmail.com", "ranjit", "RanjitKumar", "kumar@gmail.com", 98478121l));
    }
}
