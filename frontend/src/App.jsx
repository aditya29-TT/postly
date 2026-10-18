import React from 'react';
import{BrowserRouter as Router , Routes , Route,Navigate} from 'react-router-dom';
import CreatePost from './pages/createpost.jsx';
import Feed from './pages/feed.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/create-post" replace />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </Router>
  )
}

export default App;
