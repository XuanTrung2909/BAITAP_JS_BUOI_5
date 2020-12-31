function tinhThue(event){
    event.preventDefault();

    //NHẬP DỮ LIỆU VÀO BIẾN

    var tongThuNhap = document.getElementById("tong__thu__nhap").value;
    var nguoiPhuThuoc = document.getElementById("so__nguoi__pt").value;

    //XỬ LÝ BÀI TOÁN

    var thueThuNhap = xuLyTienThue(tongThuNhap, nguoiPhuThuoc);
    thueThuNhap = parseFloat(thueThuNhap).toFixed(2);

    //XUẤT KẾT QUẢ

    document.getElementById("footer__ttn").innerHTML = "Thuế thu nhập cá nhân phải trả là: " + thueThuNhap + " triệu";

}


function xuLyThuNhapChiuThue(a, b){
    return (a - 4 - (b * 1.6));
}

function xuLyTienThue(a, b){
    var thuNhapChiuThue = xuLyThuNhapChiuThue(a, b);
    if(thuNhapChiuThue <=0){
        return 0
    }else if(thuNhapChiuThue <= 60){
        return (thuNhapChiuThue * 0.05);
    }else if(thuNhapChiuThue > 60 && thuNhapChiuThue <= 120){
        return (thuNhapChiuThue * 0.1);
    }else if(thuNhapChiuThue > 120 && thuNhapChiuThue <= 216){
        return (thuNhapChiuThue * 0.15);
    }else if(thuNhapChiuThue > 216 && thuNhapChiuThue <= 384){
        return (thuNhapChiuThue * 0.2);
    }else if(thuNhapChiuThue > 384 && thuNhapChiuThue <= 624){
        return (thuNhapChiuThue * 0.25);
    }
    else if(thuNhapChiuThue > 624 && thuNhapChiuThue <= 960){
        return (thuNhapChiuThue * 0.3);
    }else{
        return (thuNhapChiuThue * 0.35);
    }
}