import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewapidataComponent } from './viewapidata.component';

describe('ViewapidataComponent', () => {
  let component: ViewapidataComponent;
  let fixture: ComponentFixture<ViewapidataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewapidataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewapidataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
