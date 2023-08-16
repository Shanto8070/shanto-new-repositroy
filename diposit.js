document.getElementById('btn-Diposit').addEventListener('click', function(){
    const dipsosit = document.getElementById('Diposit-field');
    const dipsositAria = dipsosit.value;
    const valueitem =parseFloat(dipsositAria)
    
    const dipositAmount =document.getElementById('span-diposit');
    const dipositConten = dipositAmount.innerText;
    const privioustotall =parseFloat(dipositConten);
    const newDiposit = privioustotall + valueitem;
    dipositAmount.innerText= newDiposit;



   const balanceTotalElement = document.getElementById("total");
   const previousTotalString = balanceTotalElement.innerText
   const previousTotalAmount =parseFloat(previousTotalString);

   const newBalanceTotall = previousTotalAmount + valueitem;
   balanceTotalElement.innerText = newBalanceTotall;





    dipsosit.value ='';

})