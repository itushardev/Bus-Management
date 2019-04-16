// db.routes.update({busNo:"DL-0525"},{"$push":{stops:{stopName:"Dwarka",stopETA:"7.00 am"}}})

// db.routes.aggregate([ 
//   {$match:{'stops.stopName':'new route'}},
//   {$project: 
//     { stops:
//       {$filter:{ 
//         input:'$stops', 
//         as:'stop', 
//         cond:{$eq:['$$stop.stopName','new route']}
//       }},
//       _id:0 
//     }
//   } 
//   ])

// export const routeList = [{ 
//       'routeName':'DWARKA',
//       'routeStart':'DWARKA MODE',
//       'routeEnd':'PRASHANT VIHAR',
//       'busNo':'1'}
//       'stops':[{"stopName":'DWARKA MODE',"stopTime":'07:00'},
//                 {"stopName":'NSIT',"stopTime":'07:02'}]} , 'SECTOR NO:13', 'SECTOR NO:14', 'SECTOR NO.12',
//                'SECTOR NO.3&5', 'RAJA PURI', 'MADHUVIHAR', 'SECTOR NO.2', 
//                 'DWARKA SECTOR NO:1 (LEFT MODE)', 'POWER HOUSE', 'DABRI MODE', 
//                 'C-4 BLOCK JANAKPURI', 'DISTRICT CENTER JANAKPURI', 
//                 'PASTRY PALACE(VIKAS PURI)', 'CRPF', 'WHITE HOUSE', 'SARASWATI VIHAR', 
//                 'MADHUBAN CHOWK', 'PRASHANT VIHAR'],
//       'eTA':['07:00','07:02','07:05','07:07','07:12','07:13','07:15','07:17','07:19','07:22',
//       '07:24','07:28','07:30','07:35','07:42','07:45','07:47','07:50','07:55','07:55']
//     },
//     {
//       'routeName':'Dabri Mode',
//       'routeStart':'Dwarka Mode',
//       'routeEnd':'Prashant Vihar',
//       'routeNo':2,
//       'stops':['hello','two','three']
//     },
//     {
//       'routeName':'Dwarka Palam',
//       'routeStart':'Sector No.19(DCP Office)',
//       'routeEnd':'Prashant Vihar',
//       'routeNo':3,
//       'stops':['hello','two','three']
//     },
//     {
//       'routeName':'Sagarpur',
//       'routeStart':'Sagarpur',
//       'routeEnd':'Prashant Vihar',
//       'routeNo':4,
//       'stops':['hello','two','three']
//     },
//   ];