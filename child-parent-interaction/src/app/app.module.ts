import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentEmployeesListComponent } from './parent-employees-list/parent-employees-list.component';
import { ChildEditEmployeeComponent } from './child-edit-employee/child-edit-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentEmployeesListComponent,
    ChildEditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
