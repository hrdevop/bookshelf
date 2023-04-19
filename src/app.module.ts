import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookManagementModule } from './book-management/book-management.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserManagementModule } from './user-management/user-management.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      // url:process.env.DATABASE_HOST,
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT, 
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DATABASE,
      autoLoadEntities: true,
      synchronize:true,
      logging:true
    }),
    BookManagementModule,
    UserManagementModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
