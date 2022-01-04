import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  examname : any;
  regno : any

  getValues(data:any){
      this.examname = data.examname
      this.regno = data.regno
      console.log(data)
      
      if(this.examname==""||this.regno=="")
      {
        alert("All field Required")
        this.router.navigate(['/login']);
      } 
      else
      {
        this.router.navigate(['/result',{"regno":this.regno,"examname":this.examname}]);
      }
      
  }  

}
