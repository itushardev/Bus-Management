import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
	goHome(){
		
			this.router.navigate(['/']);
		
	}
  constructor(private router: Router,
  				private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
