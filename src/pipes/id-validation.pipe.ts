import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { Types } from "mongoose";
import { ID_VALIDATION_ERROR } from "./id-validation.constats";

@Injectable()
export class IdValidationPipe implements PipeTransform{
	transform(value: any, metadata: ArgumentMetadata) {
		if (metadata.type != 'param' ) {
			return value;
		}

		if (!Types.ObjectId.isValid(value)) {
			throw new BadRequestException(ID_VALIDATION_ERROR)
		}

		return value;
	}
}