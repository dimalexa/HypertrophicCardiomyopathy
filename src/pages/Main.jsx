import heart from '../data/images/heart.jpg';
import HamburgerMenu from './components/Menu';
import '../styles/Main.css';
import hearthands from '../data/images/heart_with_hands.jpg'

export default function Main(){
    return (
        <div >
            <HamburgerMenu />
            <div className="Main">
                <div className="Main-header">
                    <img src={heart} className="Heart-logo" alt="logo" />
                    <div>
                    <div className="Main-header-header-text">
                    <p>Что это за сайт?</p>
                    </div>
                    <div className="Main-header-text"> 
                    <p> Это сайт, направленный на информационную поддержку людей, живущих с гипертрофической кардиомиопатией. 
                        Материалы на сайте призваны дать представление о том, что это за диагноз, как он лечится и как с ним жить.
                        Искренне надеемся, что это поможет Вам или Вашим близким!
                    </p>
                    <p>
                        Сайт написан на основе действующих клинических рекомендаций - <a href='https://cr.minzdrav.gov.ru/view-cr/283_2'>Российского кардиологического общества (2025)</a>, 
                        <a href='https://www.ahajournals.org/doi/10.1161/CIR.0000000000001250'>AHA (2024)</a>,   
                        <a href='https://academic.oup.com/eurheartj/article/44/37/3503/7246608'>ESC (2023)</a>.
                    </p>
                    <p>
                        Также идейным вдохновением послужил сайт <a href='https://www.4hcm.org/'>HCMA (Hypertrophic Cardiomyopathy Association)</a>.
                    </p>
                    <p>Знакомится с информацией лучше по порядку - для начала читать общий раздел, а затем переходить к специализированным.</p>
                    </div>
                    </div>
                </div>
                <div className="block">
                    <div className="block-header">
                    Контакты
                    </div>
                    <hr className="line"></hr>
                    <div className='block-image'>
                        <div className="block-text">
                            <p>Если у Вас возникли вопросы или предложения, пожалуйста, напишите на почту <b>dimitrichenkoai@my.msu.ru</b></p>
                            <p>Ссылки на найденные сообщества:</p>
                            <ol>
                                <li>тут будет ссылка</li>
                                <li>тут будет ссылка</li>
                                <li>тут могла бы быть реклама Вашего сообщества.</li>
                            </ol>
                        </div>
                        <div>
                            <img src={hearthands} className='medium-image'></img>
                        </div>
                    </div>
                </div>
                <div className="block">
                    <p>
                    </p>
                </div>
            </div>
        </div>
    );
}