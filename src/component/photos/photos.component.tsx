import React from 'react';
import {Dimensions, Image, TouchableOpacity} from 'react-native';

interface IPhotoProps {
  uri: string;
}

const PhotoComponent: React.FC<IPhotoProps> = ({uri}) => {
  const win = Dimensions.get('window');
  const ratio = win.width / 541;
  return (
    <>
      <Image
        style={{
          width: 360,
          height: 250,
          margin: 10,
          borderRadius: 10,
        }}
        source={{uri: uri}}
      />
    </>
  );
};

export default PhotoComponent;
