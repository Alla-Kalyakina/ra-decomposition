import Header from './Header';
import Сurrency from './Сurrency';
import Articles from './Articles';
import moment from 'moment';

interface Props{
    img?:string;
    children?: React.ReactNode;
    title:string;
}

const News: React.FC<Props> = ({title}: Props) => {
    
    return (
        <>  
            <header className='header'>
                <div className='news'>
                    <Header date={moment().format('LTS')} title={title}/>
                    <Сurrency exchange={''}/>
                </div>
                <Articles img={''} text={'text'}/>
            </header>
        </>
    )
}

export default News;