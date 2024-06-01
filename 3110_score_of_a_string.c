#include <stdio.h>

int mod(int c)
{
	if (c < 0)
		return(c * -1);
	return(c);
}

int scoreOfString(char *s) {
	int i = 0;
	int k = 0;
	while(s[i] && s[i + 1])
	{
		k += mod(s[i] - s[i + 1]);
		i++;
	}
	return(k);
}

int main(void)
{
  char *s = "zaz";
  printf("%d", scoreOfString(s));
  return(0);
}