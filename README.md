# random-string

Generates a random string in the desired length.
It also supports seeds and specifiying which letters should be used.
This function is not cryptographically secure.

## Usage

At first you need to install the package using the following command:
```
npm i @kompanie/random-string
```

The generate function has three parameters:
* length specifies how long the generated string should be.
* seed is a number, which allows to generate the same string again. Optional.
* allowedCharacters is a string, which specifies all the characters that are allowed in the string. Optional.

```js
// Generate a string containing 5 characters
const result = RandomString.generate(5);

// Generate a string containing 6 characters, using the seed 5
const result = RandomString.generate(6, 5);

// Generate a string containing 7 characters, using the seed 4, using only these characters
const result = RandomString.generate(7, 4, "ABCDEFGHIJKLMNOPQRSTUVWXYZ");

// Generate a string containing 7 characters, using no seed, using only these characters
const result = RandomString.generate(7, null, "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
```