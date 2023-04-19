import { Injectable, Logger } from '@nestjs/common';
import Movie from './dto/movie.interface'

@Injectable()
export class RecommendService {
  getRecommendation(movie: string) {

    const { spawn } = require('child_process');
    const pyPromise = new Promise((resolve, reject) => {
      const pyProg = spawn('python3', ['/home/dima/dev/findmeaseries/recommender_engine/src/recommend.py', movie]);
      pyProg.stdout.on('data', (data:any) => {
        resolve(data.toString());
      })
      pyProg.stderr.on('data', (data: any) => {
        // Logger.error(data.toString());
        reject(data.toString());
      });
    });

    const consumer = pyPromise.then((result: any) => {
        Logger.log("Search successful");
        return result;
      })
      .catch((error: Error) => {
        Logger.error("Search failed");
        return "Sorry, I don't know this movie (yet)";
      });
    return consumer;
  }
}
