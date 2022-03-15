import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosPreviewComponent } from './productos-preview.component';

describe('ProductosPreviewComponent', () => {
  let component: ProductosPreviewComponent;
  let fixture: ComponentFixture<ProductosPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
