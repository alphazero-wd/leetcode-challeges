#!/bin/bash
echo Enter the file name: 

read filename

echo Enter the problem number:

read problem_number

touch src/problems/$problem_number\_$filename.ts
touch test/problems/$problem_number\_$filename.test.ts

printf "export const $filename = () => {\n\n};" > src/problems/$problem_number\_$filename.ts
printf "import { $filename } from '../../src/problems/$problem_number\_$filename';\n\ntest('should do something', () => {\n\texpect($filename()).toBe(0)\n});" > test/problems/$problem_number\_$filename.test.ts