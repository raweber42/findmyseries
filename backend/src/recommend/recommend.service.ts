import { Injectable, Logger } from '@nestjs/common';
import Movie from './dto/movie.interface'

@Injectable()
export class RecommendService {
  getRecommendation(movie: string) {

    const { spawn } = require('child_process');
    const pyPromise = new Promise((resolve, reject) => {
      const pyProg = spawn('python3', ['/home/dima/dev/findmeaseries/recommender_engine/src/recommend.py', movie]);
      pyProg.stdout.on('data', (data: any) => {
        console.log(data.toString());
        resolve(data.toString());
      })
      pyProg.stderr.on('data', (data: any) => {
        // Logger.error(data.toString());
        reject(data.toString());
      });
    });

    const consumer = pyPromise.then((result: string) => {
        Logger.log("Search successful");
        result = result.replace(/'/g, '"') //replacing all ' with "
        result = JSON.parse(result)
        return result;
      })
      .catch((error: Error) => {
        Logger.error("Search failed");
        return "Sorry, I don't know this movie (yet)";
      });
    return consumer;
  }
}
