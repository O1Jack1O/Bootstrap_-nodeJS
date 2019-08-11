import {STORE} from '../config';

export const cardApi = {
    //  delete amount and returned transform to Json string object  by name = "prod"
    prepareProductToCard(product){
        const {amount, ...prod} = product;
        return JSON.stringify(prod);
    },

    /**
     * Write all items to store
     * @param {*} store 
     */
    writeToStorage(store){
        localStorage.setItem(STORE, JSON.stringify([...store]))
    },
    // read storege and retuned transform to Json.string objects
    readFormStorage(){
        return new Map(JSON.parse(localStorage.getItem(STORE)))
    },

    /**
     * Write single elemetn to store
     * @param {*} store 
     * @param {*} product 
     */
    setStore(store, product){
        const key = this.prepareProductToCard(product);
        
        if( store.has(key) ){
            store.set(key, store.get(key) + 1);
        }else{
            store.set(key, 1);
        }
        this.writeToStorage(store)
    }
}