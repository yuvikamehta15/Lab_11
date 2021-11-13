import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-space-x',
  templateUrl: './space-x.component.html',
  styleUrls: ['./space-x.component.css']
})
export class SpaceXComponent implements OnInit {
  data: any;
  link1= 'https://api.spacexdata.com/v3/missions'

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
    this.http.get(this.link1).subscribe((responseData:any ) => {
    //console.log(responseData)
    this.data= responseData;
    })
  }
  title=  'Http';

}
