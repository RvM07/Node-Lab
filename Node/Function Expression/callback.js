function operation(a,b,callback){
    return callback(a,b);
    }
    function mult(a,b){
        return a*b;
    }

console.log(operation(7,14,mult));