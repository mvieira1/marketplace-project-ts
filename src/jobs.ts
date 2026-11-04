
export type Job = {
    id: string,
    service: string,
    city: string,
    startsAt: string,
    durationMin: number,
    priceCents: number,
    urgent: boolean
};

const jobs: Job[] = [
    {
        id: "1",
        service: "Canalização",
        city: "Porto",
        startsAt: "2026-11-12T10:00:00Z",
        durationMin: 60,
        priceCents: 4500,
        urgent: false
    },
    {
        id: "2",
        service: "Eletricidade",
        city: "Lisboa",
        startsAt: "2026-11-12T14:30:00Z",
        durationMin: 90,
        priceCents: 7000,
        urgent: true
    },
    {
        id: "3",
        service: "Pintura",
        city: "Braga",
        startsAt: "2026-11-13T09:00:00Z",
        durationMin: 240,
        priceCents: 18000,
        urgent: false
    },
    {
        id: "4",
        service: "Canalização",
        city: "Lisboa",
        startsAt: "2026-11-14T08:30:00Z",
        durationMin: 120,
        priceCents: 8500,
        urgent: true
    },
    {
        id: "5",
        service: "Eletricidade",
        city: "Setúbal",
        startsAt: "2026-11-14T11:00:00Z",
        durationMin: 105,
        priceCents: 5500,
        urgent: false
    },
    {
        id: "6",
        service: "Pintura",
        city: "Coimbra",
        startsAt: "2026-11-15T09:00:00Z",
        durationMin: 180,
        priceCents: 14000,
        urgent: false
    },
    {
        id: "7",
        service: "Canalização",
        city: "Braga",
        startsAt: "2026-11-15T14:00:00Z",
        durationMin: 20,
        priceCents: 6500,
        urgent: true
    },
    {
        id: "8",
        service: "Eletricidade",
        city: "Porto",
        startsAt: "2026-11-16T10:30:00Z",
        durationMin: 120,
        priceCents: 9000,
        urgent: false
    },
    {
        id: "9",
        service: "Pintura",
        city: "Porto",
        startsAt: "2026-11-16T13:00:00Z",
        durationMin: 240,
        priceCents: 20000,
        urgent: false
    },
    {
        id: "10",
        service: "Canalização",
        city: "Aveiro",
        startsAt: "2026-11-17T08:00:00Z",
        durationMin: 60,
        priceCents: 5000,
        urgent: true
    },
    {
        id: "11",
        service: "Eletricidade",
        city: "Coimbra",
        startsAt: "2026-11-17T15:30:00Z",
        durationMin: 90,
        priceCents: 7500,
        urgent: false
    },
    {
        id: "12",
        service: "Pintura",
        city: "Lisboa",
        startsAt: "2026-11-18T09:30:00Z",
        durationMin: 300,
        priceCents: 25000,
        urgent: false
    }
];

export default jobs;
