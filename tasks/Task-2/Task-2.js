//1. Сумма двух чисел
function addition(a, b) {
    a = a.split("").reverse();
    b = b.split("").reverse();
    let maxLen = Math.max(a.length, b.length);
    let sum = [];
    let carry = 0;
    for (let i = 0; i < maxLen; i++) {
        let x = parseInt(a[i]) ? parseInt(a[i]) : 0;
        let y = parseInt(b[i]) ? parseInt(b[i]) : 0;
        let digit = (x + y + carry) % 10;
        carry = Math.floor((x + y + carry) / 10);
        sum.unshift(digit);
    }
    if (carry) { sum.unshift(carry) }

    return sum.join("");
}
//2. Произведение двух чисел
function multiplication(a, b) {
    const product = Array(a.length + b.length).fill(0);
    for (let i = a.length; i--; null) {
        let carry = 0;
        for (let j = b.length; j--; null) {
            product[1 + i + j] += carry + a[i] * b[j];
            carry = Math.floor(product[1 + i + j] / 10);
            product[1 + i + j] = product[1 + i + j] % 10;
        }
        product[i] += carry;
    }
    return product.join("").replace(/^0*(\d)/, "$1");
}
//3. Разность двух чисел
function subtraction(a, b) {
    const diff = [a, b].map(n => [...n].reverse()).reduce((a, b) => a.reduce((r, d, i) => {
        let s = d - (b[i] || 0)
        if (s < 0) {
            s += 10
            a[i + 1]--
        }
        return '' + s + r
    }, '').replace(/^0+/, ''))
    return diff;
}

//4. Частное двух чисел
function division(dividend, divisor) {
    let quotient = "";
    let index = 0;
    let temp = dividend[index] - '0';
    while (temp < divisor) {
        temp = (temp * 10 +
            (dividend[index + 1]).charCodeAt(0) -
            ('0').charCodeAt(0));
        index += 1;
    }
    index += 1;
    while (dividend.length > index) {
        quotient += String.fromCharCode
            (Math.floor(temp / divisor) +
                ('0').charCodeAt(0));
        temp = ((temp % divisor) * 10 +
            (dividend[index]).charCodeAt(0) -
            ('0').charCodeAt(0));
        index += 1;
    }
    quotient += String.fromCharCode
        (Math.floor(temp / divisor) +
            ('0').charCodeAt(0));
    if (quotient.length == 0)
        return "0";
    return quotient;
} 