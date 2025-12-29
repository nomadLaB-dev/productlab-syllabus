// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
// astro.config.mjs
export default defineConfig({
  integrations: [
    starlight({
      title: 'プロダクト開発カリキュラム',
      sidebar: [
        {
          label: 'はじめに',
          link: '/', // index.mdx に対応
        },
        {
          label: '1ヶ月目：基礎体力',
          autogenerate: { directory: 'curriculum/month-1' },
        },
        {
          label: '2ヶ月目：モダン開発',
          autogenerate: { directory: 'curriculum/month-2' },
        },
        {
          label: '3ヶ月目：プロダクト完成',
          autogenerate: { directory: 'curriculum/month-3' },
        },
      ],
    }),
  ],
});