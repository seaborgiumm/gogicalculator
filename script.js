function calcSall(){
let total = document.getElementById('total').value;
let deliveries = document.getElementById('deliveries').value;
let km = document.getElementById('km').value;
let sallary = 0;
    if(deliveries >= 1){
        sallary = (total - deliveries*50)*0.15 + deliveries*50 + km*5
    }
    else{
        sallary = total * 0.15 + km*5
    }
let youGet = document.getElementById('youGet');
    youGet.innerText = (sallary + ' грн')

}
