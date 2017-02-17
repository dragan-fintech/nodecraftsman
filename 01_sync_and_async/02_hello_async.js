function write_text(text) {
    console.log(text);
}

console.log("Hello");

setTimeout(
    write_text("World"),
    1000);
