import {test, expect} from '@playwright/test';

test('API test example', async ({ request }) => {
    const response = await request.get('https://fakestoreapi.com/products/1');
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log('API response:', responseBody);
    expect(responseBody.id).toBe(1);
    expect(responseBody.title).toBe('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops');
    expect(responseBody.price).toBeDefined();
});
