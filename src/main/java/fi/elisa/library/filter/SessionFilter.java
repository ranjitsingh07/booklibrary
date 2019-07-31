package fi.elisa.library.filter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;

@Component
public class SessionFilter implements Filter {
    private static final String AUTHENTICATED_RESOURCE_BASE = "/rest";
    private static final List<String> ALLOWED_URI_PREFIXES =
            Arrays.asList(AUTHENTICATED_RESOURCE_BASE + "/public");
    private static Logger log = LoggerFactory.getLogger(SessionFilter.class);

    private static boolean requiresAuthenticatedUser(final String uri) {
        return uri.startsWith(AUTHENTICATED_RESOURCE_BASE) &&
                ALLOWED_URI_PREFIXES.stream().noneMatch(uri::startsWith);
    }

    @Override
    public void init(FilterConfig filterConfig) {

    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest httpRequest = (HttpServletRequest) request;
        String requestUri = httpRequest.getRequestURI();

        HttpServletResponse httpResponse = (HttpServletResponse) response;

        if (requiresAuthenticatedUser(requestUri) && !SessionUtils.optionallyGetUser(httpRequest).isPresent()) {
            log.info("User has no valid session, sending error");
            httpResponse.sendError(HttpServletResponse.SC_UNAUTHORIZED);
        } else {
            log.debug("User session checked to be valid");
            chain.doFilter(request, response);
        }
    }

    @Override
    public void destroy() {

    }
}
