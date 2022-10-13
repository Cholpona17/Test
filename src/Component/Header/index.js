import React from 'react';
import './header.css'

const Header = () => {
    return (
        <section className='header_general'>
            <header className='container'>
                <div>
                    <nav className='navigation'>
                        <h2 className='logo'>Логотип</h2>
                        <ul className='menu_box'>
                            <li><a href='#awards'>Награды</a></li>
                            <li><a href='#service'>Услуги</a></li>
                            <li><a href='#project'>Проекты</a></li>
                            <li><a href='#contact'>Напишите нам</a></li>
                        </ul>
                    </nav>
                    <div className='header_h2'>
                        <div className='header_bottom_block'>
                            <h2>Мы создаем дизайн и веб-дизайн уже более 5 лет</h2>
                            <button>Связаться с нами</button>
                        </div>
                    </div>
                </div>
            </header >
        </section>
    );
};

export default Header;