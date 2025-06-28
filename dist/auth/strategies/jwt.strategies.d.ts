import { ConfigService } from "@nestjs/config";
import { Strategy } from "passport-jwt";
import { UserModel } from "../models/user.model";
declare const JWTStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JWTStrategy extends JWTStrategy_base {
    private readonly configService;
    constructor(configService: ConfigService);
    validate({ email }: Pick<UserModel, 'email'>): Promise<string>;
}
export {};
