const Bill = document.querySelector("#Bill")
const BtnTip = document.querySelectorAll(".BtnTip")
const CustTip =document.querySelector("#CustomTip")
const People =document.querySelector("#People")
const btnBill=document.querySelector("#btnBill")

const tip_output= document.querySelector("#tip-output")
const total_output= document.querySelector("#total-output")
const split_output=document.querySelector("#split-output")

const reset = document.querySelector(".reset")

let cost='';
let Tip='';
let people='';

Bill.addEventListener("input",()=>{
    if(Bill.value){
        BtnTip.forEach(button=>button.disabled=false)
        CustTip.disabled=false;
        People.disabled=false
    }
    else{
        BtnTip.forEach(a=>a.classList.remove("selected"))
        BtnTip.forEach(button=>button.disabled=true)
        CustTip.disabled=true;
        People.disabled=true
        btnBill.disabled=true;
        CustTip.value=""
        People.value=""
        
    }
    

         cost = Bill.value
         console.log(cost)

})


BtnTip.forEach(tip => {
    tip.addEventListener("click" , ()=>{
        BtnTip.forEach(a=>a.classList.remove("selected"))


        tip.classList.add("selected");

        CustTip.value=""


        Tip = tip.textContent
        if(Tip && people){
            btnBill.disabled=false;
        }

        Tip = Tip.slice(0,Tip.length-1)
        console.log(Tip)
        
    })

})


CustTip.addEventListener("input",()=>{
    BtnTip.forEach(a=>a.classList.remove("selected"))
    Tip=CustTip.value
    if(Tip && people){
        btnBill.disabled=false;
    }
    else{
        btnBill.disabled=true;
    }
    console.log(Tip)

})


People.addEventListener("input",()=>{
    if(People.value && Tip){
        btnBill.disabled=false;
    }
    else{
        btnBill.disabled=true;
    }

 people=People.value
 console.log(people)

})




btnBill.addEventListener("click",()=>{
    BtnTip.forEach(a=>a.classList.remove("selected"))
    reset.disabled=false;

    console.log("Tip Amount: ", (Tip/cost)*100)
    tip_output.innerText =  `₹${(Tip/cost)*100}`;

    console.log("Total:",Number(((Tip/cost)*100)) + Number(cost))
    total_output.innerText=`₹${Number(((Tip/cost)*100)) + Number(cost)}`

    console.log("Each Person Bill:", (Number(((Tip/cost)*100)) + Number(cost) )/people)
    split_output.innerText=`₹${(Number(((Tip/cost)*100)) + Number(cost) )/people}`
})


reset.addEventListener("click",()=>{
    BtnTip.forEach(a=>a.classList.remove("selected"))
    Bill.value=""
    CustTip.value="";
    People.value="";
    tip_output.innerText="";
    total_output.innerText=""
    split_output.innerText=""
    btnBill.disabled=true;
    BtnTip.forEach(button=>button.disabled=true)
    reset.disabled=true;
    

})