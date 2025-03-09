import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, Image } from 'react-native';
import { Video } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const HomeScreen = () => {
  const [level, setLevel] = useState(1);
  const [ships, setShips] = useState(0);
  const [aiKnowledge, setAiKnowledge] = useState(50);
  const [interactionCount, setInteractionCount] = useState(10);
  const [knowledgeScore, setKnowledgeScore] = useState(75);

  const videoSource =
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

  const handleShip = () => {
    setShips(ships + 1);
    setAiKnowledge(aiKnowledge + 5);
    setInteractionCount(interactionCount + 1);
    setKnowledgeScore(knowledgeScore + 2);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        pagingEnabled
        decelerationRate={0}
        snapToInterval={height}
        snapToAlignment="center">
        {/* Video Post 1 */}
        <View style={styles.post}>
          <Video
            source={{ uri: videoSource }}
            style={styles.video}
            shouldPlay
            isLooping
            resizeMode="cover"
          />
          <View style={styles.postDetails}>
            <Text style={styles.handle}>@user123</Text>
            <Text style={styles.description}>
              Amazing AI content! Check this out! #AI #Tech #Future
            </Text>
            <View style={styles.actions}>
              <Ionicons name="ios-rocket" size={32} color="white" onPress={handleShip} />
              <Text style={styles.actionText}>{ships} Ships</Text>
            </View>
          </View>
        </View>

        {/* Video Post 2 (Example) */}
        <View style={styles.post}>
          <Video
            source={{ uri: videoSource }}
            style={styles.video}
            shouldPlay
            isLooping
            resizeMode="cover"
          />
          <View style={styles.postDetails}>
            <Text style={styles.handle}>@techGuru</Text>
            <Text style={styles.description}>
              Another awesome video about AI advancements. #AI #Innovation
            </Text>
            <View style={styles.actions}>
              <Ionicons name="ios-rocket" size={32} color="white" onPress={handleShip} />
              <Text style={styles.actionText}>{ships} Ships</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Profile Insights (Overlay) */}
      <View style={styles.profileOverlay}>
        <Image source={{ uri: 'https://i.pravatar.cc/150?img=3' }} style={styles.profileImage} />
        <Text style={styles.levelText}>Level: {level}</Text>
        <Text style={styles.insightText}>AI Knowledge: {aiKnowledge}</Text>
        <Text style={styles.insightText}>Total Ships: {ships}</Text>
        <Text style={styles.insightText}>AI Interaction Count: {interactionCount}</Text>
        <Text style={styles.insightText}>Knowledge Score: {knowledgeScore}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  post: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: width,
    height: height,
  },
  postDetails: {
    position: 'absolute',
    bottom: 20,
    left: 10,
  },
  handle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    color: 'white',
    fontSize: 14,
  },
  actions: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    alignItems: 'center',
  },
  actionText: {
    color: 'white',
    marginTop: 5,
  },
  profileOverlay: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 10,
  },
  levelText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  insightText: {
    color: 'white',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 5,
  },
});

export default HomeScreen;
