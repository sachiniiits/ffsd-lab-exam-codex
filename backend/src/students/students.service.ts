import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentsService {
  private students: any[] = [];

  findAll() {
    return this.students;
  }

  findOne(id: number) {
    const student = this.students.find((item) => item.id === id);
    if (!student) {
      throw new NotFoundException('Student not found');
    }
    return student;
  }

  create(dto: any) {
    const student = {
      id: Date.now(),
      ...dto,
    };
    this.students.push(student);
    return student;
  }

  update(id: number, dto: any) {
    const index = this.students.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException('Student not found');
    }

    this.students[index] = {
      ...this.students[index],
      ...dto,
      id,
    };

    return this.students[index];
  }

  remove(id: number) {
    const index = this.students.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException('Student not found');
    }

    this.students.splice(index, 1);
    return { success: true };
  }
}
