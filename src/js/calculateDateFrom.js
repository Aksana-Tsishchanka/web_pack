export function calculateDateFrom(seconds, difference, timeArr) {
    return timeArr.reduce((result, timeObj) => {
        if (result) return result;

        const { infoText, numOfSeconds } = timeObj;
        const interval = Math.floor(seconds / numOfSeconds);

        if (interval >= 1) {
            result = difference <= 0 ? `in ${interval} ${infoText}` : `${interval} ${infoText} ago`;
        }
        return result;
    }, '');
}

export function timeFrom(date) {
    const difference = new Date() - date;
    const seconds = Math.floor(Math.abs(difference) / 1000);
    const timeArr = [
        { infoText: 'years', numOfSeconds: 60 * 60 * 24 * 365 },
        { infoText: 'months', numOfSeconds: 60 * 60 * 24 * 30 },
        { infoText: 'days', numOfSeconds: 60 * 60 * 24 },
        { infoText: 'hours', numOfSeconds: 60 * 60 },
        { infoText: 'minutes', numOfSeconds: 60 },
    ];

    return calculateDateFrom(seconds, difference, timeArr) || 'Just now';
}