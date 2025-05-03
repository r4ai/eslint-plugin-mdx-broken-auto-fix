// @ts-check
import remarkPresetLintConsistent from "remark-preset-lint-consistent";
import remarkPresetLintRecommended from "remark-preset-lint-recommended";
import remarkPresetLintMarkdownStyleGuide from "remark-preset-lint-markdown-style-guide";
import remarkPresetPrettier from "remark-preset-prettier";
import remarkLintNoUndefinedReferences from "remark-lint-no-undefined-references";

export default {
  plugins: [
    remarkPresetLintConsistent,
    remarkPresetLintRecommended,
    remarkPresetLintMarkdownStyleGuide,
    remarkPresetPrettier,
    [remarkLintNoUndefinedReferences, { allow: ["!NOTE"] }],
  ],
};
