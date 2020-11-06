import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMemberDataComponent } from './get-member-data.component';

describe('GetMemberDataComponent', () => {
  let component: GetMemberDataComponent;
  let fixture: ComponentFixture<GetMemberDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetMemberDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetMemberDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
