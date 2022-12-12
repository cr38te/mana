export const excerptText = (text:string, maxLength:number) => {
    //Trim and re-trim only when necessary (prevent re-trim when string is shorted than maxLength, it causes last word cut) 
    if (text.length > maxLength) {
        //trim the string to the maximum length
        const trimmedString = text.substr(0, maxLength);
        //re-trim if we are in the middle of a word and 
        text = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))) + '...';
    }
    return text
}
export default excerptText;