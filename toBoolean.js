/*
 Convert to boolean: "true", "false", "0", "1", true, false, 0, 1  
*/
export default function toBoolean(value) {
    var result = false;
    try {
        result = !!JSON.parse(String(value).toLowerCase());
    } catch (e) { }
    return result;
}
