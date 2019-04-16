import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ParticlesModule } from 'angular-particle';

import { SignInComponent } from './sign-in/sign-in.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BusRoutesComponent } from './bus-routes/bus-routes.component';
import { RouteDetailsComponent } from './route-details/route-details.component';
import { RouteFilterPipe } from './bus-routes/route-filter.pipe';
import { DriverComponent } from './driver/driver.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';


import { RouterModule, Routes } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

// import { FilterPipeModule } from 'ngx-filter-pipe';

// import { LoginValidatorPipe } from './login-validator.pipe';

// import { PipesModule } from 'w-ng5';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'busRoutes', component: BusRoutesComponent },
  { path: 'routeDetails/:id', component: RouteDetailsComponent },
  { path: 'driver', component: DriverComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    SignUpComponent,
    BusRoutesComponent,
    RouteDetailsComponent,
    RouteFilterPipe,
    DriverComponent,
    AdminComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    ParticlesModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
