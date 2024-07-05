import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {

  private baseUrl = 'http://localhost:8080/api/admin/blogpost';

  constructor(private http: HttpClient) {}

  getBlogPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(this.baseUrl);
  }

  getBlogPost(id: number): Observable<BlogPost> {
    return this.http.get<BlogPost>(`${this.baseUrl}/${id}`);
  }

  createBlogPost(blogPost: BlogPost){
    return this.http.post<BlogPost>(this.baseUrl, blogPost);
  }

  updateBlogPost(blogPost: BlogPost): Observable<BlogPost> {
    return this.http.put<BlogPost>(`${this.baseUrl}/${blogPost.id}`, blogPost);
  }

  deleteBlogPost(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}

export class BlogPost {
  id: number | null = null;
  title: string = '';
  content: string = '';
  createdAt: Date | null = null;
}
