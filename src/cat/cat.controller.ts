import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CatService } from './cat.service';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Get()
  async getCats(): Promise<Cat[]> {
    return this.catService.getCats();
  }

  @Get(':id')
  async getCat(@Param() params: any): Promise<Cat> {
    return this.catService.getCatById(params.id);
  }

  @Post()
  async createCat(@Body() CreateCat: CreateCatDto): any {
    return this.catService.createCat(CreateCat);
  }
}
