import CameraRoll from '@react-native-community/cameraroll';
import React from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Photos} from '../../component';

const Home: React.FC = ({}) => {
  const [photo, setPhoto] = React.useState<any>();
  React.useEffect(() => {
    (async () => {
      const param = {
        first: 500,
        AssetType: 'All',
      };
      await CameraRoll.getPhotos(param)
        .then((res) => {
          setPhoto(res.edges);
        })
        .catch((err) => {
          return <Text style={{color: 'white'}}>Error {err}</Text>;
        });
    })();
  }, [CameraRoll]);

  return (
    <ScrollView horizontal={true} style={styles.root}>
      <SafeAreaView />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <FlatList
          data={photo}
          renderItem={(photos: any) => (
            <Photos uri={photos.item.node.image.uri} />
          )}
          keyExtractor={(photo: any) => photo.node.image.uri}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#333',
    padding: 5,
  },
});

export default Home;
