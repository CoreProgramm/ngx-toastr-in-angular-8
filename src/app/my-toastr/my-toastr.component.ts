import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-my-toastr',
  templateUrl: './my-toastr.component.html',
  styleUrls: ['./my-toastr.component.css']
})
export class MyToastrComponent implements OnInit {
  constructor(private toastr: ToastrService) { }
  ngOnInit() {
  }
  showToasterSuccess() {
    this.toastr.success('Hello, I\'m the toastr success message.');
  }
  showToasterDanger() {
    this.toastr.warning('Hello, I\'m the toastr warning message.');
  }
  showToasterError() {
    this.toastr.error('Hello, I\'m the toastr error message.');
  }
  showToasterInfo() {
    this.toastr.info('Hello, I\'m the toastr info message.');
  }

}
