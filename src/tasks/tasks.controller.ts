import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { TasksService } from './shared/tasks.service';
import { Task } from './shared/task';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  async index(): Promise<Task[]> {
    return this.tasksService.index();
  }

  @Get(':id')
  async show(@Param('id') id: string): Promise<Task> {
    return this.tasksService.show(id);
  }

  @Post()
  async store(@Body() task: Task): Promise<Task> {
    return this.tasksService.store(task);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() task: Task): Promise<Task> {
    return this.tasksService.update(id, task);
  }

  @Delete(':id')
  async destroy(@Param('id') id: string): Promise<void> {
    this.tasksService.destroy(id);
  }
}
