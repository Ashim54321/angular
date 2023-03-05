import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'auth';
  constructor(){

  }
  ngOnInit(): void {
      
  }
  isLoggedIn(){
   const token:any = localStorage.getItem('authToken')
    if(token){
      return true;
    }else{
    return false;
    }
  };;
}
