import { useEffect, useState } from "react";
import VideoList from "./components/video_list/video_list";
import styles from './app.module.css';
import SearchHeader from './components/search_video/search_header';

function App() {
  const [videos, setVideos] = useState([]);
  const search = param => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${param}&type=video&key=AIzaSyDDQOa9ZNaQAysxnSsluFWWSxIelWVp2Ns`, requestOptions)
      .then(response => response.json())
      .then(result => result.items.map(video => ({...video, id: video.id.videoId})))
      .then(items => setVideos(items))
      .catch(error => console.log('error', error));
  }
  
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDDQOa9ZNaQAysxnSsluFWWSxIelWVp2Ns", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);

  return (
    <div className={styles.app}>     
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
