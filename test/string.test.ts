const anything = "UNAC";
const anything1 = "UnAC";
test("UNAC contains UN", () => {
    //probar que unac contenga UN
    expect(anything).toMatch(/UN/);
    });
    test("UNAC does not contains a P", () => {
        //probar 
        expect(anything).not.toMatch(/P/);
        });

        test("UnAC contains n", () => {
            //probar 
            expect(anything1).toMatch(/n/);
            });
