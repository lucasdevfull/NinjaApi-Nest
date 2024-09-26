import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({ example: 'title' })
  @IsString()
  title: string;

  @ApiProperty({ example: 'content' })
  @IsString()
  content: string;
}

export class TaskDto extends CreateTaskDto {
  @ApiProperty({ example: 'false' })
  @IsBoolean()
  status?: boolean;
}
