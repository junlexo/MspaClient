import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopImageComponent } from './shop-image.component';

describe('ShopImageComponent', () => {
  let component: ShopImageComponent;
  let fixture: ComponentFixture<ShopImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
