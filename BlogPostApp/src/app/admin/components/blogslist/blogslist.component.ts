import { Component, OnInit } from '@angular/core';
import { BlogPost, BlogService } from '../../../blog.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blogslist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blogslist.component.html',
  styleUrl: './blogslist.component.css',
  preserveWhitespaces:true
  
})
export class BlogslistComponent implements OnInit {
  
  blogPosts: BlogPost[] = [];

  constructor(private blogService: BlogService) {
    this.getBlogPosts()
  }
  ngOnInit(): void {
    this.getBlogPosts()
  }

  getBlogPosts() {
    this.blogService
      .getBlogPosts()
      .subscribe((response) => (this.blogPosts = response));
      console.log
      this.blogPosts.forEach(element => {
        element
      });
  }

  editBlog(id:any){

  }
  deleteBlog(id:any) {}
}
