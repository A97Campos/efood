import { useEffect, useState } from "react";
import { Hero, Texto, Titulo } from "./style";
import { Restaurantes } from "../../pages/Home";
import { useParams } from "react-router-dom";

export const Banner = () => {
    const { id } = useParams()

    const [banner, setBanner] = useState<Restaurantes>()

    useEffect(() => {
        fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
        .then((res) => res.json())
        .then((res) => setBanner(res))
    }, [id])

    return(
        <Hero style={{backgroundImage: `url(${banner?.capa})`}}>
            <div className="container">
                <Texto>{banner?.tipo}</Texto>
                <Titulo>{banner?.titulo}</Titulo>
            </div>
        </Hero>
    )
}