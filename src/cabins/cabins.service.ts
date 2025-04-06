import { Injectable } from '@nestjs/common';
import { CABINS } from './constant/cabins';
import { ICabin } from './interface/cabin.interface';

@Injectable()
export class CabinsService {
    private _cabins = CABINS;

    getAllCabins(): ICabin[] {
        return this._cabins;
    }

    getCabinById(id: number): ICabin|undefined {
        return this._cabins.find((cabin) => cabin.id == id)
    }

}
