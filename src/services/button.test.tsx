import { TestAlertButton } from "./button";

describe("TestAlertButton", () => {
  it("deve exibir a mensagem contida no alert", () => {
    window.alert = jest.fn();

    TestAlertButton();

    expect(window.alert).toHaveBeenCalledWith("Bem vindo ao DIO Bank");
  });
});
