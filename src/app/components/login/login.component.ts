import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials={
    username:'',
    password:''
  }

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("form is submitted")

    if((this.credentials.username != '' && this.credentials.password != '') && (this.credentials.username != null && this.credentials.password != null)) {
      console.log("We have to submit the form")
      // Generate token
      this.loginService.generateToken(this.credentials).subscribe(
        (response:any)=>{
          // success
          console.log(response.token);

          this.loginService.loginUser(response.token)

          window.location.href="/dashboard"
        },

        error=>{
          // error
          console.log(error)
        }
      )

    } else {
      console.log("fields are empty")
    }
  }

}
