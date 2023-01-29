alert("Istalgan oydagi juma kunlarini topib beruvchi saytga xush kelibsiz");
const oy_nomi = prompt("Marhamat oy nacha kundan iborat ekanligini kiriting");
const boshlanish_kuni = prompt("Bu oy qaysi hafta kunidan boshlanishini kiriting masalan Yakshanba");
let du = "Dushanba";
let se = "Seshanba";
let cho = "Chorshanba";
let pa = "Payshanba";
let ju = "Juma";
let sha = "Shanba";
let ya = "Yakshanba";
let chorshanba_kiritildi = Number(oy_nomi) + Number(5);
let payshanba_kiritildi = Number(oy_nomi) + Number(6);
let juma_kiritildi = Number(oy_nomi) + Number(7);
if (oy_nomi == 28 || oy_nomi == 29 || oy_nomi == 30 || oy_nomi == 31) {
    if (boshlanish_kuni == ju) {
       if (oy_nomi === 28) {
        alert(Math.round(juma_kiritildi / 7 ) + "   ta juma bor 1-8-15-22-kunlari")
       } else {
        alert(Math.round(juma_kiritildi / 7 ) + "   ta juma bor 1-8-15-22-29-kunlari")
       }
    }
    else if(boshlanish_kuni == pa){
if (oy_nomi <= 31) {
    alert(Math.round(payshanba_kiritildi / 7) + "   ta juma bor 2-9-16-23-30-kunlari")
} else {
    alert("4 ta juma bor 2-9-16-23-kunlari")
}   }
else if(boshlanish_kuni === cho ) {
    if (oy_nomi == 31) {
        alert(Math.trunc(chorshanba_kiritildi / 7) + "   ta juma bor 3-10-17-24-31-kunlari")
    } else {
        alert("4 ta juma bor 3-10-17-24-kunlari")
    }
}
else if(boshlanish_kuni == se) {
        alert("4 ta juma bor 4-11-18-25-kunlari")
}
else if(boshlanish_kuni == du){
    alert("4 ta juma bor 5-12-19-26-kunlari")
}
else if(boshlanish_kuni == ya){
    alert("4 ta juma bor 6-13-20-27-kunlari")
}
else if(boshlanish_kuni == sha){
    alert("4 ta juma bor 7-14-21-28-kunlari")
}
     else {
        alert("Siz hafta kunini kiritishda xatolikka yo'l qo'ydingiz!")
    }
}
 else {
    alert("Siz oy kunini kiritishda xatolikka yo'l qo'ydingiz!")
}