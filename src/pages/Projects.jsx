import HamburgerMenu from './components/Menu';
import '../styles/DiseaseInfo.css';
import Contacts from './components/Contacts';
import { Link } from 'react-router-dom';
import Revisor from './components/Revisor';

export default function Projects(){
    return (
        <div>
            <HamburgerMenu />
            <div className='generalStyle'>
                <div className="blockWhite">
                    <div className="textHeaderGrey">
                        <p>Проекты</p>
                    </div>
                    <div className='textgrey'>
                        <h2><strong>Дорожная карта</strong></h2>
                        <p>Планируется создание списка учереждений, специализующихся на лечении ГКМП, 
                            а также списка действующих врачей.</p>
                        <button className="navButton">
                            <Link to={'/projects/map'} className='navButtonLink'> Дорожная карта → </Link>
                        </button>
                        <p></p>
                        <h2><strong>Регистр пациентов с ГКМП</strong></h2>
                        <p>Пока существует только детский регистр. Им занимаются врачи НМИЦ им. Алмазова в Санкт-Петербурге.</p>
                        <button className="navButton">
                            <Link to={'/projects/registr'} className='navButtonLink'> Про регистр → </Link>
                        </button>
                    </div>
                </div>
            </div>
            <Contacts />
        </div>)}