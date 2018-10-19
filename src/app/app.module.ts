import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { DisplayPlansComponent } from './component/display-plans/display-plans.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { PlanFormComponent } from './component/plan-form/plan-form.component';
import { PlanDetailsComponent } from './component/plan-details/plan-details.component';


const paths: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'listPlans', component: DisplayPlansComponent },
  { path: 'planForm', component: PlanFormComponent },
  {path:'viewPlan/:id',component:PlanDetailsComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    DisplayPlansComponent,
    DashboardComponent,
    PlanFormComponent,
    PlanDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(paths)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
