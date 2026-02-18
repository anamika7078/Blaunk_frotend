import api from './api';

let adsCache: any[] | null = null;
let adsPromise: Promise<any[]> | null = null;

export const getAds = async () => {
    if (adsCache) return adsCache;
    if (adsPromise) return adsPromise;

    adsPromise = api.get('/ads').then(response => {
        adsCache = response.data;
        adsPromise = null;
        return adsCache;
    }).catch(error => {
        adsPromise = null;
        throw error;
    });

    return adsPromise;
};
