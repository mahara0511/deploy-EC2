import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

dotenv.config();
console.log('DATABASE_HOST', process.env.DATABASE_HOST);
console.log('DATABASE_PORT', process.env.DATABASE_PORT);
console.log('DATABASE_USER', process.env.DATABASE_USER);
console.log('DATABASE_PASSWORD', process.env.DATABASE_PASSWORD);
console.log('DATABASE_NAME', process.env.DATABASE_NAME);
@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.DATABASE_HOST,
            port: parseInt(process.env.DATABASE_PORT! || '5432', 10),
            username: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME,
            autoLoadEntities: true,
            synchronize: true, // set to false in production
        }),

        CatModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
