import { Injectable } from '@nestjs/common';
import { QueryParams, RequestContext } from '../model';
import { ClientProxy, Transport, ClientProxyFactory } from '@nestjs/microservices'


/*
* @author : Praveen Kumar
  * @comment : host will be the name of container, so other container can communicate
  * NOTE : both containers should be on same bridge if host is same. 
* @date: 2020-04-26 17:17:46
*/
@Injectable()
export class DataService {
    private client: ClientProxy;
    /**
     *
     */
    constructor() {
        /*
        * @author : Praveen Kumar
        * @comment : Host 
        * @date: 2020-05-03 13:01:28
        */
        this.client = ClientProxyFactory.create({
            transport: Transport.TCP,
            options: {
                host: 'dataservice',
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
