package com.app.services;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.app.modal.BlogPost;
import com.app.repo.BlogPostRepo;

@Service
public class BlogPostService {

	private BlogPostRepo blogPostRepo;

	public BlogPostService(BlogPostRepo blogPostRepo) {
		super();
		this.blogPostRepo = blogPostRepo;
	}

	public void createBlogPost(BlogPost blogPost) {
		blogPostRepo.save(blogPost);

	}

	public List<BlogPost> getAllBlogPosts() {
		return blogPostRepo.findAll(Sort.by("createdAt").descending());
	}

}
