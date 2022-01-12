import {PropertyAccessor} from './property-accessor.js';
export class FloatPropertyAccessor extends PropertyAccessor { // 値取得時、浮動少数型に変換する
    constructor(id) { super(id); }
    get Css() { return parseFloat(super.Css); }
    get Html() { return parseFloat(super.Html); }
    get Storage() { return parseFloat(super.Storage); }
    get Db() { return parseFloat(super.Db); } // IndexedDb

    // 以下のように実装し直さねばならない。継承できないんかい！
    // https://stackoverflow.com/questions/53584705/javascript-extending-es6-class-setter-will-inheriting-getter
    get Id() { return super.Id; }
    set Css(value) { super.Css = value; }
    set Storage(value) { super.Storage = value; }
    set Db(value) { super.Db = value; } // IndexedDb
}
