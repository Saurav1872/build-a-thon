import { Component, OnInit } from '@angular/core';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [CourseCardComponent, HttpClientModule, CommonModule, MatProgressSpinnerModule],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.scss'
})
export class ExploreComponent implements OnInit {
  constructor(private http: HttpClient) { }

  isLoading:boolean = false;

  listOfCourses: any = [];
  ngOnInit(): void {
    this.isLoading = true;
    this.http.get('http://localhost:5000/api/v1/videos/trending', { withCredentials: true }).subscribe((res: any) => {
      if (res.ok) {
        this.isLoading = false;
        this.listOfCourses = res.topCourses;
        console.log(this.listOfCourses)
      }
    })

  }
}
