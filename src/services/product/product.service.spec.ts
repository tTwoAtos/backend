import { ProductService } from "./product.service";

describe("ProductService", () => {
    let service: ProductService;

    beforeEach(async () => {
        service = new ProductService();
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });

    it("Should get a product", async () => {
        expect(await service.getProduct("737628064502")).toEqual({
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
