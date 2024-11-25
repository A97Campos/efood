import { HeaderCardapio } from "../../components/HeaderCardapio";
import { ListaCardapios } from "../../components/ListaCardapio";
import { Cardapios } from "../../models/cardapios";
import pizza from "../../assets/images/pizzaMarguerita.png";
import { Banner } from "../../components/Banner";
import imagemFundo from "../../assets/images/imagem_de_fundo.png";

const lista: Cardapios[] = [
    {
        id: 1,
        imagem: pizza,
        titulo: 'Marguerita',
        texto: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
        id: 2,
        imagem: pizza,
        titulo: 'Marguerita',
        texto: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
        id: 3,
        imagem: pizza,
        titulo: 'Marguerita',
        texto: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
        id: 4,
        imagem: pizza,
        titulo: 'Marguerita',
        texto: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
        id: 5,
        imagem: pizza,
        titulo: 'Marguerita',
        texto: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
        id: 6,
        imagem: pizza,
        titulo: 'Marguerita',
        texto: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    }

]

export const Perfil = () => (
    <>
        <HeaderCardapio />
        <Banner texto="Italiana" titulo="La Dolce Vita Trattoria" imagem={imagemFundo}/>
        <ListaCardapios cardapios={lista}/>
    </>
)