export const formatNumber = (number) => {
    if (number >= 100000000) {
        number = Math.round(number / 100000000) + '亿'
    } else if (number >= 10000) {
        number = Math.round(number / 10000) + '万'
    }
    return number;
}