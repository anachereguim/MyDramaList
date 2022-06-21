import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JdramaComponent } from './jdrama.component';

describe('JdramaComponent', () => {
  let component: JdramaComponent;
  let fixture: ComponentFixture<JdramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JdramaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JdramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
