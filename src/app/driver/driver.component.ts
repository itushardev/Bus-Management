import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
}) 
export class DriverComponent implements OnInit {
  count = 0;
  nameOfStop : string='';
  insertMsg = '';
  busNo = window.localStorage.getItem('busNo');
  token = window.localStorage.getItem('token');
	routeList:any=0;

   today:number= Date.now();
  constructor(private httpClient: HttpClient) { 
  	this.dataLoader();
  }
  dataLoader(){
  	this.httpClient.get('https://bus-management-server-heroku.herokuapp.com/users_api/driveRoute?busNo='+this.busNo)
      .subscribe(
        (data: any[]) => {
          if (data[0].length <= 0) {
            this.routeList = 0;
          } else {
            this.routeList = data[0];
            console.log(data[0]);
          }
        }
      );
  }

  check(){
    
        if(this.count < this.routeList.stops.length){
        document.getElementsByClassName('textChange')[0].innerHTML=
        '<i _ngcontent-c3="" class="fas fa-check"></i> '+
        this.routeList.stops[this.count].stopName;

        this.nameOfStop =
        this.routeList.stops[this.count].stopName;

        console.log(this.nameOfStop);
      this.count++;
      }

    this.httpClient.get('https://bus-management-server-heroku.herokuapp.com/users_api/tick?stop='+this.nameOfStop+'&routeID='+this.busNo)
      .subscribe(
        (data: any) => {
          console.log(data);
          if (data.succ == true) {
            this.insertMsg=data.msg;
          } else {
            this.insertMsg=data.msg;
          }
        }
      );
      this.dataLoader();
  }

  reset(){
    this.count=0;
    document.getElementsByClassName('textChange')[0].innerHTML=
        '<i _ngcontent-c3="" class="fas fa-check"></i> Live Tracking';

      this.httpClient.get('https://bus-management-server-heroku.herokuapp.com/users_api/reset?routeID='+this.busNo)
      .subscribe(
        (data: any) => {
          console.log(data);
          if (data.succ == true) {
            this.insertMsg=data.msg;
          } else {
            this.insertMsg=data.msg;
          }
        }
      );
      this.dataLoader();
  }

  ngOnInit() {
  }

}
