import { Module } from '@nestjs/common'
import { TriggerService } from './trigger.service'
import { TriggerController } from './trigger.controller'
import { PrismaService } from 'src/prisma.service'
import { JwtService } from '@nestjs/jwt'
import { ApplicationService } from 'src/application/application.service'
import { StorageModule } from 'src/storage/storage.module'
import { HttpModule } from '@nestjs/axios'
import { CronJobService } from './cron-job.service'
import { TriggerTaskService } from './trigger-task.service'
import { RegionModule } from 'src/region/region.module'
import { FunctionService } from 'src/function/function.service'
import { DatabaseService } from 'src/database/database.service'
import { MongoService } from 'src/database/mongo.service'

@Module({
  imports: [StorageModule, HttpModule, RegionModule],
  controllers: [TriggerController],
  providers: [
    TriggerService,
    PrismaService,
    JwtService,
    ApplicationService,
    CronJobService,
    TriggerTaskService,
    FunctionService,
    DatabaseService,
    MongoService,
  ],
})
export class TriggerModule {}
