import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
export declare class HhService {
    private readonly configService;
    private readonly httpService;
    constructor(configService: ConfigService, httpService: HttpService);
    getData(text: string): Promise<void>;
}
