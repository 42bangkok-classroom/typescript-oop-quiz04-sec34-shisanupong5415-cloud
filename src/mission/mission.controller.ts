import { Controller, Delete, Get, Param } from '@nestjs/common';
import { MissionService } from './mission.service';

@Controller('missions')
export class MissionController {
  constructor(private readonly missionService: MissionService) {}

  @Get('summary')
  getSummary() {
    return this.missionService.getSummary();
  }
  
  @Delete(':id')
  remove(@Param('id') id: string) {
    this.missionService.remove(Number(id));
    return { message: `Mission with id ${id} has been removed.` };
}
}