//import {} from 'js/html.js';
export class CssProperty {
    static getRootF(key) { return parseFloat(CssProperty.getRoot(key)); }
    static getRootI(key) { return parseInt(CssProperty.getRoot(key)); }
    static getBodyF(key) { return parseFloat(CssProperty.getBody(key)); }
    static getBodyI(key) { return parseInt(CssProperty.getBody(key)); }
    static getSomeF(key) { return parseFloat(CssProperty.getSome(key)); }
    static getSomeI(key) { return parseInt(CssProperty.getSome(key)); }
    static getInlineF(key) { return parseFloat(CssProperty.getInline(key)); }
    static getInlineI(key) { return parseInt(CssProperty.getInline(key)); }
    static getRoot(key) { return getComputedStyle(document.querySelector(':root')).getPropertyValue(key); }
    static getBody(key) { return getComputedStyle(document.querySelector(':body')).getPropertyValue(key); }
    static getSome(key, q) { return getComputedStyle(document.querySelector(q)).getPropertyValue(key); }
    static getInline(key, q) { return document.querySelector(q).style.getPropertyValue(key); }

    static setSome(key, value, q) { return document.querySelector(q).style.setProperty(key, value); }
    static setRoot(key, value) { return CssProperty.setSome(key, value, ':root'); }
    static setBody(key, value) { return CssProperty.setSome(key, value, 'body'); }
}

