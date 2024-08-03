import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { CoffeeService } from 'src/coffees/coffee.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeeService: CoffeeService) {}

  @Get() // ('flavors')
  findAll() {
    // return 'This action returns all coffees';
    return this.coffeeService.findAll();
  }

  @Get('express')
  findAllExpress(@Res() response) {
    response.status(200).send('This action returns all coffees');
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // return `This action returns #${id} coffee`;
    return this.coffeeService.findOne(id);
  }

  /*   @Post()
  create(@Body('name') body) {
    return body;
  } */

  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    // return body;
    // return `This action creates a coffee`;
    console.log(createCoffeeDto instanceof CreateCoffeeDto); // -> false
    return this.coffeeService.create(createCoffeeDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    // return `This action updates #${id} coffee`;
    return this.coffeeService.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // return `This action removes #${id} coffee`;
    return this.coffeeService.remove(id);
  }
}
