export const getPersistTableId = () => {
    const persistRoot = localStorage.getItem('persist:tables');
    const parsedRoot = JSON.parse(persistRoot);
    const tableId = JSON.parse(parsedRoot.tableId); 
    return tableId
}