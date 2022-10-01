function calcSall(){
let total = document.getElementById('total').value;
let deliveries = document.getElementById('deliveries').value;
let km = document.getElementById('km').value;
let sallary = 0;
    if(deliveries >= 1){
        sallary = (total - deliveries*50)*0.08 + 600 + deliveries*50 + km*5
    }
    else{
        sallary = 600 + (total * 0.08) + km*5
    }
let youGet = document.getElementById('youGet');
    youGet.innerText = (sallary + ' грн')

}
