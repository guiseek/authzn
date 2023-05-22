import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserFeatureAuthContainer } from './user-feature-auth.container';

describe('UserFeatureAuthContainer', () => {
  let component: UserFeatureAuthContainer;
  let fixture: ComponentFixture<UserFeatureAuthContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserFeatureAuthContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(UserFeatureAuthContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
