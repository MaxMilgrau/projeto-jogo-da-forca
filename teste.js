const main=document.getElementById('main');
const secreto=document.getElementById('palavra-secreta');
const button=document.getElementById('enviar');
const input_letra=document.getElementById('letra');
const char_button=document.getElementById('char-button');
const tracos_container=document.getElementById('tracos-container');
let acertos=0;
let erros=0;
let repetidaContainer=[];


  window.onload= () =>{
    window.alert("REGRAS:\n\n1-um jogador deve colocar um nome da coisa/lugar/midia enquanto os outros tentam adivinhar;\n\n2-as condições de vitória são, o jogador que escolheu a palavra deve esperar que o jogador(es) adversário erre 6 vezes, enquanto o adivinhador deve preencher a palavra sem chegar a esse limite de erros;\n\n3-todos os jogadores não podem colocar 'espaço' ao invés coloque '-' para representar espaços;\n\n4-todos os jogadores não devem colocar characteres maisculos em suas respectivas caixas\n\n5-o adivinhador só consegue colocar um caracter por vez em sua respectiva caixa;\n\n6-a palavra escolhida/secreta não deve exceder o limite de 30 caracteres\n\n\n Bom jogo e Boa sorte!!");

    


  }



    function buttonPalavraSecreta(){
        const first_word=secreto.value
        if(!first_word) return window.alert('o campo de "palavra" não foi preenchido, tente novamente');
        const array=first_word.split('');
      
        if(array.length > 30){
          window.alert(`a palavra escondida não pode ter mais do que 30 caracteres, tendo a palavra em questão ${array.length} caracteres, tente novamente.`);
          location.reload();
          
        }


        array.forEach((words)=>{
          
          if(words == ' '){
            window.alert('por favor não coloque espaços, tente novamente');
            location.reload();

            
            
          }

          if(words == 'A' || words == 'B' || words == 'C' || words == 'D' || words == 'E' || words == 'F' || words == 'G' || words == 'H' || words == 'I' || words == 'J' || words == 'K' || words == 'L' || words == 'M' || words == 'N' || words == 'O' || words == 'P' || words == 'Q' || words == 'R' || words == 'S' || words == 'T' || words == 'U' || words == 'V' || words == 'W' || words == 'X' || words == 'Y' || words == 'Z' || words == 'Ç'){
            window.alert('não coloque letras maisculas, tente novamente');
            location.reload();
          }
            
            
          
       
          const letra=document.createElement('div');
          letra.className='letra-container';
          letra.innerText=`${words}`;
          main.appendChild(letra);
          
          
          
      
      
      
      
      
      });

      
        const container_input=document.getElementById('container-button-input');
        container_input.style.display='none';

       const container_character=document.getElementById('letra');
       container_character.removeAttribute('disabled');

    }

    function buttonInsiraChar(){
        
        const first_word=secreto.value;
        const charValue=input_letra.value;
        const secondArray=first_word.split('');
        if(!charValue) return window.alert('o campo de "letra" não foi preenchido, tente novamente');
        const myItems=document.getElementsByClassName('letra-container');
        
        if(charValue == 'A' || charValue == 'B' || charValue == 'C' || charValue == 'D' || charValue == 'E' || charValue == 'F' || charValue == 'G' || charValue == 'H' || charValue == 'I' || charValue == 'J' || charValue == 'K' || charValue == 'L' || charValue == 'M' || charValue == 'N' || charValue == 'O' || charValue == 'P' || charValue == 'Q' || charValue == 'R' || charValue == 'S' || charValue == 'T' || charValue == 'U' || charValue == 'V' || charValue == 'W' || charValue == 'X' || charValue == 'Y' || charValue == 'Z' || charValue == 'Ç') return window.alert('não coloque letras maisculas, tente novamente');
        

      const resultado=secondArray.every((teta) => teta!=charValue);

        if(charValue == ' ') return window.alert('não coloque espaços, tente novamente');

      for(let i=0; i<repetidaContainer.length; i++){
        if(charValue == repetidaContainer[i]) return window.alert('não repita letras, tente novamente');
        
      }


      // console.log(repetidaContainer);

         if(resultado == true){
        erros++;
        console.log(`quantidade de erros atuais ${erros}`);
        repetidaContainer.push(charValue);
        
      }else{
        console.log(`quantidade de erros atuais ${erros}`);
      }


        for(let item of myItems){
         // console.log(item);
          if(item.innerText == charValue){
              item.style.color='#fff';
              acertos++;
           // console.log(acertos);
            repetidaContainer.push(charValue);


              
          


            
          }

          
        }
        
  
        if(acertos==secondArray.length){
          window.alert(`parabéns, o jogador adivinhador ganhou com a palavra no final sendo "${first_word}"`);
          location.reload();

        }
      

        switch(erros){

          case 1:
            const primeiroItem=document.getElementById('number-one');
            primeiroItem.style.visibility='visible'

            break;

            case 2:
              const segundoItem=document.getElementById('number-two');
              segundoItem.style.visibility='visible'
            break;


            case 3:
              const terceiroItem=document.getElementById('number-three');
              terceiroItem.style.visibility='visible'
            break;
    
            case 4:
              const quartoItem=document.getElementById('number-four');
              quartoItem.style.visibility='visible'
            break;

            case 5:
              const quintoItem=document.getElementById('number-five');
              quintoItem.style.visibility='visible';
            break;
      
            case 6:
              const sextoItem=document.getElementById('number-six');
              sextoItem.style.visibility='visible';
            window.alert(`o jogador adivinhador perdeu, sendo assim o jogador escolhedor venceu, com a palavra no final sendo "${first_word}"`);
            location.reload();
            break;


        }




      }

   



    button.addEventListener('click', buttonPalavraSecreta);
    char_button.addEventListener('click', buttonInsiraChar);

//