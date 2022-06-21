import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdramaComponent } from './tdrama.component';

describe('TdramaComponent', () => {
  let component: TdramaComponent;
  let fixture: ComponentFixture<TdramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdramaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TdramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
