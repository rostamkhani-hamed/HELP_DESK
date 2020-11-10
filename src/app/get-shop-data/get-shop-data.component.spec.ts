import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetShopDataComponent } from './get-shop-data.component';

describe('GetShopDataComponent', () => {
  let component: GetShopDataComponent;
  let fixture: ComponentFixture<GetShopDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetShopDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetShopDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
