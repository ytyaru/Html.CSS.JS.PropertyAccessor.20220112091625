https://cdnjs.cloudflare.com/ajax/libs/dexie/3.2.0/dexie.min.js

// ES-Module
https://unpkg.com/dexie@3.2.0/dist/dexie.mjs

// Minify
https://www.toptal.com/developers/javascript-minifier/

```javascript
import Dexie from 'dexie';

const VERSION = 1;
const DB_NAME = 'NovelViewer'
const db = new Dexie(DB_NAME);
db.version(VERSION).stores({
    CharWeight: `Lang, Weight`,
    LineOfChars: `++Id, Lang, Device, Min, Max, Default`,
});

export default db;
```

