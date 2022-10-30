// Bài 6
document.getElementById("btn").onclick = function () {
    var month = document.getElementById("Num1").value * 1;
    var year = document.getElementById("Num2").value * 1;
    var result = "";
    switch (month) {
        case 1:
            result = "tháng một có: " + 31 + "ngày";
            break;
        case 2:
            if (year % 4 == 0 && year % 100 !== 0) {
                result = "tháng hai có: " + 29 + "ngày";

            }
            else {
                result = "tháng hai có: " + 28 + "ngày";
        }
            break;
        case 3:
            result = "tháng ba có: " + 31 + "ngày";
            break;
        case 4:
            result = "tháng bốn có: " + 30 + "ngày";
            break;
        case 5:
            result = "tháng năm có: " + 31 + "ngày";
            break;
        case 6:
            result = "tháng sáu có: " + 30 + "ngày";
            break;
        case 7:
            result = "tháng bảy có: " + 31 + "ngày";
            break;
        case 8:
            result = "tháng tám có: " + 31 + "ngày";
            break;
        case 9:
            result = "tháng chín có: " + 30 + "ngày";
            break;
        case 10:
            result = "tháng mười có: " + 31 + "ngày";
            break;
        case 11:
            result = "tháng mười một có: " + 30 + "ngày";
            break;
        case 12:
            result = "tháng mười hai có: " + 31 + "ngày";
            break;   
    }
document.getElementById("sapxep").innerHTML = result;
}

