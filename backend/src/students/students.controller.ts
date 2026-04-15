import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  getAllStudents() {
    return this.studentsService.findAll();
  }

  @Get(':id')
  getStudent(@Param('id') id: string) {
    return this.studentsService.findOne(Number(id));
  }

  @Post()
  createStudent(@Body() body: any) {
    return this.studentsService.create(body);
  }

  @Put(':id')
  updateStudent(@Param('id') id: string, @Body() body: any) {
    return this.studentsService.update(Number(id), body);
  }

  @Delete(':id')
  deleteStudent(@Param('id') id: string) {
    return this.studentsService.remove(Number(id));
  }
}
