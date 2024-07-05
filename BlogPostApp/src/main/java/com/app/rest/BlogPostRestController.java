package com.app.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.modal.BlogPost;
import com.app.services.BlogPostService;

@RestController
@RequestMapping("/api/admin/blogpost")
@CrossOrigin("http://localhost:4200")
public class BlogPostRestController {

	@Autowired
	private BlogPostService blogPostService;

	
	@PostMapping
	public void createBlogPost(@RequestBody BlogPost blogPost) {
		blogPostService.createBlogPost(blogPost);
	}
	
	@GetMapping
	public ResponseEntity<List<BlogPost>> getAllBlogPosts() {
		return new ResponseEntity<List<BlogPost>>(blogPostService.getAllBlogPosts(),HttpStatus.OK);
	}

}