//Bài 7:Đọc số
document.getElementById("btnReadInt").onclick = function () {
var enterNumber = document.getElementById("inputReadInt").value * 1;
var hundreds = "";
var hangdozens = "";
var hangunits = "";
var ketqua = "";
var hangtram =  Math.floor(enterNumber / 100);
var hangchuc =  Math.floor(enterNumber / 10) % 10;
var hangdonvi =  Math.floor(enterNumber % 100) % 10 ;
console.log(hangchuc);
switch (hangtram) {
    case 0:
        sotram = "";
        break;
    case 1:
        sotram = "một";
        break;
    case 2:
        sotram = "hai";
        break;
    case 3:
        sotram = "ba";
        break;
    case 4:
        sotram = "bốn";
        break;
    case 5:
        sotram = "năm";
        break;
    case 6:
        sotram = "sáu";
        break;
    case 7:
        sotram = "bảy";
        break;
    case 8:
        sotram = "tám";
        break;
    case 9:
        sotram = "chín";
        break;
}
switch (hangchuc) {
    case 0:
        sochuc = "";
        break;
    case 1:
        sochuc = "một";
        break;
    case 2:
        sochuc = "hai";
        break;
    case 3:
        sochuc = "ba";
        break;
    case 4:
        sochuc = "bốn";
        break;
    case 5:
        sochuc = "năm";
        break;
    case 6:
        sochuc = "sáu";
        break;
    case 7:
        sochuc = "bảy";
        break;
    case 8:
        sochuc = "tám";
        break;
    case 9:
        sochuc = "chín";
        break;
}
switch (hangdonvi) {
    case 0:
        sodonvi = "";
        break;
    case 1:
        sodonvi = "một";
        break;
    case 2:
        sodonvi = "hai";
        break;
    case 3:
        sodonvi = "ba";
        break;
    case 4:
        sodonvi = "bốn";
        break;
    case 5:
        sodonvi = "năm";
        break;
    case 6:
        sodonvi = "sáu";
        break;
    case 7:
        sodonvi = "bảy";
        break;
    case 8:
        sodonvi = "tám";
        break;
    case 9:
        sodonvi = "chín";
        break;
}
if (hangtram == 0) {
    ketqua = "nhập sai số ( số có ba chữ số)";
}
else {
    if (hangchuc == 0) {
        ketqua = sotram + " trăm lẻ " + sodonvi;
    }
    else if (hangchuc == 1) {
        ketqua = sotram + " trăm " + " mười " + sodonvi;
    }
    else {
        ketqua = sotram + " trăm " + sochuc + " mươi " + sodonvi;
    }
}

document.getElementById("txtReadInt").innerHTML = ketqua;

}
// Bài 5
document.getElementById("btn_yesterday").onclick = function () {
    var ngay = document.getElementById("day").value * 1;
    var thang = document.getElementById("month").value * 1;
    var nam = document.getElementById("year").value * 1;
    var result = "";
    if ((nam % 4 == 0) && (nam % 100 !== 0) || nam % 400 == 0) {
        if (thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10 || thang == 12) {
            if ((ngay > 1) && (ngay <= 31)) {
                ngay = ngay - 1;
            }
            else if (ngay == 1) {
                if (thang == 1) {
                    ngay = 31;
                    thang = 12;
                    nam = nam - 1;

                }
                else if (thang == 8) {
                    ngay = 31;
                    thang = 7;
                }
                else if (thang == 3) {
                    ngay = 29;
                    thang = 2;
                }
                else {
                    ngay = 30;
                    thang = thang - 1;
                }
            }
            else {
                result = "sai ngày";
            }
        }
        else if (thang = 4 || thang == 6 || thang == 9 || thang == 11) {
            if ((ngay > 1) && (ngay <= 30)) {
                ngay = ngay - 1;
            }
            else if (ngay == 1) {
                ngay = 31;
                thang = thang - 1;
            }
            else {
                result = "sai ngày";
            }
        }
        else {
            if ((ngay > 1) && (ngay <= 29)) {
                ngay = ngay - 1;
            }
            else if (ngay == 1) {
                ngay = 31;
                thang = 1;
            }
            else {
                result = "sai ngày";
            }
        }
        result = ngay + "/" + thang + "/" + nam;
    }

    else {
        if (thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10 || thang == 12) {
            if ((ngay > 1) && (ngay < 30)) {
                ngay = ngay - 1;
            }
            else if (ngay == 1) {
                if (thang == 1) {
                    ngay = 31;
                    thang = 12;
                    nam = nam - 1;

                }
                else if (thang == 8) {
                    ngay = 31;
                    thang = 7;
                }
                else if (thang == 3) {
                    ngay = 28;
                    thang = 2;
                }
                else {
                    ngay = 30;
                    thang = thang - 1;
                }
            }
            else {
                result = "sai ngày";
            }
        }
        else if (thang = 4 || thang == 6 || thang == 9 || thang == 11) {
            if ((ngay > 1) && (ngay < 30)) {
                ngay = ngay - 1;
            }
            else if (ngay == 1) {
                ngay = 31;
                thang = thang - 1;
            }
            else {
                result = "sai ngày";
            }
        }
        else {
            if ((ngay > 1) && (ngay < 29)) {
                ngay = ngay - 1;
            }
            else if (ngay == 1) {
                ngay = 31;
                thang = 1;
            }
            else {
                result = "sai ngày";
            }
        }
        result = ngay + "/" + thang + "/" + nam;
    }
    document.getElementById("ngayxuat").innerHTML = result;
}
document.getElementById("btn_tomorow").onclick = function () {
    var ngay = document.getElementById("day").value * 1;
    var thang = document.getElementById("month").value * 1;
    var nam = document.getElementById("year").value * 1;
    var result = "";
    if ((nam % 4 == 0) && (nam % 100 !== 0) || nam % 400 == 0) {
        if (thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10 || thang == 12) {
            if ((ngay >= 1) && (ngay < 31)) {
                ngay = ngay + 1;
            }
            else if (ngay == 31) {
                if (thang == 12) {
                    ngay = 1;
                    thang = 1;
                    nam = nam + 1;

                }
                else {
                    ngay = 1;
                    thang = thang + 1;
                }
            }
            else {
                result = "sai ngày";
            }
        }
        else if (thang == 4 || thang == 6 || thang == 9 || thang == 11) {
            if ((ngay >= 1) && (ngay < 30)) {
                ngay = ngay + 1;
            }
            else if (ngay == 30) {
                ngay = 1;
                thang = thang + 1;
            }
            else {
                result = "sai ngày";
            }
        }
        else {
            if ((ngay > 1) && (ngay < 29)) {
                ngay = ngay + 1;
            }
            else if (ngay == 29) {
                ngay = 1;
                thang = 3;
            }
            else {
                result = "sai ngày";
            }
        }
        result = ngay + "/" + thang + "/" + nam;
    }
    else {
        if (thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10 || thang == 12) {
            if ((ngay >= 1) && (ngay < 31)) {
                ngay = ngay + 1;
            }
            else if (ngay == 31) {
                if (thang == 12) {
                    ngay = 1;
                    thang = 1;
                    nam = nam + 1;

                }
                else {
                    ngay = 1;
                    thang = thang + 1;
                }
            }
            else {
                result = "sai ngày";
            }
        }
        else if (thang == 4 || thang == 6 || thang == 9 || thang == 11) {
            if ((ngay >= 1) && (ngay < 30)) {
                ngay = ngay + 1;
            }
            else if (ngay == 30) {
                ngay = 1;
                thang = thang + 1;
            }
            else {
                result = "sai ngày";
            }
        }
        else {
            if ((ngay > 1) && (ngay < 28)) {
                ngay = ngay + 1;
            }
            else if (ngay == 28) {
                ngay = 1;
                thang = 3;
            }
            else {
                result = "sai ngày";
            }
        }
        result = ngay + "/" + thang + "/" + nam;
    }
    document.getElementById("ngayxuat").innerHTML = result;
}