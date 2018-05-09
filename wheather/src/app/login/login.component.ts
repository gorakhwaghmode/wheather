import { Component, OnInit } from '@angular/core';
import { LgnService } from './lgn.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LgnService]
})
export class LoginComponent implements OnInit {
  title = 'Employee List';
  _id:string
  usNm:string
  fe:string
  pn:string
  ps:string
  regs:any
  arr:any
  id1:string
  arr1:any
  resmsg:string
  ad:Date
  db:string
  settings:any
  constructor(
   private lgn:LgnService,
   private http: HttpClient,
   private router: Router
  ) {

    this.http.get('http://localhost:3000/registration').subscribe(data=>{
      console.log(data)
      this.regs= data
      }
    )

    ////This is for only ng2SmartTable
  this.settings = {
    columns: {
      srNo: {
        title: 'srNo'
      },
      usrNm: {
        title: 'Full Name'
      },
      
      femail: {
        title: 'Email'
      },
      
      dob:{
        title: 'dob'
      },

      phoneNo:{
        title:'Phone Number'
      },
      
      addr:{
        title:'Address'
      }
    }
  };


   }

  ngOnInit() {
  }

  

  onSubmit(frm:any){
   this.lgn.toInsert(frm).subscribe(
     res=>console.log(res),
     err=>console.log(err),
     ()=>
     {
       console.log("Data Inserted Successfully")
       location.reload()
     }
   )
  }

  onSelect(_id:string){
    console.log("hello")
    this.arr={
      "_id":_id
    }
     console.log(this.arr)
     return this.http.post('http://localhost:3000/selected',this.arr,{      
            headers: new HttpHeaders({
              'Content-Type':'application/json'
            })
          }).subscribe( result =>{
            console.log(result)
            this.id1=result['_id']
            this.usNm=result['usrNm']
            this.fe=result['femail']
            this.db=result['dob']
            this.pn=result['phoneNo']
            this.ad=result['addr']

          })
}

updateEmp(usrNm:string,femail:string,dob:string,phoneNo:string,addr:string, id:string){
    this.arr1={
     "_id":id,
     "usrNm":usrNm,
     "femail":femail,
     "dob":dob,
     "phoneNo":phoneNo,
     "addr":addr
   }
   return this.lgn.updateEmp(this.arr1).subscribe(
     res=>console.log(res),
     err=>console.log(err),
     ()=>{
       this.resmsg="Record Updated Successfully"
       location.reload()
     }
   )

 }

 onDelete(_id:string){
     this.arr={
       "_id":_id
     }
     this.lgn.onDel(this.arr).subscribe(
      res=>console.log(res),
      err=>console.log(err),
      ()=>{
        console.log("deleted sucessfully")
        location.reload()
       }
     )
  }

}


