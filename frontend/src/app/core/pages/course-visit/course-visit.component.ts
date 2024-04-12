import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-course-visit',
  standalone: true,
  imports: [HttpClientModule,CommonModule,RouterLink],
  templateUrl: './course-visit.component.html',
  styleUrl: './course-visit.component.scss'
})
export class CourseVisitComponent implements OnInit {
  constructor(private http: HttpClient,private route: ActivatedRoute){}
  courseData:any = {};
  nowEnroled = false;
  id = this.route.snapshot.params['id'];
  courseVideoLink = '/coursePlayer/'+this.id;
  ngOnInit() {
   
    this.http.get(`http://localhost:5000/api/v1/video-url/${this.id}/video-details`,{withCredentials:true}).subscribe((res:any)=>{
      if(res.ok){
        this.courseData=res.info;
      }
      console.log(res);
      
      this.nowEnroled = res.isEnrolled;

      
        
    })
  }
  EnrollCourse(){
    this.http.put<any>(`http://localhost:5000/auth/enroll/${this.id}`, {}, { withCredentials: true }).subscribe((res:any)=>{
        if(!res.ok){
          return ;
        }
        console.log(res);
        
        this.nowEnroled = true;

        
    })

  }
  

}

