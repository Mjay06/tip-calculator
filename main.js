let bill1 = document.querySelector('input#bill')
let noOfPeople1 = document.querySelector('input#people')
let tipPercentages = document.querySelectorAll('.cl-tip')
let custpercentages = document.querySelector('input#custom')
let tipAmountp = document.querySelector('h3#tipAmount.tipAmount')
let totalTip = document.querySelector('h3#total.tipAmount')
let resetbtn = document.querySelector('button.tipResetbtn')
let pippis = document.querySelector('label#pippis')


let billAmount = 0;
let noOfPeople = 0;
let tipPercentage = 0;

bill1.addEventListener('keyup', e =>{
    billAmount = Number(e.target.value);
    calculatetip();
});

noOfPeople1.addEventListener('keyup', e =>{
    noOfPeople = Number(e.target.value);
    calculatetip();
})
custpercentages.addEventListener('keyup', e =>{
    tipPercentage = Number(e.target.value.replace('%',''));
    calculatetip()
})

Array.from(tipPercentages).forEach(tipPercentag => {
 tipPercentag.addEventListener('click', e => {
    tipPercentage = Number(e.target.innerText.replace('%',''))
    Array.from(tipPercentages).forEach(tipPercentag =>{
        if (tipPercentag.innerText.replace('%','') == tipPercentage){
            tipPercentag.classList.add('active')
        }else{
            tipPercentag.classList.remove('active')
        }
    })
     calculatetip()    
})   
})
resetbtn.addEventListener('click', e => {
    document.location = 'http://127.0.0.1:5500/tip-calculator-app-main/index.html'
})


function calculatetip(){
    let tipAmount = billAmount * (tipPercentage/100)
    let totalAmount = tipAmount + billAmount
    let tipamountPerperson = tipAmount / noOfPeople
    let totalamountPerperson = totalAmount / noOfPeople
    if(totalamountPerperson > 0){
        resetbtn.style.backgroundColor = 'hsl(172, 67%, 45%)'}
    peopleno = document.querySelector('div#peeps.form-input')
    if (noOfPeople === 0){
            peopleno.style.border = '2px solid red'
            pippis.innerText = "number of people can't be zero"
            pippis.style.color = 'red'

    
        } else{
            peopleno.style.border = '2px solid hsl(172, 67%, 45%)'
            pippis.innerText = "Number Of People"
            pippis.style.color = 'hsl(184, 14%, 56%)'
        }
    

    update({tipamountPerperson, totalamountPerperson});

}

function update({tipamountPerperson, totalamountPerperson}){
    if (tipamountPerperson.toFixed(2) == Infinity || tipamountPerperson.toFixed(2) === NaN ){
        tipAmountp.innerText = '$0.00'
    }
    else{tipAmountp.innerText = `$${tipamountPerperson.toFixed(2)}`}

    if (totalamountPerperson.toFixed(2) == Infinity || tipamountPerperson.toFixed(2) === NaN ){
        totalTip.innerText = '$0.00'
    }
    else{totalTip.innerText = `$${totalamountPerperson.toFixed(2)}`}}
    
