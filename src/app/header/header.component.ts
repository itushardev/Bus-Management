import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	// person=null;
	token = window.localStorage.getItem('token');
	person = window.localStorage.getItem('person');	
	navi(person){
		if(person == 'Driver'){
			this.router.navigate(['/driver']);
		}
		else if(person == 'Student'){
			this.router.navigate(['/busRoutes']);
		}
		else if(person == 'Admin'){
			this.router.navigate(['/admin']);
		}
		
	}
  constructor(private router: Router) { }
  
  ngOnInit() {
  }

}
