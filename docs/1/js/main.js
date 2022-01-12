import Dexie from './lib/dexie/3.2.0/es-module-min.js';
import {PropertyAccessorFactory} from './property-accessor-factory.js';
import {RangePropertyAccessor} from './range-property-accessor.js';
import {SelectPropertyAccessor} from './select-property-accessor.js';

window.addEventListener('load', (event) => {
    console.log('Loaded !!');
    const PF = new PropertyAccessorFactory();
    PF.create('ja-char-weight');
    PF.create('en-char-weight');
    PF.create('char-weight');
    PF.create('line-of-chars', RangePropertyAccessor);

    const charWeight = new SelectPropertyAccessor('char-weight', ['ja', 'en']);
    console.log(charWeight);
    console.log(charWeight.Items);
    console.log(charWeight.Items['ja']);
    console.log(charWeight.Items['en']);
    console.log(charWeight.ja);
    console.log(charWeight.en);

    const code = 'get Age() { return this.#age; } }'
    eval(`export class MyClass{ #age; constructor() {console.log('MyClass');} ${code} }`)
    const myclass = new MyClass();

    const JA_CHAR_WEIGHT = PF.get('ja-char-weight');
    const EN_CHAR_WEIGHT = PF.get('en-char-weight');
    const CHAR_WEIGHT = PF.get('char-weight');
    const LINE_OF_CHARS = PF.get('line-of-chars');
    console.log(CHAR_WEIGHT);
    console.log(LINE_OF_CHARS);
    JA_CHAR_WEIGHT.Css = 2.5;
    EN_CHAR_WEIGHT.Css = 1.0;
    CHAR_WEIGHT.Css = JA_CHAR_WEIGHT.Css;
    LINE_OF_CHARS.Css = 40;
    LINE_OF_CHARS.Min.Css = 30; 
    LINE_OF_CHARS.Max.Css = 50;
    LINE_OF_CHARS.Step.Css = 1; 
    LINE_OF_CHARS.Default.Css = 40; 
    console.log(`id-----------------`);
    for (const id of PF.Ids) {
        console.log(`${id}`);
    }
    console.log(`-----------------`);
    for (const p of PF.All) {
        console.log(`${p.Id}:${p.Css}`);
    }
    console.log(CHAR_WEIGHT)
    console.log(CHAR_WEIGHT.Id)
    console.log(CHAR_WEIGHT.Css)
    console.log(CHAR_WEIGHT.Html)
    console.log(CHAR_WEIGHT.Storage)
    console.log(CHAR_WEIGHT.Db)
    console.log(LINE_OF_CHARS)
    console.log(LINE_OF_CHARS.Id)
    console.log(LINE_OF_CHARS.Css)
    console.log(LINE_OF_CHARS.Html)
    console.log(LINE_OF_CHARS.Storage)
    console.log(LINE_OF_CHARS.Db)
    console.log(LINE_OF_CHARS.Min)
    console.log(LINE_OF_CHARS.Max)
    console.log(LINE_OF_CHARS.Step)
    console.log(LINE_OF_CHARS.Default)
});

