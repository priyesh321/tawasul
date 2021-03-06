import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { Container, Content, Footer, FooterTab, Button, Header, Right, Title, Body, Icon } from 'native-base';

export default class Groups extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: '#FD8103' }}>
                    <Body style={{ right: 1 }}>
                        <Title>Groups</Title>
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
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <TouchableOpacity>
                                <View style={{ height: 70, width: 100, backgroundColor: '#fdbc2e', marginLeft: 5, borderRadius: 5, justifyContent: 'center' }}>
                                    <Image style={{ height: 25, width: 25, alignSelf: 'center', marginTop: 10 }}
                                        source={require('../images/today.png')} />
                                    <Text style={{ alignSelf: 'center', marginTop: 5 }}>
                                        Today
                                    </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={{ height: 70, width: 100, backgroundColor: '#27C6E1', marginLeft: 5, borderRadius: 5, justifyContent: 'center' }}>
                                    <Image style={{ height: 25, width: 25, alignSelf: 'center', marginTop: 10 }}
                                        source={require('../images/tomorrow.png')} />

                                    <Text style={{ alignSelf: 'center', marginTop: 5 }}>
                                        Tomorrow
                                    </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={{ height: 70, width: 100, backgroundColor: '#F89923', marginLeft: 5, borderRadius: 5, justifyContent: 'center' }}>
                                    <Image style={{ height: 25, width: 25, alignSelf: 'center', marginTop: 10 }}
                                        source={require('../images/calendar.png')} />
                                    <Text style={{ alignSelf: 'center', marginTop: 5 }}>
                                        This Week
                                    </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={{ height: 70, width: 100, backgroundColor: '#A4D05F', marginLeft: 5, borderRadius: 5, justifyContent: 'center' }}>
                                    <Image style={{ height: 25, width: 25, alignSelf: 'center', marginTop: 10 }}
                                        source={require('../images/month.png')} />
                                    <Text style={{ alignSelf: 'center', marginTop: 5, color: 'white' }}>
                                        This Month
                                    </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={{ height: 70, width: 100, backgroundColor: '#8A8A8A', marginLeft: 5, borderRadius: 5, justifyContent: 'center' }}>
                                    <Image style={{ height: 25, width: 25, alignSelf: 'center', marginTop: 10, tintColor: '#FFFFFF' }}
                                        source={require('../images/custom.png')} />
                                    <Text style={{ alignSelf: 'center', marginTop: 5, color: '#FFFFFF' }}>
                                        Custom
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </Content>

                <Footer>
                    <FooterTab style={{ backgroundColor: '#2EC2E4' }}>
                        <Button>
                            <Image style={styles.buttonImage}
                                source={require('../images/home.png')} />
                        </Button>

                        <Button>
                            <Image style={styles.buttonImage}
                                source={require('../images/camera.png')} />
                        </Button>

                        <Button>
                            <Image style={styles.buttonImage}
                                source={require('../images/calendar.png')} />
                        </Button>

                        <Button>
                            <Image style={styles.buttonImage}
                                source={require('../images/group.png')} />
                        </Button>

                        <Button>
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
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "#fff"
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    },
    buttonImage: {
        height: 25,
        width: 25,
        tintColor: 'white',
    },
});
