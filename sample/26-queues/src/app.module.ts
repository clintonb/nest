import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AudioModule } from './audio/audio.module';
import { VideoModule } from "./video/video.module";

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    AudioModule,
    VideoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
