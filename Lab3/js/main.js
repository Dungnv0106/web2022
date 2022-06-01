// Ví dụ 1
sum = function(a, b){
    // Kiểm tra
    if(typeof(a) !== 'number' || typeof b !== 'number'){
        return -1;
    }
    // pass kiểm tra -> Xử Lý
    const result = a + b;
    // Hiển Thị Kết Quả
    return result;
}
const ketQua = sum(23,30);
console.log(sum(10, 60));
console.log(ketQua);
// Ví dụ 2
const myFriendList = [
    {name: "Nam", age: 20, gender: 'Male'},
    {name: "Tu", age:21, gender: 'Male'},
    {name: "Hoang", age: 17, gender: 'Male'},
];

function showInfo(myFreinds){
    //  Check
    if(!Array.isArray(myFreinds) || myFreinds.length == 0) return flase;
    
    let result = "";
    for(let i = 0; i < myFreinds.length; i++){
        result += '<h2>${myFreinds[i].name}</h2>';
    }
    return result;
}
document.getElementById("app").innerHTML = showInfo(myFriendList);

