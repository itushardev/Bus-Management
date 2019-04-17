import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router , ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-route-details',
  templateUrl: './route-details.component.html',
  styleUrls: ['./route-details.component.css']
})
export class RouteDetailsComponent {
  currRouteDetails:any=0;
  form_insert_msg: String = '';
  inactive_insert_msg: String = 'Live Tracking (Inactive)';
  active_insert_msg: String = 'Live Tracking (active)';
    token = window.localStorage.getItem('token');
    isActive = window.localStorage.getItem('isActive');


  goBack() {
    // window.location.href='http://localhost:4200/busRoutes'; 
    this.router.navigate(['/busRoutes']);
    window.localStorage.removeItem('isActive');
  }

  updatebus(routeID,token){
    this.httpClient.get('https://bus-management-server-heroku.herokuapp.com/users_api/updateStudentBus?routeID='+routeID+'&token='+token)
      .subscribe(
       (data: any) => {
          if (data.succ===false) {
            this.form_insert_msg = data.msg;
          } else {
            // console.log(data[0].person);
            // console.log(data[0]);
            this.form_insert_msg = data.msg;
          }
      }
      );
    }

    live() {
      window.localStorage.setItem('isActive','YES');
      window.location.href='https://itushardev.github.io/Bus-Management/'+this.router.url;
      }

      refresh(routeID){
        this.reloadData(routeID);
      }

  constructor(private route: ActivatedRoute,
              private httpClient: HttpClient,
              private router: Router) { 
    
  		this.route.params.subscribe(params => {
              this.reloadData(params.id);
              

  		});
      
  }


  reloadData(routeID) {
    this.httpClient.get('https://bus-management-server-heroku.herokuapp.com/users_api/get?routeID='+routeID)
      .subscribe(
        (data: any[]) => {
          
          if (data.length <= 0) {
            this.currRouteDetails = 0;
          } else {
            this.currRouteDetails = data[0];
            console.log(this.currRouteDetails);
          }
        }
      );

  }
}