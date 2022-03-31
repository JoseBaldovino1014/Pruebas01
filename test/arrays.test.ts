const array = ["value1", "value2", "value3"];
test("Conts array contains value2", () => {
    //probar si el array con tiene value2
    expect(array).toContain("value2");
    });
    test("Conts array contains value3", () => {
        //probar si el array con tiene value2
        expect(array).toContain("value3");
        });
        test("Conts array not  contains UNAC", () => {
            //probar si el array no contiene UNAC
            expect(array).not.toContain("UNAC");
            });
            test("Conts array contains evalue1", () => {
                //probar si el array con tiene value1
                expect(array).toContain("value1");
                });
