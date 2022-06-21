import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KdramaComponent } from './kdrama.component';

describe('KdramaComponent', () => {
  let component: KdramaComponent;
  let fixture: ComponentFixture<KdramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KdramaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KdramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
