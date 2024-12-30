function calculateLoan() {
    const price = document.getElementById('price').value;
    if (price && !isNaN(price)) {
      const loanAmount = (price * 0.6).toFixed(2);
      document.getElementById('result').textContent = `Eligible Loan Amount: $${loanAmount}`;
    } else {
      document.getElementById('result').textContent = 'Please enter a valid property price.';
    }
  }

  document.getElementById('loanForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your application has been submitted successfully!');
  });