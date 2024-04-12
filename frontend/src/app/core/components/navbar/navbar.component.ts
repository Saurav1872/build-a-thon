import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, HttpClientModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  constructor(private http: HttpClient) { }
  logoImage = "/assets/img/logo.png";
  isuserLoggedIn = false;
  navbarLinks = [
    { link: '/', name: 'Home' },
    { link: '/explore', name: 'Explore' },
    { link: '/progress', name: 'Progress' },
    { link: '/about', name: 'About' },
    { link: '/docs', name: 'Docs' },
  ];
  profileFloatingNavigation = [
    { link: '/user/0', name: 'profile' },
    { link: '/videoForm', name: 'Create' },
    { link: '/settings', name: 'settings' },
  ]
  toggleprofile = false;

  isNavbarOpen = false;

  cookies: string = "";

  ngOnInit(): void {
    this.checkCookie().subscribe((res: any) => {
      if (res.ok) {
        console.log('cookies found!');
        this.isuserLoggedIn = true;
      } else {
        console.log('cookies not found!');
        // window.location.href = '/login';
      }
    });
  }

  checkCookie(): Observable<any> {
    return this.http.get('http://localhost:5000/auth/is-valid-Cookie', { withCredentials: true }).pipe(
      tap((res: any) => {
        if (!res.ok) {
          // If user is not authenticated, redirect to login page
          window.location.href = '/login';
        }
        this.profileFloatingNavigation[0].link = '/user/'+res.userName
      })
    );
  }

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  toggleprofilefunc() {
    this.toggleprofile = !this.toggleprofile;
  }

  logout() {
    this.http.post('http://localhost:5000/auth/logout', {}, { withCredentials: true }).subscribe((res: any) => {
      if (!res.ok) {
        return;
      }
      window.location.href = '/login';
      console.log(res);
    });
  }
}
