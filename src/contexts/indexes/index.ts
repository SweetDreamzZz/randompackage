export interface workId {
    pixivId?: number;
    seigaId?: number;
    danbooruId?: number;
    gelbooruId?: number;
    sankakuId?: number;
};

// anime: [21, 22]
// art: [5, 6, 8, 9, 10, 11, 12, 20, 25, 26, 27, 28, 29, 31, 32, 34, 35]
// manga: [16, 18, 19, 36, 37, 38]

export * from './pixiv'; // art [5, 6]
export * from './seiga'; // art [8]
export * from './danbooru'; // art [9]
export * from './drawr'; // art [10]
export * from './nijie'; // art [11]
export * from './yandere'; // art [12]
export * from './fakku'; // manga [16] 
export * from './hmisc'; // manga [18, 38]
export * from './2dmarket'; // manga [19]
export * from './medibang'; // art [20]
export * from './anime'; // anime [21, 22]
export * from './gelbooru'; // art [25]
export * from './konachan'; // art [26]
export * from './sankaku'; // art [27]
// export * from './animepictures'; // no results - temp
export * from './e621'; // art [29]
export * from './idol'; // art [30]
export * from './bcy'; // art [31, 32]
export * from './portalgraphics'; // art [33]
export * from './deviant'; // art [34]
export * from './pawoo'; // art [35]
export * from './madokami'; // manga [36]
export * from './mangadex'; // manga [37]