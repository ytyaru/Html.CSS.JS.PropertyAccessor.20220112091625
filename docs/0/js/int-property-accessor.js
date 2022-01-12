import {PropertyAccessor} from './property-accessor.js';
export class IntPropertyAccessor extends PropertyAccessor { // 値取得時、整数型に変換する
    constructor(id) { super(id); }
    get Css() { return parseInt(super.Css); }
    get Html() { return parseInt(super.Html); }
    get Storage() { return parseInt(super.Storage); }
    get Db() { return parseInt(super.Db); } // IndexedDb

    // 以下のように実装し直さねばならない。継承できないんかい！
    // https://stackoverflow.com/questions/53584705/javascript-extending-es6-class-setter-will-inheriting-getter
    get Id() { return super.Id; }
    set Css(value) { super.Css = value; }
    set Storage(value) { super.Storage = value; }
    set Db(value) { super.Db = value; } // IndexedDb
}
