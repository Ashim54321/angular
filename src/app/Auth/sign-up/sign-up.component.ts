import { Component, Inject, OnInit } from '@angular/core';
import { signUpTypes } from 'src/app/types/signUpType';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  firstName:string;
  lastName:string;
  email:string;
  password:string;


  signUpForm = new FormGroup({
    firstName : new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor( private http: HttpClient,@Inject('API_URL') private backendUrl: string,private router: Router){

  }

  ngOnInit(): void {
      
  }

  onSubmit(){
  
    const formdata = {
      firstName: this.signUpForm.get('firstName')?.value,
      lastName:this.signUpForm.get('lastName')?.value,
      email:this.signUpForm.get('email')?.value,
      password:this.signUpForm.get('password')?.value
    }
    this.http
    .post(`${this.backendUrl}auth/register`,formdata)
    .subscribe((res:any)=>{
      console.log(res);
      if(res.token){
        this.router.navigate(['/login']);
      } 
    });

    

    

  }

}
