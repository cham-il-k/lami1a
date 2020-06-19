import React from 'react'
import { shallow } from 'enzyme'
import Main from './../../pages/main/main'
import { ItemCountContainer } from '../../components/Cart-Icon/cart-icon.styled'
let wrapper
beforeEach(() => {
    const mockProps = {

    }
wrapper = shallow(<Main />)

})

it('must correspon to snapshot',() => {
    expect(wrapper).toMatchSnapShot()
}) 