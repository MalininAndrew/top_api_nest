import { ConfigService } from '@nestjs/config'
import { MongooseModuleFactoryOptions } from '@nestjs/mongoose';

export const getMongoConfig = async (configService: ConfigService): Promise<MongooseModuleFactoryOptions> => {
	return {
		uri: getMongoString(configService)
	}
};

const getMongoString = (configService: ConfigService) => {
	const url = 'mongodb://' +
		configService.get('MONGO_LOGIN') + ':' +
	configService.get('MONGO_PASSWORD') + '@' +
	configService.get('MONGO_HOST') + ':' +
	configService.get('MONGO_PORT') +
	'/top-api?authSource=' +
	configService.get('MONGO_AUTHDATABASE')

	console.log('MONGO URI:', url);

	return url
}
	