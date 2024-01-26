interface Props {
    exchange:{currency:number,currencyName:string}
}
// курс валют
const Сurrency = ({exchange}:Props) => {

    return (
        <>
            <div className='exchange'>
                <div className='currency_name'>{exchange.currencyName}</div>
                <div className='currency_value'>{exchange.currency}</div>
            </div>
        </>
    )
}

export default Сurrency;