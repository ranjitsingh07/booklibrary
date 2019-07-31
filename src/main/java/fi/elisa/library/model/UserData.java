package fi.elisa.library.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class UserData {

    public final String email;
    public final String userFullName;
    public final boolean userAuthenticated;

    @JsonCreator
    public UserData(@JsonProperty("email") String email,
                    @JsonProperty("userFullName") String userFullName,
                    @JsonProperty("userAuthenticated") boolean userAuthenticated) {
        this.email = email;
        this.userFullName = userFullName;
        this.userAuthenticated = userAuthenticated;
    }
}
