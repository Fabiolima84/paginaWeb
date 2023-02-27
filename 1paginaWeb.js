function calcular(){
    if(validavalor1() && validavalor2() && validavalor3() && validavalor4()){ 
    
        let avalor1 =  valor1.value;
        let bvalor2 =  valor2.value;
        let cvalor3 =  valor3.value;
        let dvalor4 =  valor4.value;
        
        let valortotal = parseFloat (avalor1) + parseFloat (bvalor2) + parseFloat (cvalor3) + parseFloat (dvalor4)
        resultado.value = valortotal / 4     
        
    }
    function validavalor1(){
        if(valor1.value.trim() === ""){
            valor1.style.background = "red";
            mensagem.innerHTML = "Preencha o valor1!";
            $('#alerta').modal('show');
            return false;
            } else {
                valor1.style.background = "white";
                return true;
            }
        }
    function validavalor2(){
        if(valor2.value.trim() === ""){
            valor2.style.background = "red";
            mensagem.innerHTML = "Preencha o valor2!";
            $('#alerta').modal('show');
            return false;
            } else {
                valor2.style.background = "white";
                return true;
            }
        }
    function validavalor3(){
        if(valor3.value.trim() === ""){
            valor3.style.background = "red";
            mensagem.innerHTML = "Preencha o valor3!";
                $('#alerta').modal('show');
                return false;
                } else {
                    valor3.style.background = "white";
                    return true;
                }
            }
    function validavalor4(){
        if(valor4.value.trim() === ""){
            valor4.style.background = "red";
            mensagem.innerHTML = "Preencha o valor4!";
                $('#alerta').modal('show');
                return false;
                } else {
                    valor4.style.background = "white";
                    return true;
                }
            }
            

    }
       