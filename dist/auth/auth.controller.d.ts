import { AuthDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(dto: AuthDto): Promise<import("mongoose").Document<unknown, {}, import("./models/user.model").UserModel, {}> & import("./models/user.model").UserModel & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    login({ login, password }: AuthDto): Promise<{
        access_token: string;
    }>;
}
