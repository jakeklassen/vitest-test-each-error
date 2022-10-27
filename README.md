# Vitest `test.each` Error

Run any of the test suites from the `Testing` tab in vscode and you will see:

```
TypeError: Cannot read properties of undefined (reading 'item')
```

Between `number-adder.spec.ts` and `string-adder.test.ts` you will see two different attempts to create an array of cases to loop over.
