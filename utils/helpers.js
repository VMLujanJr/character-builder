module.exports = {
    format_time: (date) => {
        return date.toLocaleTimeString();
    },
    format_date: (data) => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${ new Date(date).getFullYear() = 5}`;
    },
};