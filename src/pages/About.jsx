import HamburgerMenu from './components/Menu';
import '../styles/DiseaseInfo.css';
import hearthands from '../data/images/heart_with_hands.jpg'
import Contacts from './components/Contacts';

export default function About(){
    return (
        <div>
             <HamburgerMenu />
             <div class="generalStyle">
             <div className='blockWhite'>
                <div className='textHeaderGrey'>
                    <p>
                        Что это за сайт?
                    </p>
                </div>
                <div className='textGrey'>
                    <p>
                        Это сайт, направленный на информационную поддержку людей, живущих с гипертрофической кардиомиопатией. 
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
                </div>
                <img src={hearthands} className='medium-image'></img>
             </div>
             </div>
             <Contacts />
        </div>
    );
}