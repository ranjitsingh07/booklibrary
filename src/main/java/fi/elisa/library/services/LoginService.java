package fi.elisa.library.services;

import fi.elisa.library.model.UserAccount;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public interface LoginService {
    Optional<UserAccount> validateLogin(String userName, String password);
}
