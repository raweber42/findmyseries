import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import Movie from './dto/movie.interface'
import axios from 'axios';

@Injectable()
export class RecommendService {
  async getRecommendation(movie: string) : Promise<any> {
    
    try {
      const response = await axios.get('http://recommendation_api:5000/recommend?movie=' + movie);
      console.log("Response from flask: " + response)
      return (response.data);
    } catch (error: any) {
      Logger.error("Search failed: ", error);
      throw new HttpException('Movie not known (yet)', HttpStatus.BAD_REQUEST);
    }
    // const responsePromise = new Promise((resolve, reject) => {
      
    //   const response = axios.get('http://localhost:5000/recommend?movie=' + movie);
    //   console.log("RESPONSE IS: " + response);
    //   resolve(response);
    // });

    // const consumer = responsePromise.then((result: string) => {
    //   Logger.log("Search successful");
    //   result = result.replace(/'/g, '"') //replacing all ' with "
    //   result = JSON.parse(result)
    //   return result;
    // })
    // .catch((error: Error) => {
    //   Logger.error("Search failed: ", error);
    //   return "Sorry, I don't know this movie (yet)";
    // });
    // return consumer;
    // const { spawn } = require('child_process');
    // const pyPromise = new Promise((resolve, reject) => {
    //   const pyProg = spawn('python3', ['/home/dima/dev/findmeaseries/recommender_engine/src/recommend.py', movie]);
    //   pyProg.stdout.on('data', (data: any) => {
    //     console.log(data.toString());
    //     resolve(data.toString());
    //   })
    //   pyProg.stderr.on('data', (data: any) => {
    //     // Logger.error(data.toString());
    //     reject(data.toString());
    //   });
    // });

    // const consumer = pyPromise.then((result: string) => {
    //     Logger.log("Search successful");
    //     result = result.replace(/'/g, '"') //replacing all ' with "
    //     result = JSON.parse(result)
    //     return result;
    //   })
    //   .catch((error: Error) => {
    //     Logger.error("Search failed");
    //     return "Sorry, I don't know this movie (yet)";
    //   });
    // return consumer;
  }
}
