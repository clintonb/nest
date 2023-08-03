import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { VideoController } from './video.controller';
import { VideoProcessor } from './video.processor';

@Module({
  imports: [
    BullModule.registerQueueAsync({
      useFactory: async () =>
        ({
          name: 'video',
        })
    }),
  ],
  controllers: [VideoController],
  providers: [VideoProcessor],
})
export class VideoModule {
}
