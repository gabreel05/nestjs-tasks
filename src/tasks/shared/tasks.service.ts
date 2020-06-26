import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './task';

@Injectable()
export class TasksService {
  constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) {}

  async index(): Promise<Task[]> {
    return await this.taskModel.find().exec();
  }

  async show(id: string): Promise<Task> {
    return await this.taskModel.findById(id).exec();
  }

  async store(task: Task): Promise<Task> {
    const createdTask = new this.taskModel(task);

    return await createdTask.save();
  }

  async update(id: string, task: Task): Promise<Task> {
    await this.taskModel.updateOne({ _id: id }, task).exec();

    return this.show(id);
  }

  async destroy(id: string): Promise<Task> {
    return await this.taskModel.findByIdAndDelete(id).exec();
  }
}
