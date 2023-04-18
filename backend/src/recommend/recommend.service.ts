import { Injectable } from '@nestjs/common';
import Movie from './dto/movie.interface'

@Injectable()
export class RecommendService {
  getRecommendation(movie: Movie) {

    const { spawn } = require('child_process');
    const pyPromise = new Promise((resolve, reject) => {
      const pyProg = spawn('python3', ['/home/dima/dev/findmeaseries/recommender_engine/src/recommend.py', '2012']); // HARD CODED
      pyProg.stdout.on('data', (data:any) => {
        resolve(data.toString());
      })
      pyProg.stderr.on('data', (data: any) => {
        console.error(data.toString());
        reject("Error in python script occured!"); // make this user friendly!
      });
    });

    const consumer = pyPromise.then((result: any) => {
        console.log(result);
        return result;
      },
      (error: any) => {
        console.log(error);
        return error.toString();
      });
    return consumer;
  }
}
