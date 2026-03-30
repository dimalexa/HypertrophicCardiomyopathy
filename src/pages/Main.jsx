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
                    <div className='MainNav'>
                        <div style={{borderLeft : '6px solid rgb(162, 170, 240)', padding : '0px 20px'}}>
                            <h1><b>Понятная информация о гипертрофической кардиомиопатии</b></h1>
                            <h3>Надеемся, этот сайт поможет Вам в жизни с непростым заболеванием.</h3>
                        </div>
                        <div style={{display : 'flex', flexDirection : 'row', gap : '20px', flexWrap : 'wrap'}}>
                            <button className="navButton">
                                <Link to={'/about'} className='navButtonLink'> О нас → </Link>
                            </button>
                            <button className="navButton">
                                <Link to={'/disease-info'} className='navButtonLink'> Что такое ГКМП → </Link>
                            </button>
                            <button className="navButton">
                                <Link to={'/projects/test'} className='navButtonLink'> Тест на знания о ГКМП → </Link>
                            </button>
                        </div>
                        
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
            <Contacts />
        </div>
    );
}