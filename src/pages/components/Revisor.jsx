import '../../styles/DiseaseInfo.css';
import doctor from '../../data/images/doctor.jpg';
import { upd } from '../../data/texts/upd';

export default function Revisor({page}){
    let number = 0;
    for (let i = 0; i < upd.length; i++) {
        console.log(upd[i].page, page)
        if (upd[i].page === page){
            number = i;
        }
    }
    return (
        <div style={{'display' : 'flex', 'justify-content' : 'flex-end'}}>
                    <div style={{'font-size' : '14px', 'width' : 'fit-content'}} className='quoteStyle'>
                        <div className='blockWithImage'>
                        <div>
                            <p>Проверено <b>{upd[number].revisor}</b></p>
                            <p>{upd[number].achievements}</p>
                        </div>
                        <img src={doctor} style={{'border-radius' : '50%', 'max-height' : '10vw'}}></img>
                    </div>
                    Дата последнего обновления статьи: {upd[number].date}
                    </div>
        </div>
    )
}