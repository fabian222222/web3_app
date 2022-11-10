import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { Album, FavoriteArtist, Song } from "../../../Interface/Store/FavoriteArtist";
import { NewAlbum } from "../../../Interface/Store/NewAlbum";
import { SafeAreaView } from "react-native-safe-area-context";


const SongItem = ({songData}: {songData: Song}) => {
  // let navigation = useNavigation();

  
  return (
    <TouchableOpacity>
      <View style={stylesAlbumTitles.songItem}>
        <Image
          style={stylesAlbumTitles.songAlbum}
          source={require(`./../../../../assets/images/store/bannerSong.png`)}
        />
        <View style={stylesAlbumTitles.allData}>
          <View style={stylesAlbumTitles.firstRowData}>
            <Text style={stylesAlbumTitles.titleSong}>{songData.name}</Text>
            <View style={stylesAlbumTitles.percentage}>
              <Image
                style={stylesAlbumTitles.up}
                source={songData.isTrending ? require(`./../../../../assets/up.png`) : require(`./../../../../assets/down.png`) }
              />
              <Text style={songData.isTrending ? stylesAlbumTitles.percentageTitlePositive: stylesAlbumTitles.percentageTitleNegative}>25%</Text>
            </View>
          </View>
          <View style={stylesAlbumTitles.firstRowData}>
            <Text style={stylesAlbumTitles.listener}>Nombre d’écoute : {songData.listener}</Text>
            <View style={stylesAlbumTitles.percentage}>
              <Text style={stylesAlbumTitles.incrementToken}>+1</Text>
              <Text style={stylesAlbumTitles.remainingTime}>dans 25min</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}




const AlbumCover = ({ album }: { album: NewAlbum }) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Image
          style={styles.albumCover}
          source={require(`./../../../../assets/images/albumCover/Album2.png`)}
        />
        <View style={styles.titlesContainer}>
          <View>
            <Text style={styles.albumText}>{album.name}</Text>
            <Text style={styles.rate}>{album.lenght}</Text>
          </View>
          <FontAwesome
            style={styles.playIcon}
            name="play"
            size={15}
            color="white"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export function AlbumTitles({ song }:  Pick<Album, "song">) {
  
  return (
    <View style={stylesAlbumTitles.componentsContainer}>
      <Text style={stylesAlbumTitles.titleFavArtist}>Cet album contient</Text>
      <View>
      <View>
      <FlatList
        data={song}
        renderItem={( {item}: {item: Song} ) => {
        return (
            <SongItem songData={item} />
        )
    }}
/>
</View>
      </View>
    </View>
  );
}

const stylesAlbumTitles = StyleSheet.create({
  componentsContainer: {
    marginTop: 10,
    marginLeft: 20,
  },
  percentage: {
    flexDirection: 'row',
  },
  titleFavArtist: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
  allData: {
    width: 270,
    height: 50,
    justifyContent: 'space-between',
    marginRight: 10
  },
  songItem: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 70,
    width: 350,
    backgroundColor: 'rgba(165, 74, 255, 0.08)',
    borderRadius: 12.2,
    alignItems: 'center'
  },
  songAlbum: {
    marginLeft: 10
  },
  firstRowData: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  titleSong: {
    fontSize: 16,
    color: 'white',
    fontWeight: '500',
  },
  percentageTitlePositive: {
    color: '#00FF5A',
    fontSize: 16
  },
  percentageTitleNegative: {
    color: '#FF0000',
    fontSize: 16
  },
  up: {
    marginTop: 5,
    marginRight: 5,
  },
  listener: {
    color: 'white',
    fontWeight: '400',
    fontSize: 14
  },
  incrementToken: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    marginRight: 10,
    lineHeight: 20
  },
  remainingTime: {
    fontSize: 14,
    fontWeight: '400',
    color: 'white'
  }


});

const styles = StyleSheet.create({
  container: {
    width: 175,
    height: 230,
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  titlesContainer: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    width: 157,
    alignItems: "center",
  },
  albumCover: {
    width: 157,
    height: 157,
    alignItems: "center",
  },
  playIcon: {
    marginRight: 10,
  },
  albumText: {
    lineHeight: 26,
    fontWeight: "500",
    color: "white",
    fontSize: 16,
  },
  rate: {
    lineHeight: 25,
    color: "white",
    fontSize: 14,
  },
});

export default AlbumCover;
