# eslint-plugin-broken-auto-fix

Steps to reproduce and verify the broken auto-fix:

1. Install dependencies

   ```bash
   npm install
   ```

2. Run ESLint and confirm that there is no error:

   ```sh
   $ npx remark src
   src/broken.md: no issues found
   ```

3. Confirm that even though there are no issues, the content is changed by the auto-fix

   ```sh
   $ npx remark src --output
   src/broken.md: written

   $ git --no-pager diff
   diff --git a/src/broken.md b/src/broken.md
   index 9d40e6a..9cda621 100644
   --- a/src/broken.md
   +++ b/src/broken.md
   @@ -1,2 +1,2 @@
   -> [!NOTE]
   +> \[!NOTE]
    > Lorem ipsum dolor sit amet, consectetur adipiscing elit.
   ```
