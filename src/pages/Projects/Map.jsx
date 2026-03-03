import HamburgerMenu from '../components/Menu';
import '../../styles/DiseaseInfo.css';
import Contacts from '../components/Contacts';
import { Link } from 'react-router-dom';
import Revisor from '../components/Revisor';
import bakulev from '../../data/images/bakulev.jpg';
import petrovskogo from '../../data/images/petrovskogo.png';
import chazova from '../../data/images/chazova.jpg';
import fmba from '../../data/images/fmba.jpg';
import {doctors} from '../../data/texts/centers';

export default function Map(){
    return (
        <div>
            <HamburgerMenu />
            <div className='generalStyle'>
                <div className="blockWhite">
                    <div className="textHeaderGrey">
                        <p>Куда можно обратиться?</p>
                    </div>
                    <div className='textGrey'>
                       <h1><strong>Москва</strong></h1>
                       <p>Отделения, специализирующиеся на лечении пацентов с ГКМП:</p>
                       <div className='blockWithImage'>
                        <div>
                            <p>
                                <h3>НМИЦ сердечно-сосудистой хирургии им. А. Н. Бакулева, кардиохирургическое отделение № 15.</h3>
                            </p>
                             <button className="navButton">
                                <a href='https://bakulev.ru/about/structure/subdivision/otdelenie-khirurgicheskogo-lecheniya-kardiomiopatiy/' className='navButtonLink'> Страница отделения → </a>
                            </button>
                        </div>
                        <img src={bakulev} className='imgMap'></img>
                       </div>
                       <div className='blockWithImage'>
                        <div>
                            <p>
                                <h3>II кардиохирургическое отделение (отделение хирургического лечения дисфункций миокарда и 
                                сердечной недостаточности) в Российском научном центре хирургии им. Б.В. Петровского.</h3>
                            </p>
                             <button className="navButton">
                                <a href='https://med.ru/departments/otdelenie-khirurgicheskogo-lecheniya-disfunktsiy-miokarda-i-serdechnoy-nedostatochnosti-ii-kardiokhi/' className='navButtonLink'> Страница отделения → </a>
                            </button>
                        </div>
                        <img src={petrovskogo} className='imgMap'></img>
                       </div>
                       <div className='blockWithImage'>
                        <div>
                            <p>
                                <h3>
                                    Отдел заболеваний миокарда и сердечной недостаточности (9‑е клиническое отделение) 
                                    в НМИЦ кардиологии им. Е.И. Чазова.
                                </h3>
                            </p>
                             <button className="navButton">
                                <a href='https://www.cardio.ru/about/institut-klinicheskoj-kardiologii/departments/9-oe-klinicheskoe-otdelenie/' className='navButtonLink'> Страница отделения → </a>
                            </button>
                        </div>
                        <img src={chazova} className='imgMap'></img>
                       </div>
                       <div className='blockWithImage'>
                        <div>
                            <p>
                                <h3>
                                    Кардиохирургическое отделение ФНКЦ ФМБА России.
                                </h3>
                            </p>
                             <button className="navButton">
                                <a href='https://fnkc-fmba.ru/otdeleniya/terapevticheskiy-profil/kardiokhirurgicheskoe-otdelenie/' className='navButtonLink'> Страница отделения → </a>
                            </button>
                        </div>
                        <img src={fmba} className='imgMap'></img>
                       </div>
                    </div>
                    <div className='textGrey'>
                        <h2>Врачи, занимающиеся ГКМП:</h2>
                        <p><strong>!Список пока не проверен на возможность записи к врачам!</strong></p>
                        <p>Составлен на основе публикационной активности.</p>
                        <div className="MainNewsText"> 
                            {doctors.map((item) => (
                                <div className='cardDoctor'>
                                        <img src={item.photo} className='photo'></img>
                                        <div className='textDoctor'> 
                                            <h4>{item.name}</h4>
                                            <p>{item.specialization}</p>
                                        </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Contacts />
        </div>)}