import { createRequire } from "node:module";
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import i18next from "eslint-plugin-i18next";

const require = createRequire(import.meta.url);
const htmlEntities = require("eslint-plugin-i18next/lib/options/htmlEntities");

const localeLiteralRule = [
  "error",
  {
    mode: "jsx-text-only",
    message: "User-facing copy must live in locales/ and be referenced via t()",
    "jsx-attributes": {
      include: [
        "label",
        "title",
        "placeholder",
        "alt",
        "aria-label",
        "aria-labelledby",
        "aria-describedby",
      ],
    },
    callees: {
      exclude: [
        "t",
        "i18n(ext)?",
        "require",
        "cn",
        "cva",
        "designSystemPageTitle",
        "addEventListener",
        "removeEventListener",
        "postMessage",
        "getElementById",
        "dispatch",
        "commit",
        "includes",
        "indexOf",
        "endsWith",
        "startsWith",
        "Error",
        "console\\.(log|warn|error|info)",
      ],
    },
    words: {
      exclude: [
        "[0-9!-/:-@[-`{-~]+",
        "[A-Z][a-zA-Z0-9]*",
        "[a-z]+-[a-z0-9-]+",
        "^#[0-9a-fA-F]{3,8}$",
        "^rgb\\(",
        "^hsl\\(",
        "^var\\(--",
        htmlEntities,
      ],
    },
    "object-properties": {
      exclude: ["[A-Z_-]+", "className", "href", "src", "type", "robots"],
    },
  },
];

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    files: ["**/*.{ts,tsx}"],
    ignores: ["components/ui/icons/**"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "lucide-react",
              message:
                "Import icons from @/components/ui/icons (or the Icon atom) only.",
            },
          ],
        },
      ],
    },
  },
  {
    files: [
      "app/**/*.{ts,tsx}",
      "components/**/*.{ts,tsx}",
      "lib/**/*.{ts,tsx}",
    ],
    ignores: [
      "locales/**",
      "tokens/**",
      "components/ui/icons/**",
      "app/bnd/designsystem/ui/**",
      "app/bnd/designsystem/typography/typography-table.generated.ts",
    ],
    plugins: {
      i18next: i18next,
    },
    rules: {
      "i18next/no-literal-string": localeLiteralRule,
    },
  },
  {
    files: ["components/ui/**/*.{ts,tsx}"],
    ignores: ["components/ui/icons/**"],
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          selector:
            "JSXAttribute[name.name='className'] Literal[value=/\\b(bg|text|border|ring)-(pink|grey|navy|blue|yellow|red-util|green-util)/]",
          message:
            "Use semantic Tailwind tokens (e.g. bg-primary), not legacy palette classes in components/ui.",
        },
      ],
    },
  },
  {
    files: ["components/ui/molecules/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["**/composites", "**/composites/**", "../composites/**"],
              message: "Molecules must not import composites.",
            },
          ],
        },
      ],
    },
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "scripts/**",
  ]),
]);

export default eslintConfig;
