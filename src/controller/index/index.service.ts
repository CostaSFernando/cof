import { Injectable } from '@nestjs/common';

@Injectable()
export class IndexService {
    validApi(): string {
        return 'Okay';
    }
}
