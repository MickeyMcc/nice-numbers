export const generateCode = (len = 6) => {
    const num = Math.floor(Math.random() * 10**len);
    let string = `${num}`;
    while (string.length < len) {
        string = '0' + string;
    }
    return string;
}