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
    artistName: string
    song: Song[]
}

export interface Song {
    name: string
    listener: number
    isTrending: boolean
}
interface TopSong {
    name: string
    listenCount: string
}
