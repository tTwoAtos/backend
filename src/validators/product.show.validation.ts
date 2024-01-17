import { IsNotEmpty } from "class-validator";

export class ProducShowValidation {
    @IsNotEmpty()
    code: string;
}
