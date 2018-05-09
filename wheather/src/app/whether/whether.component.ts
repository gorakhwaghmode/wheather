import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-whether',
  templateUrl: './whether.component.html',
  styleUrls: ['./whether.component.css']
})
export class WhetherComponent implements OnInit {
  whether: any
  abc:string
  def:string
  city:string
  visi:string
  id:string
  code:string
  data:any
  settings:any
  constructor(
    private http: HttpClient
  ) { 
    this.http.get('http://samples.openweathermap.org/data/2.5/weather?q=pune&appid=b6907d289e10d714a6e88b30761fae22'
  ).subscribe(res=>{
      ///console.log(res);
      this.whether=res
      this.abc = this.whether.coord.lon
      this.def= this.whether.coord.lat
      this.city= this.whether.name
      this.visi= this.whether.visibility
      this.id= this.whether.id
      this.code= this.whether.cod
      // console.log(this.whether.coord.lon)
      })


      //This is for only ng2SmartTable
      this.settings = {
        columns: {
          id: {
            title: 'ID'
          },
          name: {
            title: 'Full Name'
          },
          username: {
            title: 'User Name'
          },
          email: {
            title: 'Email'
          }
        }
      };

      this.data = [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz"
        },
        {
          id: 2,
          name: "Ervin Howell",
          username: "Antonette",
          email: "Shanna@melissa.tv"
        },
        
        // ... list of items
        
        {
          id: 11,
          name: "Nicholas DuBuque",
          username: "Nicholas.Stanton",
          email: "Rey.Padberg@rosamond.biz"
        }
      ];
      
  }
  ngOnInit() {
  }
}
