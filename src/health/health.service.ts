import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService { 
    public getStatus(){
        return {status: "UP"};
    }
}
