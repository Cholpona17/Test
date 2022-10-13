import React from 'react';
import './services.css'
import plus from '../../../images/plus.png'
import vector from '../../../images/strelca.png'
import plus2 from '../../../images/plus1.png'
import dark4 from '../../../images/dark4.png'


const Services = () => {
    return (
        <section className='services_general'>
            <div className='container'>
                <div className='title_service'>
                    <h2 id='service'>Услуги</h2>
                    <div className='service_sait'>
                        <h3>Сайты</h3>
                        <img height={30} src={plus} alt="" />
                    </div>
                </div>
                <div className='service_container'>
                    <div className='service_description'>
                        <p>После получения оплаты, мы начинаем работу над конкретным этапом. По завершению, мы договариваемся о видеозвонке и предоставляем результат работы. Плосле звонка, мы фиксируем результат письмом на почту, просим согласовать этап или внести изменения</p>
                        <h2>Брифинг</h2>
                        <li>Вы заполняете бриф.</li>
                        <li>Созваниваемся, вносим корректировки и уточнения. </li>
                        <li>После звонка заполняем бриф и отправяем вам на почту для согласования.</li>
                        <div className='service_span'>
                            <div className='span_one'>
                                <h4>UX-Аналитика</h4>
                                <img src={vector} alt="" />
                            </div>
                            <div className='span_one'>
                                <h4>Дизайн-концепт</h4>
                                <img src={vector} alt="" />
                            </div><div className='span_one'>
                                <h4>Дизайн всех экранов</h4>
                                <img src={vector} alt="" />
                            </div><div className='span_one'>
                                <h4>Передача макетов в разработку</h4>
                                <img src={vector} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='box_all'>
                    <div className='service_box'>
                        <h4>Магазины</h4>
                        <img src={plus2} alt="" />
                    </div>
                    <div className='service_box'>
                        <h4>Приложения</h4>
                        <img src={plus2} alt="" />
                    </div> <div className='service_box'>
                        <h4>Дизайн поддержка</h4>
                        <img src={plus2} alt="" />
                    </div>
                </div>
            </div>
            <div className='dark_four'>
                <img width={1500} src={dark4} alt="" />
            </div>

        </section>
    );
};

export default Services;