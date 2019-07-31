package fi.elisa.library.model;

public class UserAccount {

        private String name;
        private String email;
        private long contact;

    public UserAccount() {
    }

    public UserAccount(String name, String email, long contact) {
        this.name = name;
        this.email = email;
        this.contact = contact;
    }
    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setContact(long contact) {
        this.contact = contact;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public long getContact() {
        return contact;
    }

}
