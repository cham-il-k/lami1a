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
  selections =>  {
   if(selections){
  return Object.entries(selections).map(([key, value]) => {
   return ({selection:key, collection:value})  
  })
  }
  else return []
  }
)
export const selectSelectionsLabel = createSelector(
  [selectSelectedSelections],
  selections =>  {
   if(selections){
  return Object.keys(selections)
  }
  else return []
  }
)


export const selectSelectionCollections = (selectionId) => createSelector(
  [selectSelections],
  selections => { 
    if(!selections) return []
    const selection = selections.filter(selection => {
      return selection['collection']['title'] === selectionId
      
    }
    )
  const collectionsObject =  selection[0]['collection']['collections']
  return Object.keys(collectionsObject).map((key) => {
    return collectionsObject[key]
  } )
}
)
export const selectIsLoading = createSelector(
  [selectedSelection],
  selection => {
    return selection.loading
  }
)


export const selectBooks =  createSelector(
  [selectSelectedSelections],
  selections => {
    if(!selections || selections.length < 1) return []
    else{
     //console.log({selections})
      const {books  } = selections
       console.log({books})
        const collectionBooks = books['collections']
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

export const selectBooksCollection =  createSelector(
  [selectSelectedSelections],
  selections => {
    if(!selections || selections.length < 1) return []
    else{
     //console.log({selections})
      const { books  } = selections
      return books 
    }
  }
)
export const selectProductsCollection =  createSelector(
  [selectSelectedSelections],
  selections => {
    if(!selections || selections.length < 1) return []
    else{
     //console.log({selections})
      const { products  } = selections
      return products 
    }
  }
)  
export const selectProducts =  createSelector(
  [selectSelectedSelections], 
  selections => {
    if(!selections || selections.length < 1) return []
    else {
      const {products} = selections
      //console.log({products})
    const collectionproducts = products['collections']
            
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

  
export const  selectCollectionCategory = (selectionId, collectionId) => createSelector(
  [selectBooksCollection, selectProductsCollection],
 (booksCollection, productsCollection) =>
 {
   if(selectionId === 'books') {
     return booksCollection['collections'][`${collectionId}`]
   }else {
    return productsCollection['collections'][`${collectionId}`]
   }
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