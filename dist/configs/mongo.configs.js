"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMongoConfig = void 0;
const getMongoConfig = async (configService) => {
    return {
        uri: getMongoString(configService)
    };
};
exports.getMongoConfig = getMongoConfig;
const getMongoString = (configService) => {
    const url = 'mongodb://' +
        configService.get('MONGO_LOGIN') + ':' +
        configService.get('MONGO_PASSWORD') + '@' +
        configService.get('MONGO_HOST') + ':' +
        configService.get('MONGO_PORT') +
        '/top-api?authSource=' +
        configService.get('MONGO_AUTHDATABASE');
    console.log('MONGO URI:', url);
    return url;
};
//# sourceMappingURL=mongo.configs.js.map