class Html {
    constructor() {

    }
    static get Root() { return getComputedStyle(document.querySelector(':root')); }
    static get Html() { return document.documentElement; }
    static get Body() { return getComputedStyle(document.querySelector('body')); }
    static get(id) { return document.getElementById(id); }
    static getAttr(e, k) { return e.getAttribute(k); }
    static getAttrs(e, k) { return e.attributes; }
    static setAttr(e, k, v) { return e.setAttribute(k, v); }
}

window.addEventListener('load', (event) => {
    console.log('Loaded !!');
});

