import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ConstraintService {
  async createConstraintFile(tableName: string, constraintCondition: string): Promise<string> {
    try {
      const fileName = `${tableName}_constraint.txt`;
      const filePath = path.join(__dirname, '../../files', fileName);

      const content = `${constraintCondition}\n`;

      fs.mkdirSync(path.dirname(filePath), { recursive: true });

      fs.writeFileSync(filePath, content);

      return `Constraint file created successfully: ${fileName}`;
    } catch (error) {
      throw new Error('Failed to create constraint file');
    }
  }
}
