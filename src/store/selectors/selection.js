import {
  createSelector
} from 'reselect';
import slug from 'slug'

const selectedSelection = state => state.selection;

export const selectSelectedSelections = createSelector(
  [selectedSelection],
  selection => selection.selections
)
export const selectCollectionForOverview = selectionId => createSelector(
  [selectSelectedSelections],
  selections => {
    console.log(selections[selectionId])
    return (selections ? selections[selectionId]: [])
  }
)

export const selectSelections = createSelector(
  [selectSelectedSelections],
  selections =>  selections ?  Object.keys(selections).map(selection => {
     return selections[selection]
    }) : []
  )
export const selectProductsCollection = (selectionId) => createSelector(
  [selectSelections],
  selections => {
    let result = {}
    let collections = []
    const selection = selections.filter(selection => {
       return selection['title'] === selectionId
      })    
      result = selection.reduce((accumulator, currentValue, index, selection) => {
        return {...currentValue}
    },{})
    console.log(result)  
     if(!!result && (typeof result ) === 'object'){
     
      collections =  Object.entries(result['collections']).map(([col, prod]) => {
        const collection  = {collection:col,selection:result['title'],  items:prod['items']}

      return collection
     } )
     return collections
    }
    else {
      return collections
    } 
})

export const selectProducts =  createSelector(
  [selectSelections],
  selections => {
    let products = []
    products = Object.entries(selections).map(([selection, value]) => {
      const root = {selection: value['title'],idSelection:value['id']}
      return Object.entries(value['collections']).map(([col, val]) => {
      const subRoot = {collection:val['title'],idCollection:val['id']}
      return Object.entries(val['items']).map( ([itemKey, itemValues]) => {
        return {...root,...subRoot,nameSlug:slug(itemValues['name']), ...itemValues}  
         } )
      })
     })    
    return products  
  }
)

export const selectProduct = (term) => createSelector(
  [selectProducts],
  products => {
    const product = products.filter((prod) => {
        return prod['nameSlug'] === term
      })
      return product
})    
    
export const selectSelectionsForShopPreview = collectionId => createSelector(
  [selectSelections],
  selections => {
      const productDeCollection = new Set()
     Object.keys(selections).map(selection => {
        const collections = Object.keys(selection['collections'])
          if(collectionId in collections) {
            productDeCollection.add(selection['collections'][collectionId])
          }
    })
    return productDeCollection
  }
)