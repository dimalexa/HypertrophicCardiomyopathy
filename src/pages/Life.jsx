import HamburgerMenu from './components/Menu';
import '../styles/DiseaseInfo.css';
import food from '../data/images/smoked-vegetable-slices-aubergine-tomato-bell-pepper-onion.jpg';
import exercise from '../data/images/runners.jpg';
import profession from '../data/images/profession.jpg';
import driving from '../data/images/cardriving.jpg';
import vaccination from '../data/images/vaccination.jpg';
import flight from '../data/images/flight.jpg';
import pregnant from '../data/images/pregnant.jpg';
import Contacts from './components/Contacts';
import { Link } from 'react-router-dom';

export default function Life(){
    return (
        <div>
            <HamburgerMenu />
            <div className='generalStyle'>
                <div className="blockWhite">
                <div className="textHeaderGrey">
                    Как ГКМП может повлиять на жизнь
                </div>
                <div className="textGrey">
                <div className='blockWithImage'>
                    <div>
                        <img className='smallImage' src={food}></img>
                    </div>
                    <div className='textBlock'>
                        <div className='textSubheaderGrey' style={{'padding-bottom' : '10px', 'border-bottom' : '3px solid #5a5f91'}}>Диета</div>
                        <ul>
                            <li>Прием большого объема пищи может вызвать боли в грудной клетке, 
                                особенно у пациентов с обструкцией ВТЛЖ, поэтому рекомендуют частое дробное питание.</li>
                            <li>Запоры — частый побочный эффект верапамила, должны контролироваться диетой 
                                (повышение содержания клетчатки) и/или слабительными средствами.</li>
                            <li>Поддержание нормального веса — так как лишний вес является фактором риска сердечно-сосудистых заболеваний. 
                                Ваше сердце и артерии все так же подвержены атеросклерозу, и все так же может развиться развиться диабет 2 типа.</li>
                        </ul>
                    </div>
                </div>

                <div className='blockWithImage'>
                    <div className='textBlock'>
                        <div className='textSubheaderGrey' style={{'padding-bottom' : '10px', 'border-bottom' : '3px solid #5a5f91'}}>Физические нагрузки</div>
                        <ul>
                            <li>Относится только к высокоинтенсивным физическим нагрузкам и соревнованиям. 
                                Нагрузки умеренной и легкой интенсивности рекомендуются!</li>
                            <li>Если носительство гена никак не проявляется, то могут быть рассмотрены даже высокоинтенсивные 
                                нагрузки и участие в соревнованих  — решение принимает команда врачей.</li>
                        </ul>
                    </div>
                    <div>
                        <img className='smallImage' src={exercise}></img>
                    </div>
                </div>

                <div className='blockWithImage'>
                    <div>
                        <img className='smallImage' src={profession}></img>
                    </div>
                    <div className='textBlock'>
                        <div className='textSubheaderGrey' style={{'padding-bottom' : '10px', 'border-bottom' : '3px solid #5a5f91'}}>Профессия</div>
                        <ul>
                            <li>Большинство пациентов с ГКМП могут продолжать обычную трудовую деятельность. 
                            Уровень физических усилий на работе должен соответствовать клиническому статусу.</li>
                            <li>Для некоторых видов деятельности (пилотирование, военная служба) существуют строгие ограничения при приеме на работу. AHA (American Heart Association) 
                                придерживается мнения, что если нет симптомов и ризки аритмий низки, можно работать и в этих профессиях. Однако последнее слово за работадателями.</li>
                        </ul>
                    </div>
                </div>

                <div className='blockWithImage'>
                    <div className='textBlock'>
                        <div className='textSubheaderGrey' style={{'padding-bottom' : '10px', 'border-bottom' : '3px solid #5a5f91'}}>Вождение автомобиля</div>
                        <ul>
                            <li>Можно получать водительские права и продолжать водить машину, если нет 
                            инвалидизирующих симптомов (ограничивающих повседневную активность, либо эпизоды неконтролируемых аритмий).</li>
                        </ul>
                    </div>
                    <div>
                        <img className='smallImage' src={driving}></img>
                    </div>
                </div>

                <div className='blockWithImage'>
                    <div>
                        <img className='smallImage' src={vaccination}></img>
                    </div>
                    <div className='textBlock'>
                        <div className='textSubheaderGrey' style={{'padding-bottom' : '10px', 'border-bottom' : '3px solid #5a5f91'}}>Вакцинация</div>
                        <ul>
                            <li>При отсутствии противопоказаний рекомендована ежегодная вакцинация от гриппа. 
                            Грипп вызывает много сердечно-сосудистых осложнений, поэтому стоит поберечь сердце.</li>
                        </ul>
                    </div>
                </div>

                <div className='blockWithImage'>
                    <div className='textBlock'>
                        <div className='textSubheaderGrey' style={{'padding-bottom' : '10px', 'border-bottom' : '3px solid #5a5f91'}}>Авиаперелеты</div>
                        <ul>
                            <li>Большинство бессимптомных пациентов или с незначительной симптоматикой могут безопасно совершать авиаперелеты.</li>
                            <li>Если у Вас установлен ИКД или ЭКС, не забывайте в аэропорт карточку владельца этого устройства.</li>
                        </ul>
                    </div>
                    <div>
                        <img className='smallImage' src={flight}></img>
                    </div>
                </div>
                </div>

                <div className='blockWithImage'>
                    <div className='textBlock'>
                        <div className='textSubheaderGrey' style={{'padding-bottom' : '10px', 'border-bottom' : '3px solid #5a5f91'}}>Беременность</div>
                        <ul>
                            <li>Гипертрофическая кардиомиопатия не является препятствием для беременности и естественных родов. Во время родов можно сделать 
                                общую или эпидуральную анестезию. Однако вполне вероятно, что придется несколько изменить терапию — некоторые препараты могут 
                                быть опасны для ребенка. Действие пероральных антикоауглянтов не изучено, поэтому их придется отменить, варфарин разрешен 
                                только в I триместре — если вам необходимо принимать антикоагулянт, это скорее всего будут низкомолекулярные гепарины.
                                 Бета-блокаторы не оказывают вредного влияния, кроме атенолола — у него есть потенциальный риск. Большинство антиаритмиков 
                                 противопоказаны — однако кардиоверсия (электрическая перезарядка сердца) безопасна. Лучше всего, если риски потенциальных 
                                 аритмий оценены до беременности и если они высоки, то сделана соответствующая операция с установкой ИКД.</li>
                            <li>Также может понадобится больше обследований — например, чаще делать ЭхоКГ. 
                            </li>
                            <li>Необходимо, чтобы беременность вел не только гинеколог, но и кардиолог, чтобы оптимизировать лечение. </li>
                            <li>
                                В зависимости от градиента давления (определяется по ЭхоКГ), беременность будут вести по разному: при градиенте меньше 30 мм 
                                рт. ст. И отсутствии симптомов наблюдение и роды будут мало отличаться от обычных. При градиенте от 30 до 50 мм. рт. ст. 
                                необходимо постоянное наблюдение и роды с исключением потуг. При 50 мм. рт. ст. нужна госпитализация на весь срок беременности. 
                            </li>
                            <li>
                                Если есть симптомы, ведением беременности должен заниматься экспертный перинатальный центр (3 уровня).
                            </li>
                        </ul>
                    </div>
                    <div>
                        <img className='smallImage' src={pregnant}></img>
                    </div>

                <button className="navButton">
                    <Link to={'/life/surgery'} className='navButtonLink'> Почитать про операции → </Link>
                </button>
                <button className="navButton">
                    <Link to={'/life/drugs'} className='navButtonLink'> Почитать про терапию → </Link>
                </button>
                <button className="navButton">
                    <Link to={'/life/devices'} className='navButtonLink'> Почитать про имплантируемые устройства → </Link>
                </button>
                </div>
            </div>
                <div style={{'display' : 'flex', 'justify-content' : 'flex-end'}}>
                    <div style={{'font-size' : '14px', 'width' : 'fit-content'}} className='quoteStyle'>Дата последнего обновления статьи: 5.02.26</div>
                </div>
            </div>
            <Contacts />
        </div>

    )
}