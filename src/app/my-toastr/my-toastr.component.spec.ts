import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyToastrComponent } from './my-toastr.component';

describe('MyToastrComponent', () => {
  let component: MyToastrComponent;
  let fixture: ComponentFixture<MyToastrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyToastrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyToastrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
