import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-visit',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './course-visit.component.html',
  styleUrl: './course-visit.component.scss'
})
export class CourseVisitComponent implements OnInit {
  constructor(private http: HttpClient,private route: ActivatedRoute){}
  courseData:any = {};
  
  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.http.get(`http://localhost:5000/api/v1/video-url/${id}/video-details`,{withCredentials:true}).subscribe((res:any)=>{
      if(res.ok){

        this.courseData=res.info;
      }
        
    })
  }
  

}

