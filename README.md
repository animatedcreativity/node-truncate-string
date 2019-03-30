# node-truncate-string

Truncates string with an ellipsis and preserves full word, if needed.

**Usage:**

```
var truncate = require("node-truncate-string");
truncate(string, length, options);
```

- string: String that needs to be truncated.
- length: Length of the truncated string.
- options: Options to use for truncating.

**Options:**

```
{
  fullWord: true,
  splits: [" ", ",", "."],
  ellipsis: {
    char: ".",
    length: 3
  }
}
```

- fullWord: Whether to preserve full word when truncating. For example: `truncate("fågel, kurre, flickvän, böna", 2)` will return `fågel`. It will return `få...` if `false`.
- splits: Array list of characters where `fullWord` should be checked. For example: `truncate("fågel, kurre, flickvän, böna", 2, {splits: " "})` will return `fågel,...`. But, `truncate("fågel, kurre, flickvän, böna", 2, {splits: " ", ","})` will return `fågel...`.
- ellipsis: `char` & `length` for `ellipsis`. Use `length: 0` if you do not want any ellipsis.