/**
 * Created by thuct on 8/27/2017.
 */
import sortOn from 'sort-on'
import Error404 from '../components/Error404'
import React from 'react'

export function convertTimestampToString(timestamp) {
    let d = new Date();
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

export function sortList(objList, option) {
    if (option === 'voteScore' || option==='timestamp')
        option = `-${option}`;
    return (sortOn(objList, option));
}

export function getDefaultValue(formType, editingPost = {}, editingComment = {}, field) {
    if(formType === 'editPost'){
        return editingPost[field];
    }
    else if(formType === 'editComment'){
        return (editingComment[field])
        ? editingComment[field] : '';
    }
    else{
        return '';
    }
}

export function getRenderContent(condition, renderContent){
    return (condition) ? renderContent : <Error404/>;

}