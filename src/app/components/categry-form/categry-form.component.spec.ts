import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategryFormComponent } from './categry-form.component';

describe('CategryFormComponent', () => {
  let component: CategryFormComponent;
  let fixture: ComponentFixture<CategryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategryFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
