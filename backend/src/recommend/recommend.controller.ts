import { Controller, Get, Post, Query, Req } from '@nestjs/common';
import { Request } from 'express';
import { RecommendService } from './recommend.service';
import { Movie } from './dto/movie.interface';

@Controller('recommend')
export class RecommendController {
  
  constructor(private recommendService: RecommendService) {}
  
  @Get()
  async getRecommendation(@Query('movie') movie: Movie): Promise<string> {
    return this.recommendService.getRecommendation(movie);
  }
}
