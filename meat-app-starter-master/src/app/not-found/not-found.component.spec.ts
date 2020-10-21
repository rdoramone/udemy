import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundComponent } from './not-found.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFoundComponent ],
      imports: [ RouterTestingModule ]
    }).compileComponents();
  }));

  beforeEach(() => {
    const fixture: ComponentFixture<NotFoundComponent> = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
