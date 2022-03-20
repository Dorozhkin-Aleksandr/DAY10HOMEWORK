import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import PostListProvider from './contexts/PostListContext';

//4ое оборачиваем содержимое разметки провайдером в блоке return:
function App() {
  return (
    <PostListProvider>
      <div className="container py-5">
        <Header />
        <Main />
      </div>
    </PostListProvider>
  );
}
//вся разметка внутри провайдера PostListProvider попадает в пропс children
export default App;
