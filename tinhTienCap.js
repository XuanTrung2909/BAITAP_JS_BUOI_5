const PHIXULYHOADON_CANHAN = 4.5;
const PHIDICHVUCOBAN_CANHAN = 20.5;
const PHIMOTKENH_CANHAN = 7.5;

const PHIXULYHOADON_DOANHNGHEP = 15;
const PHIMOTKENH_DOANHNGHEP = 50;

function tinhTienCap(event){
    event.preventDefault();

    var mkh = document.getElementById("mkh").value;
    mkh = parseInt(mkh);
    var tongTien = 0;
    switch(mkh){
        case 1:
            tongTien = tinhTienCapCaNhan();
            break;
        case 2:
            tongTien = tinhTienCapDoanhNghiep();
            break;
        default:
            tongTien = "Nhập lại thông tin chính xác.";
    }
    document.getElementById("footer__tiencap").innerHTML = "Tổng tiền Cáp là: " + tongTien + "$";
    
}
function tinhTienCapCaNhan(){
    var kenh = document.getElementById("kenh").value;
    kenh = parseInt(kenh);
    var tinhTien = PHIXULYHOADON_CANHAN + PHIDICHVUCOBAN_CANHAN + (kenh * PHIMOTKENH_CANHAN);
    return tinhTien;
}
function tinhTienCapDoanhNghiep(){
    var kenh = document.getElementById("kenh").value;
    var phiDichVuCoBanDoanhNghiep = xuLyPhiDichVuDoanhNghiep();
    var tinhTien = PHIXULYHOADON_DOANHNGHEP + phiDichVuCoBanDoanhNghiep + (PHIMOTKENH_DOANHNGHEP * kenh);
    return tinhTien;
}
function xuLyPhiDichVuDoanhNghiep(){
    var soKetNoi = document.getElementById("so__ket__noi").value;
    var phiDichVuCoBanDoanhNghiep = 0;
    if(soKetNoi >= 0 && soKetNoi <= 10){
        phiDichVuCoBanDoanhNghiep = 75;
    }else if(soKetNoi > 10){
        phiDichVuCoBanDoanhNghiep = ((soKetNoi - 10) * 5) + 75;
    }
    return phiDichVuCoBanDoanhNghiep;
}