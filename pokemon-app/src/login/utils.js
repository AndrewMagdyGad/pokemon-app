export function generateToken(email, password) {
    const result = [];

    for (let i = 0; i < 100; i++) {
        result.push(
            String.fromCharCode("a".charCodeAt(0) + Math.random() * 26)
        );
    }

    return result.join("");
}
