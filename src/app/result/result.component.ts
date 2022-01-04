import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})

export class ResultComponent implements OnInit {

  regno : any
  examname : any 
  code : any 
  marks : any
  result : any
  count = 0 
  gpa : any = 0

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private http:HttpClient
  ) {}

  ngOnInit() {
    this.route.params.subscribe((receivedData) => {
      try {
        this.regno = receivedData["regno"];
        this.examname = receivedData["examname"];
      } catch {
        this.router.navigate(["/login"]);
      }
    });

    this.http.get(`../../assets/${this.examname}.json`).subscribe((data:any)=>{
      try {
        this.result = data[this.regno];
        this.code = Object.keys(this.result);
        this.marks = Object.values(this.result);
        console.log(this.code.length,this.marks);

      } catch {
        this.router.navigate(["/login"]);
        alert("No result Found");
      }

      for (let i=0; i<this.code.length; i++){
        if(this.marks[i].grade!="P"){
          this.count = this.count+1
          this.gpa = this.gpa + this.gradepoint(this.marks[i].grade)
          console.log(this.gpa,this.count);
          
        }
      }
      this.gpa = (this.gpa/this.count).toFixed(2);
    });
    
  }

  gradepoint(grade:string){
    if (grade == "S") return 10;
    else if (grade == "A") return 9;
    else if (grade == "B") return 8;
    else if (grade == "C") return 7;
    else if (grade == "D") return 6;
    else if (grade == "E") return 5;
    return 0;
  }

}
