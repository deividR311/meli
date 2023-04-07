import { Product } from "./ProductModel";
import { Sort } from "./SortModel";

export type ProductsResponse = {
    siteID:                 string;
    countryDefaultTimeZone: string;
    query:                  string;
    paging:                 Paging;
    results:                Product[];
    sort:                   Sort;
    availableSorts:         Sort[];
    filters:                any[];
    availableFilters:       AvailableFilter[];
}

export type AvailableFilter = {
    id:     string;
    name:   string;
    type:   string;
    values: AvailableFilterValue[];
}

export type AvailableFilterValue = {
    id:      string;
    name:    string;
    results: number;
}

export type Paging = {
    total:          number;
    primaryResults: number;
    offset:         number;
    limit:          number;
}
