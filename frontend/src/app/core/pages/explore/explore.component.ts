import { Component, OnInit } from '@angular/core';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [CourseCardComponent,HttpClientModule,CommonModule],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.scss'
})
export class ExploreComponent implements OnInit {
  constructor(private http : HttpClient){}
  
   listOfCourses:any = [];
   ngOnInit(): void {
    this.http.get('http://localhost:5000/api/v1/videos/trending',{withCredentials:true}).subscribe((res:any)=>{
      if(res.ok){
        this.listOfCourses = res.topCourses;
        console.log(this.listOfCourses)
      }
    })
    
  }
}
