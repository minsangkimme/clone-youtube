import { useEffect, useState } from "react";
import VideoList from "./components/video_list/video_list";
import styles from './app.module.css';
import SearchHeader from './components/search_video/search_header';
import VideoDetail from "./components/video_detail/video_detail";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  const selectVideo = video => {
    setSelectedVideo(video);
  }

  const search = param => {
    setSelectedVideo(null);
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
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList videos={videos} onVideoClick={selectVideo} display={ selectedVideo ? 'list' : 'grid'} />
        </div>
      </section>
    </div>
  );
}

export default App;
