#include <stdio.h>

void reverseString(char *s, int sSize)
{
  int i = 0;
  int j = sSize - 1;
  while(i < sSize / 2 && j > sSize / 2)
  {
    char temp = s[i];
    s[i] = s[j];
    s[j] = temp;
    i++;
    j--;
  }
}

int main(void)
{
  char st[6] = "hello";
  int len = 5;
  reverseString(st, len);
  printf("%s", st);
  return (0);
}