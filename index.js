var weightInput = document.getElementById("weight");
var ageInput = document.getElementById("age");
var heightInput = document.getElementById("height");
var male = document.getElementById("pria");
var female = document.getElementById("wanita");
let rightContent = document.querySelector(".grid-child.right");
// Fungsi mengkalkulasi BMI
function calculateBMI(){
    var a = [ageInput.value, heightInput.value, weightInput.value];

    // Jika inputan kosong maka akan memunculkan alert
    if (ageInput.value=='' || heightInput.value=='' || weightInput.value=='' || (male.checked == false && female.checked == false)){
        window.alert("Can't empty");
    }else{
        var bmi = Number(a[2])/(Number(a[1])/100*Number(a[1])/100);
        let category;

        // Jika radio "male" diceklis
        if(male.checked == true){
            if(bmi < 20){
                category = "Kekurangan Berat Badan";
            }else if(bmi < 25){
                category = "Ideal";
            }else if(bmi < 30){
                category = "Kelebihan Berat Badan";
            }else{
                category = "Obesitas";
            }
        }else{
            if(bmi < 18){
                category = "Kekurangan Berat Badan";
            }else if(bmi < 24){
                category = "Ideal";
            }else if(bmi < 29){
                category = "Kelebihan Berat Badan";
            }else{
                category = "Obesitas";
            }
        }
        const resultTitle = `${category}.`;
        const resultNumber = `${bmi.toFixed(2)}`;
        rightContent.style.display = "initial"
        document.getElementById("title").innerHTML = resultTitle;
        document.getElementById("angka-bmi").innerHTML = resultNumber;
    }

}

function resetForm(){
   document.getElementById("age").value = '';
   document.getElementById("height").value = '';
   document.getElementById("weight").value = '';
   document.getElementById("pria").checked = false;
   document.getElementById("wanita").checked = false;
   rightContent.style.display = "none"
}