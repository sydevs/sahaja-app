import React from 'react';
import {View , Text, StyleSheet, Button, TouchableOpacity} from 'react-native'
import { Video } from 'expo-av';
import { FlatList } from 'react-native-gesture-handler';
import { MEDITATIONS } from '../../../data/meditationData'
import colors from '../../res/colors'



const Meditation  = props => {
    const renderGridItems = (itemData) => {
        return (<TouchableOpacity onPress={() => {
            props.navigation.navigate({
                routeName:  'VideoPlayer',
                params: {
                    id: itemData.item.id,
                    title: itemData.item.title,
                    videoUrl: itemData.item.videoUrl,
                    imageUrl: itemData.item.imageUrl
                }
            })
        }}>
                    <View style={styles.gridItems}>
                        <Text>{itemData.item.title}</Text>
                   </View>
                </TouchableOpacity>
            );
    };
    return (
         <View style={styles.screen}>
             <Text>Choose Meditation</Text>
             <FlatList keyExtractor={(item,index) => item.id} data={ MEDITATIONS } renderItem= {renderGridItems} numColumns={1}/>
             {/* <Button title="Feel Satisfied" onPress={() => {
                 props.navigation.navigate({
                    routeName: 'VideoPlayer'       
                 });
             }}/> */}

            {/* <Video
                source={{ uri: 'https://player.vimeo.com/external/357079761.sd.mp4?s=c8d6c2269ec07745e3af20b085666cf7003e1e5e&amp;profile_id=165&amp;oauth2_token_id=1254753263' }}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay
                isLooping
                style={{ width: 350, height: 550 }}
                /> */}
        </View>
    );
};

Meditation.navigationOptions = {
    headerTitle: 'Meditate Now',
    headerStyle: {
        backgroundColor: colors.title
    } ,
    headerTintColor: 'white'
};


const styles = StyleSheet.create({
    screen : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItems: {
        flex: 1,
        margin: 15,
        height: 150
    }
});

export default Meditation; 