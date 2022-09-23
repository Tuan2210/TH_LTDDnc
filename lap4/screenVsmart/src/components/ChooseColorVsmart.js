import { StyleSheet, Text, View, Button } from 'react-native';

//link: https://reactnative.dev/docs/navigation
//npm i @react-navigation/native @react-navigation/native-stack
//expo i react-native-screens react-native-safe-area-context
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// const NavigateToDetails = props => {
//     props.navigation.navigate("blueVsmart");

const ChooseColorVsmart = props => {
    return (
        <View style={styles.container}>
            {/* <Text>Open up chooseColorVsmart.js to start working on your app!</Text> */}
            <Button title='Go to Blue Vsmart screen' onPress={() => props.navigation.navigate('BlueVsmart')}/>
        </View>
    );
}

export default ChooseColorVsmart;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});