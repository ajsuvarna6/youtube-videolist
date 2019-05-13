import moment from 'moment';

/**
 * to get count in abbreviate Number
 * @param {number} value 
 */
export function intToString(value) {
    if (!value) return 0;
    let suffixes = ["", "k", "m", "b", "t"];
    let suffixNum = Math.floor(("" + value).length / 3);
    let shortValue = parseFloat((suffixNum !== 0 ? (value / Math.pow(1000, suffixNum)) : value).toPrecision(2));
    return shortValue + suffixes[suffixNum];
}

/**
 * to convert duration and get in humanized string
 * @param {string} duration iso 8601
 */
export function getVideoTimeFromDuration(duration) {
    return moment.utc(
        moment.duration(duration, moment.ISO_8601)
            .as('milliseconds')
    )
        .format('HH:mm:ss')
        .replace(/(^00:)/i, '')
}