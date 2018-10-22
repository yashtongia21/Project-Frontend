import { Component, OnInit } from '@angular/core';
import { Feedback } from '../../model/feedback';
import { FeedbackService } from '../../service/feedback.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feedbackpage',
  templateUrl: './feedbackpage.component.html',
  styleUrls: ['./feedbackpage.component.css']
})
export class FeedbackpageComponent implements OnInit {

  feedback: Feedback;

  constructor(private feedbackServ: FeedbackService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(
      (params) => {
        let feedbackId = params['id'];
        alert(feedbackId);
        if (feedbackId) {
          this.feedbackServ.getFeedbackById(feedbackId).subscribe(
            (data) => this.feedback = data
          );
        }
      }
    );
  }
}