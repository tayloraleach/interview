---
title: What is a closure, and how/why would you use one?
date: 2024-04-02
---

## What?

> A closure is a combination of a function and the lexical environment within which that function was declared

This allows the function to retain access to variables from its containing scope even after the parent function has finished executing.

```
function createTimer(interval) {
  let timer;

  function startTimer() {
    if (!timer) {
      timer = setInterval(() => {
        // ...
      }, interval);
    }
  }

  function stopTimer() {
    clearInterval(timer);
    timer = null;
  }

  return {
    start: startTimer,
    stop: stopTimer
  };
}
```

The inner functions (`startTimer` and `stopTimer`) can access the `'timer'` variable even after the outer `createTimer` function has finished executing.

## Why?

- **Data Encapsulation**: when you need to create private variables and methods
- **Maintaining State**: functions can 'remember' the values of variables allowing them to maintain state across multiple invocations
- **Callback functions**: common in async event handling to maintain context or pass data along