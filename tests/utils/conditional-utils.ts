export type valid = {
    name: string | null;
    price: string | null;
    description: string | null | undefined;
}
import { expect } from "@playwright/test";
import * as fs from 'fs/promises';

export class ConditionalUtils {

    constructor() { }
    async validate(valid: valid) {
        const raw = await fs.readFile('tests/fixtures/products.json', 'utf-8');
        const data = JSON.parse(raw)
        const normalize = (str: string | undefined | null): string =>
            (str ?? '').replace(/\s+/g, ' ').trim();

        const uiPrice = valid.price?.split('*')[0].trim();
        console.log(data)
        if (valid) {
            expect(data.some(dataValue =>
                dataValue.name === valid.name
                && normalize(dataValue.description) === normalize(valid.description)
                && dataValue.price.trim() === uiPrice
            )).toBeTruthy()
        }
    }
}
