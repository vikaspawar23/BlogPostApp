import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BlogPost, BlogService } from '../../../blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
  preserveWhitespaces:true
})
export class BlogComponent {

  blogPost:BlogPost=new BlogPost();

  constructor(private blogService:BlogService, private router:Router){}

  onSubmit(){
    confirm(this.blogPost.title);
    this.blogService.createBlogPost(this.blogPost).subscribe();
    this.router.navigate(['blogslist']);
  }

  

}
