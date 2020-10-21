import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationService } from './shared/messages/notification.service';
import { UserDetailsComponent } from './header/user-details/user-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header/header.component';
import { SnackbarComponent } from './shared/messages/snackbar/snackbar.component';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LoginService } from './security/login/login.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        SnackbarComponent,
        UserDetailsComponent
      ],
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        LoginService,
        NotificationService
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
