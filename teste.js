
const main=document.getElementById('main');
const secreto=document.getElementById('palavra-secreta');
const button=document.getElementById('enviar');



    function buttonTeste(){
        const teste=secreto.value;
        const array=teste.split('');
        console.log(array);

        array.forEach((words)=>{
       
            const letra=document.createElement('div');
            letra.className='letra-container';
            letra.innerText=`${words}`;
            main.appendChild(letra);
            
            
            
        
        
        
        
        
        });
        const container_input=document.getElementById('container-button-input');
        container_input.style.display='none';

    }

    


   // teste();

    button.addEventListener('click', buttonTeste);




