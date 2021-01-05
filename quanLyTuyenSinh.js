function  tinhDiem(event){

    event.preventDefault();

    // Nhập dữ liệu 

    var diemChuan = document.getElementById("diem__chuan").value;
    var mon1 = document.getElementById("mon1").value;
    var mon2 = document.getElementById("mon2").value;
    var mon3 = document.getElementById("mon3").value;
    var khuVuc = document.getElementById("khu__vuc").value;
    var doiTuong = document.getElementById("doi__tuong").value;

    // Xử lý dữ liệu

    mon1 = parseFloat(mon1);
    mon2 = parseFloat(mon2);
    mon3 = parseFloat(mon3);
    doiTuong = parseInt(doiTuong);

    var checkKhuVuc = xuLyKhuVucUuTien(khuVuc);
    checkKhuVuc = parseFloat(checkKhuVuc);
    var checkDoiTuong = xuLyDoiTuongUuTien(doiTuong);
    checkDoiTuong = parseFloat(checkDoiTuong);

    var tongDiem = mon1 + mon2 + mon3 + checkKhuVuc + checkDoiTuong;


    // In Dữ liêu

    if(tongDiem >= diemChuan){
        document.getElementById("footer__qlts").innerHTML = "Tổng điểm là: " + tongDiem + "  (Đậu)";
    }else{
        document.getElementById("footer__qlts").innerHTML = "Tổng điểm là: " + tongDiem + "  (Rớt)";
    }

    


    
    
}


function xuLyKhuVucUuTien(a){
    var diemKhuVuc = 0;
    switch(a){
        case "A":
            diemKhuVuc = 2;
            break;
        case "B":
            diemKhuVuc = 1;
            break;
        case "C":
            diemKhuVuc = 0.5;
            break;
        case "X":
            diemKhuVuc = 0;
            break;
    }
    return diemKhuVuc;
}
function xuLyDoiTuongUuTien(b){
    var diemDoiTuong = 0;
    switch(b){
        case 1:
            diemDoiTuong = 2.5;
            break;
        case 2:
            diemDoiTuong = 1.5;
            break;
        case 3:
            diemDoiTuong = 1;
            break;
        case 0:
            diemDoiTuong = 0;
            break;
    }
    return diemDoiTuong;
}