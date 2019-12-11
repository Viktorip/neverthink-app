import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import YouTube from 'react-native-youtube';
import Channel from './components/Channel';

import Colors from './constants/Colors';
import ChannelModal from './components/ChannelModal';

const channels = [
  {
    id: 0,
    name: 'Meme Radar',
    icon:
      'https://neverthink.tv/assets/images/63e3939725b3d92af5e7b8429a0f4d57e6be661abf380b39348f360e528dd6e2.png',
    playlist: ['y7pZzp99Jgs', '85RhW75xM8U', 'URLyBDYHoGo','QSqIG5Dl-SM', 'jM0GePXOdT0', 'exLTGu_c5fs','Km8kIX-8hVs', 'c9EOCt9kkUo', '-goTfMUabxc'],
    description: 'The latest and trending memes, every single day.',
    curatorName: 'Jaska',
  },
  {
    id: 1,
    name: 'LOL',
    icon:
      'https://neverthink.tv/assets/images/61d1aeee19fd7cff13a8b17727f1b5a4e9645f16c42ff376a5e5f3ce8a373df2.png',
    playlist: ['p8UR4dODogI', 'HoL1csZPYsk', '8V0HETilr4I', 'tHa260XXH6U', 'ADrBo7u3tR4', 'BgZh5T4nG_w', 'J3iSEq5Apfg', 'iCc5l8iWUZs'],
    description: 'Laughing out loud at these videos is the reason we had to put up a soundproof wall between the curators and the rest of the team.',
    curatorName: 'Roope',
  },
  {
    id: 2,
    name: 'WTF',
    icon:
      'https://neverthink.tv/assets/images/fde01ee47dc02d83892c35c22f2efd81f52c37edc4f3651be40094a115c812fd.png',
    playlist: ['ErfEnD2WA3A', 'JZnlJ2upJv8', 'Km8kIX-8hVs'],
    description: 'Cringey, bizarre and weird videos from the deepest corners of the internet. When a video makes us say WTF, it’s a match for this channel.',
    curatorName: 'Aku',
  },
];


const App = () => {
  const [selectedChannelId, setSelectedChannelId] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [channelInfoId, setChannelInfoId] = useState(0);

  const channelClickHandler = channelId => {
    setSelectedChannelId(channelId);
  };

  const channelInfoClickHandler = channelId => {
    setChannelInfoId(channelId);
    setShowModal(true);

  };

  const channelList = channels.map(d => (
    <Channel
      key={d.id}
      id={d.id}
      name={d.name}
      icon={d.icon}
      onSelect={channelClickHandler}
      onInfoClick={channelInfoClickHandler}
      style={selectedChannelId === d.id ? styles.selectedChannel : {}}
    />
  ));

  const modalCloseHandler = () => {
    setShowModal(false);
  };

  return (
    <View style={styles.screen}>
      <YouTube
        apiKey="<redacted>"
        videoIds={channels[selectedChannelId].playlist}
        play
        loop
        style={styles.player}
      />
      <View style={styles.channels}>
        {channelList}
      </View>
      <ChannelModal
        visible={showModal}
        icon={channels[channelInfoId].icon}
        description={channels[channelInfoId].description}
        curatorName={channels[channelInfoId].curatorName}
        name={channels[channelInfoId].name}
        onClose={modalCloseHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 20,
  },
  channels: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  player: {
    alignSelf: 'stretch',
    height: 300,
    maxHeight: '60%',
  },
  selectedChannel: {
    borderColor: Colors.attention,
    borderWidth: 2,
  },
});

export default App;
