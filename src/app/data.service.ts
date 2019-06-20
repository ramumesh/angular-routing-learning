import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  othersData:any;
  constructor(private httpClient:HttpClient) { }
  
  getOthersData(){
    this.httpClient.get('/assets/others.json').subscribe(
      data=>{this.othersData=data}
    );
  }
}