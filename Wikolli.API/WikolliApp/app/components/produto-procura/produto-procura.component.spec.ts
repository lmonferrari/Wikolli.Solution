import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoProcuraComponent } from './produto-procura.component';

describe('ProdutoProcuraComponent', () => {
  let component: ProdutoProcuraComponent;
  let fixture: ComponentFixture<ProdutoProcuraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoProcuraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoProcuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
