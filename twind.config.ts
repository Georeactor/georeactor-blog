import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  preflight: {
    '@import': `url('/fnt/BabelStoneFlags.ttf')`,
    '@font-face': [
      {
        fontFamily: 'BabelStoneFlags',
        src: 'url("/fnt/BabelStoneFlags.ttf") format("truetype"), url("/fnt/BabelStoneFlagsPUA.woff") format("woff"), url("/fnt/BabelStoneFlagsPUA.woff2") format("woff2")',
      },
    ],
  },
} as Options;
