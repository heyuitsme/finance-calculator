/* Finance Calculator main JS */

function calculate() {

  var loanAmt = document.getElementById('loanAmount').value;
  var intRate = (document.getElementById('interestRate').value)/100;
  var finTerm = document.getElementById('financeTerm').value;
  var tax = (document.getElementById('salesTax').value)/100;
  var principal = loanAmt*(1+tax);

  var monthlyPay = ((intRate/12)*principal)/(1-((1+intRate/12)**(-1*(finTerm))));
  console.log(monthlyPay);
  disOutput();


  function interestCalc() {
    var totalInterestPaid = ((monthlyPay * finTerm) - loanAmt);
    return totalInterestPaid;
  }

  function totalCalc() {
    var totalObligation = (monthlyPay * finTerm);
    return totalObligation;
  }

  function monthlyMess() {
    'Monthly payment = $' + monthlyPay.toFixed(2);
  }
  function intMess() {
    'Total interest paid = $' + totalInterestPaid.toFixed(2);
  }
  function totMess() {
    'Total obligation = $' + totalObligation.toFixed(2);
  }

  function disOutput() {
    document.getElementById('monthlyPayment').innerHTML = monthlyMess();
    document.getElementById('totalInterest').innerHTML = intMess();
    document.getElementById('totalPaid').innerHTML = totMess();
  }

  console.log('shit is working');
  console.log(loanAmt+intRate);
  console.log(principal.toFixed(2));
};
