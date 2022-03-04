let helloLang = prompt('Pick a language to translate "Hello World" (es, de, en ,fr)');
switch (helloLang) {
    case 'es':
        document.write('Hola Mundo');
        break;
    case 'de':
        document.write('Hallo Welt');
        break;
    case 'en':
        document.write('Hello World');
        break;
    case 'fr':
        document.write('Bonjour le monde');
        break;
    default:
        document.write('Hello World');
        break;
}