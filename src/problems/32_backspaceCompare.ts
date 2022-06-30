// https://leetcode.com/problems/backspace-string-compare/
export const backspaceCompare = (s: string, t: string): boolean => {
  let i = s.length - 1, j = t.length - 1;
  let skipS = 0, skipT = 0
  while (i >= 0 && j >= 0) {
    while (i >= 0) {
      if (s.charAt(i) === '#') {
        skipS++; i--
      } else if (skipS > 0) {
        skipS--; i--
      } else break;
    }

    while (j >= 0) {
      if (t.charAt(j) === '#') {
        skipT++; j--
      } else if (skipT > 0) {
        skipT--; j--
      } else break;
    }

    if (i >= 0 && j >= 0 && s.charAt(i) !== t.charAt(j)) return false;
    if ((i >= 0) !== (j >= 0)) return false
    i--; j--
  }
  return true;
};