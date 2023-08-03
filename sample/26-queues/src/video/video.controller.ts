import { InjectQueue } from '@nestjs/bull';
import { Controller, Get } from '@nestjs/common';
import { Queue } from 'bull';

@Controller('video')
export class VideoController {
  constructor(@InjectQueue('video') private readonly videoQueue: Queue) {
  }

  @Get('transcode')
  async transcode() {
    await this.videoQueue.add('transcode', {
      file: 'video.mp4',
    });
  }
}
