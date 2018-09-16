const lib = require("../lib");

describe("absolute", () => {
    it("absolute - should return a positive number if input is positive", () => {
        const result = lib.absolute(1);
        expect(result).toBe(1);
    });
    
    it("absolute - should return a positive number if input is negative", () => {
        const result = lib.absolute(-1);
        expect(result).toBe(1);
    });
    
    it("absolute - should return 0 if input is 0", () => {
        const result = lib.absolute(0);
        expect(result).toBe(0);
    });
});

describe("greet", () => {
    it("should return the greeting message", () => {
        const result = lib.greet("Furkan");
        expect(result).toMatch(/Furkan/);
        expect(result).toContain("Furkan");

        // do not make too specific test in some cases
        });
});

describe("getCurrencies", () => {
    it("should return supported currencies", () => {
        const result = lib.getCurrencies();

        // Too general
        expect(result).toBeDefined();
        expect(result).not.toBeNull();

        // Too specific
        expect(result[0]).toBe("USD");
        expect(result[1]).toBe("AUD");
        expect(result[2]).toBe("EUR");
        expect(result.length).toBe(3);

        // Proper way
        expect(result).toContain("USD");
        expect(result).toContain("AUD");
        expect(result).toContain("EUR");

        // Ideal way
        expect(result).toEqual(expect.arrayContaining(["EUR", "USD", "AUD"]));

        // If need more look expect documentation
    });
});

describe("getProduct", () => {
    it("should return the product with the given id", () => {
        const result = lib.getProduct(1);
        // expect(result).toBe({ id: 1, price: 10}); // Compare the references toBe()
        expect(result).toEqual({ id: 1, price: 10});
        expect(result).toMatchObject({id:1, price:10}); // Look for contain

        expect(result).toHaveProperty("id", 1);

    });
});

describe("registerUser", () => {
    it("should throw if username is falsy", () => {
        // Null
        // undefined
        // NaN
        // ""
        // 0
        // false
        const args = [null, undefined, NaN, "", 0, false];
        args.forEach(a => {
            expect(() => { lib.registerUser(a)}).toThrow();
        })
      //  expect(() => { lib.registerUser(null)}).toThrow();
    });

    it("shoudl return a user object if valid username is passed", () => {
        const result = lib.registerUser("Furkan");
        expect(result).toMatchObject({ username: "Furkan"});
        expect(result.id).toBeGreaterThan(0); // To ensure date is valid
    });
});

// Matcher functions documentation