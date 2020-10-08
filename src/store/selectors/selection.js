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

export const selectBooks =  createSelector(
  [selectSelections],
  selections => {
    if(!selections || selections.length < 1) return []
    else{

      const [books, _] = selections
      const bookValues  = Object.values(books) 
        const collectionBooks = bookValues[4]
        //console.log({collectionBooks}) 
        const  BookKeys = Object.keys(collectionBooks)
             const collections = BookKeys.map((key, val) => {
                return {key,items:collectionBooks[key]}
              })  
            let booksArray = []
           const prod =  collections.map((elm, i) => {
             return elm['items']['items']      }
        )
        prod.forEach(elm => {
          booksArray= [...booksArray,...elm]
        }) 
        return booksArray
    }
})
   
export const selectProducts =  createSelector(
  [selectSelections],
  selections => {
    if(!selections || selections.length < 1) return []
    else {
      const [, products] = selections
      //console.log({products})
      const productValues  = Object.values(products) 
        const collectionproducts = productValues[4]
            const  BookKeys = Object.keys(collectionproducts)
             const collections = BookKeys.map((key, val) => {
                return {key,items:collectionproducts[key]}
              })  
            let productsArray = []
           const prod =  collections.map((elm, i) => {
             return elm['items']['items']      }
        )
        prod.forEach(elm => {
          productsArray= [...productsArray,...elm]
        }) 
        return productsArray
    }
})  
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