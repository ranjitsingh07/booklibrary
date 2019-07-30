package fi.elisa.library.booklibrary.repository;

import fi.elisa.library.booklibrary.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LoginRepository extends CrudRepository<User, Long> {
    public Optional<User> findByUserNameAndPassword(String userName, String password);
}
