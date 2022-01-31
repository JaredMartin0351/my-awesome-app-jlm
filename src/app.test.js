const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../App.js'), 'utf8');

document.documentElement.innerHTML = html.toString();

test('hello world text', () => {
    const linkElement = document.querySelector('h2');
    expect(linkElement.textcontent).toBe('Hello to Jared and the rest of the world out there!');
});