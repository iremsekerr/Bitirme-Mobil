import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const screen = Dimensions.get('screen');

function App(): JSX.Element {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function getData() {
      setLoading(true);
      const response = await fetch('http://10.0.2.2:5000/api/getUsers');
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    }
    getData();
  }, []);

  const itemOfficeClocks = (item: any) => {
    return (
      <View style={styles.itemOfficeClocks}>
        <Text style={styles.itemOfficeClocksDay}>{item.OfisSaatiGun}</Text>
        <Text
          style={
            styles.boxText
          }>{`${item.OfisSaatiBaslangic} - ${item.OfisSaatiBitis}`}</Text>
      </View>
    );
  };

  const renderItem = (user: any) => {
    return (
      <View style={styles.item}>
        <Image source={{uri: user.user.ResimUrl}} style={styles.avatar} />
        <View style={styles.box}>
          <Text style={styles.boxTitle}>DUYURULAR</Text>
          {user.announcements.map((announcement: any) => {
            return (
              <View key={announcement.Id}>
                <Text style={styles.boxUnderlineTitle}>
                  {announcement.DuyuruAdi}
                </Text>
                <Text style={styles.boxTextWithJustify}>
                  {announcement.Aciklama}
                </Text>
              </View>
            );
          })}
        </View>
        <View style={styles.box}>
          <Text style={styles.boxTitle}>OFİS SAATLERİ</Text>
          <FlatList
            data={user.officeClocks}
            renderItem={({item}) => itemOfficeClocks(item)}
            numColumns={2}
            style={styles.flatlistStyle}
            contentContainerStyle={styles.flatlistContainerStyle}
          />
        </View>
        <View style={styles.box}>
          <Text style={styles.boxTitle}>DERS PROGRAMI</Text>
          {user.syllabus.map((syllabus: any) => {
            return (
              <View key={syllabus.Id}>
                <Text
                  style={
                    styles.boxUnderlineTitle
                  }>{`${syllabus.DersKod} ${syllabus.DersAdi}`}</Text>
                <Text
                  style={
                    styles.boxText
                  }>{`${syllabus.Gun} ${syllabus.DersSaati}`}</Text>
              </View>
            );
          })}
        </View>
      </View>
    );
  };

  return (
    <GestureHandlerRootView style={styles.gestureHandlerRootView}>
      <StatusBar hidden />
      <ImageBackground
        source={require('./src/images/background.jpg')}
        style={styles.imageBackground}>
        {!loading ? (
          <>
            <View style={styles.header}>
              <Image
                source={require('./src/images/logo.png')}
                style={styles.headerImage}
              />
              <View style={styles.headerTextBox}>
                <Text style={styles.headerText}>
                  Erzurum Teknik Üniversitesi Duyuru Sistemi
                </Text>
              </View>
            </View>
            <Carousel
              loop
              width={screen.width * 0.9}
              height={screen.height * 0.8}
              data={users}
              scrollAnimationDuration={1000}
              renderItem={({item}) => renderItem(item)}
            />
          </>
        ) : (
          <View style={styles.indicatorView}>
            <ActivityIndicator size={40} color={'white'} />
          </View>
        )}
      </ImageBackground>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  gestureHandlerRootView: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicatorView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    width: '50%',
    height: '25%',
    resizeMode: 'contain',
  },
  box: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  boxTitle: {
    width: '100%',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  boxUnderlineTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
    marginVertical: 5,
    textDecorationLine: 'underline',
  },
  boxTextWithJustify: {
    fontSize: 12,
    color: 'white',
    textAlign: 'justify',
  },
  flatlistStyle: {
    width: '100%',
    marginVertical: 5,
  },
  flatlistContainerStyle: {
    flexGrow: 1,
    alignItems: 'center',
  },
  boxText: {
    fontSize: 12,
    color: 'white',
  },
  itemOfficeClocks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 150,
    marginHorizontal: 15,
  },
  itemOfficeClocksDay: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
  },
  header: {
    width: screen.width * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  headerTextBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
  },
});

export default App;
