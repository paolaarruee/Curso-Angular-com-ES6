export class Coracao{
    constructor(
        public cheio: boolean,
        public urlCoracaoCheio: string = '/assets/img/coracao_cheio.png',
        public urlcoracaoVazio: string = '/assets/img/coracao_vazio.png',
    ){
    }
    public exibeCoracao(): string {
        if(this.cheio){
            return this.urlCoracaoCheio
        }
        else{
            return this.urlcoracaoVazio
        }
    }
}
