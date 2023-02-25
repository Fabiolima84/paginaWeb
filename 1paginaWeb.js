function calcular(){
    if(validavalor1() && validavalor2() && validavalor3() && validavalor4()){ 
    
        let valor1 = parseFloat (valor1.value);
        let valor2 = parseFloat (valor2.value);
        let valor3 = parseFloat (valor3.value);
        let valor4 = parseFloat (valor4.value);
        
        let valortotal = parseFloat (valor1.value) + parseFloat valor2.value; + parseFloat valor3.value; + parseFloat valor4.value; 
        resultado.value = valortotal.value / 4     
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
       