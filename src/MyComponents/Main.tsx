
import { useState, useEffect } from "react";
import jobs from "../jobs";
import Card from "./Card";

import type { Job } from "../jobs";
import type { JSX, ChangeEvent } from "react";

const Main = (): JSX.Element => {

    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    
        return () => clearTimeout(timer);
    }, []);

    const options: {label: string, value: string}[] = [
        {label: "-- Escolhe uma cidade --" , value: ""},
        {label: "Braga", value: "Braga"},
        {label: "Guimarães", value: "Guimarães"},
        {label: "Porto", value: "Porto"},
        {label: "Aveiro", value: "Aveiro"},
        {label: "Viseu", value: "Viseu"},
        {label: "Coimbra", value: "Coimbra"},
        {label: "Sintra", value: "Sintra"},
        {label: "Lisboa", value: "Lisboa"},
        {label: "Cascais", value: "Cascais"},
        {label: "Setúbal", value: "Setúbal"}
    ];

    const [jobRequests, setJobRequests] = useState<Job[]>(jobs);
    const [selectedCity, setSelectedCity] = useState<string>("");

    const filteredRequests: Job[] = selectedCity === "" ?
        jobRequests :
        jobRequests.filter((job) => job.city === selectedCity);

    const handleChange = (e: ChangeEvent<HTMLSelectElement>): void => {
        const selectedCity = e.target.value;
        
        //Assim, mesmo que eu clique em "Aceitar", se depois voltar a filtrar por cidade, vou obter na mesma os
        //resultados iniciais... pq estou sempre a usar o jobs, que contém toda a informação...
        //const filteredRequests = selectedCity === "" ? jobs : jobs.filter((job) => job.city === selectedCity);
        //setJobRequests(filteredRequests);

        //Assim, vou atualizar a selectedCity -> a mudança no state faz com que o component seja re-rendered
        //(a função corre novamente) -> os filteredRequests são atualizados
        setSelectedCity(selectedCity);
    };

    const handleClick = (index: string): void => {
        
        setJobRequests((prevJobRequests) => {
            return (
                prevJobRequests.filter(job => job.id !== index)
            )
        });

    };

    return (
        <main>
            <h1>Pedidos Disponíveis</h1>
            
            <div className="topContainer">
                <label htmlFor="filterByCity-id">Filtra por cidade:</label>
                <select name="filterByCity" id="filterByCity-id" onChange={handleChange}>

                    {
                        options.map(object => {
                            return (
                                <option value={object.value} key={object.value}>{object.label}</option>
                            )
                        })
                    }

                </select>
            </div>
            
            {
                isLoading ? (
                    <div className="preloader">
                        <div className="circle"></div>
                    </div>
                ) : (
                    <div className="cardsContainer">
                        {
                            filteredRequests.length > 0 ?
                                filteredRequests.map(job =>
                                    <Card key={job.id} job={job} handleClickFunction={handleClick}/>
                                )
                            :
                                <span>Sem pedidos!</span>
                        }
                    </div>
                )
            }
            
        </main>
    )
};

export default Main;
