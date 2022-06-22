window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  console.log("Setup initial values called.")

  //set example values
  document.querySelector("#loan-amount").value = 10;
  document.querySelector("#loan-years").value = 10;
  document.querySelector("#loan-rate").value = 10;

  //call calculation with example values
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  loanAmount = document.querySelector("#loan-amount").value;
  loanYears = document.querySelector("#loan-years").value;
  loanRate = document.querySelector("#loan-rate").value;

  console.log(loanAmount, loanRate, loanYears);

  updateMonthly(calculateMonthlyPayment(loanAmount, loanYears, loanRate));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(amount, years, rate) {
  payment = (amount * rate)/(1 - Math.pow((1+rate), (0 - years * 12)));

  return payment;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.querySelector("#calculated-total").innerText = monthly; 
}
