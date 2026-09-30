const test = require("node:test");
const assert = require("node:assert");

function mensaje() {
    return "¡Hola desde Docker y GitHub Actions!";
}

test("El mensaje de la aplicación es correcto", () => {
    assert.strictEqual(
        mensaje(),
        "¡Hola desde Docker y GitHub Actions!"
    );
});