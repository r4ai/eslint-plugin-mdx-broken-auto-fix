# eslint-plugin-broken-auto-fix

Steps to reproduce and verify the broken auto-fix:

1. Install dependencies

   ```bash
   bun install --frozen-lockfile
   ```

2. Run ESLint and confirm that there is only one error.

   ```sh
   $ bun run lint
   /home/r4ai/src/repos/github.com/r4ai/eslint-plugin-broken-auto-fix/src/ng.mdx
   1:3  warning  Unexpected reference to undefined definition, expected corresponding definition (`!warn`) for a link or escaped opening bracket (`\[`) for regular text  remark-lint-no-undefined-references

   ✖ 1 problem (0 errors, 1 warning)
   0 errors and 1 warning potentially fixable with the `--fix` option.
   ```

3. Run ESLint with auto-fix and verify that the parts which did not produce errors in step 2 have been fixed.

   ```sh
   $ bun run lint:fix

   $ git --no-pager diff --no-ext-diff --color=never
   diff --git a/src/ng.mdx b/src/ng.mdx
   index 899e2e1..29f76e6 100644
   --- a/src/ng.mdx
   +++ b/src/ng.mdx
   @@ -1,5 +1,5 @@
   -> [!WARN]
   +> \[!WARN]
    > Lorem ipsum dolor sit amet, consectetur adipiscing elit.

   -> [!NOTE]
   +> \[!NOTE]
    > Lorem ipsum dolor sit amet, consectetur adipiscing elit.
   ```

   You can see that even the `[!NOTE]` part, which did not cause an error in step 2, has been fixed.
