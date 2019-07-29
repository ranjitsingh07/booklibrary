package fi.elisa.library.booklibrary.services;

import fi.elisa.library.booklibrary.model.UserAccount;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@Component
public class LoginServiceImpl implements LoginService{
    @Override
    public Optional<UserAccount> validateLogin(String userName, String password) {
        return Optional.empty();
    }
}
