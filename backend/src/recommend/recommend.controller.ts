import { Controller, Get, Post, Query, Req } from '@nestjs/common';
import { RecommendService } from './recommend.service';
import { Movie } from './dto/movie.interface';

@Controller('recommend')
export class RecommendController {
  
  constructor(private recommendService: RecommendService) {}

  // @Get()
  // async getRecommendationTest() {
  //   return [{"id":"9341","poster_path":"/jaG2vih2z4V5fP9pnYSIL65lr8d.jpg","title":"the core"},{"id":"274855","poster_path":"/nrsx0jEaBgXq4PWo7SooSnYJTv.jpg","title":"geostorm"}]  
  // }

  @Get()
  async getRecommendation(@Query('movie') movie: string) {
    return await this.recommendService.getRecommendation(movie);   
  }
}
