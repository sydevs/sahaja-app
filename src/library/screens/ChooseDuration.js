import React from 'react';
import {View , Text, StyleSheet, Button, TouchableOpacity} from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import colors from '../../res/colors'



const ChooseDuration  = props => {
    const meditationCategories = props.navigation.getParam('meditationCategories');
    const renderGridItems = (itemData) => {
        return (<TouchableOpacity onPress={() => {
                    props.navigation.navigate({
                            routeName:  'VideoPlayer',
                            params: {
                                id: itemData.item.id,
                                imageUrl: itemData.item.imageUrl,
                                videoUrl: itemData.item.videoUrl
                            }
                        })
                    }}>
                    <View style={styles.gridItems}>
                        <Text>{itemData.item.id}</Text>
                   </View>
                </TouchableOpacity>
            );
    };
    return (
         <View style={styles.screen}>
             <Text>Choose Duration</Text>
             <FlatList keyExtractor={(item,index) => item.id} data={ meditationCategories } renderItem= {renderGridItems} numColumns={1}/>
             

            
        </View>
    );
};

ChooseDuration.navigationOptions = {
    headerTitle: 'Choose Duration',
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

export default ChooseDuration; 