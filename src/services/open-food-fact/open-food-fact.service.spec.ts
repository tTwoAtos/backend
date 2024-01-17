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
});
