import './App.css';
import { Routes, Route, } from 'react-router-dom'
import { ArticleCard } from './components/ArticleCard';
import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import { Topics } from './components/Topics'
import Articles from './components/Articles';
import NotFound from './components/errors/NotFound'
import CommentsCard from './components/CommentsCard';
import Welcome from './components/Welcome';

function App() {

  return (
    <div>
      <header className="app-header">
        <Header />
      </header>
      <NavBar />
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/articles" element={<ArticleCard />} />
        <Route path='/topics/:topic' element={<ArticleCard />} />
        <Route path='/articles/:article_id' element={<Articles />} />
        <Route path='/articles/:article_id/comments' element={<CommentsCard />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
