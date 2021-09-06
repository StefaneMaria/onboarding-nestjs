import { Controller, Get } from '@nestjs/common';

const status = {status : 'UP'}

@Controller('health')
export class HealthController {

    @Get()
    getStatus(){
        return status;
    }
}
