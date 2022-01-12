export class Title {
    static initialize() {
        const TITLE = getComputedStyle(document.querySelector(':root')).getPropertyValue('--title');
        document.querySelector('title').innerHTML = TITLE;
        document.querySelector('meta[name="description"]').setAttribute('content', TITLE);
        document.querySelector('body > h1:first-child').innerHTML = TITLE;
    }
}

