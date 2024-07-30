alert("descubra a palavra secreta");
let palavra_secreta = parseInt(Math.random() * 100 + 1)
let chute 
tentativa =  1
while(chute != palavra_secreta){
    let chute = prompt("DIGITE o NUMERO SEGRETO ");
    if(chute==palavra_secreta){
        alert(`parabens acertou ${palavra_secreta}`);
        break;
    }else{
        
        if (chute > palavra_secreta){
            alert(' numero é menor')
        }else{
            alert('o numero é maior')
    }
    }
    tentativa = tentativa+1

    }
let tentativa_or_tentativas = tentativa > 1 ? 'tentativas' : 'tentativa'

alert('o numero de '+ tentativa_or_tentativas+' '+tentativa)