import { Component } from '@angular/core';

@Component({
  selector: 'app-mortgage-calculator',
  templateUrl: './mortgage-calculator.component.html',
  styleUrls: ['./mortgage-calculator.component.css']
})
export class MortgageCalculatorComponent {
  loanAmount: number | undefined = 0; 
  interestRate: number | undefined = 0; 
  loanTerm: number | undefined = 0; 
  monthlyPayment: number | null = null; 
  totalPayment: number | null = null; 
  errorMessage: string = ''; 
  submitted: boolean = false; 

  // Method to clear default values when input fields are focused
  clearDefault(field: string) {
    if (field === 'loanAmount') {
      this.loanAmount = undefined;
    } else if (field === 'interestRate') {
      this.interestRate = undefined;
    } else if (field === 'loanTerm') {
      this.loanTerm = undefined;
    }
  }

  // Method to calculate the mortgage payments
  calculateMortgage() {
    if (this.validateInputs()) { 
      const principal = this.loanAmount || 0; 
      const annualInterestRate = (this.interestRate || 0) / 100; 
      const monthlyInterestRate = annualInterestRate / 12; 
      const numberOfPayments = (this.loanTerm || 0) * 12; 

      // Calculate the monthly payment
      this.monthlyPayment = (principal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
      // Calculate the total payment over the loan term
      this.totalPayment = this.monthlyPayment * numberOfPayments;

      this.submitted = true; // Mark the form as submitted
    }
  }

  // Method to validate the input fields
  validateInputs(): boolean {
    if (
      (this.loanAmount || 0) <= 0 ||
      (this.interestRate || 0) <= 0 ||
      (this.loanTerm || 0) <= 0
    ) {
      this.errorMessage = 'Please fill in all required fields with valid values.'; 
      return false;
    }

    this.errorMessage = ''; 
    return true;
  }

  // Method to handle the "Go Back" button click
  goBack() {
    this.submitted = false; 
  }
}
