import {CssProperty} from './css-property.js';
export class PropertyAccessor { // 使用するプロパティの名前やアクセス方法を統一する
    #id;
    constructor(id) { this.#id = id; }
    get Id() { return this.#id; }
    get Css() { return getComputedStyle(document.querySelector(':root')).getPropertyValue(`--${this.#id}`); }
    set Css(value) { return document.querySelector(':root').style.setProperty(`--${this.#id}`, value); }
    get Html() { return document.querySelector(`#${this.#id}`); }
    get Storage() { return localStorage.getItem(`${this.#id}`); }
    set Storage(value) { return localStorage.setItem(`${this.#id}`, value); }
    get Db() { return ; } // IndexedDb
    set Db(value) { return ; } // IndexedDb
}
