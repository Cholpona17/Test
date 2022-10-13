import React from 'react';
import './footer.css'
import dark7 from '../../images/dark7.png'
const Footer = () => {
    return (
        <section className='footer_general'>
            <div className='container'>
                <h2>Логотип</h2>
                <div className='footer_box'>
                    <div className='media'><h3>Медиа</h3><p>Все статьи</p><p>Ресурсы</p><p>Шрифты</p></div>
                    <div className='media'><h3>Студия</h3><p>Проекты</p><p>Услуги</p></div>
                    <div className='media'><h3>Школа</h3><p>Льготы</p><p>HR отдел</p><p>UX/UI дизайнер: Сайты PRO</p><p>UX/UI дизайнер: Mobile PRO</p><p>Все курсы </p></div>
                    <div className='media'>
                        <h3>Социальные сети</h3>
                        <div className='flex_box'>
                            <div><p>YOUTUBE</p><p>TELEGRAM</p><p>ВКОНТАКТЕ</p></div>
                            <div><p>BEHANCE</p><p>DRIBBBLE</p><p>AWWWARDS</p></div>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Footer;