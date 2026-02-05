import HamburgerMenu from './components/Menu';
import '../styles/DiseaseInfo.css';
import '../styles/Main.css';
import Contacts from './components/Contacts';
import { Link } from 'react-router-dom';
import {infotext} from '../data/texts/diseaseinfo';
import help from '../data/images/help.jpg';
import worldmap from '../data/images/worldmap.jpg';
import drugforlink from '../data/images/drugforlink.jpg';

export default function DiseaseInfo(){
    return (
        <div>
            <HamburgerMenu />
            <div className='generalStyle'>
            
                <div className='blockWithImage' style={{'background-color' : '#f0f0f3', 'border-radius' : '25px'}}>
                    <div className="textGrey">
                        <h3><b>Гипертрофическая кардиомиопатия (ГКМП) — наиболее распространенное наследственное заболевание сердца. 
                            Если вам поставили этот диагноз, важно понимать: вы не одиноки и сейчас есть много возможностей лечения.
                            Присоединяйтесь к сообществам по ссылке, задавайте вопросы — Вам ответят люди, которые живут с этим диагнозом уже много лет:</b></h3>
                        <button className="navButton">
                            <a href='https://t.me/GKMPchat' className='navButtonLink'> Сообщество в Telegram → </a>
                        </button>
                        <p></p>
                        <button className="navButton">
                            <a href='https://vk.com/club149728136' className='navButtonLink'> Сообщество в VK → </a>
                        </button>
                    </div>
                    <img src={help} className='imageStyle'></img>
                </div>
                <div className="blockWhite">
                <div className="textHeaderGrey">
                   Что же такое ГКМП?
                </div>
                <div className='blockWithImage'>
                <div className="textGrey" style={{'padding' : '20px 0px', 'border-bottom' : '3px solid #5a5f91', 'border-top' : '3px solid #5a5f91'}}> 
                    <ul>
                    <li><b>Распространенность:</b> ГКМП встречается у <b> 1 из 200 человек в общей популяции.</b> 
                        В России с этим заболеванием живут 300 тысяч (с установленным диагнозом). 
                        Оценка, исходя из распространённости по миру, - 722,5 тысяч. Всего в мире 20 млн. 
                        людей с гипертрофической кардиомиопатией</li>
                    <li><b>Суть диагноза:</b> Это генетически обусловленное утолщение (гипертрофия) стенки сердца. Обычно говорят про левый желудочек, хотя болезнь поражает все сердце.
                         Это не связано с артериальной гипертензией или пороками клапанов, с образом жизни - заболевание может проявиться вне зависимости от внешних факторов.</li>
                    <li><b>Вариативность течения:</b> Крайне важно, что течение болезни индивидуально. У значительной части пациентов (до 70%) 
                        ГКМП протекает малосимптомно или бессимптомно на протяжении всей жизни, не приводя к серьезным осложнениям.</li>
                    </ul>
                </div>
                <img src={worldmap} className='smallImage'></img>
                </div>
                <div className='cardStyle'>
                <div className="textGrey" style={{'background-color' : '#f0f0f3', 'border-radius' : '25px 0px 0px 25px', 'flex-grow' : '1', 'border-right' : '6px solid #5a5f91'}}>
                    <h2>Почему не стоит паниковать?</h2>
                </div>
                <div className="textGrey">
                    <ul> 
                        <li>ГКМП — одно из самых изученных заболеваний сердца. О нем известно очень много, и врачи во всем мире имеют четкие
                             протоколы наблюдения и лечения. <b>Вы не останетесь один на один с диагнозом.</b></li>
                        <li>Риск внезапной сердечной смерти при ГКМП - <b>0,2% в год.</b> В то же время риск смерти от автокатастрофы - <b>0.3% в год.</b> </li>
                        <li>Общая смертность от ГКМП составляет около 1% в год.</li>
                        <li><b>Медицина предлагает целый арсенал помощи.</b> Если симптомы (например, одышка, сердцебиение) все же появляются, 
                             есть много вариантов: от хорошо переносимых современных лекарств до малоинвазивных процедур (например, 
                            септальная алкогольная абляция) и хирургических операций (миэктомия), которые радикально решают проблему. 
                            А для контроля рисков существуют современные устройства, такие как кардиовертеры-дефибрилляторы (ИКД).</li>
                    </ul>
                </div>
                </div>
                <div className='cardStyle'>
                     <div className="textGrey" style={{'background-color' : '#f0f0f3', 'border-radius' : '25px 0px 0px 25px', 'flex-grow' : '1', 'border-right' : '6px solid #5a5f91'}}>
                    <h2>Что делать прямо сейчас?</h2>
                </div>
                <div className="textGrey">
                    <ol>
                        <li><b>Найдите своего врача.</b> Ищите кардиолога, который специализируется на ГКМП или наследственных заболеваниях сердца. 
                            Вы имеете право на второе мнение.</li>
                        <li><b>Задавайте вопросы.</b> Составьте список всего, что вас волнует, перед приемом. «Что означает моя конкретная ситуация?»,
                             «Какая физическая активность мне полезна?», «Как часто нужно приходить на осмотр?».</li>
                        <li><b>Обращайтесь в сообщества.</b> Существуют пациентские организации и проверенные онлайн-ресурсы, 
                            где можно пообщаться с теми, кто уже много лет живет с ГКМП. Ссылки на найденные выложены на главной странице.</li>
                        <li><b>Прочитайте информацию на этом сайте.</b>Тут собраны краткие выжимки проверенной полезной информации, 
                        которая может помочь Вам понять своё заболевание и как с ним жить</li>
                    </ol>
                </div>
                </div>
                <div className='textGrey' style={{'padding' : '20px 0px', 'text-align' : 'center'}}>
                    <h2><b>Вы можете узнать больше о гипертрофической кардиомиопатии, изучив эти разделы:</b></h2>
                </div>
                <div className='imgWithLink'>
                    <div className='imgWithLink-what'><Link to={'/treatment/what-is-hcm'} className='imgLink'>Патогенез</Link></div>
                    <div className='imgWithLink-symptoms'><Link to={'/treatment/symptoms'} className='imgLink'>Симптомы</Link></div>
                    <div className='imgWithLink-examination'><Link to={'/treatment/diagnosis'} className='imgLink'>Исследования</Link></div>
                    <div className='imgWithLink-progression'><Link to={'/treatment/clinical-course'} className='imgLink'>Осложнения</Link></div>
                    <div className='imgWithLink-drugs'><Link to={'/treatment/medication'} className='imgLink'>Терапия</Link></div>
                    <div className='imgWithLink-surgery'><Link to={'/treatment/surgery'} className='imgLink'>Операции</Link></div>
                    <div className='imgWithLink-devices'><Link to={'/treatment/devices'} className='imgLink'>Контроль аритмий</Link></div>
                    <div className='imgWithLink-lifestyle'><Link to={'/treatment/lifestyle'} className='imgLink'>Образ жизни</Link></div>
                </div>
                <div className='quoteStyle'>
                <div className="textGrey">
                    <p><b>ГКМП — это диагноз, а не приговор. Это особенность вашего сердца, которая требует внимания, 
                        но не должна отбирать радость жизни. Эффективность лечения основана на доказательной медицине и точной 
                        стратификации рисков. 
                        Главная задача — перевести диагноз в стадию устойчивой компенсации и продолжать жить активной жизнью.</b>
                    </p>
                </div>
                </div>
            </div>
            </div>
            <Contacts />
        </div>
    );
}