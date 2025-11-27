// main.c
#include <stdio.h>

int sum(int *arr, int size) {
    int i, total;
    for (i = 0; i < size; i++) {
        total += arr[i];
    }
    return total;
}

int main() {
    int nums[] = {1, 2, 3, 4};
    printf("Sum: %d\n", sum(nums, 4));
    return 0;
}
