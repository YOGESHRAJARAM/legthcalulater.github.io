let Feet = document.getElementById("Feet");
let Meter = document.getElementById("Meter");
let Inches = document.getElementById("Inches");
let CM=document.getElementById("CM");
let KM=document.getElementById("KM");
let Miles=document.getElementById("Miles");

function FeetToOther(val){
    Meter.value=val/3.28808;
    Inches.value=val*12;
    CM.value=val*30.48;
    KM.value=val/3281;
    Miles.value=val*0.0001893939;

}
function MeterToOther(val){
    Feet.value = val*3.2808;
    Inches.value = val*39.370;  
    CM.value   = val/0.01;
    KM.value   = val/1000;
    Miles.value = val*0.00062137;
}
function InchesToOther(val){
    Feet.value = val*0.083333;
    Meter.value = val/39.370;  
    CM.value = val/0.39370;
    KM.value = val/39370;
    Miles.value = val*0.000015783;
}
function CMToOther(val){
    Feet.value = val*0.032808;
    Meter.value = val/100;  
    Inches.value = val*0.39370;
    KM.value = val/100000 ;
    Miles.value = val*0.0000062137;
}

function KMToOther(val){
    Feet.value = val*3280.8;
    Inches.value = val*39370;  
    CM.value = val*100000;
    Meter.value = val*1000;
    Miles.value = val*0.62137;
}
function MilesToOther(val){
    Feet.value = val*5280;
    Inches.value = val*63360;  
    CM.value = val/0.0000062137;
    KM.value = val/0.62137;
    Meter.value = val/0.00062137;
}




function convertToOther(element,values){
    switch(element){
         case "Feet":FeetToOther(parseFloat(values));break;
         case "Meter":MeterToOther(parseFloat(values));break;
         case "Inches":FeetToOther(parseFloat(values));break;
         case "CM":CMToOther(parseFloat(values));break;
         case "KM":KMToOther(parseFloat(values));break;
         case "Miles":MilesToOther(parseFloat(values));break;
    }
}