import { Controller, Get, Param, Query } from '@nestjs/common';
import { DataService } from '../services';
import { QueryParams } from '../model';

@Controller('data/v1.0')
export class DataController {
  constructor(private readonly dataService: DataService) { }

  @Get(':object')
  async getList(@Param() params, @Query() query: QueryParams): Promise<any> {
    return await this.dataService.getList(params.object, query);
  }

  @Get(':object/:idOrKey')
  async getRecord(@Param() params, @Query() query: QueryParams): Promise<any> {
    return await this.dataService.getRecordByIdOrKey(params.object, params.idOrKey, query);
  }

}
