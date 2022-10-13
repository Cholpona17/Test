import React from 'react';
import './contacts.css'
import arow from '../../../images/Arrow.png'

const Contacts = () => {
    return (
        <section className='contacts_generall'>
            <div className='container'>
                <div className='contact_box'>
                    <h2 id='contact'>НАПИШИТЕ НАМ</h2>
                    <img height={100} src={arow} alt="" />
                </div>
            </div>

        </section>
    );
};

export default Contacts;