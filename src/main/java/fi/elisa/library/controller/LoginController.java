package fi.elisa.library.controller;

import fi.elisa.library.filter.SessionUtils;
import fi.elisa.library.model.LoginData;
import fi.elisa.library.model.UserAccount;
import fi.elisa.library.model.UserData;
import fi.elisa.library.services.LoginService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import java.util.Optional;

@RestController
@RequestMapping("/public")
public class LoginController {

    private Logger log = LoggerFactory.getLogger(this.getClass());

    private LoginService loginService;

    @Autowired
    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }

    @PostMapping("/authenticate")
    public @Valid
    @ResponseBody
    ResponseEntity<?> customerSubmit(HttpServletRequest request,
                                     @RequestBody LoginData loginData) {

        Optional<UserAccount> loggedInUserAccount = loginService.validateLogin(loginData.userName,
                loginData.password);

        return loggedInUserAccount.map(userAccount -> {
            String userFullName = userAccount.getName();
            String userName = userAccount.getEmail();

            UserData userData = new UserData(userName, userFullName, true);
            SessionUtils.saveUserToSession(request, userData);
            return ResponseEntity.ok(userData);
        }).orElseGet(() -> {
            log.warn("Login failed for user {}", loginData.userName);
            return ResponseEntity.status(HttpServletResponse.SC_UNAUTHORIZED).build();
        });
    }
}
