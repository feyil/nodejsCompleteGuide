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



// Matcher functions documentation