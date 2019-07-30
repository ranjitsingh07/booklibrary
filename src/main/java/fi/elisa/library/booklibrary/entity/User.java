package fi.elisa.library.booklibrary.entity;

import javax.persistence.*;

@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "username")
    private String userName;

    @Column(name = "password")
    private String password;

    @Column(name = "fullname")
    private String fullName;

    @Column(name = "email")
    private String email;

    @Column(name = "contact")
    private Long contact;

    public User() {
    }

    public User(String userName, String password, String fullName, String email, Long contact) {
        this.userName = userName;
        this.password = password;
        this.fullName = fullName;
        this.email = email;
        this.contact = contact;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getContact() {
        return contact;
    }

    public void setContact(Long contact) {
        this.contact = contact;
    }
}
