import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private toastr: ToastrService) { }
  showSuccess(message, title) {
    this.toastr.success(message, title);
  }
  showHTMLMessage(message, title) {
    this.toastr.success(message, title, {
      enableHtml: true
    });
  }
  showSuccessWithTimeout(message, title, timespan) {
    this.toastr.success(message, title, {
      enableHtml: true,
      timeOut: timespan
    });
  }
  showFullWidthBottom(message, title) {
    this.toastr.info(message, title, {
      enableHtml: true,
      positionClass: 'toast-bottom-full-width',
    });
  }
  showFullWidthTop(message, title) {
    this.toastr.info(message, title, {
      enableHtml: true,
      positionClass: 'toast-top-full-width',
    });
  }
}
