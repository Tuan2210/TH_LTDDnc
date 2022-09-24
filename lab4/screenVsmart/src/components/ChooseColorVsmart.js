import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';

//link: https://reactnative.dev/docs/navigation
//npm i @react-navigation/native @react-navigation/native-stack
//expo i react-native-screens react-native-safe-area-context
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

// const NavigateToDetails = props => {
//     props.navigation.navigate("blueVsmart");

const ChooseColorVsmart = props => {
    //handle click choose color Vsmart
    const [imgVsmart, setImgVsmart] = useState(require('../components/images/vsmart_live_xanh2.png'));
    const [txtColorVsmart, settxtColorVsmart] = useState('Màu xanh');
    const [styleTxtColor, setStyleTxtColor] = useState(StyleSheet.create({ color: '#234896', fontSize: 20, top: 10 }));
    const [nameScreen, setNameScreen] = useState('BlueVsmart');
    const onPressSilverVsmart = () => {
        setImgVsmart(imgVsmart => imgVsmart = (require('../components/images/vs_bac1.png')));
        settxtColorVsmart(txtColorVsmart => txtColorVsmart = 'Màu bạc');
        setStyleTxtColor(styleTxtColor => styleTxtColor = StyleSheet.create({ color: 'gray', fontSize: 20, top: 10 }));
        setNameScreen(nameScreen => nameScreen = 'SilverVsmart');
    }
    const onPressRedVsmart = () => {
        setImgVsmart(imgVsmart => imgVsmart = (require('../components/images/vs_red_a2.png')));
        settxtColorVsmart(txtColorVsmart => txtColorVsmart = 'Màu đỏ');
        setStyleTxtColor(styleTxtColor => styleTxtColor = StyleSheet.create({ color: 'red', fontSize: 20, top: 10 }));
        setNameScreen(nameScreen => nameScreen = 'RedVsmart');
    }
    const onPressBlackVsmart = () => {
        setImgVsmart(imgVsmart => imgVsmart = (require('../components/images/vsmart_black_star1.png')));
        settxtColorVsmart(txtColorVsmart => txtColorVsmart = 'Màu đen');
        setStyleTxtColor(styleTxtColor => styleTxtColor = StyleSheet.create({ color: 'black', fontSize: 20, top: 10 }));
        setNameScreen(nameScreen => nameScreen = 'BlackVsmart');
    }
    const onPressBlueVsmart = () => {
        setImgVsmart(imgVsmart => imgVsmart = (require('../components/images/vsmart_live_xanh2.png')));
        settxtColorVsmart(txtColorVsmart => txtColorVsmart = 'Màu xanh');
        setStyleTxtColor(styleTxtColor => styleTxtColor = StyleSheet.create({ color: '#234896', fontSize: 20, top: 10 }));
        setNameScreen(nameScreen => nameScreen = 'BlueVsmart');
    }

    //handle navigation link screen Vsmart
    const onPressLinkColor = () => {
        // if (nameScreen.includes('SilverVsmart')) 
        //     return props.navigation.navigate('SilverVsmart');
        // if (nameScreen.includes('RedVsmart')) 
        //     return props.navigation.navigate('RedVsmart');
        // if (nameScreen.includes('BlackVsmart')) 
        //     return props.navigation.navigate('BlackVsmart');
        // if (nameScreen.includes('BlueVsmart')) 
        //     return props.navigation.navigate('BlueVsmart');

        switch (nameScreen) {
            case 'SilverVsmart':
                props.navigation.navigate('SilverVsmart');
                break;
            case 'RedVsmart':
                props.navigation.navigate('RedVsmart');
                break;
            case 'BlackVsmart':
                props.navigation.navigate('BlackVsmart');
                break;
            case 'BlueVsmart':
                props.navigation.navigate('BlueVsmart');
                break;
            default:
                props.navigation.navigate('BlueVsmart');
                break;
        }

    };

    return (
        <View style={styles.container}>
            <View style={styles.viewTwoColumn}>
                <Image source={imgVsmart} style={styles.imgBlueVsmart}/>
                <View style={styles.viewTxtHang}>
                    <Text>Điện Thoại Vsmart Joy 3{'\n'}Hàng chính hãng</Text>
                    <Text style={styleTxtColor}>{txtColorVsmart}</Text>
                </View>
            </View>
            <View style={styles.viewChooseColor}>
                <Text style={styles.txtChon}>Chọn một màu bên dưới:</Text>
                <View style={styles.viewThreeColors}>
                    <TouchableOpacity 
                        style={{ width: 80, height: 80, backgroundColor: '#C5F1FB', alignSelf: 'center' }}
                        onPress={onPressSilverVsmart}
                    />
                    <TouchableOpacity 
                        style={{ width: 80, height: 80, backgroundColor: 'red', alignSelf: 'center' }} 
                        onPress={onPressRedVsmart}
                    />
                    <TouchableOpacity 
                        style={{ width: 80, height: 80, backgroundColor: 'black', alignSelf: 'center' }}
                        onPress={onPressBlackVsmart}
                    />
                    <TouchableOpacity 
                        style={{ width: 80, height: 80, backgroundColor: '#234896', alignSelf: 'center' }} 
                        onPress={onPressBlueVsmart}
                    />
                </View>
                <TouchableOpacity 
                    style={styles.btnXong}
                    onPress={onPressLinkColor}
                >
                    <Text style={styles.txtXong}>XONG</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default ChooseColorVsmart;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewTwoColumn: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        padding: 10,
    },
    imgBlueVsmart: {
        width: 120,
        height: 150,
    },
    viewTxtHang: {
        padding: 10,
    },
    viewChooseColor: {
        flex: 1,
        backgroundColor: '#C4C4C4',
        paddingBottom: 15
    },
    txtChon: {
        padding: 15,
        fontSize: 18
    },
    viewThreeColors: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
        top: '-2%',
    },
    btnXong: {
        width: 330,
        height: 50,
        backgroundColor: '#3D79D2',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        borderColor: 'red',
        borderStyle: 'solid',
        borderWidth: 1,
    },
    txtXong: {
        color: '#fff',
        fontSize: 20
    }
});