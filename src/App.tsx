import './App.css'
import Advertising from './components/advertising/Advertising';
import News from './components/News/News';
import Search from './components/search/Search';
import Banner from './components/advertising/Banner';
import Widgets from './components/widgets/Widgets';

function App() {
  return (
    <div className="App">
        <Advertising title='' text='' img='' />
        <News title='' />
        <Search />
        <Banner img='' />
        <Widgets />
    </div>
  );
}

export default App