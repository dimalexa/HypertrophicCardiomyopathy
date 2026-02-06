import HamburgerMenu from '../components/Menu';
import TextSwitcher from '../components/TextSwitcher';
import Contacts from '../components/Contacts';
import '../../styles/DiseaseInfo.css';
import {dataSymptoms} from '../../data/texts/diseaseinfo';
import { Link } from 'react-router-dom';

export default function Symptoms(){
    return (
        <div>
            <HamburgerMenu />

            <div className='generalStyle'>
            <div className="blockWhite">
                <div className="textHeaderGrey">
                    <p>Какими симптомами может проявляться ГКМП?</p>
                </div>
                <div className='textGrey'>
                     <p>
                        Механизм возникновения всех симптомов вытекает из того, как развивается ГКМП, 
                        что было описано в предыдущем разделе. Однако большая часть людей, живущих с ГКМП, 
                        вообще не испытывает каких либо проблем. 
                    </p>
                    <p>
                        <b>Важно помнить, что эти симптомы появляются не только при гипертрофической кардиомиопатии! </b>  
                         Одышка может быть следствием болезней легких, стенокардия — той же ишемической болезни сердца, 
                        сердцебиения могут сопровождать тиреотоксикоз, а усталость, слабость и головокружения — быть 
                        следствием гиповитаминозов и анемии. 
                    </p>
                </div>
            </div>

            <TextSwitcher data={dataSymptoms} />

            <div className="blockWhite">
                <div className="textHeaderGrey">
                    Когда стоит обратиться к врачу?
                </div>
            </div>
            <div className="blockWhite">
                 <div className="textGrey">
                    <p>Однако есть “красные флаги”, когда к врачу лучше обратиться пораньше:</p>
                    <ul>
                    <li>Когда симптомы ухудшились за короткий период — появился новый вид сердцебиений, стала 
                        выраженней стенокардия (удается пройти без боли меньшее расстояние), одышка возникает быстрее чем раньше.</li>
                    <li>Когда симптомы стали сочетаться — сердцебиения стали сопровождаться одышкой или головокружением, 
                        это значит что аритмии стали значительно влиять на способность сердца качать кровь.</li>
                    </ul>
                </div>
                <p>Кроме симптомов, врачу диагноз помогают поставить различные исследования. Прочитать про некоторые из них и о непростом процессе диагностики можно ниже:</p>
                <button className="navButton">
                            <Link to={'/disease-info/diagnosis'} className='navButtonLink'> Почитать про диагностику → </Link>
                </button>
            </div>
                <div style={{'display' : 'flex', 'justify-content' : 'flex-end'}}>
                    <div style={{'font-size' : '14px', 'width' : 'fit-content'}} className='quoteStyle'>Дата последнего обновления статьи: 5.02.26</div>
                </div>
            </div>
            <Contacts />
        </div>

    )
}