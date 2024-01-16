import { Test, TestingModule } from "@nestjs/testing";
import { OpenFoodFactService } from "./open-food-fact.service";

describe("OpenFoodFactService", () => {
    let service: OpenFoodFactService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [OpenFoodFactService]
        }).compile();

        service = module.get<OpenFoodFactService>(OpenFoodFactService);
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });
});
