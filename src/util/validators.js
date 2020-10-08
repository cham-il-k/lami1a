export const isEmpty = (value) => {
    return ( value === undefined || 
        value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0) 
        ) 
 }

 export const isValidImage = value => {
        if(!value) return true
        if(typeof value !== 'string' ) return false
        const img = ['jpg', 'jpeg', 'png', 'svg']
        const ext = value.split('.').pop()
        return (img.includes('ext')) 
 }

 export const isSameAs = (getValues, field) => value => {
    if(!value) return true
    if(typeof value !== 'string' ) return false
 
    const comparedValue = getValues()[field]
    
    return comparedValue === value
}