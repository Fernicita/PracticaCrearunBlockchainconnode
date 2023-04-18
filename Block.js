const SHA256 = require('crypto-js/sha256'); //Importamos 

class Block{

    //index = Posicion del bloque en la cadena
    //Data = contenido de la cadena.
    //previousHash =Valor del bloque anterior.
    //date = fecha de creacion del bloque.

    constructor(index, data, previousHash=''){  //el tercer valor esta inicializado por default
        this.index = index;
        this.data = data;
        this.previousHash = previousHash;
        this.date = new Date(); //fecha
        this.hash = this.createdHash();
        this.nounce=0;
    }

    createdHash(){
        const originalChain = `${this.index}${this.data}${this.date} ${this.nounce}`;
        return SHA256(originalChain).toString();



    }

    mine(dif){
        while(!this.hash.startsWith(dif)){
            this.nounce++;
            this.hash=this.createdHash();

        }
    }
}

module.exports = Block;
 //Cifrados
    //Simetricos y asimetricos (depende si son reversibles o no reversibles)

    //CFDI (Comprobantes Fiscales digitales) - Han permitido el proceso de recaudaciones electronicas, 


    //SHA256  Algoritmo simetrico e irreversible 
