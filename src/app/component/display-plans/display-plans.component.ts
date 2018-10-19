import { Component, OnInit } from '@angular/core';
import { Plan } from '../../model/plan';
import { PlanService } from '../../service/plan.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-plans',
  templateUrl: './display-plans.component.html',
  styleUrls: ['./display-plans.component.css']
})
export class DisplayPlansComponent implements OnInit {

  plans: Plan[];
  planOffers:string;

  constructor(private planService: PlanService, private activatedRoute: ActivatedRoute) { 
    this.planOffers="/assets/images/offerImg.png";
  }

  ngOnInit() {
    

    this.activatedRoute.queryParams.subscribe(
      (params) =>{
        let city = params['city'];
        if(city){
          this.planService.searchPlans(city).subscribe(
            (data) => this.plans=data
          );
        }else{
          this.planService.getAllPlans().subscribe(
            (data) => this.plans = data
          );
        }
      }
    );





  }

}
