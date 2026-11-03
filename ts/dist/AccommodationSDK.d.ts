import { AccommodationEntity } from './entity/AccommodationEntity';
export type * from './AccommodationTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { AccommodationEntityBase } from './AccommodationEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
type DirectResult = {
    ok: false;
    err: any;
    status?: undefined;
    headers?: undefined;
    data?: undefined;
} | {
    ok: boolean;
    status: number;
    headers: any;
    data: any;
    err?: any;
};
declare class AccommodationSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<DirectResult>;
    _rawRequest(fetchargs?: any): Promise<DirectResult>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Accommodation(entopts?: Record<string, any>): AccommodationEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): AccommodationSDK;
    tester(testopts?: any, sdkopts?: any): AccommodationSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof AccommodationSDK;
export { stdutil, config, BaseFeature, AccommodationEntityBase, AccommodationSDK, SDK, };
export type { DirectResult };
