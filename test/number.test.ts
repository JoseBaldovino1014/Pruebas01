import { sum } from "../src/sum";
test("Test sum 5+5 (10) be greater than 5", () => {
    //probar que la suma de  5+5 sea mayor 5
    expect(sum(5,5)).toBeGreaterThan(5);
    });
    test("Test sum 5+5 (10) be greather or equal than 10", () => {
        //probar
        expect(sum(5,5)).toBeGreaterThanOrEqual(10);
        });
        test("Test sum 2+1 (3) be less or equal than 4", () => {
            //probar
            expect(sum(2,1)).toBeLessThan(4);
            });
            