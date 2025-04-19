import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-meeting-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './meeting-form.component.html',
  styleUrls: ['./meeting-form.component.css']
})
export class MeetingFormComponent {
  meetingName = '';
  meetingTime = '';

  constructor() {}

  onSubmit() {
    console.log('Meeting scheduled:', this.meetingName, this.meetingTime);
  }
}
