import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

@Injectable()
export class EmpService {

  constructor(
    private http: HttpClient
  ) { }

  addEmp(frm:any){
    return this.http.post('http://localhost:3000/reg', frm,{
      headers : new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
  }




  
}
