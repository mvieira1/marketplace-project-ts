
import type { JSX } from "react";
import type { Job } from "../jobs";

type CardProps = {
    job: Job,
    handleClickFunction: (index: string) => void
};

const Card = (props: CardProps): JSX.Element => {

    const {id, service, city, startsAt, durationMin, priceCents, urgent} = props.job;

    const d = new Date(startsAt);
    const convertedDate = d.toLocaleString("pt-PT", {dateStyle: "short", timeStyle: "short"});

    const convertTime = (durationMin: number): string => {
        const hours = Math.floor(durationMin / 60);
        const minutes = durationMin % 60;

        if (hours === 0) {
            return `${minutes} min`;
        };

        if (minutes === 0) {
            return `${hours} h`;
        };

        return `${hours}h${minutes}`;
    };

    const convertedTime = convertTime(durationMin);

    const handleClick = props.handleClickFunction;

    return (
        <article className="card">

            <section>
                <p><span>Serviço:</span> {service}</p>
                <p><span>Cidade:</span> {city}</p>
                <p><span>Data:</span> {convertedDate}</p>
                <p><span>Duração:</span> {convertedTime}</p>
                <p><span>Preço:</span> {priceCents / 100} €</p>
            </section>

            <div>
                {urgent && <img src="src/assets/urgent-icon.svg" alt="urgent" width={"40px"}/>}
                <button onClick={() => handleClick(id)}>Aceitar</button>
            </div>
            
        </article>
    )

};

export default Card;
