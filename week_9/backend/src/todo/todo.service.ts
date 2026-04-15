import { Injectable, NotFoundException } from '@nestjs/common';
import { AppService } from '../app.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(private readonly prisma: AppService) {}

  // ✅ CREATE
  async create(createTodoDto: CreateTodoDto) {
    return this.prisma.todo.create({
      data: createTodoDto,
    });
  }

  // ✅ FIND ALL
  async findAll() {
    return this.prisma.todo.findMany({});
  }

  // ✅ FIND ONE
  async findOne(id: number) {
    const todo = await this.prisma.todo.findUnique({
      where: { id },
    });

    if (!todo) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }

    return todo;
  }

  // ✅ UPDATE
  async update(id: number, updateTodoDto: UpdateTodoDto) {
    await this.findOne(id);

    return this.prisma.todo.update({
      where: { id },
      data: updateTodoDto,
    });
  }

  // ✅ DELETE
  async remove(id: number) {
    await this.findOne(id);

    await this.prisma.todo.delete({
      where: { id },
    });

    return { message: 'Todo deleted successfully' };
  }
}