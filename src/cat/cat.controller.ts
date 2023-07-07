import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@Controller('cats')
@ApiTags('Cat')
export class CatController {
  @Get()
  @ApiOkResponse({ type: [String] })
  getAll() {
    return ['Get all cats'];
  }
}
