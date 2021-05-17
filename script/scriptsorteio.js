//função para gerar um número aleatório. Generate random number.
function gerarnumero(maxvalue, minvalue)
{
    let result;

    result = Math.round(Math.random() * (maxvalue - minvalue)) + minvalue;
    return result;
}
//Função inicial, recebe os dados do usuário e faz o tratamento das informações. Initial function, receives the user's data and handles the information.
function sortear()
{
    var min = parseInt(document.getElementById("start").value);
    var max = parseInt(document.getElementById("end").value);
    var total = parseInt(document.getElementById("total").value);
    var sorteado;
    var finalresult = new Array();
    var n = 0;

    if(total < max && min < max)
    {
        for(var i = 0; i != total; i++)
        {
            sorteado = gerarnumero(max, min);
            while(n < i)
            {
                if(sorteado == finalresult[n])
                {
                    sorteado = gerarnumero(max, min);
                    n = 0;
                }
                else
                    n++;
            }
            n = 0;
            finalresult.push(sorteado);
        }
        document.getElementById("resultado").innerText = finalresult;
    }
    else
    {
        document.getElementById("resultado").innerText = "Valores Errados";
    }
}
