// create the date and format

//module.exports.getDate = getDate;
//module.exports.getDay = getDay;

exports.getDate = () => {
        const today = new Date();
        const options = {
            weekay: 'long',
            day: 'numeric',
            month: 'long'
        };
        return today.toLocaleTimeString('en-US', options);
    }
    // 我們把所有的variable都放在get裡，然後每次刷新都會看有沒有新的內容加進來

exports.getDay = () => {
    const today = new Date();
    const options = {
        weekay: 'long'
    };
    return today.toLocaleTimeString('en-US', options);

}