import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksController } from './tasks.controller';
import { TasksService } from './shared/tasks.service';
import { TaskSchema } from './schemas/Task.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'Task',
      schema: TaskSchema
    }])
  ],
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule {}
