import { test,  } from '@playwright/test';

test('manual_test', async ({ page }) => {
    const registerButton = page.locator('[id="login-register-button"]');
    const firstNameInput = page.locator('[id="register-first-name"]');
    const lastNameInput = page.locator('[id="register-last-name"]');
    const emailAddressInput = page.locator('[id="register-email"]');
    const passwordInput = page.locator('[id="register-password"]');
    const cityInput = page.locator('[id="register-city"]');
    const countryDropDown = page.locator('[id="register-country"]');
    const phoneNumberInput = page.locator('[id="register-phone"]');
    const streetInput = page.locator('[id="register-street"]');
    const zipCodeInput = page.locator('[id="register-zip"]');
    const submitRegistrationButton = page.locator('[id="register-button"]');



    await page.goto('https://aqa-app.vercel.app/login');
    await registerButton.waitFor();//це потрібно щоб дочекатись щось але можна і не взаємодіяти з ним, а просто дочекатись поки він з'явиться на сторінці
    await registerButton.click();
    await firstNameInput.waitFor();
    await firstNameInput.fill('John');
    await lastNameInput.waitFor();
    await lastNameInput.fill('Doe');
    await emailAddressInput.waitFor();
    await emailAddressInput.fill('john.doe@example.com');
    await passwordInput.waitFor();
    await passwordInput.fill('123456');
    await cityInput.waitFor();
    await cityInput.fill('New York');
    await countryDropDown.waitFor();
    await countryDropDown.selectOption('Ukraine');
    await phoneNumberInput.waitFor();
    await phoneNumberInput.fill('+380985540277');
    await streetInput.waitFor();
    await streetInput.fill('123 Main St');
    await zipCodeInput.waitFor();
    await zipCodeInput.fill('80023');
    await submitRegistrationButton.waitFor();
    await submitRegistrationButton.click();
    // await page.pause(); //за потреби стопнути для дебагу
});