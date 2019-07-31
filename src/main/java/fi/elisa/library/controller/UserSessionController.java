package fi.elisa.library.controller;

import fi.elisa.library.filter.SessionUtils;
import fi.elisa.library.model.UserData;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.Optional;

@RestController
@RequestMapping("/public")
public class UserSessionController {

    @RequestMapping(value = "/userSession", method = RequestMethod.GET)
    public @ResponseBody
    ResponseEntity<UserData> customerSession(HttpServletRequest request) {
        Optional<UserData> mayBeUser = SessionUtils.optionallyGetUser(request);

        if (mayBeUser.isPresent()) {
            return ResponseEntity.ok(mayBeUser.get());
        } else {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }

}
