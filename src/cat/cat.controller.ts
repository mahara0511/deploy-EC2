import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Header,
    HttpCode,
    Res,
    Redirect,
} from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { ApiOperation } from '@nestjs/swagger';
import { Response } from 'express';

@Controller('cat')
export class CatController {
    constructor(private readonly catService: CatService) {}
    @Post()
    @ApiOperation({ summary: 'Create a new cat' })
    create(@Body() createCatDto: CreateCatDto) {
        return this.catService.create(createCatDto);
    }

    @Get()
    @ApiOperation({ summary: 'Get all cats' })
    findAll(@Res({ passthrough: true }) res: Response) {
        res.redirect('https://www.google.com');
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a cat by ID' })
    findOne(@Param('id') id: string) {
        return this.catService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
        return this.catService.update(+id, updateCatDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.catService.remove(+id);
    }
}
