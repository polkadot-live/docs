import * as mdx from 'eslint-plugin-mdx';
import css from '@eslint/css';
import js from '@eslint/js';
import json from '@eslint/json';
import markdown from '@eslint/markdown';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginPrettier from 'eslint-plugin-prettier/recommended';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';
import { globalIgnores } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ['**/*.json'],
    plugins: { json },
    language: 'json/json',
    extends: ['json/recommended'],
  },
  {
    files: ['**/*.md'],
    plugins: { markdown },
    language: 'markdown/commonmark',
    extends: ['markdown/recommended'],
  },
  {
    files: ['**/*.css'],
    plugins: { css },
    language: 'css/css',
    extends: ['css/recommended'],
  },
  pluginPrettier,
  {
    ...mdx.flat,
  },
  globalIgnores([
    '**/*.css',
    '**/*.svg',
    '**/*.png',
    '**/*.json',
    '**/*.log',
    '**/*.lock',
    '**/*.md',
    '**/*.ico',
    '**/*.ttf',
    '**/*.xml',
    '**/*.txt',
    '**/*.html',
    '**/*.webmanifest',
    '**/LICENSE',
    '**/.vite',
    '**/dist',
    '**/build',
    '**/out',
    '**/.yarn',
    '**/.licenserc.json',
    '**/.env.yarn',
  ]),
]);
