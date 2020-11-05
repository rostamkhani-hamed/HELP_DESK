import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberUnblockingComponent } from './member-unblocking.component';

describe('MemberUnblockingComponent', () => {
  let component: MemberUnblockingComponent;
  let fixture: ComponentFixture<MemberUnblockingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberUnblockingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberUnblockingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
