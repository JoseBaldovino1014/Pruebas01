const n = null;
const number = 0;
const notTrue = false;
const notFalse = true;

test("Test n to be null", () => {
    //probar si la variable es null
    expect(n).toBeNull();
    });

    test("Test n to be defined", () => {
        //probar si tiene un valor
        expect(n).toBeDefined();
        });

        test("Test notTrue to be false", () => {
            //probar si es falso
            expect(notTrue).toBeFalsy();
            });
            test("Test notfalse to be true", () => {
                //probar si es verdadero
                expect(notFalse).toBeTruthy();
                });
