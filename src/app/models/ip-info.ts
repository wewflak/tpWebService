export class IpInfo {
    pais!:string
    ciudad!:string
    fecha!:string
    hora!:string
    zona!:string
    constructor(pais:string, ciudad:string, fecha:string, hora:string, zona:string){
        this.pais = pais
        this.ciudad = ciudad
        this.fecha = fecha
        this.hora = hora
        this.zona = zona
    }

}
