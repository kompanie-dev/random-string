export class RandomString {
    static generate(length, seed, allowedCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789") {
        let randomString = "";
        let randomSeed = seed ?? Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);

        for (let i = 0; i < length; i++) {
            randomSeed = (randomSeed * 1103515245 + 12345) % 2147483647;
            const index = randomSeed % allowedCharacters.length;
            randomString += allowedCharacters.charAt(index);
        }

        return randomString;
    }
}