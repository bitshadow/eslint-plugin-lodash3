# Matches shorthand

When using certain method in lodash such as filter, code can be shorter and more readable when using the `_.matches` callback shorthand. This rule will enforce using shorthand when possible to keep consistency in your code.

## Rule Details

This rule takes one argument, maximum path length (default is 3).

The following patterns are considered warnings:

```js
var result = _.filter(users, function (user) { return user.age === 30 && user.name === 'Bob'; });
```

The following patterns are not considered warnings:

```js
var result = _.filter(users, {age: 30, name: 'Bob');
```


## When Not To Use It

If you do not want to enforce `_.matches` callback shorthand, then you can disable this rule.
