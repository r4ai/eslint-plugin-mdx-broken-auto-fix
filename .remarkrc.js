// @ts-check
import remarkLintNoUndefinedReferences from "remark-lint-no-undefined-references";

export default {
  plugins: [[remarkLintNoUndefinedReferences, { allow: ["!NOTE"] }]],
};
