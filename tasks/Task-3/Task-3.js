class Product {
    constructor(name, price, quantity, description) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }
}

String.prototype.contains = String.prototype.includes;
String.prototype.starts = String.prototype.startsWith;
String.prototype.ends = String.prototype.endsWith;
Number.prototype['>'] = function (value) {
    return this > value;
}
Number.prototype['<'] = function (value) {
    return this < value;
}
Number.prototype['='] = function (value) {
    return this == value;
}

Number.prototype['<='] = function (value) {
    return this <= value;
}
Number.prototype['>='] = function (value) {
    return this >= value;
}
function filter(arr, str) {
    const strArr = str.split('&');
    const properties = strArr.map(item => ({
        ops: item.split(/(-|>=?|<=?|=)/).filter((v) => v && /[^-]/.test(v))
    }));

    const newArr = arr.filter(value => {
        for (let property of properties) {
            if (!value[property.ops[0]][property.ops[1]](property.ops[2]))
                return false;
        }
        return true;
    })
    return newArr;
}

let product1 = new Product("some namefd", 2, 6, "some descriptionabc");
let product2 = new Product("some namebbb", 4, 5, "some descriptionabc");
let product3 = new Product("some name", 2, 6, "some description");
let product4 = new Product("some namefd", 2, 7, "some descriptionbbbabc");
let arr = [product1, product2, product3, product4];
const str = 'name-contains-fd&price-=2-&quantity->5&description-ends-abc';
const newArr = filter(arr, str);
console.log(newArr);
