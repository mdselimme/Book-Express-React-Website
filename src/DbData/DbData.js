
const getDbData = () => {
    const readData = localStorage.getItem("read");
    if(readData){
        return JSON.parse(readData);
    }
    return [];
};

const saveDbData = id => {
    const data = JSON.stringify(id);
    localStorage.setItem("read", data);
};

const giveMainData = id => {
    const dbData = getDbData();
    dbData.push(id);
    saveDbData(dbData);
};


export {getDbData, giveMainData};