import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import noCyrillicString from 'eslint-plugin-no-cyrillic-string';
import react from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import eslintPluginPrettier from 'eslint-config-prettier';
import globals from 'globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

const eslintConfig = [
  {
    ignores: ['src/i18n/*']
  },
  eslintPluginPrettier,
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
      'no-cyrillic-string': noCyrillicString,
      'simple-import-sort': simpleImportSort,
      react
    },
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      globals: {
        ...Object.fromEntries(Object.entries(globals.browser).map(([key]) => [key, 'off']))
      },

      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },

    rules: {
      'no-cyrillic-string/no-cyrillic-string': 'error',

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '_'
        }
      ],

      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'react/self-closing-comp': 'error',

      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react', '^@?\\w'],
            ['^#public'],
            ['^#src'],
            ['^#types'],
            ['^#abac'],
            ['^#components'],
            ['^#shared'],
            ['^#constants'],
            ['^#helpers'],
            ['^#hooks'],
            ['^#pages'],
            ['^#(router|routes)'],
            ['^#services'],
            ['^#storage-services'],
            ['^#styles'],
            ['^#firebase'],
            ['^#i18n'],
            ['^#models'],
            ['^#store'],
            ['^\\u0000'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            ['^.+\\.?(css)$']
          ]
        }
      ]
    }
  }
];

export default eslintConfig;
