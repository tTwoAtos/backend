import { ProductService } from "src/services/product/product.service";
import { ProductController } from "./product.controller";

describe("ProductController", () => {
    let controller: ProductController;

    beforeEach(async () => {
        controller = new ProductController(new ProductService());
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
    });
});
