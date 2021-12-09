class Youtube {
    constructor(httpClient) {
        this.youtube = httpClient;
    }

    async mostPopular() {
        try {
            const response = await this.youtube.get('videos', {
                params: {
                    part: 'snippet',
                    chart: 'mostPopular',
                    maxResults: 25,
                }
            });

            return response.data.items;
        } catch (error) {
            return console.log('error', error);
        }        
    }

    async search(query) {
        try {
            const response = await this.youtube.get('search', {
                params: {
                    part: 'snippet',                    
                    maxResults: 25,
                    type: 'video',
                    q: query,
                }
            });

            return response.data.items.map(video => ({ ...video, id: video.id.videoId }));
        } catch (error) {
            return console.log('error', error);
        }        
    }
}

export default Youtube;