import React from 'react'
import { shallow } from "enzyme";
import CollectionPreview from '../../../components/Collection-Preview/Collection-Preview'
it('must render One Collection', () => {

   expect(shallow(<CollectionPreview />).length).toEqual(1)

})


