import { Component } from '@angular/core';
import { ProgressCardComponent } from '../../components/progress-card/progress-card.component';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, ProgressCardComponent, CommonModule],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.scss',
})
export class ProgressComponent {
  constructor(private http: HttpClient) {}
  listOfCourses: any = [];
  ngOnInit(): void {
    // this.http
    //   .get('http://localhost:5000/api/v1/progress', { withCredentials: true })
    //   .subscribe((res: any) => {
    //     if (res.ok) {
    //       console.log('courses sent to client');

    //       this.listOfCourses = res.topCourses;
    //     }
    //   });
    this.listOfCourses = [
      {
        name: 'Course 1',
        progress: 35,
        totalDuration: 100,
        author: 'Author 1',
        enrolledOn: '2021-01-01',
        image: 'https://via.placeholder.com/150',
      },
      {
        name: 'Course 2',
        progress: 190,
        totalDuration: 200,
        author: 'Author 2',
        enrolledOn: '2021-01-01',
        image: 'https://via.placeholder.com/160',
      },
    ];
  }
}
