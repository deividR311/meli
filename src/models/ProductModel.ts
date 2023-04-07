import { Sort } from "./SortModel";

export type Product = {
    id:                   string;
    title:                string;
    condition:            string;
    thumbnailID:          string;
    catalogProductID:     null | string;
    listingTypeID:        string;
    permalink:            string;
    buyingMode:           string;
    site_id:              string;
    categoryID:           string;
    domainID:             string;
    thumbnail:            string;
    currencyID:           string;
    orderBackend:         number;
    price:                number;
    originalPrice:        null;
    salePrice:            null;
    soldQuantity:         number;
    availableQuantity:    number;
    officialStoreID:      number | null;
    useThumbnailID:       boolean;
    acceptsMercadopago:   boolean;
    tags:                 string[];
    shipping:             Shipping;
    stopTime?:             Date;
    seller:               Seller;
    sellerAddress:        SellerAddress;
    address:              Address;
    attributes:           Attribute[];
    installments:         Installments;
    winnerItemID:         null;
    catalogListing?:      boolean;
    discounts:            null;
    promotions:           any[];
    inventoryID:          null | string;
    variationFilters?:    string[];
    variationsData?:      VariationsData;
    officialStoreName?:   string;
    differentialPricing?: DifferentialPricing;
}

type Shipping = {
    storePickUp:  boolean;
    freeShipping: boolean;
    logisticType: string;
    mode:         string;
    tags:         string[];
    promise:      null;
}

type Seller = {
    id:               number;
    nickname:         string;
    carDealer:        boolean;
    realEstateAgency: boolean;
    empty:            boolean;
    registrationDate?: Date;
    tags:             string[];
    carDealerLogo:    string;
    permalink:        string;
    sellerReputation: SellerReputation;
    eshop?:           Eshop;
}

type SellerAddress = {
    comment:     string;
    addressLine: string;
    zipCode:     string;
    id:          null;
    latitude:    null;
    longitude:   null;
    country:     Sort;
    state:       Sort;
    city:        Sort;
}

type Address = {
    stateID:   string;
    stateName: string;
    cityID:    null | string;
    cityName:  string;
}

type Attribute = {
    id:                 string;
    name:               string;
    valueID:            null | string;
    valueName:          string;
    attributeGroupID:   AttributeGroupID;
    attributeGroupName: AttributeGroupName;
    valueStruct:        Struct | null;
    values:             AttributeValue[];
    source:             number;
    valueType:          ValueType;
}

type Installments = {
    quantity:   number;
    amount:     number;
    rate:       number;
    currencyID: string;
}

type VariationsData = {
    the176351155060: The176351155060;
}

type DifferentialPricing = {
    id: number;
}

type SellerReputation = {
    levelID:           string;
    powerSellerStatus: string;
    transactions:      Transactions;
    metrics?:           Metrics;
}

type Eshop = {
    eshopID:         number;
    seller:          number;
    nickName:        string;
    eshopStatusID:   number;
    siteID:          string;
    eshopExperience: number;
    eshopRubro:      null;
    eshopLocations:  any[];
    eshopLogoURL:    string;
}

enum AttributeGroupID {
    Others = 'OTHERS',
}

enum AttributeGroupName {
    Otros = 'Otros',
}

type Struct = {
    number: number;
    unit:   Unit;
}

enum Unit {
    CM = 'cm',
    G = 'g',
}

enum ValueType {
    List = 'list',
    NumberUnit = 'number_unit',
    String = 'string',
}

type AttributeValue = {
    id:     null | string;
    name:   string;
    struct: Struct | null;
    source: number;
}

type Metrics = {
    sales:               Sales;
    claims:              Cancellations;
    delayedHandlingTime: Cancellations;
    cancellations:       Cancellations;
}

type Cancellations = {
    period: Period;
    rate:   number;
    value:  number;
}

enum Period {
    The60Days = '60 days',
}

type Sales = {
    period:    Period;
    completed: number;
}

type Transactions = {
    canceled:  number;
    completed: number;
    period:    string;
    ratings:   Ratings;
    total:     number;
}

type Ratings = {
    negative: number;
    neutral:  number;
    positive: number;
}

type The176351155060 = {
    thumbnail:   string;
    ratio:       string;
    name:        string;
    picturesQty: number;
}