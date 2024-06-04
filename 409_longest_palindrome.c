#include <stdio.h>
#include <string.h>
#include <stdbool.h>

bool isPalindrome(char* s) {
  const int len = strlen(s);
  for (int i = 0; i < len / 2; ++i) {
    if (s[i] != s[len-1 - i])
      return (false);
  }
  return (true);
}

int longestPalindrome(char* s) {
    int ascii[256] = {0};
    int i = 0;
    int count = 0;
    while(s[i])
    {
      ascii[(int) s[i]]++;
      if(ascii[(int) s[i]] % 2 == 0)
      {
        count += 2;
      }
      i++;
    }
    i = 0;
    while (i < 256)
    {
        printf("%d", ascii[i]);
        printf(" ");
        i++;
    }
    printf("\n");
    const int len = strlen(s);
    return (count + 1 > len) ? len : count + 1;
}

int main(void)
{
  char s[] = "baa";
  printf("%d", longestPalindrome(s));
  printf("\n");
  printf("%d", isPalindrome(s));
  return(0);
}