import { AuthDto } from './dto/auth.dto';
import { UserModel } from './models/user.model';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userModel;
    private readonly jwtService;
    constructor(userModel: Model<UserModel>, jwtService: JwtService);
    createUser(dto: AuthDto): Promise<import("mongoose").Document<unknown, {}, UserModel, {}> & UserModel & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    findUser(email: string): Promise<(import("mongoose").Document<unknown, {}, UserModel, {}> & UserModel & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    validateUser(email: string, password: string): Promise<Pick<UserModel, 'email'>>;
    login(email: string): Promise<{
        access_token: string;
    }>;
}
