import { translate } from "./_translate";

describe("translate", () => {
  it("Return a string", () => {
    const result = translate("hello");

    expect(result).toBe(".... . .-.. .-.. ---");
  });

  it("should fail gracefully", () => {
    const result = translate("hello ?");

    expect(result).toBe(".... . .-.. .-.. --- / ?");
  });

  it("should be able to handle a sentence", () => {
    const result = translate("no. i understand.");

    expect(result).toBe(
      "-. --- .-.-.- / .. / ..- -. -.. . .-. ... - .- -. -.. .-.-.-"
    );
  });

  it("should be able to handle capital letters", () => {
    const result = translate("Hello");

    expect(result).toBe(".... . .-.. .-.. ---");
  });
});
