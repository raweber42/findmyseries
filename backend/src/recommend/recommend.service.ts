import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import Movie from './dto/movie.interface'
import axios from 'axios';

@Injectable()
export class RecommendService {
  async getRecommendation(movie: string) : Promise<any> {
    
    try {
      const response = await axios.get('http://findmyseries.xyz/recommendation-api/recommend?movie=' + movie);
      // const response = await axios.get('http://192.168.59.100/recommendation-api:5000/recommend?movie=' + movie);
      // Logger.log("Response from flask: " + response);
      return (response.data);
    } catch (error: any) {
      // Logger.error("Search failed: ", error);
      throw new HttpException('Movie not known (yet)', HttpStatus.BAD_REQUEST);
    }
  }
}
