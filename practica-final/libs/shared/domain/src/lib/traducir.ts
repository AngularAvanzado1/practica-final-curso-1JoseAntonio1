//Funcion que se encagara de que la pagina sea traducible

export class Traducir {
  private WorldBank = "http://api.worldbank.org/v2/en/" //Observable

  constructor(){}

  getWorldBank():string{
    return this.WorldBank
  }

  setWorldBank(nueva:string){
    this.WorldBank = nueva
  }

  TraducibleApiWorldBankService(lenguaje:string){
     this.setWorldBank(`http://api.worldbank.org/v2/${lenguaje}`);
  }
}


