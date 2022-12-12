const getFormattedDate = (dateString:string) => {
    const date = new Date(dateString.replace(/-/g, '/'));
    const month = date.toLocaleString('nl-nl', { month: 'long' });
    const day = date.getDate();
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
}
export default getFormattedDate;