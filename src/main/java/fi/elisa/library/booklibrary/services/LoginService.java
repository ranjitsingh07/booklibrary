package fi.elisa.library.booklibrary.services;

import fi.elisa.library.booklibrary.model.UserAccount;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public interface LoginService {
    Optional<UserAccount> validateLogin(String userName, String password);
}
