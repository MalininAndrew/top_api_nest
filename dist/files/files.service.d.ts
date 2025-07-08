import { FileElementResponse } from './dto/file-element.response';
import { MFile } from './mfile.class';
export declare class FilesService {
    saveFiles(files: MFile[]): Promise<FileElementResponse[]>;
    convertToWebp(file: Buffer): Promise<Buffer>;
}
