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
                        <div className='cardHeader' style={{'height' : '50px', 'align-content' : 'center'}}>  %</div>
                        <p></p>
                        <p> Не испытывают на протяжении жизни симптомов гипертрофической кардиомиопатии</p>
                    </div>

                    <div className='cardStyle' style={{'gap' : '5%'}}>
                        <div className='cardHeader' style={{'height' : '50px', 'align-content' : 'center'}}>  %</div>
                        <p></p>
                        <p>Вне зависимости от того, есть ли обструкция (препятствие выходу крови из сердца), 
                            может развиться сердечная недостаточность. Это состояние, когда возможности сердца не отвечают тем потокам крови, 
                            которые нужны организму. Либо желудочку приходиться чрезмерно напрягаться для достижения необходимого потока и давления.</p>
                    </div>

                    <div className='cardStyle' style={{'gap' : '5%'}}>
                        <div className='cardHeader' style={{'height' : '50px', 'align-content' : 'center'}}>  %</div>
                        <p> При среднежелудочковой обструкции (то есть когда стенка желудочка утолщается только посередине) 
                            может развится аневризма стенки левого желудочка.</p>
                    </div>
                    
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
            <Revisor />
            </div>
            <Contacts />
        </div>

    )
}