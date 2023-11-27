import { newSpecPage } from '@stencil/core/testing';
import { HabButton } from '../hab-button';

describe('hab-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HabButton],
      html: `<hab-button></hab-button>`,
    });
    expect(page.root).toEqualHtml(`
      <hab-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </hab-button>
    `);
  });
});
