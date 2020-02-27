import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerProductComponent } from './banner-product.component';

describe('BannerProductComponent', () => {
  let component: BannerProductComponent;
  let fixture: ComponentFixture<BannerProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
