import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import { FavoriteArtist, Album } from "../../../Interface/Store/FavoriteArtist";

const AlbumOfArtistItem = ({ album }: { album: Album }) => {
  let navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate<{}>("AlbumDetail", album)}
    >
      <View style={stylesAlbum.item}>
        <Image
          style={stylesAlbum.logo}
          source={require(`./../../../../assets/images/store/albumStore.png`)}
        />
        <View style={stylesAlbum.albumData}>
          <View>
            <Text style={stylesAlbum.albumDataName}>{album.albumName}</Text>
            <Text style={stylesAlbum.albumDataLenght}>{album.albumLenght}</Text>
          </View>
          <Image source={require(`./../../../../assets/eye.png`)} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export function FamousArtistSong() {
  return (
    <View style={stylesSong.componentsContainer}>
      <Text style={stylesSong.titleFavArtist}>Populaires</Text>
      <SafeAreaView>
        <View style={stylesBestSells.famousSong}>
          <TouchableOpacity>
            <View style={stylesBestSells.item}>
              <Image
                style={stylesBestSells.albumCover}
                source={require(`./../../../../assets/images/store/bannerSong.png`)}
              />
              <View style={stylesBestSells.infoText}>
                <View style={stylesBestSells.data}>
                  <Text style={stylesBestSells.albumText}>Popular Song 1</Text>
                  <Text style={stylesBestSells.text}>
                    Nombre d’écoute : Nombre d’écoute
                  </Text>
                </View>
                <Image
                  style={stylesBestSells.playIcon}
                  source={require(`./../../../../assets/eye2.png`)}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

export function ArtistAlbums({ albums }: Pick<FavoriteArtist, "albums">) {
  return (
    <View style={stylesAlbum.componentsContainer}>
      <Text style={stylesAlbum.titleAlbumSection}>Albums</Text>
      <View style={stylesAlbum.grid}>
        <FlatList
          data={albums}
          numColumns={3}
          columnWrapperStyle={{ flex: 1, justifyContent: "space-between" }}
          renderItem={({ item }: { item: Album }) => {
            return <AlbumOfArtistItem album={item} />;
          }}
        />
      </View>
    </View>
  );
}

export function AlbumSelected({buy, albumName}: { buy: string, albumName: string}) {  
  return (
    <View style={stylesAlbumSelected.componentsContainer}>
      <Image
        style={stylesAlbumSelected.albumCover}
        source={require(`./../../../../assets/images/store/bannerAlbum1.png`)}
      />
      <View style={stylesAlbumSelected.data}>
        <Text style={stylesAlbumSelected.title}>{albumName}</Text>
        <Text style={stylesAlbumSelected.rate}>Taux d’écoute : 
          <Image
            source={require(`./../../../../assets/up.png`)}
          />
          <Text style={stylesAlbumSelected.percentageUp}>
            25%
          </Text>
        </Text>
        <Text style={stylesAlbumSelected.rate}>Prix de l’album : 3 SOL</Text>
        <TouchableOpacity style={stylesAlbumSelected.btnBuy}>
          <Text>{buy}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const stylesAlbumSelected = StyleSheet.create({
  componentsContainer: {
    marginTop: 20,
    marginLeft: 20,
    height: 130,
    width: '90%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  percentageUp: {
    color: '#00FF5A',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 10
  },
  btnBuy: {
    width: 200,
    height: 47,
    backgroundColor: '#E2E2E2',
    borderRadius: 12.2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  rate: {
    color: 'white',
    fontSize: 16,
  },
  data: {
    marginLeft: 20,
    justifyContent: 'space-between'
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700'
  },
  titleFavArtist: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 30,
    height: 40,
    color: "white",
  },
  albumCover: {
    height: 130,
    width: 130
  }
});

const stylesSong = StyleSheet.create({
  componentsContainer: {
    marginTop: 10,
    marginLeft: 20,
  },
  titleFavArtist: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 30,
    height: 40,
    color: "white",
  },
});

const stylesAlbum = StyleSheet.create({
  componentsContainer: {
    marginTop: -10,
    marginLeft: 20,
  },
  grid: {
    width: "95%",
  },
  titleAlbumSection: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 30,
    height: 40,
    color: "white",
  },
  item: {
    height: 160,
  },
  logo: {
    height: 101,
    width: 101,
  },
  albumData: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  albumDataName: {
    fontSize: 16,
    color: "white",
    fontWeight: "500",
  },
  albumDataLenght: {
    fontSize: 14,
    color: "white",
    fontWeight: "300",
  },
});

const stylesBestSells = StyleSheet.create({
  componentsContainer: {
    marginTop: 10,
    marginLeft: 20,
  },
  infoText: {
    flexDirection: "row",
    alignItems: "center",
    width: '80%',
  },
  data: {
    marginRight: 10,
  },
  item: {
    margin: 5,
    marginLeft: 10,
    width: '98%',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleFavArtist: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
  famousSong: {
    marginTop: 10,
    marginLeft: -10,
    padding: 5,
    width: '100%',
    borderRadius: 12.2,
    backgroundColor: "rgba(165, 74, 255, 0.08)",
  },
  albumCover: {
    width: 62,
    height: 61,
    borderRadius: 12.2,
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
  text: {
    fontSize: 14,
    color: "white",
  },
});
