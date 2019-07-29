package fi.elisa.library.booklibrary.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class LoginData {

    public final String userName;
    public final String password;

    @JsonCreator
    public LoginData(@JsonProperty("userName") String userName,
                     @JsonProperty("password") String password) {
        this.userName = userName;
        this.password = password;
    }
}
