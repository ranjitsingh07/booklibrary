package fi.elisa.library.booklibrary.services;

import fi.elisa.library.booklibrary.entity.User;
import fi.elisa.library.booklibrary.model.UserAccount;
import fi.elisa.library.booklibrary.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.util.Optional;
@Service

public class LoginServiceImpl implements LoginService{

    @Autowired
    LoginRepository loginRepository;
    @Transactional
    @Override
    public Optional<UserAccount> validateLogin(String userName, String password) {
        Optional<User> user =  loginRepository.findByUserNameAndPassword(userName, password);

        Optional<UserAccount> userAccount = user.map(userData ->
                new UserAccount(userData.getFullName(),userData.getEmail(),userData.getContact()));


        return userAccount;
    }
}
