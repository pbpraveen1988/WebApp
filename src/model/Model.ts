export type QueryParams = {
    select?: string;
    where?: string;
    order_by?: string;
    page_size?: number;
    page_number?: number;
}

export type RequestContext = {
    object: string,
    query?: QueryParams;
    idOrKey?: string;
}