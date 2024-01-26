interface Props{
    title:string;
    date:string
}

const Header = ({title,date}:Props) => {

    return (
        <>
            <div className='headerNews'>
                <div className='title'>
                    <div className='title_now'>Сейчас в СМИ</div>
                    <div className='tittle_to'>в {title} Рекомендуем</div>
                </div>
                <div>
                    {date}
                </div>
            </div>
        </>
    )
}

export default Header;