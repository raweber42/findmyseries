import { Module } from '@nestjs/common';
import { RecommendController } from './recommend/recommend.controller';
import { RecommendService } from './recommend/recommend.service';

@Module({
  imports: [],
  controllers: [RecommendController],
  providers: [RecommendService],
})
export class AppModule {}
