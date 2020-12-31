function tinhTienDien(event){
    event.preventDefault();

    var soDienTieuThu = document.getElementById("so__dien").value;

    var tienDien = xuLytienDien(soDienTieuThu);

    document.getElementById("footer__tiendien").innerHTML = "Tiền điện là: " + tienDien

}

function xuLytienDien(a){
    if(a <= 50 && a > 0){
        return a * 500;
    }else if( a > 50 && a <= 100){
        return ((50 * 500) + ((a - 50) * 650));
    }
    else if (a > 100 && a <= 200){
        return((50*500) + (50*650) + ((a-100)*850));
    }
    else if(a > 200 && a <= 350){
        return ((50*500) + (50*650) + (100*850) + ((a-200)*1100));
    }else if (a > 350){
        return ((50*500) + (50*650) + (100*850) + (150*1100) + ((a-350)*1300));
    }
}