document.getElementById('btn-Withdraw').addEventListener('click', function(){
    const WithdrawField =document.getElementById('Withdraw-field');
    const withdrawAmountString = WithdrawField.value;
    const newwithdrawAmountTotal =parseFloat(withdrawAmountString)
    
    const withdrawMinus = document.getElementById('mainBalances');
    const withdrawBalance = withdrawMinus.innerText;
    const withdrawValue = parseFloat(withdrawBalance);
    
    const totalBalance =withdrawValue + newwithdrawAmountTotal;
    withdrawMinus.innerText =totalBalance


    const totalMoney = document.getElementById('total');
    const totalvalue =totalMoney.innerText;
    const moneyValue =parseFloat(totalvalue);

    const newBalanceTotal = moneyValue -newwithdrawAmountTotal
    totalMoney.innerText =newBalanceTotal


    WithdrawField.value ='';
})