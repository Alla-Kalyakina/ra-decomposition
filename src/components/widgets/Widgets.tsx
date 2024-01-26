import Item from './Item';
import Post from './Post';

// отображение виджетов
const Widgets = () => {
    //массив виджетов
    const posts=[{},{},{}]
  return (
    <div>
        {posts.map(item=>
            <Post title={item.title}>
                <Item item={item}></Item>
            </Post>)}
    {/* <Post title={'title'}>
        <Weather type={'type'} temperature={'temperature'} promt={'text'}/>
        </Post>

        <Post>
            <Visited items={items}/>
        </Post>

        <Post>
            <Map/>
        </Post>

        <Post>
            <TVProgramm/>
        </Post>

        <Post>
            <Ether/>
        </Post>  */} 
    </div>
  );
}

export default Widgets;