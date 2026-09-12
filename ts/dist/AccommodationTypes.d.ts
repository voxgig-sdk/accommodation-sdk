export interface Accommodation {
    AccoDetail?: Record<string, any>;
    AccoTypeId?: string;
    Active?: boolean;
    ContactInfos?: Record<string, any>;
    Features?: any[];
    GpsInfo?: any[];
    Id?: string;
    LastChange?: string;
    LocationInfo?: Record<string, any>;
    Shortname?: string;
}
export interface AccommodationListMatch {
    active?: boolean;
    field?: string;
    langfilter?: string;
    locfilter?: string;
    odhactive?: boolean;
    pagenumber?: number;
    pagesize?: number;
    searchfilter?: string;
    seed?: string;
}
