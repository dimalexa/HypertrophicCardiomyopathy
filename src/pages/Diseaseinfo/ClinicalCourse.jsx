import HamburgerMenu from '../components/Menu';
import '../../styles/DiseaseInfo.css';
import Contacts from '../components/Contacts';
import { Link } from 'react-router-dom';
import Revisor from '../components/Revisor';

export default function ClinicalCourse(){
    return (
        <div>
            <HamburgerMenu />
            <div className='generalStyle'>
            <div className="blockWhite">
                <div className="textHeaderGrey">
                    <p>Как может развиваться заболевание (варианты прогрессирования)?</p>
                </div>
            </div>
            <div className="blockWhite">
                 <div className="textGrey">
                    <div className='cardStyle' style={{'gap' : '5%'}}>
                        <p style={{'width' : '30vw'}}> В ⅔ случаев гипертрофическая кардиомиопатия не даёт серьёзных осложнений. 
                            Может проявляться лёгкой одышкой и изменениями в исследованиях. </p>
                        <div className='cardHeader' style={{'height' : '50px', alignContent : 'center', 'width' : '40vw', padding: '0px', display: 'flex', justifyContent: 'center'}}> 
                            <p>66 %</p>
                            </div>
                    </div>

                    <div className='cardStyle' style={{'gap' : '5%'}}>
                        <p style={{'width' : '30vw'}}>Но, к сожалению, бывают и осложнения:</p>
                        <div className='cardHeader' style={{'height' : '50px', alignContent : 'center', 'width' : '20vw', padding: '0px', display: 'flex', justifyContent: 'center'}}> 
                            <p>33 %</p>
                            </div>
                    </div>

                    <p> <strong>Сердечная недостаточность. </strong> Из-за того, что сердце слишком долго работает при повышенной нагрузке. 
                        Развивается при высоких градиентах давления (выраженной обструкции выносящего тракта левого желудочка), 
                        если есть фоновые заболевания — ишемическая болезнь сердца, гипертоническая болезнь, приобретённые 
                        клапанные пороки (возрастной стеноз аортального клапана).</p>
                    <p> <strong>Аритмии. </strong>Самая частая это фибрилляция предсердий — он также самая частая аритмия среди всех людей. 
                    При ГКМП есть предрасположенность к её развитию — из-за того что в предсердиях есть те же самые клетки миокарда, где есть 
                    мутации. Опасными являются желудочковые аритмии, именно для их предоствращения устанавливается ИКД (подробнее можно прочитать 
                    про него в разделе про имплантируемые устройства).Бывают аритмии проявляющиеся в урежении ритма — они возникают как сами по себе, 
                    так и могут быть следствием операций.</p>
                    <p><strong>Инсульт. </strong>Строго говоря, является осложнением не ГКМП, а фибрилляции предсердий, как с ГКМП так и без. 
                    При фибрилляции предсердие не сокращается целостно, а дергается по отдельным волокнам. Поэтому в предсердии кровь двигается 
                    менее интенсивно, чем в норме. Особенно это важно, потому что в предсердие открывается ушко — карман, заполненный кровью. 
                    Там кровь почти не двигается (при фибрилляции), из-за чего образуются тромбы. Они попадают в левый желудочек, а 
                    оттуда в аорту и другие органы, в том числе мозг — происходит инсульт (инфаркт мозга) или инфаркты других органов.</p>
                    <p><strong>Аневризма левого желудочка. </strong>Нечастное осложнение, чаще всего образуется при среднежелудочковой обструкции. 
                    Кровь скапливается ниже места сужения и растягивает стенки. Перерастянутая часть желудочка не может хорошо сокращаться.</p>
                    
                    <button className="navButton">
                        <Link to={'/life/medication'} className='navButtonLink'> Лекарства → </Link>
                    </button>
                    <p></p>
                    <button className="navButton">
                        <Link to={'/life/surgery'} className='navButtonLink'> Операции → </Link>
                    </button>
                    <p></p>
                    <button className="navButton">
                        <Link to={'/life/devices'} className='navButtonLink'> Имплантируемые устройства → </Link>
                    </button>
                    <p>И обязательно:</p>
                    <button className="navButton">
                        <Link to={'/life'} className='navButtonLink'> Жизнь с ГКМП → </Link>
                    </button>
                </div>
            </div>
            <Revisor page='ClinicalCourse'/>
            </div>
            <Contacts />
        </div>

    )
}