Q1: At line 12, the value of varialbe `i` (`3`) is printed out since it is called in the function it was declared in. Although `i` was initialized in a `for` code block, the variable `i` became visible to the things within the function `discountedPrices` due to `var`.\

Q2: On line 13, since `var` has no block scope, `discountedPrice` is able to be called and printed out using `console.log(discountedPrice);`.\

Q3: At line 14, the value of `finalPrice` will be printed out since the variable is declared in the scope of function `discountedPrices` in which line 14 is calling the variable in.\

Q4: The function will return the list of discounted prices assigned to the returned varialbe `discounted`. This is because there is no issues with the current code since it does not matter if a variable is redeclalred multiple times and the intended new value will be reassigned to the variable anyways. This example can be seen in `line 7` for `discountedPrice`.\

Q5: At line 12, an error will occur since `i` is declared using `let` in the for-loop code block. Which means that the variable is not visible or cannot be called upon outside the for loop.\

Q6: An error occurs at line 13. Similarly to the variable `i` in the previous question, `discountedPrice` is declared using `let` as well inside the `for` code block. Thus `discountedPrice` is not visible outside the loop and cannot be accessed. Additionally, since the variable is declared within a loop, an error occurs where `discountedPrice` cannot be redeclared.\

Q7: On line 14, the value of `finalPrice` will be printed, which in this case will be the last price calculated `150`. We are able to access `finalPrice` since it is declared and accessed within the `discountedPrices` function. This is assuming that we get passed the error if redeclaration of `disocuntedPrice`.\

Q8: The code will cause and error since the variable `disountedPrice` cannot be redeclared in the for-loop after being declared during index 0 of the `prices` list.\

Q9: At line 11, an error will occur since `i` is initiallized using `let` in a `for` code block. Meaning that `i` cannot be accessed outside of the `for` loop.\

Q10: At line 12, the value of `length` will be printed out (which will be `3` in this case) because the variable is declared and accessed within the same function. Additionally, `length` has not been reassigned any value anywhere else in the function.\

Q11: The function will cause an error because of line 7 where there is `const discountedPrice`. Since the variable has been declared using `const`, it cannot be reassigned a different value which is what is trying to execute after accessing the first index of `prices` in the for loop.\

Q12:\
- A: `student.name`
- B: `student['Grad Year']`
- C: `student.greeting()`
- D: `student['Favorite Teacher'][name]`
- E: `student.courseLoad[0]`

Q13:\
- A: **Output: '32'**: This is because the `+` operator converts the number `2` into a string to concatenate with '3'. 
- B: **Output: 1**: This is because the `-` operator converts string `3` string into a numerical 3 so that 2 can be subtracted from it.
- C: **Output: 3**: This is because `null` is converted to 0.
- D: **Output: '3null'**: This is because `null` is converted into a string to concatenate with '3'. 
- E: **Output: 4**: This is because `true` is converted into it's numerical value, 1. So 1 + 3 = 4.
- F: **Output: 0**: This is because `false` is converted into it's numerical value, 0, and `null` is converted to 0. So 0 + 0 = 0.
- G: **Output: '3undefined'**: This is because `undefined` is converted into a string to concatenated with '3'. 
- H: **Output: NaN**: This is becuase '3' is converted into a numerical 3 and 'undefined' is converted to it's numerical value, NaN.

Q14:\
- A: **Output: true**: This is because '2' is converted into a a numerical 2.
- B: **Output: false**: This is because the first character '2' is greater than the first char of '12', '1'. 
- C: **Output: true**: This is because the string '2' is converted into a numerical 2, so 2==2.
- D: **Output: false**: This is because `===` means strictly equal and a numerical 2 does not hold the same type as a string '2'.
- E: **Output: false**: This is because `true` converts into it's numerical representation, 1, and 1 != 2. 
- F: **Output: true**: This is beacause `Boolean(2)` returns `true` and true is strictly equal to true. On the other hand, `Boolean(0)` would return false due to the numerical 0.

Q15: The operator `==` checks for equality of the content with type coversion, meanwhile `===` strictly checks for equality in both content and type without any conversions.\

Q17: The result will be [2, 4, 6]. First, when we call the function, `newArr` is initiallized to be and empty array. By line 3, we itterate through each index of `array`. Then the `callback()` function calls and executes the function `doSomething()` for the current index and returns the current index value multiplied by 2. Which is then pushed into the array `newArr`.\

Q19: The output would be the following:\
1\
4\
3\
2\
This is because line 2 is executed first, line 3 is put on hold for 1 second, line 4 executes almost immediately since it is set for 0 milisecond delay, but line 5 executes seconds, then line 4, and finally line 3.\

