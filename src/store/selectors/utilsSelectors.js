/**
 * curying getSelection.collection based on selection /
 *  get products item from collection argument
 * 
 * //closure to keep in memory the count 
 * 
 * @param {selection general} selection 
 */
import {INITIAL_SELECTIONS,INITIAL_COLLECTIONS} from './../reducers/shopData'
export function getSelectionCollections(collection){
    return function(champ) {
       //console.log(`Collection ${collection} champ ${champ}`)
        return INITIAL_COLLECTIONS[collection][champ]
    } 
} 


export function verifSelection(selection){

 const selectionMap = new Map(selection);
    console.log(selectionMap)

}