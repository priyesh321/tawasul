import React, { } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    PixelRatio,
    Alert,
    Platform

} from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Header, Left, Right, Title, Body, Subtitle, Icon } from 'native-base';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import DeviceInfo from 'react-native-device-info';

import ImagePicker from 'react-native-image-picker';

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        state = {
            ImageSource: null,
            lat: 40.7809261,
            lng: -73.9637594
        };
        const deviceCountry = DeviceInfo.getDeviceCountry(); // "US"
        console.log(deviceCountry, 'Country Name')
    }
    selectPhotoTapped() {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true
            }
        };
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };
                this.setState({
                    ImageSource: source
                });
            }
        });
    }

    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: '#FF8C00' }}>
                    <Body style={{ right: 1 }}>
                        <Title>Tawasul</Title>
                        <Subtitle>Putting People First</Subtitle>
                    </Body>

                    <Right>
                        <TouchableOpacity>
                            <Button transparent>
                                <Icon name='search' />
                            </Button>
                        </TouchableOpacity>
                        <Button transparent>
                            <Icon name='notifications' />
                        </Button>
                    </Right>
                </Header>

                <Content>
                    <TouchableWithoutFeedback>
                        <View style={{ marginTop: 20, width: '95%', height: 45, marginLeft: 10, backgroundColor: '#D3D3D3', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ padding: 12, color: '#808080' }}>
                                What's on your mind today ?
                            </Text>
                            <View style={{ backgroundColor: '#05B8CC', height: 50, width: '20%', borderTopRightRadius: 10, borderBottomRightRadius: 10 }}>
                                <Image style={{ height: 30, width: 30, left: 16, top: 7, tintColor: 'white' }}
                                    source={require('../images/forward.png')} />
                            </View>
                        </View>
                    </TouchableWithoutFeedback>

                    <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 10 }}>
                        <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                            <Image style={{ height: 25, width: 25, tintColor: '#00C5CD' }}
                                source={require('../images/attach.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image style={{ height: 25, width: 25, tintColor: '#00C5CD', marginLeft: 25 }}
                                source={require('../images/marker.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                            <Image style={{ height: 25, width: 25, tintColor: '#00C5CD', marginLeft: 30 }}
                                source={require('../images/screenshot.png')} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ height: 0.2, backgroundColor: 'grey', marginTop: 15 }}>

                    </View>
                    

              </Content>

                <Footer>
                    <FooterTab style={{ backgroundColor: '#05B8CC' }}>
                        <Button >
                            <Image style={styles.buttonImage}
                                source={require('../images/home.png')} />
                        </Button>
                        <Button >
                            <Image style={styles.buttonImage}
                                source={require('../images/camera.png')} />
                        </Button>
                        <Button >
                            <Image style={styles.buttonImage}
                                source={require('../images/calendar.png')} />
                        </Button>
                        <Button>
                            <Image style={styles.buttonImage}
                                source={require('../images/group.png')} />
                        </Button>
                        <Button >
                            <Image style={styles.buttonImage}
                                source={require('../images/menu.png')} />
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    buttonImage: {
        height: 25,
        width: 25,
        tintColor: 'white',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    }

});