const fichero = require('fs');

const crearArchivo = async(numero = 5) => {

    try{

        let resultado = '';

        for(let i = 0; i <= 10; i++){
            resultado += `${numero} x ${i} = ${numero*i} \n`; 
        }
        
        fichero.writeFile('tabla-5.txt', resultado, (err) =>{
        
            if(err) throw err;
            
            return 5;
        
        });

    }catch(err){

        throw err;

    }


    

}


module.exports = {
    crearArchivo
}