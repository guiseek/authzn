import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileContainer } from './profile.container';

describe('ProfileContainer', () => {
  let component: ProfileContainer;
  let fixture: ComponentFixture<ProfileContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
