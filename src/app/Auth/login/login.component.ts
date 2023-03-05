import { HttpClient } from '@angular/common/http';
import { Component,Inject,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private http: HttpClient,@Inject('API_URL') private backendUrl: string,private router: Router){

  }

  ngOnInit(): void {
      
  }

  onSubmit(){
    const data = {
      email:this.loginForm.get('email')?.value,
      password:this.loginForm.get('password')?.value
    }
    this.http
    .post(`${this.backendUrl}auth/authenticate`,data)
    .subscribe((res:any)=>{
      if(res.token){
        localStorage.setItem('authToken', res.token);
        this.router.navigate(['/'])
      }
    });
  }
  

}
