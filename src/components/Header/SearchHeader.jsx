import React, {useState, useEffect, useRef} from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom'
import { compose } from 'redux'
import { createStructuredSelector} from 'reselect'
import { selectProducts } from './../../store/selectors/selection'
import CustomButtonSearch from './../CustomButton/CustomButtonSearch'
import { faSearch  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
const initialTerm = 'hikma'

const SearchHeader = ({ products, callback }) => {
  const searchInputRef = useRef()
  const notify = (message) => toast(`${message}`);

  const [searchTerm, setSearchTerm] = useState(initialTerm)
  const [result, setResult] = useState(initialResult)
  const [isLoading, setIsLoading] = useState(false)
  const [globalError, setError] = useState(null)
  const timeOut = useRef(null)
useEffect(() => {
    //fetchArticle(searchTerm)
    //console.log({selections})
},[])

const  handleOnChange = (e) => {
  const {name, value} =  e.target
  setSearchTerm(value)
}
const handleClear = (e) => {
  setSearchTerm(initialTerm)
  searchInputRef.current.focus()
}

const submit = (e) => {
  e.preventDefault()
  fetchArticle()
  //searchInputRef.current.focus()
  clearTimeout(timeOut.current)  
  setSearchTerm(initialTerm)
  timeOut.current = setTimeout(() => {
    callback(searchTerm)
  }, 500)


}
function fetchArticle(){
  setIsLoading(true)
  try {
  const products =    products.filter(product => {
      return (product.name).includes(searchTerm) 
    })
    if (products.length > 0){
      return products
    
    }else {
      notify('No result')
    }
  } catch (error) {
   setError(error) 
   notify(globalError)
  }
}

return (
   <>
    <ToastContainer />
      <FormSearch onSubmit={submit}>
        <FormInputSearch ref={searchInputRef} placeholder={searchTerm} value={searchTerm} onChange={handleOnChange}/>
        <CustomButtonSearch  type="submit" > Search article</CustomButtonSearch>
        <CustomButtonSearch clear type="button" onClick={handleClear}> Clear Search </CustomButtonSearch>
      </FormSearch>
   {result ? <CollectionPageResultContain products={result} /> : '' }
 </>
 );
}
const mapStateToProps = createStructuredSelector({
  products: selectProducts 
})
 
const SearchHeaderContain = compose(
  connect(mapStateToProps),  
  withRouter,
  WithSpinner
)(SearchHeader)

export default SearchHeaderContain
