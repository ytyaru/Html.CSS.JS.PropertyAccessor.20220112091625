import {FloatPropertyAccessor} from './float-property-accessor.js';
function* getIds(properties) {for (const p of properties) { yield p.Id; }} 
export class RangePropertyAccessor extends FloatPropertyAccessor { // <input type="range">想定
    #min;
    #max;
    #step;
    #default;
    constructor(id) {
        super(id);
        this.#min = new FloatPropertyAccessor(`${id}-min`);
        this.#max= new FloatPropertyAccessor(`${id}-max`);;
        this.#step = new FloatPropertyAccessor(`${id}-step`);;
        this.#default = new FloatPropertyAccessor(`${id}-default`);
    }
    get Ids() { return getIds([this, this.#min, this.#max, this.#step, this.#default]); }
    get Min() { return this.#min; }
    get Max() { return this.#max; }
    get Step() { return this.#step; }
    get Default() { return this.#default; }
    get Median() { return (this.#max.Css - this.#min.Css) / 2; }

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
