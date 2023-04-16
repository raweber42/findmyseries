import { Injectable } from '@nestjs/common';
import Movie from './dto/movie.interface'

@Injectable()
export class RecommendService {
  async getRecommendation(movie: Movie) {

    const { spawn } = require('child_process');
    let pythonReturn = "";
    const pyProg = spawn('python3', ['src/recommend/test.py']);
    await pyProg.stdout.on('data', async (data: any) => {
      pythonReturn = data.toString();
      console.log(pythonReturn);
    });
    await pyProg.stderr.on('data', async (data: any) => {
      console.error(data.toString());
    });
    console.log("Return should be: |" + pythonReturn + "|");
    return pythonReturn.toString();
    // return `This action returns all recommendations for: ${pythonReturn}`; 
  }
}
