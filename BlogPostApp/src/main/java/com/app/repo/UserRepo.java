package com.app.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.modal.User;

@Repository
public interface UserRepo extends JpaRepository<User, String> {

}
