import { ListaRestaurantes } from "../../components/ListaRestaurante";
import { Restaurantes } from "../../models/Restaurantes";


import sushi from "../../assets/images/sushi.png";
import massa from "../../assets/images/massa.png";
import { Header } from "../../components/Header";

const lista: Restaurantes[] = [
    {
        id: 1,
        imagem: sushi,
        infos: ['Destaque da semana', 'Japonesa'],
        titulo: 'Hioki Sushi',
        nota: 4.9,
        texto: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
        destino: '/perfil'
    }, 
    {
        id: 2,
        imagem: massa,
        infos: ['Italiana'],
        titulo: 'La Dolce Vita Trattoria',
        nota: 4.6,
        texto: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        destino: '/perfil'
    }, 
    {
        id: 3,
        imagem: massa,
        infos: ['Italiana'],
        titulo: 'La Dolce Vita Trattoria',
        nota: 4.6,
        texto: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        destino: '/perfil'
    },
    {
        id: 4,
        imagem: massa,
        infos: ['Italiana'],
        titulo: 'La Dolce Vita Trattoria',
        nota: 4.6,
        texto: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        destino: '/perfil'
    }
]

export const Home = () => (
    <>  
        <Header/>
        <ListaRestaurantes restaurantes={lista} />
    </>
)