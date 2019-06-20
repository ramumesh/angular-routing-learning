import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css']
})
export class OthersComponent implements OnInit {

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getOthersData();
  }

}