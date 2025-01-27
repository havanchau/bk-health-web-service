import { Controller, Get, Query } from '@nestjs/common';
import { PythonService } from './python.service';

@Controller('python')
export class PythonController {
  constructor(private readonly pythonService: PythonService) {}

  @Get('run')
  async runPython(
    @Query('arg1') arg1: string, 
    @Query('arg2') arg2: string
  ): Promise<string> {
    const args = [arg1, arg2];
    return this.pythonService.runPythonScript(args);
  }
}
