import {PropertyAccessor} from './property-accessor.js';
function* getIds(properties) { // class で yield を使うためには外部関数化せねばならないクソ仕様！
    for (const p of properties) {
        if (Object.getOwnPropertyDescriptor(Object.getPrototypeOf(p), 'Ids')) {
            for (const id of p.Ids) { yield id; }
        } else { yield p.Id; }
    }
}
export class PropertyAccessorFactory {// プロパティを生成するとき重複チェックする
    #properties;
    constructor(id) { this.#properties = []; }
    create(id, cls=PropertyAccessor) {
        if (this.#isDuplicateId(id)) { throw new Error(`IDが重複しています。一意の値を渡してください。:${id}`); }
        const p = new cls(id);
        this.#properties.push(p);
        return p;
    }
    get Ids() { return getIds(this.#properties); } // class で yield を使うためには外部関数化せねばならないクソ仕様！
    #isDuplicateId(id) {
        for (const p of this.#properties) { if (p.Id === id) { return true; } }
        return false;
    }
    get All() { return this.#properties; }
    get(id) { for (const p of this.#properties) { if (id===p.Id) {return p;} } }

}
