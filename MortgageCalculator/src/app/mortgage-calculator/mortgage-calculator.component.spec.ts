import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MortgageCalculatorComponent } from './mortgage-calculator.component';

describe('MortgageCalculatorComponent', () => {
  let component: MortgageCalculatorComponent;
  let fixture: ComponentFixture<MortgageCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MortgageCalculatorComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate mortgage correctly', () => {
    component.loanAmount = 300000;
    component.interestRate = 5;
    component.loanTerm = 35;
    component.calculateMortgage();
    expect(component.monthlyPayment).toBeCloseTo(1514.06, 2);
    expect(component.totalPayment).toBeCloseTo(635906.469, 2);
  });

  it('should show error message for invalid inputs', () => {
    component.loanAmount = 0;
    component.interestRate = 0;
    component.loanTerm = 0;
    component.calculateMortgage();
    expect(component.errorMessage).toBe('Please fill in all required fields with valid values.');
  });
});
