function somar(){
    var num1;//Declaração de variaves
    var num2;
    var res;
    //Coletar os dados do formulario
    num1 = parseInt(document.getElementById("num1").value);//document usado para pegar dados do html
    num2 = parseInt(document.getElementById("num2").value);
    //realizar a conta
    res = num1 + num2;
    document.getElementById("resultado").innerHTML = res;//inserir usar o innerHTML
}//Fim do metodo somar
function subtrair(){
    var num1;//Declaração de variaves
    var num2;
    var res;
    //Coletar os dados do formulario
    num1 = parseInt(document.getElementById("num1").value);//document usado para pegar dados do html
    num2 = parseInt(document.getElementById("num2").value);
    //realizar a conta
    res = num1 - num2;
    document.getElementById("resultado").innerHTML = res;//inserir usar o innerHTML
}//Fim do metodo subtrair
function dividir(){
    var num1;
    var num2;
    var res;
    //Coletar os dados do formulario
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    //Realizar a conta
    if(num2 <= 0){
        res= "Impossivel dividir por zero!";
    }else{
        res = num1 / num2;
    }
    document.getElementById("resultado").innerHTML = res;//inserir usar o innerHTML
}//Fim do metodo subtrair
function multiplicar(){
    var num1;//Declaração de variaves
    var num2;
    var res;
    //Coletar os dados do formulario
    num1 = parseInt(document.getElementById("num1").value);//document usado para pegar dados do html
    num2 = parseInt(document.getElementById("num2").value);
    //realizar a conta
    res = num1 * num2;
    document.getElementById("resultado").innerHTML = res;//inserir usar o innerHTML
}//Fim do metodo subtrair
//Função tabua
function tabuada(){
    var num1;
    var num2;

    //Coletar numeros
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    var resNum1 = "Tabuada do" + num1;
    var resNum2 = "Tabuada do " + num2;

    for(i=0;i<=10;i++){
        resNum1 += "\n" + num1 + "*" + i + "=" + (num1*i);
        resNum2 += "\n" + num2 + "*" + i + "=" + (num2*i);
    }
    document.getElementById("resultado").innerHTML = "\n" + resNum1 + "\n" + resNum2;
}//Fim do metodo da tabuada
//Função raiz
function raiz(){
    var num1;
    var num2;
    var resNum1;
    var resNum2;
    //Coletar os dados do formulario
    num1 = parseInt(document.getElementById("num1").value);//document usado para pegar dados do html
    num2 = parseInt(document.getElementById("num2").value);
    //realizar conta
    resNum1 = Math.sqrt(num1);//raiz
    resNum2 = Math.sqrt(num2);//raiz
    document.getElementById("resultado").innerHTML = resNum1 + "\n" + resNum2;//inserir usar o innerHTML 
}
function potencia(){
    var num1;
    var num2;
    var res;
    //Coletar os dados do formulario
    num1 = parseInt(document.getElementById("num1").value);//document usado para pegar dados do html
    num2 = parseInt(document.getElementById("num2").value);
    //realizar conta
    res = Math.pow(num1,num2);//potencia
    document.getElementById("resultado").innerHTML = res;//inserir usar o innerHTML    
}