export interface IRegion{
    id: number;
    name: string;
    code: string;
}

export interface ITerminal{
    id: number;
    name: string;
    region: IRegion;
}