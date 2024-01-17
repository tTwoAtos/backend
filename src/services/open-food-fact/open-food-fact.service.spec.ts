import { HttpService } from "@nestjs/axios";
import { OpenFoodFactService } from "./open-food-fact.service";

describe("OpenFoodFactService", () => {
    let service: OpenFoodFactService;

    beforeEach(async () => {
        service = new OpenFoodFactService(new HttpService());
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });

    it("Should get a product by code", async () => {
        const product = await service.getProduct("737628064502");

        expect(product).toEqual({
            id: "0737628064502",
            name: "Rice Noodles",
            expirationDate: "",
            group: "en:cereals",
            imageUrl:
                "https://images.openfoodfacts.org/images/products/073/762/806/4502/front_en.6.200.jpg",
            thumbUrl:
                "https://images.openfoodfacts.org/images/products/073/762/806/4502/front_en.6.100.jpg",
        });
    });
});
