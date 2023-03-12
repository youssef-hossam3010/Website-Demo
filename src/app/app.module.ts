import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { StudentsComponent } from './components/Routing/students/students.component';
import { ErrorComponent } from './components/Routing/error/error.component';
import { DetailsComponent } from './components/Routing/details/details.component';
import { HomeComponent } from './components/Routing/home/home.component';
import { RouterModule,Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
const routes :Routes = [
                        {path:"",component:HomeComponent},
                        {path:"students",component:StudentsComponent},
                        {path:"students/:id",component:DetailsComponent},
                        {path:"**",component:ErrorComponent},
                      
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentsComponent,
    ErrorComponent,
    DetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
