package fi.elisa.library.booklibrary.controller;


import fi.elisa.library.booklibrary.filter.SessionUtils;
import fi.elisa.library.booklibrary.model.UserData;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@RestController
@RequestMapping("/rest")
public class LogoutController {

    private Logger log = LoggerFactory.getLogger(this.getClass());

    @RequestMapping(value = "/logout", method = RequestMethod.GET)
    public @ResponseBody
    ResponseEntity<UserData> userLogout(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        String userName = SessionUtils.optionallyGetUser(request).get().email;
        session.invalidate();
        log.info("User [" + userName + "] logged out successfully");
        return new ResponseEntity<>(HttpStatus.OK);
    }
}