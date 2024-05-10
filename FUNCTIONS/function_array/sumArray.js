function sumArray(value){
    var arr = [2,7,11,15]; //array do matusa.

    for (var i = 0; i <= arr.length - 1; i++){
        
        var result1 = (arr[i] + arr[i + 1]);
        var result2 = (arr[i] + arr[i + 2]);
        var result3 = (arr[i] + arr[i + 3]);
        var result4 = (arr[i] + arr[i + 4]);

        if (result1 === value){
            console.log(value);
            return;
        }
        else if (result2 === value){
            console.log(value);
            return;
        }
        else if (result3 === value){
            console.log(value);
            return;
        }else if (result4 === value){
            console.log(value);
            return;
        }
    }
    console.log("Não encontrado")
};
sumArray(17);