export class Restaurantes {
    id: number
    imagem: string
    infos: string[]
    titulo: string
    texto: string
    nota: number
    destino: string

    constructor (
        id: number,
        imagem: string,
        infos: string[],
        titulo: string,
        texto: string,
        nota: number,
        destino: string
    ) {
        this.id = id
        this.imagem = imagem
        this.infos = infos
        this.titulo = titulo
        this.texto = texto
        this.nota = nota
        this.destino = destino
    }
}