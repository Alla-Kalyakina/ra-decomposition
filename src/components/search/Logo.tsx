interface Props{
    logo:string
}

const Logo = ({logo}:Props) => {
    return(
        <>
            <img src={logo}  className="logo" />
        </>
    )
}

export default Logo;