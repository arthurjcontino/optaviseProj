import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeCardComponent } from './components/employee-card/employee-card.component';
import { DepartmentFilterComponent } from './components/department-filter/department-filter.component';
import { SortByDatePipe } from './pipes/sort-by-date.pipe';
import { HttpClientModule} from '@angular/common/http'; 



const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent }
]; 

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeeCardComponent,
    HttpClientModule,
    EmployeeListComponent,
    DepartmentFilterComponent,
    SortByDatePipe,

    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
