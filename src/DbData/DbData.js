
const getDbData = (val) => {
    const readData = localStorage.getItem(val);
    if(readData){
        return JSON.parse(readData);
    }
    return [];
};

const saveDbData = (val , id) => {
    const data = JSON.stringify(id);
    localStorage.setItem(val, data);
};

const giveMainData = (val,id) => {
    const dbData = getDbData(val);
    dbData.push(id);
    saveDbData(val ,dbData);
};


export {getDbData, giveMainData};