import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink,HttpClientModule,FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
// export class SignupComponent implements OnInit{
export class SignupComponent{

    public fullName = "" ;
     userName = "";
     email="";
     password = "";
  
    constructor(private http : HttpClient){

    }

    // ngOnInit(): void {
    //   this.sendUserDetails();
    // }

    
  sendUserDetails(event: Event) {
    event.preventDefault();
    console.log({ fullName: this.fullName,
      userName: this.userName,
      email: this.email,
      password: this.password});
    
    this.http.post('http://localhost:5000/auth/register', {
      fullName: this.fullName,
      userName: this.userName,
      email: this.email,
      password: this.password
    },{withCredentials:true}).subscribe((res: any) => {
      if(res.ok){
        window.location.href = '/';
      }
      console.log(res);
      // Handle response as needed
    });

}


}