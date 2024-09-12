import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  preflight: {
    "@import": `url('/fnt/NotoColorEmoji-Regular.ttf')`,
    "@font-face": [
      {
        fontFamily: "NEFlags",
        src: 'url("/fnt/NotoColorEmoji-Regular.ttf") format("truetype")',
      },
    ],
  },
} as Options;
