import { newE2EPage } from '@stencil/core/testing';

describe('hab-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hab-button></hab-button>');

    const element = await page.find('hab-button');
    expect(element).toHaveClass('hydrated');
  });
});
