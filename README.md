
# Mortgage Calculator Application

This is a simple mortgage calculator application built with Angular. It allows users to input the loan amount, interest rate, and loan term to calculate and display the monthly payment amount and total payment over the loan term.

## Features

- Input fields for loan amount, interest rate, and loan term.
- Calculation of monthly payment and total payment over the loan term.
- Responsive and user-friendly interface.
- Unit tests for the components.

## Requirements

- Node.js (v14.x or later)
- Angular CLI (v12.x or later)

## Setup and Installation

1. **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd MortgageCalculator
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Serve the application:**

    ```bash
    ng serve
    ```

    The application will be available at `http://localhost:4200/`.

## Running Unit Tests

To execute the unit tests for the application, run the following command:

    ```bash
    ng test
    ```

## Project Structure

- `src/`: Contains the source code for the application.
  - `app/`: Contains the main application components and modules.
    - `mortgage-calculator/`: Contains the mortgage calculator component.
      - `mortgage-calculator.component.ts`: Component logic.
      - `mortgage-calculator.component.html`: Component template.
      - `mortgage-calculator.component.css`: Component styles.
      - `mortgage-calculator.component.spec.ts`: Component unit tests.
  - `assets/`: Contains static assets like images, styles, etc.
- `angular.json`: Configuration for Angular CLI.
- `package.json`: Node.js dependencies and scripts.
- `README.md`: This file.

## Usage

1. **Enter the loan amount, interest rate, and loan term:**

    - Loan Amount: Total amount to be borrowed.
    - Interest Rate: Annual interest rate (percentage).
    - Loan Term: Duration of the loan in years.

2. **Click on "Next Step":**

    The application will display the calculated monthly payment and total amount to be paid over the loan term.

## Notes

- Ensure all input fields are filled with valid values before submitting.
- The application includes basic validation for input fields.
