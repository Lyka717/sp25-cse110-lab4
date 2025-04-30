Q1: Line 9 prints "values added: " followed by the result of adding `num1` and `num2` assuming that `add` is true.\

Q2: By Line 13, assuming that `add` is true, "values added: `result`" and "final result: `results`" will be printed.\

Q3: You should not use var because the variable can be used outside it's scope unless it is called outside the function it may be declared in. Meaning that it ignores isolating code blocks in addition to ignoring when it is declared. Which can create issues such having variables exist/declared when they shouldn't be.\

Q4: By line 9, the code returns "values added" followed by the `result` of adding `num1` and `num2` assuming that `add` is `true`.\

Q5: By line 13, assuming that `add = true`, the code returns an error because `result` has been declared within the `if` isolating code block starting line 3. Meaning that it cannot be used outside of it's declaration even though it is within the same function.\

Q6: Assuming that `add = true`, by line 9, the code returns an error since `result` has been declared as a const variable in line 5 and is trying to be reassgined a value in line 7. Which is not allowed.\

Q7: Assuming that `add = true`, by line 13, similarly, the code will return and error since the function tries to reassign a value to the variable `result` even though it has already been declared with a value assigned in line 5. Additionally, like the `let` variable type, `result` is declared inside an isolated `if` code block and thus can't be used outside of it.