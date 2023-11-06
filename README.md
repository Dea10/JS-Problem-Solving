# JS-Problem-Solving

# Problem Solving with JavaScript

This repository contains solutions for two common problems using JavaScript. Each problem is accompanied by a solution function and Jest test cases for verification.

## Problem 1: Finding Missing Numbers
### Description
Given a list of integers `nums` and an integer `target`, the task is to find the indices of two numbers in the array that add up to the `target`.

### Solution
The solution uses two nested for loops to iterate through the array. It compares each pair of numbers to check if their sum equals the target. If a valid pair is found, it returns the indices of those numbers.

### Time Complexity
- The time complexity is O(n^2), where n is the number of elements in the `nums` array, due to the nested loops.

### Space Complexity
- The space complexity is O(1), as no additional data structures are used.

## Problem 2: Finding Missing Numbers
### Description
Given a list of integers `nums` and an integer `target`, the task is to return a list of all the integers in the range `[1, list length]` that do not appear in `nums`.

### Solution
The solution uses a Set to efficiently check which numbers are present in the `nums` array. It then iterates through the range `[1, list length]` and checks if each number is in the Set. If a number is not in the Set, it's added to the list of missing numbers.

### Time Complexity
- The time complexity is O(n), where n is the number of elements in the `nums` array.

### Space Complexity
- The space complexity is O(n), as it uses a Set to store the unique numbers in the `nums` array.

