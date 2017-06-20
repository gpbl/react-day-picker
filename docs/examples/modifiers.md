---
layout: examples
title: Add CSS modifiers to days
permalink: examples/modifiers.html
source: modifiers.js
---

Style day cells using CSS modifiers and the `modifiers` prop.

```css
.DayPicker-Day--birthday {
  color: white;
  background-color: #ffc107;
}

.DayPicker-Day--mondays:not(.DayPicker-Day--outside) {
  color: #ffc107;
  background-color: #fffdee;
}
```