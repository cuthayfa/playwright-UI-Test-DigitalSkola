const { test, expect } = require("@playwright/test");
test.describe("sauce demo login tes", () => {
  test("Successful Login", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.locator('[id="user-name"]').fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByText("Login").click();

    // valdasi user ada didalam dashboard
    await expect(page.getByText("Swag Labs")).toBeVisible();
    await expect(page.getByRole("button", { name: "Open Menu" })).toBeVisible();

    // add item to cart
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    //validasi item sukse ditambahkan ke cart
    await expect(page.locator('[data-test="shopping-cart-link"]')).toContainText('1');
  });
});