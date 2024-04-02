---
metaTitle: Centering element on page
title: How would you center a element (vertically and horizontally) on a page?
date: 2024-03-28
---


```
<div class="parent>
    <div class="child"></div>
</div>
```

## Flex

Simplest approach with is `display: flex` + `align-items` and `justify-content` set to  `center`

```
.parent {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

## Grid

Setting the `display` property of the parent element to `grid` combined with `place-items: center` (short-hand for `align-items` and `justify-items`)

```
.parent {
    display: grid;
    place-items: center;
}
```

## Absolute positioning + transform: translate

Using absolute positioning along with `top`, `left`, and `transform`. Make sure you set `position: relative` on the parent so the positioning of the child is relative to the specified parent.

```
.parent {
    position: relative;
}

.child {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
```

## Absolute positioning + negative margins

Using absolute positioning combined with setting negative margins equal to half of the width and height values. Make sure you set `position: relative` on the parent so the positioning of the child is relative to the specified parent.

```
.parent {
    position: relative;
}

.child {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -25px 0 0 -25px;
}
```