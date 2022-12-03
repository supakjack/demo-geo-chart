
module.exports = {
    root: true,
    env: {
      node: true,
    },
    globals: {
      defineProps: "readonly",
      defineEmits: "readonly",
      defineExpose: "readonly",
      withDefaults: "readonly",
    },
    extends: [
      "eslint:recommended",
      "plugin:vue/vue3-recommended",
      "@vue/typescript/recommended",
      "@vue/prettier",
      "@vue/prettier/@typescript-eslint",
      "plugin:yml/standard",
    ],
    overrides: [
      {
        files: ["*.vue"],
        parser: ["vue-eslint-parser","babel-eslint"],
        parserOptions: {
          parser: "@typescript-eslint/parser",
        },
        rules: {
          "no-undef": "off",
          "vue/no-v-html": 0,
        },
      },
    ],
    parserOptions: {
      ecmaVersion: 2021,
    },
  }