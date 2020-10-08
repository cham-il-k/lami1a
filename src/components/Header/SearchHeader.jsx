import React, {useState, useEffect, useRef} from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom'
import { compose } from 'redux'
import { createStructuredSelector, createSelector} from 'reselect'
import { selectBooks, selectProducts } from './../../store/selectors/selection'
import CustomButtonSearch from './../CustomButton/CustomButtonSearch'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import WithSpinner from './../With-Spinner/With-Spinner'
import CollectionPageResultContain from './../../pages/collectionPage/collectionPageResult'
import {
  FormSearch,
SearchBar,
SearchIcon,
FormInputSearch
} from './searchHeader.styled';

const initialResult = []

const SearchHeader = ({ books, products, callback }) => {
  const searchInputRef = useRef()
  const notify = (message) => toast(`${message}`);
  const [searchTerm, setSearchTerm] = useState()
  const [resultProds, setResultProds] = useState(initialResult)
  const [resultBooks, setResulBooks] = useState(initialResult)
  const [isLoading, setIsLoading] = useState(false)
  const [globalError, setError] = useState(null)
  const timeOut = useRef(null)
useEffect(() => {
   // fetchArticle(searchTerm)
    //console.log({selections})
},[])


const submit = (e) => {
  e.preventDefault()

  fetchArticle (searchTerm)
  //searchInputRef.current.focus()
 }
async function  fetchArticle(re){
  setIsLoading(true)
  //console.log({products})  
  //console.log({books})  
  
  try {
    let resultProd = []
    const rsltProd =  products.forEach(elm => {
      
       const elmMatch = elm['tags'].filter(tag => {
       return  (tag === searchTerm) 
      })
      //console.log({elmMatch})
      console.log({elm})

      resultProd.push(elm)
      })
    console.log({resultProd})  
   setResultProds({ resultProd})

  // search in books desc
   const rsltBooks =  books.map(elm => {
    return elm['tags'].filter(tag => {
      return ( tag === searchTerm)
     })
     console.log({elm})
     return elm
     })
   
   console.log({rsltBooks})
  setResultProds({ bookMatch:rsltBooks})
  
  
      
  } catch (error) {
   setError(error) 
   }
}

return (
   <>
    <ToastContainer />
      <FormSearch onSubmit={submit}>
        <FormInputSearch  placeholder={searchTerm}  onChange={(e) => setSearchTerm(e.target.value)}/>
        <CustomButtonSearch  type="submit" > Search article</CustomButtonSearch>
       {/*  <CustomButtonSearch clear type="button" onClick={handleClear}> Clear Search </CustomButtonSearch> */}
      </FormSearch>
   {/* {resultProds  ? <CollectionPageResultContain products={resultProds} /> : '' }
    {resultBooks ? <CollectionPageResultContain products={resultBooks} /> : '' } */}
 </>
 );
}
const mapStateToProps =  createStructuredSelector({
  books: selectBooks,
  products: selectProducts 
})
 
const SearchHeaderContain = compose(
  connect(mapStateToProps),  
  withRouter,
  WithSpinner
)(SearchHeader)

export default SearchHeaderContain
