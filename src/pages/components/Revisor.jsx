import '../../styles/DiseaseInfo.css';
import doctor from '../../data/images/doctor.jpg';

export default function Revisor(){
    return (
        <div style={{'display' : 'flex', 'justify-content' : 'flex-end'}}>
                    <div style={{'font-size' : '14px', 'width' : 'fit-content'}} className='quoteStyle'>
                        <div className='blockWithImage'>
                        <div>
                            <p>Проверено <b>этим врачом</b></p>
                            <p>к.м.н., стаж такой то</p>
                        </div>
                        <img src={doctor} style={{'border-radius' : '50%', 'max-height' : '10vw'}}></img>
                    </div>
                    Дата последнего обновления статьи: 13.02.26
                    </div>
        </div>
    )
}