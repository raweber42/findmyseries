import { Controller, Get, Post, Query, Req } from '@nestjs/common';
import { RecommendService } from './recommend.service';
import { Movie } from './dto/movie.interface';

@Controller('recommend')
export class RecommendController {
  
  constructor(private recommendService: RecommendService) {}

  @Get()
  async getRecommendation(@Query('movie') movie: string) {
    return await this.recommendService.getRecommendation(movie);   
  }
}
