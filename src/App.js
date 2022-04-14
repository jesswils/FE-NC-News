import './App.css';
import { Routes, Route, } from 'react-router-dom'
import { Articles } from './components/Articles';
import { NavBar } from './components/NavBar';
import { Topics } from './components/Topics'
import ArticleCard from './components/ArticleCard';
import NotFound from './components/errors/NotFound'
import CommentsCard from './components/CommentsCard';
import Welcome from './components/Welcome';

function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/articles" element={<Articles />} />
        <Route path='/topics/:topic' element={<Articles />} />
        <Route path='/articles/:article_id' element={<ArticleCard />} />
        <Route path='/articles/:article_id/comments' element={<CommentsCard />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
