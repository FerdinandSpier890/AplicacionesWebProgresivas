const factorial = (n) => {
    let acum = 1;

    for (let i = 1; i <= n ; i++){
        acum *= i; 
    }
    
    return acum;
}