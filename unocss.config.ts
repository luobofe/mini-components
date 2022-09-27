import { defineConfig, presetWind, presetAttributify } from 'unocss';
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx';

export default defineConfig({
  presets: [presetWind(), presetAttributify()],
  transformers: [transformerAttributifyJsx()],
});
