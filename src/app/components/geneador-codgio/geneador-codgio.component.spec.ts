import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneadorCodgioComponent } from './geneador-codgio.component';

describe('GeneadorCodgioComponent', () => {
  let component: GeneadorCodgioComponent;
  let fixture: ComponentFixture<GeneadorCodgioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneadorCodgioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneadorCodgioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
