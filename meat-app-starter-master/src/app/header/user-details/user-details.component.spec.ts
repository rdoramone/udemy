import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { UserDetailsComponent } from './user-details.component';
import { LoginService } from './../../security/login/login.service';

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let loginService: LoginService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [ LoginService ]
    }).compileComponents();
  }));

  beforeEach(() => {
    loginService = TestBed.get(LoginService);

    const fixture: ComponentFixture<UserDetailsComponent> = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should to verify if is loggedin', () => {

  });

  // it('should do logout', () => {

  // })
});
