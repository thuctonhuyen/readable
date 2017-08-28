/**
 * Created by thuct on 8/27/2017.
 */
export function convertTimestampToString(timestamp){
    let d = new Date,
        dformat = 'at ' + [d.getHours(),
                d.getMinutes(),
                d.getSeconds()].join(':')+' on '+
            [d.getMonth()+1,
                d.getDate(),
                d.getFullYear()].join('/');
    return (dformat);
}

