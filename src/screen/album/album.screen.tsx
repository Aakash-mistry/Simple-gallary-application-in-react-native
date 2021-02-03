import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import {FlatList} from 'react-native-gesture-handler';

const Albums: React.FC = () => {
  const [album, setAlbum] = React.useState<any>();
  React.useEffect(() => {
    (async () => {
      const param = {};
      await CameraRoll.getAlbums(param)
        .then((res) => {
          setAlbum(res);
        })
        .catch((err) => {
          return <Text style={{color: 'white'}}>Error {err}</Text>;
        });
    })();
  }, [CameraRoll]);

  return (
    <>
      <FlatList
        data={album}
        renderItem={(albums: any) => (
          <TouchableOpacity
            style={{
              flexDirection: 'row-reverse',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#333',
              padding: 10,
              margin: 10,
            }}>
            <View>
              <Text style={{color: '#fff', fontSize: 20}}>
                {albums.item.title} - {albums.item.count}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </>
  );
};

export default Albums;
