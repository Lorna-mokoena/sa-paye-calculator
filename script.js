function calcPAYE(){

let salary=
parseFloat(
document.getElementById("salary").value
)||0;

let annual=salary*12;

let tax=0;

if(annual<=237100){
tax=annual*0.18;
}
else{
tax=annual*0.26;
}

let monthlyTax=tax/12;
let net=salary-monthlyTax;

document.getElementById(
"results"
).innerHTML=

`
Estimated PAYE:
R${monthlyTax.toFixed(2)}
<br><br>

Estimated Net Salary:
R${net.toFixed(2)}
`;

}