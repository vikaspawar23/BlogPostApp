package com.app.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.modal.BlogPost;

@Repository
public interface BlogPostRepo extends JpaRepository<BlogPost, Long> {

}
