import { Component, OnInit } from '@angular/core';
// import { Pipe, PipeTransform } from '@angular/core';
// import RouteFilterPipe from './route-filter.pipe';
 // import { routeList } from './routeList';
import { Router } from "@angular/router";
 import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-bus-routes',
  templateUrl: './bus-routes.component.html',
  styleUrls: ['./bus-routes.component.css']
})
export class BusRoutesComponent implements OnInit {
  token = window.localStorage.getItem('token');
  msg : string = '';
  searchInput : string ;

  constructor(private httpClient: HttpClient,
              private router: Router){
    this.reloadData()
  }
   routeList: any;
  
 myRoute() {
      this.httpClient.get('https://bus-management-server-heroku.herokuapp.com/users_api/myRoute?token='+this.token)
      .subscribe(
        (data: any[]) => {
          if (data.length <= 0) {
            this.msg="No route found"
          } else {
            this.router.navigate(['/routeDetails/'+data[0].busNo]);
          }
        }
      );
  }

reloadData() {

    this.httpClient.get('https://bus-management-server-heroku.herokuapp.com/users_api/get')
      .subscribe(
        (data: any[]) => {
          if (data.length <= 0) {
            this.routeList = 0;
          } else {
            this.routeList = data;
          }
        }
      );
  }
  // for(let repeat of routeList.stops) {
  //   if(this.searchInput==repeat[index])
  //   {
  //     console.log("hello")
  //   }
  // }
  
  // for (var i = this.routeList.stops.length - 1; i >= 0; i--) {
  //   // Things[i]
  //   if(this.searchInput==routeList.stops[i])
  //   {
  //     console.log("hello")
  //   }
  // }
  
// this.routeList.stops.forEach

  ngOnInit() {
  }

}
