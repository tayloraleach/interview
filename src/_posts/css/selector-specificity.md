---
title: What is CSS selector specificity and how does it work?
date: 2024-03-28
---

CSS selector specificity is a set of rules used to determine what styles get applied to what elements on the page. Each has a weight which you can use to calculate what will take priority.

| Selector Type             | Weight |
|---------------------------|--------|
| Inline styles             | 1000   |
| ID selectors              | 100    |
| Class selectors           | 10     |
| Attribute selectors       | 10     |
| Pseudo-classes            | 10     |
| Type selectors            | 1      |
| Pseudo-elements           | 1      |
| Universal selector (*)    | 0      |



**Inline styles** have the highest weight and will always overrule any selectors

```
<p style="...">hello world</p>
```

**ID** selectors have the highest weight of any selector: (1-0-0)

```
#card { ... }
<div id="card"></div>
```

**Class, attribute**, and **pseudo-class** selectors have medium weight (0-1-0)

```
.element { ... }
input[type='submit'] { ... }
input:checked { ... }

<input type="submit" checked="true"></input>
```

**Type** and **pseudo-element** selectors are the lowest weight (0-0-1)

```
a { ... }
a::hover { ... }
<a></a>
```

When multiple conflicting styles are defined, the browser determines which style to apply based on the specificity of the selectors. If two or more conflicting styles have the same specificity, the one defined later in the CSS document or with a higher specificity in the cascade takes precedence.