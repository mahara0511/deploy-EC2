import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCatDto {
    @ApiProperty({
        description: 'The name of the cat',
        example: 'Whiskers',
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The breed of the cat',
        example: 'Siamese',
        required: true,
    })
    breed: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The color of the cat',
        example: 'Brown',
        required: true,
    })
    color: string; // The color of the cat
}
