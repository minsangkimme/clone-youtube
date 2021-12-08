import { useEffect, useState } from "react";
import VideoList from "./components/video_list/video_list";
import styles from './app.module.css';
import SearchHeader from './components/search_video/search_header';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const search = param => {
    youtube
        .search(param)    
        .then(items => setVideos(items));
  }

  useEffect(() => {
    youtube
      .mostPopular()      
      .then(items => setVideos(items));
  }, []);

  return (
    <div className={styles.app}>     
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
