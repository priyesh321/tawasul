import React, { } from 'react';
import {
    View,
    Text,
    Dimensions,
    Image
} from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Header, Left, Right, Title, Body, Subtitle, Icon } from 'native-base';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: '#FF8C00' }}>

                    <Body style={{ right: 1 }}>
                        <Title>Tawasul</Title>
                        <Subtitle>Putting Prople First</Subtitle>
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
                                <Image style={{ height: 30, width: 30, left: 16, top: 7,tintColor:'white' }}
                                    source={require('../images/forward.png')} />
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 10 }}>
                        <TouchableOpacity>
                            <Image style={{ height: 25, width: 25, tintColor: '#00C5CD' }}
                                source={require('../images/attach.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={{ height: 25, width: 25, tintColor: '#00C5CD', marginLeft: 25 }}
                                source={require('../images/marker.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={{ height: 25, width: 25, tintColor: '#00C5CD', marginLeft: 30 }}
                                source={require('../images/screenshot.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 0.2, backgroundColor: 'grey', marginTop: 15 }}>
                    </View>
                </Content>
                <Footer  >
                    <FooterTab style={{ backgroundColor: '#05B8CC' }}>
                        <Button >
                            <Image style={{ height: 25, width: 25, tintColor: 'white' }}
                                source={require('../images/home.png')} />
                        </Button>
                        <Button >
                            <Image style={{ height: 25, width: 25, tintColor: 'white' }}
                                source={require('../images/camera.png')} />
                        </Button>
                        <Button >
                            <Image style={{ height: 25, width: 25, tintColor: 'white' }}
                                source={require('../images/calendar.png')} />
                        </Button>
                        <Button>
                            <Image style={{ height: 25, width: 25, tintColor: 'white' }}
                                source={require('../images/group.png')} />
                        </Button>
                        <Button >
                            <Image style={{ height: 25, width: 25, tintColor: 'white' }}
                                source={require('../images/menu.png')} />
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}