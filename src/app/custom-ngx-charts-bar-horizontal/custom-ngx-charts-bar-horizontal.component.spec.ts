import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomNgxChartsBarHorizontalComponent } from './custom-ngx-charts-bar-horizontal.component';

describe('CustomNgxChartsBarHorizontalComponent', () => {
  let component: CustomNgxChartsBarHorizontalComponent;
  let fixture: ComponentFixture<CustomNgxChartsBarHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomNgxChartsBarHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomNgxChartsBarHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
