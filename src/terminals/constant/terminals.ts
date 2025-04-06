import { ITerminal, IRegion } from "../interface/terminal.interface";

export const REGIONS: IRegion[] = [
    {
        id: 1,
        name: "Luzon",
        code: "LZN"
    },
    {
        id: 2,
        name: "Visayas",
        code: "VSY"
    },
    {
        id: 3,
        name: "Mindanao",
        code: "MDN"
    },
]

export const TERMINALS: ITerminal[] = [
    { id: 1, name: "Laoag", region: REGIONS[0] },
    { id: 2, name: "Tugegarao", region: REGIONS[0] },
    { id: 3, name: "Santiago", region: REGIONS[0] },
    { id: 4, name: "Baguio", region: REGIONS[0] },
    { id: 5, name: "Dagupan", region: REGIONS[0] },
    { id: 6, name: "Manila", region: REGIONS[0] },
    { id: 7, name: "Batangas", region: REGIONS[0] },
    { id: 8, name: "Lucena", region: REGIONS[0] },
    { id: 9, name: "Naga", region: REGIONS[0] },
    { id: 10, name: "Legazpi", region: REGIONS[0] },
    { id: 11, name: "Kalibo", region: REGIONS[1] },
    { id: 12, name: "Roxas", region: REGIONS[1] },
    { id: 13, name: "Iloilo", region: REGIONS[1] },
    { id: 14, name: "Bacolod", region: REGIONS[1] },
    { id: 15, name: "Sipalay", region: REGIONS[1] },
    { id: 16, name: "Dumaguete", region: REGIONS[1] },
    { id: 17, name: "Cebu", region: REGIONS[1] },
    { id: 18, name: "Bohol", region: REGIONS[1] },
    { id: 19, name: "Tacloban", region: REGIONS[1] },
    { id: 20, name: "Calbayog", region: REGIONS[1] },
    { id: 21, name: "Zamboanga", region: REGIONS[2] },
    { id: 22, name: "Pagadian", region: REGIONS[2] },
    { id: 23, name: "Dipolog", region: REGIONS[2] },
    { id: 24, name: "Iligan", region: REGIONS[2] },
    { id: 25, name: "Cagayan de Oro", region: REGIONS[2] },
    { id: 26, name: "Cotabato", region: REGIONS[2] },
    { id: 27, name: "Valencia", region: REGIONS[2] },
    { id: 28, name: "General Santos", region: REGIONS[2] },
    { id: 29, name: "Davao", region: REGIONS[2] },
    { id: 30, name: "Butuan", region: REGIONS[2] },
]