import cardiologist from '../data/images/cardiologist.jpg';
import HamburgerMenu from './components/Menu';
import Contacts from './components/Contacts';
import '../styles/Main.css';
import { Link } from 'react-router-dom';
import { news } from '../data/texts/news';


export default function Main(){

    return (
        <div >
            <HamburgerMenu />
            <div className='Main'>
                <div className="MainBlock">
                    <div className='MainNav'>
                        <p><b>Здравствуйте! Вы оказались на сайте, посвященном 
                            информированию пациентов с гипертрофической кардиомиопатией.</b></p>
                        <button className="navButton">
                            <Link to={'/about'} className='navButtonLink'> О нас → </Link>
                        </button>
                        <p><b>Если Вы не знаете, откуда начать, начните отсюда:</b></p>
                        <button className="navButton">
                            <Link to={'/disease-info'} className='navButtonLink'> Что такое ГКМП → </Link>
                        </button>
                    </div>
                    <div className='MainNews'>
                        <div className="MainNewsHeader">
                            Новости сайта
                        </div>
                        <div className="MainNewsText"> 
                            {news.map((item, index) => (
                                <div style={{'border-bottom' : '1px solid rgb(216, 216, 221)'}}>
                                    <h2>{item.title}</h2>
                                    <p>{item.content}</p>
                                    <p style={{'font-size' : '14px', 'text-align' : 'end'}}>Дата создания новости: {item.date}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Contacts />
        </div>
    );
}