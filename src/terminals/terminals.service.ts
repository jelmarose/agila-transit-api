import { Injectable } from '@nestjs/common';
import { ITerminal, IRegion } from './interface/terminal.interface';
import { REGIONS, TERMINALS } from './constant/terminals';

@Injectable()
export class TerminalsService {
    private _regions : IRegion[] = REGIONS;
    private _terminals : ITerminal[] = TERMINALS;

    getAllTerminals(): ITerminal[] {
        return this._terminals;
    }

    getAllRegions(): IRegion[] {
        return this._regions;
    }

    getTerminalsByRegion(regionCode: string): ITerminal[] {
        let res: ITerminal[] = this._terminals.filter((terminal) => terminal.region.code == regionCode)
        return res;
    }
}
