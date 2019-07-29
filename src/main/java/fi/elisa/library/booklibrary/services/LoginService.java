package fi.elisa.library.booklibrary.services;

import fi.elisa.library.booklibrary.model.UserAccount;

import java.util.Optional;

public interface LoginService {
    Optional<UserAccount> validateLogin(String userName, String password);
}
