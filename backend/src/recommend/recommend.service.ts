import { Injectable } from '@nestjs/common';
import Movie from './dto/movie.interface'

@Injectable()
export class RecommendService {
  async getRecommendation(movie: Movie) {
    return 'This action returns all recommendations for: ' + movie; 
  }
}
