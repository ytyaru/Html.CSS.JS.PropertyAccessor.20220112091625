import {PropertyAccessor} from './property-accessor.js';
function* getIds(properties) {for (const p of properties) { yield p.Id; }} 
export class SelectPropertyAccessor extends PropertyAccessor {
    #items = new Map(); // 選択候補となるプロパティ群
    constructor(id, prefixes) { // char-weight に ja と en を追加したい
        super(id);
        for (const prefix of prefixes) {
            this.#items[prefix] = new PropertyAccessor(`${prefix}-${id}`);
        }
    }
    get Ids() { return getIds(new Array().concat(this).concat(this.#items.values())); }
    get Items() { return this.#items; }
    /*
    PF.create('char-weight', SelectPropertyAccessor, ['ja','en'])
    PF.create('char-weight', SelectPropertyAccessor, ['ja','en'], RangePropertyAccessor)
    */
    // 以下のように実装し直さねばならない。継承できないんかい！
    // https://stackoverflow.com/questions/53584705/javascript-extending-es6-class-setter-will-inheriting-getter
    get Id() { return super.Id; }
    get Css() { return super.Css; }
    set Css(value) { super.Css = value; }
    get Html() { return super.Html; }
    get Storage() { return super.Storage; }
    set Storage(value) { super.Storage = value; }
    get Db() { return super.Db; } // IndexedDb
    set Db(value) { super.Db = value; } // IndexedDb
}
