#!/bin/bash
echo Enter the file name: 

read filename

touch src/problems/$filename.ts
touch test/problems/$filename.test.ts

printf "const $filename = () => {\n\n};\n\nexport { $filename };" > src/problems/$filename.ts
printf "import { $filename } from '../../src/$filename';\n\ntest('should do something', () => {\n\texpect($filename()).toBe(0)\n});" > test/problems/$filename.test.ts