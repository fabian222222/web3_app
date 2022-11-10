export interface FavoriteArtist {
    img: string
    name: string
    rate: number
    listener: number
    topSong: TopSong
    albums: Album[]
}

export interface Album {
    albumName: string
    albumLenght: string
    listener: number
    artistName: string
    isTrending: boolean
}

interface TopSong {
    name: string
    listenCount: string
}