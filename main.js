/* Finance Calculator main JS */

function invert() {
  document.getElementById('loanText').innerHTML = 'Monthly Payment:';
};

function uninvert() {
  document.getElementById('loanText').innerHTML = 'Loan Amount:';
};

function firstInput() {
  var selection = document.getElementById('invertChoice').value;

  if(selection == 'totCalc') {
    invert();
  } else if(selection == 'monthCalc') {
    uninvert();
  }
};

function findAmount() {
  var selection = document.getElementById('invertChoice').value;

  if(selection == 'monthCalc') {
    calculate();
  } else if(selection == 'totCalc') {
    invertCalc();
  }
};

function calculate() {
  document.getElementById('loanText').value = 'loan';
  var loanAmt = document.getElementById('amount').value;
  var intRate = (document.getElementById('interestRate').value)/100;
  var finTerm = document.getElementById('financeTerm').value;
  var tax = (document.getElementById('salesTax').value)/100;
  var principal = loanAmt*(1+tax);

  if(tax != null) {
    var monthlyPay = ((intRate/12)*principal)/(1-((1+intRate/12)**(-1*(finTerm))));
  } else if(tax == null) {
    var monthlyPay = ((intRate/12)*loanAmt)/(1-((1+intRate/12)**(-1*(finTerm))));
  }


  function disOutput() {
    function monthlyMess() {
      return 'Monthly payment = $' + monthlyPay.toFixed(2);
    }
    function intMess() {
      var totalInterestPaid = ((monthlyPay * finTerm) - (loanAmt*(1+tax)));
      return 'Total interest paid = $' + totalInterestPaid.toFixed(2);
    }
    function totMess() {
      var totalObligation = (monthlyPay * finTerm);
      return 'Total obligation = $' + totalObligation.toFixed(2);
    }
    document.getElementById('monthlyPayment').innerHTML = monthlyMess();
    document.getElementById('totalInterest').innerHTML = intMess();
    document.getElementById('totalPaid').innerHTML = totMess();
  }

  disOutput();

};

function invertCalc() {
  var monthlyPay = document.getElementById('amount').value;
  var intRate = (document.getElementById('interestRate').value)/100;
  var finTerm = document.getElementById('financeTerm').value;
  var tax = (document.getElementById('salesTax').value)/100;

  if(tax != null) {
    var loanAmt = ((monthlyPay * (1-(1+intRate/12)**(-1*finTerm)))/(intRate/12))/(1+tax);
  } else if(tax == null) {
    var loanAmt = ((monthlyPay * (1-(1+intRate/12)**(-1*finTerm)))/(intRate/12));
  }


  function disOutput() {
    function loanMess() {
      return 'Loan amount = $' + loanAmt.toFixed(2);
    }
    function intMess() {
      var totalInterestPaid = ((monthlyPay * finTerm) - (loanAmt*(1+tax)));
      return 'Total interest paid = $' + totalInterestPaid.toFixed(2);
    }
    function totMess() {
      var totalObligation = (monthlyPay * finTerm);
      return 'Total obligation = $' + totalObligation.toFixed(2);
    }
    document.getElementById('monthlyPayment').innerHTML = loanMess();
    document.getElementById('totalInterest').innerHTML = intMess();
    document.getElementById('totalPaid').innerHTML = totMess();
  }

  disOutput();
};
