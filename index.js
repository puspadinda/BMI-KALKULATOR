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
        let desc, desc2;
        // Jika radio "male" diceklis
        if(male.checked == true){
            if(bmi < 18.5){
                category = "Kekurangan Berat Badan";
                desc = "Hasil BMI kurang dari 18.5"
                desc2 = "Anda berada dalam kategori Underweight atau kekurangan berat badan";
            }else if(bmi >= 18.5 && bmi < 25){
                category = "Ideal";
                desc = "Hasil BMI diantara 18.5 dan 24.9";
                desc2 = "Anda berada dalam kategori Ideal";
            }else if(bmi >= 25 && bmi < 30){
                category = "Kelebihan Berat Badan";
                desc = "Hasil BMI diantara 25 dan 29.9";
                desc2 = "Anda berada dalam kategori Overweight atau berat badan berlebih";
            }else{
                category = "Obesitas";
                desc = "Hasil BMI lebih dari 30";
                desc2 = "Anda berada dalam kategori Obesitas";
            }
        }else{
            if(bmi < 18){
                category = "Kekurangan Berat Badan";
                desc = "Hasil BMI kurang dari 18";
                desc2 = "Anda berada dalam kategori Underweight atau kekurangan berat badan";
            }else if(bmi >= 18 && bmi < 24){
                category = "Ideal";
                desc = "Hasil BMI diantara 18 dan 23.9";
                desc2 = "Anda berada dalam kategori Ideal";
            }else if(bmi >= 24 && bmi < 29){
                category = "Kelebihan Berat Badan";
                desc = "Hasil BMI diantara 24 dan 28.9";
                desc2 = "Anda berada dalam kategori Overweight atau berat badan berlebih";
            }else{
                category = "Obesitas";
                desc = "Hasil BMI lebih dari 29";
                desc2 = "Anda berada dalam kategori Obesitas";
            }
        }
        const resultTitle = `${category}.`;
        const resultNumber = `${bmi.toFixed(2)}`;
        const resultDesc = `${desc}`;
        const resultDesc2 = `${desc2}`;
        rightContent.style.display = "initial"
        document.getElementById("title").innerHTML = resultTitle;
        document.getElementById("angka-bmi").innerHTML = resultNumber;
        document.getElementById("deskripsi").innerHTML = resultDesc;
        document.getElementById("deskripsi2").innerHTML = resultDesc2;
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