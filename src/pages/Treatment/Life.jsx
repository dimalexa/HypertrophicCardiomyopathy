import HamburgerMenu from '../components/Menu';
import '../../styles/DiseaseInfo.css';
import food from '../../data/images/smoked-vegetable-slices-aubergine-tomato-bell-pepper-onion.jpg';
import exercise from '../../data/images/runners.jpg';
import profession from '../../data/images/profession.jpg';
import driving from '../../data/images/cardriving.jpg';
import vaccination from '../../data/images/vaccination.jpg';
import flight from '../../data/images/flight.jpg';
import Contacts from '../components/Contacts';

export default function Life(){
    return (
        <div>
            <HamburgerMenu />
            <div className='generalStyle'>
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
                            <li>Поддержание нормального веса — так как лишний вес является фактором риска сердечно-сосудистых заболеваний.</li>
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
                            Уровень физических усилий на работе должен соответствовать клиническому статусу пациента.</li>
                            <li>Для некоторых видов деятельности (пилотирование, военная служба) существуют строгие ограничения при приеме на работу.</li>
                        </ul>
                    </div>
                </div>

                <div className='blockWithImage'>
                    <div className='textBlock'>
                        <div className='textSubheaderGrey' style={{'padding-bottom' : '10px', 'border-bottom' : '3px solid #5a5f91'}}>Вождение автомобиля</div>
                        <ul>
                            <li>Можно получать водительские права и продолжать водить машину, если нет 
                            инвалидизирующих симптомов (ограничивающих повседневную активность).</li>
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
                        </ul>
                    </div>
                    <div>
                        <img className='smallImage' src={flight}></img>
                    </div>
                </div>
            </div>
            </div>
            <Contacts />
        </div>

    )
}