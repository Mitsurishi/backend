//1.1. Преобразование строки к нижнему регистру, но первая буква большая.

export function ucFirst(str) {
    let str2 = str.toLowerCase();
    str2 = str2.charAt(0).toUpperCase() + str2.slice(1);
    return str2;
}

//1.2. Преобразование строки с целью правильно расстановки пробелов.

export function spaceFixer(str) {
    return str.replace(/ +(\.)/g, '.').replace(/ +(\,)/g, ',').replace(/(\,)/g, '$1 ').replace(/(\.)/g, '$1 ').replace(/ +/g, ' ');
}

//1.3. Подсчёт кол-ва слов в строке.

export function wordCounter(str) {
    let words = str.match(/\S+/g).length;
    return words;
}

//1.4. Подсчёт уникальных слов.

export function uniqueWords(str) {
    str = str.toLowerCase();
    str = str.replace(/(\.)/g, '').replace(/(\,)/g, '');
    str = str.split(' ');
    const result = str.reduce((acc, i) => {
        if (acc.hasOwnProperty(i)) {
            acc[i] += 1;
        } else {
            acc[i] = 1;
        }
        return acc;
    }, {})
    return result;
}