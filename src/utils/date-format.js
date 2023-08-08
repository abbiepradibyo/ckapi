const addTime = (date, second) => {

    var newtime = new Date(date);
    newtime.setSeconds(newtime.getSeconds() + second); // timestamp
    newtime = new Date(newtime); // Date object
    return newtime
};



export { addTime };
