//bucle wile
function buclewhile(){
    let count = 10;
    let array = [];
    while(count >= 1){
        array.push(count);   //para insertar los datos en el array
        count--;
    }
    alert('Los numeros son: ${array.join(".")}')
}
function buclefor(){
    let count = 10;
    let array = [];
    for(i = 10; 1 >= 1; i-- ){
        array.push(i); //inserta valor a array
    }

    alert('Los numeros son: ${array.join(' - ')} );

}