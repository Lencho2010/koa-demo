let name = '"a","b"';
let nameReg = name.replace(/"([^"]*)"/g, "'$1'")
// console.log(nameReg);

// name = "fsdf Doe,John fsdfsd"
// nameReg = name.replace(/(\w+)\s*,\s*(\w+)/,"$2, $1")
// console.log(nameReg);

// name = "select * from t_user t where t.name = '{userName}' and t.id = {id}"
// nameReg = name.replace(/({\w+})\s*/g,"$1--")
// console.log(nameReg);

const dic = { userName: 'lencho', id: 17 }

name = "select * from t_user t where t.name = '{userName}' and t.id = {id}"
nameReg = name.replace(/\{(\w+)\}/g, (oVal, mVal, index) => {
    console.log(oVal, mVal, index);
    if (dic.hasOwnProperty(mVal))
        return dic[mVal]
    return oVal
})
console.log(nameReg);

// var str="hello(world)";
// var nstr = str.replace(/\([^\)]*\)/g,""); 
// console.log(nstr);

// var str="hello(world)";
// var nstr = str.replace(/\([^\)]*\)/g,(matchVal,a,b)=>{
//     console.log(matchVal);
//     console.log(a);
//     console.log(b);
//     return 'Lencho'
// }); 
// console.log(nstr);