import './App.css';
import { Routes, Route, } from 'react-router-dom'
import { ArticleCard } from './components/articles/ArticleCard';
import { TopicsPage } from './components/topics/TopicsPage';
import { Header } from './components/Header';
import NavBar from './components/NavBar';
import TopicsCard from './components/topics/TopicsCard'
import ArticlesPage from './components/articles/ArticlesPage';

function App() {

  return (
    <div>
      <header className="app-header">
        <Header />
      </header>
      <NavBar />
      <Routes>
        <Route path='/' element={<ArticleCard />} />
        <Route path="/topics" element={<TopicsCard />} />
        <Route path="/articles" element={<ArticleCard />} />
        <Route path='/topics/:topic' element={<TopicsPage />} />
        <Route path='/articles/:article_id' element={<ArticlesPage />} />
      </Routes>
    </div>
  );
}

export default App;
