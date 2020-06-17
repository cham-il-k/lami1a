import {
  createSelector
} from 'reselect';
import {
  verifSelection,
  getSelectionCollections
} from './utilsSelectors'

const selectedSelection = state => state.selection;

//const mapSelection =  new Map(selectSelection)
export const selectSelectedSelections = createSelector(
  [selectedSelection],
  selection => selection.selections
)


export const selectIsSelectionFetching = createSelector(
  [selectedSelection],
  selection => selection.isFetching
);

export const selectIsSelectionsLoaded = createSelector(
  [selectedSelection],
  selection => !!selection.selections
);

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
    let products = []
    const selection = selections.filter(selection => {
       return selection['title'] === selectionId
     })
    products = Object.entries(selection[0]['collections']).map(collection => {
      const product = {
        collection:collection[1]['title'],
        selection:collection[1]['selection'],
        items:collection[1]['items']
      }
      return product
    })
    return products  
  }
)
export const selectProducts = (collectionId) => createSelector(
  [selectSelections],
  selections => {
    let products = []
    
    const selection = selections.map(selection => {
        const colNames = Object.entries(selection['collections'])
      return colNames.filter(col => (col[0]=== collectionId))
     })
     const masel = selection[0][0][1]
    products = (selection[0][0][1]['items']).map(item => {
     const collection = masel['title']
     const selection = masel['selection']
     const prod = {
        selection,
        collection,
        product:item
      }
      return prod
    })
    
    console.log(products)
    return products  
  }
)

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
        /* 
        export const selectSelectionForShopCollection = selectionId => createSelector(
  [selectedSelections],
  selections => {
    const _sel = new Set()
     Object.keys(selections).forEach(selection => {
        if(selection === selectionId) {
          _sel.add( {
            title: selections[selection]['title'],
            id: selections[selection]['id'],
            imageUrl: selections[selection]['imageUrl'],
            linkUrl: selections[selection]['linkUrl'],
            collections: selections[selection]['collections'],
          })
        }}
        )
        return _sel
  }
)
export const selectProductsForPreview = collectionId => createSelector(
  [selectedSelections],
    collections => {
    console.log(collections)
    const cols =  collections[collectionId]
    const colKeys = Object.keys(cols)
    return colKeys.map(collection => {
      return collections[collectionId][collection]
    })
  }
)

export const getItemsCollection = selectionId => collectionId => createSelector(
  [selectedSelections],
  collections =>  {
    const selection = collections[selectionId]

  })

export const selectCollections = createSelector(
  [selectedSelections, getItemsCollection],
  (collections, selections) => {
    const newCollections = []
   // console.log(`Collections ${collections}`)
    //console.log(selections)
    return Object.values(collections)

  })

 */


  /* {
    const mapSelection = new Map()
    const sels = Object.keys(selection.selectons)
    for (let sel of sels ){
       mapSelection.set(sel, selection[sel])
       /* 
      for (let kkey of Object.keys(value)) {
          console.log(`--> ${JSON.stringify(kkey, null, 4)}`)
            for (let kkkey of Object.keys(kkey)) {
              console.log(`---> ${kkkey}`)
            }
    
        } 
  }
      console.log(`collections books ->${JSON.stringify(mapSelection.get('books'), null ,2)}`)
      console.log(`all Collections ->${JSON.stringify(mapSelection, null ,2)}`)

    return mapSelection
  }
) *export const selectCollections = createSelector(
  [selectedSelection],
  selection => {
    console.log(`collections de selectCollection-> ${selection.collections} `)
    return selection.collections
  }
) */
/* export const selectCollections = createSelector(
  [selectSelectedSelection],
  selection => {
    const sel = Object.keys(selection)
    console.log(`Dans Mon Sel ${sel}`)
    const  AllColl = sel.map(col => Object.keys(selection[col]))
    return AllColl.map(coll => Object.values(selection[coll]))
  }
)
 */
/* 
export const selectCollections = createSelector(
  [selectSelectedSelection],
  selection => {
    const sel = Object.keys(selection)
    const AllColl = sel.map(col => Object.keys(selection[sel]))
     return AllColl.map(coll => coll)
  }
  )
 *//* 
export const selectProductsFromSelection = selection => {
  return createSelector(
    selectSelection,
    selections => Object.values(selections[selection])
  )
}

export const selectProducts = collectionParam => createSelector(
  [selectCollections],
  (collections) => {
    collections.filter(coll =>
      coll[0] === collectionParam
    )
  }
); */
