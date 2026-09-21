# BMI Calculator

A responsive BMI (Body Mass Index) Calculator built using HTML, CSS, Bootstrap, and JavaScript.

The application allows users to calculate their BMI using either **Metric** or **Imperial** measurements and dynamically displays the BMI score, weight category, scale position, and supporting information.

---

## Features

- Calculate BMI using Metric units
  - Height in centimeters
  - Weight in kilograms

- Calculate BMI using Imperial units
  - Height in feet and inches
  - Weight in pounds

- Dynamic BMI score calculation
- BMI weight classification
  - Underweight
  - Normal Weight
  - Overweight
  - Obesity
- Dynamic BMI scale marker
- Dynamic weight-category indicator
- Contextual BMI description
- Reset functionality
- Separate Metric and Imperial forms
- Form validation for invalid or empty values
- Fully responsive design
- Mobile-friendly layout
- Bootstrap responsive components
- Clean and simple user interface

---

## BMI Categories

| BMI Range | Category |
|-----------|----------|
| Below 18.5 | Underweight |
| 18.5 – 24.9 | Normal Weight |
| 25.0 – 29.9 | Overweight |
| 30.0 and above | Obesity |

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Bootstrap 5
- Responsive Web Design

---

## How It Works

### Metric Calculation

The Metric calculator accepts:

- Height in centimeters
- Weight in kilograms

The height is converted from centimeters to meters before calculating BMI.

**Formula:**

```text
BMI = Weight (kg) / Height² (m)
```



## Imperial Calculation

The Imperial calculator accepts:

- Height in feet
- Height in inches
- Weight in pounds

The height is converted into total inches before calculating BMI.

**Formula:**
```text
BMI = 703 × Weight (lbs) / Height² (in)
```



## User Flow

```
Select Measurement System
        ↓
Enter Height & Weight
        ↓
Click "Calculate BMI"
        ↓
Calculate BMI
        ↓
Display BMI Score
        ↓
Determine Weight Category
        ↓
Update BMI Scale
        ↓
Display Supporting Information
```

## Responsive Design

The BMI Calculator is fully responsive and designed to work across different screen sizes:

- Desktop
- Laptop
- Tablet
- Mobile

The layout adapts based on the available screen width while maintaining usability and readability.



## Project Structure

```
BMI-Calculator/
│
├── index.html
├── style.css
├── custom.js
│
├── images/
│   ├── logo.png
│   ├── metricicon.svg
│   └── imperial.svg
│
└── README.md
```

## JavaScript Functionality
The JavaScript handles:

- DOM element selection
- Form submission
- Input value retrieval
- Metric BMI calculation
- Imperial BMI calculation
- Input validation
- BMI classification
- Dynamic score updates
- Dynamic BMI marker positioning
- Dynamic category styling
- Dynamic content updates
- Form reset
- Measurement-system switching


## Responsive UI

The interface includes:

- Responsive navigation
- Responsive calculator form
- Metric / Imperial tab switcher
- Responsive BMI result section
- Responsive BMI scale
- Mobile-friendly buttons and inputs



## Getting Started
**1. Clone the repository**
```
git clone https://github.com/your-username/bmi-calculator.git
```

**2. Navigate to the project**
```
cd bmi-calculator
```

**3. Open the project**
Open index.html in your browser.

You can also use the Live Server extension in VS Code for development.

## Future Improvements

Possible future enhancements:
- BMI history
- BMI result sharing
- Age-based BMI interpretation
- Additional health metrics
- Dark mode
- Improved accessibility
- Local storage for previous calculations
- BMI calculation history
- More detailed BMI guidance

## Learning Goals

This project was created as a practical JavaScript learning project to understand:
- Variables and constants
- Functions
- DOM manipulation
- querySelector() and getElementById()
- Event listeners
- Form submission
- Input values
- Conditional statements
- Number conversion
- Mathematical calculations
- Dynamic HTML updates
- CSS class manipulation
- Form validation
- Responsive UI development


## Credits

Built as a frontend development learning project using HTML, CSS, Bootstrap, and JavaScript.
