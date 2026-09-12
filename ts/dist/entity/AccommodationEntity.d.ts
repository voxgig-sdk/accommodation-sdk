import { AccommodationEntityBase } from '../AccommodationEntityBase';
import type { AccommodationSDK } from '../AccommodationSDK';
import type { Control } from '../types';
import type { Accommodation, AccommodationListMatch } from '../AccommodationTypes';
declare class AccommodationEntity extends AccommodationEntityBase<Accommodation> {
    constructor(client: AccommodationSDK, entopts: any);
    make(this: AccommodationEntity): AccommodationEntity;
    list(this: any, reqmatch?: AccommodationListMatch, ctrl?: Control): Promise<AccommodationEntity[]>;
}
export { AccommodationEntity };
