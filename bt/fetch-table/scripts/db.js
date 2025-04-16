const serverUrl = 'https://nettuts.hu/jms/DLevi04/';

export const getAll = async(entity = 'products') => {
    return fetch(`${serverUrl}${entity}`)
        .then( response => response.json());

};

export const remove = async(id = 0, entity = 'products') => {
    return fetch(`${serverUrl}${entity}/${id}`, {
        method: 'DELETE',

    })
        .then( response => response.json());

};