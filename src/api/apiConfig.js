const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '56baa52df299fe3b08b6eb74f4ad1767',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;