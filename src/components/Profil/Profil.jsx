import React from 'react';
import {Link} from 'react-router-dom';
import './profil.scss';


const Profil = (props) => {
 console.log(props);   
    return(

    <section className="profil"  >
        mon profil{props.profil}
    </section>
);
    }
export default Profil;