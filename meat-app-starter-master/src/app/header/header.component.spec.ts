import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HeaderComponent } from './header.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { LoginService } from '../security/login/login.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        UserDetailsComponent
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        LoginService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    const fixture: ComponentFixture<HeaderComponent> = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
