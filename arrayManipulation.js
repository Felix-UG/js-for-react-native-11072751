
function processArray(nummbers) {
    return nummbers.map(num =>{
        if (num % 2 ===0) {
            return num * num;
        }
        else{
            return num * 3;
        }
    })
}