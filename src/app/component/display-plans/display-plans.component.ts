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

  constructor(private planService: PlanService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.planService.getAllPlans().subscribe(
      (data) => this.plans = data
    );
  }

}
