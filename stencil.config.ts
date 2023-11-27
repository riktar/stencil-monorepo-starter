import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import tailwind, { tailwindHMR, setPluginConfigurationDefaults  } from 'stencil-tailwind-plugin';
// import tailwindcss from 'tailwindcss';
// import autoprefixer from 'autoprefixer';
import tailwindConf from './tailwind.config';

setPluginConfigurationDefaults({
  tailwindConf,
  tailwindCssPath: './src/styles/tailwind.css',
  // postcss: {
  //   plugins: [
  //     tailwindcss(),
  //     autoprefixer()
  //   ]
  // }
});

export const config: Config = {
  namespace: 'habeetat-components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    sass(),
    tailwind(),
    tailwindHMR()
  ],
};
