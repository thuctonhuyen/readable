/**
 * Created by thuct on 8/27/2017.
 */
export function convertTimestampToString(timestamp) {
    let d = new Date;
    let dformat = 'at ' + [d.getHours(),
            d.getMinutes(),
            d.getSeconds()].join(':') + ' on ' +
        [d.getMonth() + 1,
            d.getDate(),
            d.getFullYear()].join('/');
    return (dformat);
}

export function getBriefBody(body){
    if(body) {
        return body.length > 200 ? `${body.slice(0, 200)}...` : body;
    }
    else{
        return 'No Content';
    }
}