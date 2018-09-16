const exercise1 = require("../exercise1");

describe("fizzBuzz", () => {
    it("if input not a number throw", () => {
        expect(() => { exercise1.fizzBuzz("a")}).toThrow();
    })

    it("If input divisible by 3 and 5 return FizzBuzz", () =>  {
        const result = exercise1.fizzBuzz(15);
        expect(result).toBe("FizzBuzz");
    });

    it("If divisible by 3 return Fizz", () => {
        const result = exercise1.fizzBuzz(3);
        expect(result).toBe("Fizz");
    });

    it("If divisible by 5 return Buzz", () => {
        const result = exercise1.fizzBuzz(5);
        expect(result).toBe("Buzz");  
      });
});