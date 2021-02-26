const container = document.getElementById('container');
const text = document.getElementById('text');
const integerButton = document.getElementById('integer-button');
const nonIntegerButton = document.getElementById('non-integer-button');

const setHeight = integer => {
    const height = `${integer ? 200 : 200.5}px`;
    container.style.height = height;
    text.innerHTML = `Container height: ${height}`
};

integerButton.addEventListener("click", () => setHeight(true));
nonIntegerButton.addEventListener("click", () => setHeight(false));

setHeight(false);