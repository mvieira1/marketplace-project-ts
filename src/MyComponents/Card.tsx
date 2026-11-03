
import type { JSX } from "react";
import type { Job } from "../jobs";

type CardProps = {
    job: Job,
    handleClickFunction: (index: string) => void
};

const Card = (props: CardProps): JSX.Element => {

    const {service, city, startsAt, durationMin, priceCents, urgent} = props.job;

    const d = new Date(startsAt);
    const convertedDate = d.toLocaleString("pt-PT", {dateStyle: "short", timeStyle: "short"});

    const handleClick = props.handleClickFunction;

    return (
        <article className="card">

            <section>
                <p><span>Serviço:</span> {service}</p>
                <p><span>Cidade:</span> {city}</p>
                <p><span>Data:</span> {convertedDate}</p>
                <p><span>Duração:</span> {durationMin / 60} h</p>
                <p><span>Preço:</span> {priceCents / 100} €</p>
            </section>

            <div>
                {urgent && <img src="src/assets/urgent-icon.svg" alt="urgent" width={"40px"}/>}
                <button onClick={() => handleClick(props.job.id)}>Aceitar</button>
            </div>
            
        </article>
    )

};

export default Card;