export class Cardapios {
    id: number
    imagem: string
    titulo: string
    texto: string

    constructor (
        id: number,
        imagem: string,
        titulo: string,
        texto: string
    ) {
        this.id = id
        this.imagem = imagem
        this.titulo = titulo
        this.texto = texto
    }
}