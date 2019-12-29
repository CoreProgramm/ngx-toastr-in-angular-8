import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../utility/notification.service';
@Component({
  selector: 'app-custom-toastr',
  templateUrl: './custom-toastr.component.html',
  styleUrls: ['./custom-toastr.component.css']
})
export class CustomToastrComponent implements OnInit {
  constructor(private notifyService: NotificationService) { }
  ngOnInit() {
  }
  showToaster() {
    this.notifyService.showSuccess('Data shown successfully !!', 'Notification');
  }
  showHtmlToaster() {
    this.notifyService.showHTMLMessage('<b style="Color:Red;">HTML Data shown successfully !!</b>', 'Notification');
  }
  showTimeSpan() { // Timespn should be on milliseconds
    this.notifyService.showSuccessWithTimeout('<b style="Color:Red;">HTML Data shown successfully !!</b>', 'Notification', 10000);
  }
  showButtom() { 
    this.notifyService.showFullWidthBottom('<b style="Color:Red;">HTML Data shown successfully !!</b>', 'Notification');
  }
  showTop() { 
    this.notifyService.showFullWidthTop('<b style="Color:Red;">HTML Data shown successfully !!</b>', 'Notification');
  }
}
