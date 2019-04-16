import { PipeTransform, Pipe } from '@angular/core';
// import { routeList } from './routeList';
@Pipe ({
	name: 'routeFilter',
	pure: false
})
export class RouteFilterPipe implements PipeTransform {
	transform(eachbus:any[], searchInput:string):any[]{

		if(!eachbus )
			return [];

		if(!searchInput) 
			return eachbus;
	
		
		// return eachbus.filter(eachbus => eachbus.stops.includes(searchInput.toUpperCase()));
		console.log(eachbus);
		// console.log(eachbus.stops[0];
		// console.log(eachbus.stops[0].stopName.indexOf(searchInput !== -1));
		// console.log(eachbus.filter(eachbus => eachbus.stops[0].stopName.indexOf(searchInput != -1););
		// for(var i=0; i<eachbus.stops[0].length; i++) {
		// 	var arr[i]=arr.push(eachbus.filter(eachbus => eachbus.stops[i].stopName.includes(searchInput.toLowerCase())));	
		// }
		// return arr;
		// return eachbus.filter(eachbus => {


			 if (eachbus) {
          return eachbus.filter(bus => {
              if (bus) {
                  return  !bus.stops.every(stop => {
                              return (!stop.stopName.includes(searchInput.toLowerCase()))
                          });

              }
          });
      }


			// for (var i = 0; i < eachbus.stops.length; i++) {
			// 	return eachbus.stops[i].stopName.includes(searchInput.toLowerCase());
			// }
		// });
	}
}