import React from 'react';
import './awards.css'
import behance from '../../../images/image12.png'
import awwards from '../../../images/image13.png'
import cssda from '../../../images/image14.png'
import mag from '../../../images/image15.png'
import dark2 from '../../../images/dark2.png'
import dark3 from '../../../images/dark3.png'

const Awards = () => {
    return (
        <>
            <section className='awards_general'>
                <div className='container'>
                    <div className='awards_h2'><h2 id='awards'>Награды</h2><p>Уровень нашего дизайна признан международными эксперами</p></div>
                    <div className='awards_img'>
                        <div className='box_all'><img src={behance} alt="" /><h3>Behance</h3><p>8 наград</p></div>
                        <div className='box_all'><img src={awwards} alt="" /><h3>Awwwards</h3><p>12 наград</p></div>
                        <div className='box_all'><img src={cssda} alt="" /><h3>CSSDA</h3><p>3 наград</p></div>
                        <div id='mag' className='box_all'><img src={mag} alt="" /><h3>Mindsparkle Mag</h3><p>6 наград</p></div>
                    </div>
                </div>

            </section>
            <div className='dark_two'><img src={dark2} alt="" /></div>
            <div className='dark_three'><img src={dark3} alt="" /></div>
        </>
    );
};

export default Awards;