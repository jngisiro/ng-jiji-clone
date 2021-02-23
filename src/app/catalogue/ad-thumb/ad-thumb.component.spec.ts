import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdThumbComponent } from './ad-thumb.component';

describe('AdThumbComponent', () => {
  let component: AdThumbComponent;
  let fixture: ComponentFixture<AdThumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdThumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
