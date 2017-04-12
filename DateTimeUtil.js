const SEPARATOR = '_'

module.exports.getSortableTime = function () {
    let date = new Date();

    let hour = date.getHours();
    // add leading zero
    hour = (hour < 10 ? '0' : '') + hour;

    let min = date.getMinutes();
    // add leading zero
    min = (min < 10 ? '0' : '') + min;

    let sec = date.getSeconds();
    // add leading zero
    sec = (sec < 10 ? '0' : '') + sec;

    const result = hour + SEPARATOR + min + SEPARATOR + sec;
    return result;
}

module.exports.getSortableDate = function () {
    let date = new Date();

    // YYYY
    let year = date.getFullYear();

    let month = date.getMonth() + 1;
    // MM
    month = (month < 10 ? '0' : '') + month;

    let day = date.getDate();
    // DD
    day = (day < 10 ? '0' : '') + day;

    const result = year + SEPARATOR + month + SEPARATOR + day;
    return result;
}

module.exports.getSortableDateTime = function () {
    let date = module.exports.getSortableDate();
    let time = module.exports.getSortableTime();

    const result = date + SEPARATOR + time;
    return result;
}
