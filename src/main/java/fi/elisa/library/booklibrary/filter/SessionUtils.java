package fi.elisa.library.booklibrary.filter;

import fi.elisa.library.booklibrary.model.UserData;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Optional;

public class SessionUtils {

    private static final int SESSION_MAX_INACTIVE_INTERVAL_IN_SECONDS = 60 * 60;
    private static final String SESSION_KEY_USER = "user";
    private static Logger log = LoggerFactory.getLogger(SessionUtils.class);

    private SessionUtils() {
    }

    public static Optional<UserData> optionallyGetUser(final HttpServletRequest request) {
        Optional<HttpSession> maybeSession = Optional.ofNullable(request.getSession(false));

        return maybeSession.map(session -> {
            UserData userData = (UserData) session.getAttribute(SESSION_KEY_USER);

            if (userData == null) {
                log.warn("No user present.");
            }

            return userData;
        });
    }

    public static void saveUserToSession(final HttpServletRequest request, final UserData user) {
        HttpSession session = request.getSession();

        if (session.isNew()) {
            log.info("Created new session for user " + user.email);
        }

        session.setAttribute(SESSION_KEY_USER, user);
        session.setMaxInactiveInterval(SESSION_MAX_INACTIVE_INTERVAL_IN_SECONDS);
    }

}
