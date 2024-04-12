import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,HttpClientModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  userName = "";
  password = "";

 constructor(private http : HttpClient){

 }

 // ngOnInit(): void {
 //   this.sendUserDetails();
 // }

 
sendUserDetails(event: Event) {
 event.preventDefault();
 console.log({
  userName: this.userName,
   password: this.password
  });
 
 this.http.post('http://localhost:5000/auth/login', {
  userName: this.userName,
  password: this.password
 },{withCredentials:true}).subscribe((res: any) => {
  if(res.ok){
    
    window.location.href = '/';
  }
   console.log(res);
  
 });
}

}