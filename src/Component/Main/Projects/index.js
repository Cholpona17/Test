import React from 'react';
import './projects.css'
import projects1 from '../../../images/project_one.png'
import projects2 from '../../../images/project_two.png'
import projects3 from '../../../images/project_three.png'
import projects4 from '../../../images/project_four.png'
import projects5 from '../../../images/project_five.png'
import projects6 from '../../../images/project_six.png'
import projects7 from '../../../images/project_seven.png'
import projects8 from '../../../images/project_eight.png'
import dark5 from '../../../images/dark5.png'
import dark6 from '../../../images/dark6.png'


const Projects = () => {
    return (
        <section className='projects_generall'>
            <div className='container'>
                <h2 id='project'>Проекты</h2>
                <div className='projects_img'>
                    <div className='project_position'><img src={projects1} alt="" /><h2>Studyum</h2><p>Сайт, айдентика</p></div>
                    <div className='project_position'><img src={projects2} alt="" /><h2>Studyum</h2><p>Сайт, айдентика</p></div>
                    <div className='project_position'><img src={projects3} alt="" /><h2>Studyum</h2><p>Сайт, айдентика</p></div>
                    <div className='project_position'><img src={projects4} alt="" /><h2>Studyum</h2><p>Сайт, айдентика</p></div>
                    <div className='project_position'><img src={projects5} alt="" /><h2>Studyum</h2><p>Сайт, айдентика</p></div>
                    <div className='project_position'><img src={projects6} alt="" /><h2>Studyum</h2><p>Сайт, айдентика</p></div>
                    <div className='project_position'><img src={projects7} alt="" /><h2>Studyum</h2><p>Сайт, айдентика</p></div>
                    <div className='project_position'><img src={projects8} alt="" /><h2>Studyum</h2><p>Сайт, айдентика</p></div>
                </div>
                <button className='btn' >Смотреть все</button>
            </div>
            <div className='dark_five'>
                <img src={dark5} alt="" />
            </div>
            <div className='dark_six'>
                <img src={dark6} alt="" />
            </div>

        </section>
    );
};

export default Projects;
