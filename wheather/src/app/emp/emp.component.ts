import { Component, OnInit } from '@angular/core';
import { EmpService } from './emp.service';
import { Router } from '@angular/router/';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css'],
  providers: [EmpService]
})
export class EmpComponent implements OnInit {

  constructor(
    private emp: EmpService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(frm:any){
    console.log(frm)
    this.emp.addEmp(frm).subscribe(
      res=>console.log(res),
      err=>console.log(err),
      ()=>{
        console.log("Data inserted sucessfully")
      }
    )
  }
}
