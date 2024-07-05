import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { TitlebarComponent } from './titlebar/titlebar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FooterComponent,TitlebarComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{ 
  title = 'BlogPostApp';
  

  role: string = sessionStorage.getItem("role") || '';
  
  constructor(private router:Router){
    this.role = sessionStorage.getItem("role") || '';
  }
  ngOnInit(): void {
    this.role = sessionStorage.getItem("role") || '';
  }

  logout(){
    sessionStorage.clear()
    this.router.navigate(['login'])
  }

  
}
