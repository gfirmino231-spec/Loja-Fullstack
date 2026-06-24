import { Facilidade } from "../../data/Facilidade";
import './Facilidades.css'
import FacilidadeCard from "./FacilidadesCard";

function Facilidades() {

    return (
        <section className="secao-facilidades">
            <h2 className="titulo-facilidades">Conheça todas nossas facilidades</h2>
            <div className="secao-cards">
                {Facilidade.map((facilidade) => (
                    <FacilidadeCard
                        key={facilidade.id}
                        nome={facilidade.nome}
                        imagem={facilidade.imagem}
                        descricao={facilidade.descricao}
                    />
                ))}
            </div>

        </section>
    )
}
export default Facilidades