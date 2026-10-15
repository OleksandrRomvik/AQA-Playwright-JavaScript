import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://aqa-app.vercel.app/login');
    await page.getByRole('button', { name: 'Register' }).click();
    await page.getByRole('textbox', { name: 'First Name' }).click();
    await page.getByRole('textbox', { name: 'First Name' }).fill('Alex');
    await page.getByRole('textbox', { name: 'Last Name' }).click();
    await page.getByRole('textbox', { name: 'Last Name' }).fill('Rom');
    await page.getByRole('textbox', { name: 'Email Address' }).click();
    await page.getByRole('textbox', { name: 'Email Address' }).fill('test@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('123456');
    await page.getByRole('textbox', { name: 'City' }).click();
    await page.getByRole('textbox', { name: 'City' }).fill('Herson');
    await page.locator('#register-country').selectOption('Ukraine');
    await page.getByRole('textbox', { name: 'Phone Number' }).click();
    await page.getByRole('textbox', { name: 'Phone Number' }).fill('+380985540277');
    await page.getByRole('textbox', { name: 'Street and House Number' }).click();
    await page.getByRole('textbox', { name: 'Street and House Number' }).fill('Franka 12');
    await page.getByRole('textbox', { name: 'ZIP Code' }).click();
    await page.getByRole('textbox', { name: 'ZIP Code' }).fill('314 15');
    await page.getByRole('button', { name: 'Register' }).click();
});