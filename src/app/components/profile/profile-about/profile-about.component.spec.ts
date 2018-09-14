import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAboutComponent } from './profile-about.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProfileAboutComponent', () => {
  let component: ProfileAboutComponent;
  let fixture: ComponentFixture<ProfileAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileAboutComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [ HttpClientModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
