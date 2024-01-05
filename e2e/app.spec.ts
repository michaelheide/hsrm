import { test, expect } from '@playwright/test';


test("Test the app", async ({page})=>{
    await page.goto('http://localhost:3000')
    const buttonLocator = page.getByTestId("buttonTest")

    await expect(buttonLocator).toHaveText("Klick mich")

    const docsLocator = page.getByTestId("docs")

    await docsLocator.click()

    await expect(page).toHaveTitle("")
})