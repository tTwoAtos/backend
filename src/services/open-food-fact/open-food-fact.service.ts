import { HttpService } from "@nestjs/axios";
import { HttpException, Injectable } from "@nestjs/common";
import { AxiosError } from "axios";
import { catchError, firstValueFrom } from "rxjs";
import { Product } from "src/interfaces/stock/product.interface";

@Injectable()
export class OpenFoodFactService {
    constructor(private readonly httpService: HttpService) {}

    async getProduct(code: string): Promise<any> {
        const url = process.env.OPEN_FOOD_FACT_API_URL + `/${code}`;

        const { data } = await firstValueFrom(
            this.httpService.get(url).pipe(
                catchError((error: AxiosError) => {
                    console.log(error);

                    throw new HttpException(
                        error.response.statusText,
                        error.response.status,
                    );
                }),
            ),
        );

        return this.parseProduct(data);
    }

    parseProduct(product: any): Product {
        return {
            id: product.product._id,
            name: product.product.generic_name,
            expirationDate: product.product.expiration_date,
            group: product.product.food_groups,
            imageUrl: product.product.image_front_small_url,
            thumbUrl: product.product.image_front_thumb_url,
        };
    }
}
