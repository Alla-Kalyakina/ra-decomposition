import Links from "./Links"
import Input from "./Input"
import Button from "./Button" 
import Logo from "./Logo"

const Search = () =>{
    return (
        <>
            <Links/>
            <div className="search_ground">
                <Logo logo={''}/>
                <Input/>
                <Button/>
            </div>
        </>
    )
}

export default Search;