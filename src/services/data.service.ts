import { Injectable } from '@nestjs/common';
import { QueryParams, RequestContext } from '../model';
import { ClientProxy, Transport, ClientProxyFactory } from '@nestjs/microservices'


/*
* @author : Praveen Kumar
* @comment : Will call the Data microservice from here to fetch the records 
* @date: 2020-04-26 17:17:46
*/
@Injectable()
export class DataService {
    private client: ClientProxy;
    /**
     *
     */
    constructor() {
        this.client = ClientProxyFactory.create({
            transport: Transport.TCP,
            options: {
                host: '127.0.0.1',
                port: 8100,
            },
        });
    }
    async getList(object: string, query: QueryParams): Promise<any> {
        return this.client.send<any, RequestContext>('list',
            {
                object: object,
                query: query
            });
    }

    async getRecordByIdOrKey(object: string, idOrKey: string, query: QueryParams): Promise<any> {
        return this.client.send<any, RequestContext>('read',
            {
                object: object,
                idOrKey: idOrKey,
                query: query
            });
    }
}
