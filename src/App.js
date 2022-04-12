import './App.css';
import { Routes, Route, } from 'react-router-dom'
import { ArticleCard } from './components/ArticleCard';
import { Header } from './components/Header';
import NavBar from './components/NavBar';
import { TopicsCard } from './components/TopicsPage'
import ArticlesPage from './components/ArticlesPage';
import NotFound from './components/errors/NotFound'
import CommentsCard from './components/CommentsCard';

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
        <Route path='/topics/:topic' element={<ArticleCard />} />
        <Route path='/articles/:article_id' element={<ArticlesPage />} />
        <Route path='/articles/:article_id/comments' element={<CommentsCard />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
