import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './todo/todo.controller';
import { TodoService } from './todo/todo.service';
import { BlogController } from './blog/blog.controller';
import { BlogService } from './blog/blog.service';

@Module({
  imports: [],
  controllers: [AppController, TodoController, BlogController],
  providers: [AppService, TodoService, BlogService],
})
export class AppModule {}
