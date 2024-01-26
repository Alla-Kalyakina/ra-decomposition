interface Props {
    children?: React.ReactNode;
    img: string;
    text: string;
}
//статьи
const Articles = ({img,text}:Props) => {

    return (
        <> 
            <div className='article'>
                <img src={img}/>
                <h2>{text}</h2>
            </div>
        </>
    )
}

export default Articles;