---
metaTitle: null vs undefined
title: What is the difference between a variable that is null, undefined or undeclared?
subtitle: How would you go about checking for any of these states?  
date: 2024-03-29 
---

- `null` is often used to explicitly indicate that a variable, object, or property has no value or is empty, whereas `undefined` usually indicates an unintentional absence of value or an error in the program logic.
- Both `null` and `undefined` are their own primitive values in JavaScript but they both do not have an object wrapper
- All primitive types, except `null`, can be tested by the `typeof` operator. `typeof null` returns `"object"`, so one has to use `=== null` to test for `null`.

## null

`null` is a value that represents the intentional absence of any object value.

```
const pet = null;
```

## undefined

`undefined` is a value that represents an uninitialized or non-existent value.

```
const person;
```

## undeclared

Attempting to reference a value that has not been initialized

```
console.log(x); // Uncaught ReferenceError: x is not defined
```