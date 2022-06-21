import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdramaComponent } from './cdrama.component';

describe('CdramaComponent', () => {
  let component: CdramaComponent;
  let fixture: ComponentFixture<CdramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdramaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
