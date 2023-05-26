import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserFeatureAccountComponent } from './user-feature-account.component';

describe('UserFeatureAccountComponent', () => {
  let component: UserFeatureAccountComponent;
  let fixture: ComponentFixture<UserFeatureAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserFeatureAccountComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserFeatureAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
