import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Dash from 'react-native-dash';
import { ScrollView } from 'react-native-gesture-handler';

export default class Demo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                        <Image style={{ height: 25, width: 25, marginLeft: 10, tintColor: '#6acf83' }}
                            source={require('../images/back.png')} />
                        <Image style={{ height: 25, width: 25, marginRight: 10, tintColor: '#6acf83' }}
                            source={require('../images/three.png')} />
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 40 }}>

                        <View style={{ marginLeft: 15, height: 50, width: 50, backgroundColor: '#f0faf2', alignItems: 'center', borderRadius: 5 }}>
                            <Text style={{ color: '#6acf83', fontSize: 20, padding: 10 }}>
                                N
                </Text>

                        </View>

                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: 18, color: 'black' }}>
                                Name
                            </Text>
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', marginLeft: 60, justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 16, color: 'black', marginLeft: 15 }}>
                            May 26, 2019
                        </Text>
                        <Text style={{ fontSize: 16, color: 'black', right: 15 }}>
                            15:40
                        </Text>

                    </View>

                    <View style={{ marginTop: 20 }}>
                        <Dash style={{ width: '100%', flexDirection: 'row' }} />
                    </View>

                    <View style={{ marginTop: 30, flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Text style={{ fontSize: 18, color: '#acb6c0', right: 60 }}>
                            Country
                        </Text>
                        <Text style={{ fontSize: 18, color: '#acb6c0', right: 55 }}>
                            City
                        </Text>
                    </View>

                    <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Text style={{ fontSize: 18, color: '#1e324a', right: 50 }}>
                            USA
                        </Text>
                        <Text style={{ fontSize: 18, color: '#1e324a', right: 15 }}>
                            New York
                        </Text>
                    </View>

                    <View style={{ marginTop: 30, flexDirection: 'row', justifyContent: 'space-around', right: 42 }}>
                        <Text style={{ fontSize: 18, color: '#acb6c0' }}>
                            Game Type:
                        </Text>
                        <Text style={{ fontSize: 18, color: '#acb6c0' }}>
                            Address
                        </Text>
                    </View>

                    <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Text style={{ fontSize: 18, color: '#1e324a', right: 18 }}>
                            One Time Game
                        </Text>
                        <Text style={{ fontSize: 18, color: '#1e324a', right: 1 }}>
                            3086 St.queens
                        </Text>
                    </View>

                    <View style={{ marginTop: 35 }}>
                        <Dash style={{ width: '100%', flexDirection: 'row' }} />
                    </View>

                    <View style={{ marginTop: 30, marginLeft: 22 }}>
                        <Text style={{ fontSize: 18, color: '#acb6c0' }}>
                            Organizer by:
                        </Text>
                    </View>

                    <View style={{ marginTop: 10, marginLeft: 25 }}>
                        <Text style={{ fontSize: 18, color: '#1e324a' }}>
                            Shoaib Irshad
                        </Text>
                    </View>

                    <View style={{ marginTop: 15 }}>
                        <Dash style={{ width: '100%', flexDirection: 'row', }} />
                    </View>

                    <View style={{ alignItems: 'center', marginTop: 10 }}>
                        <Text style={{ fontSize: 40, color: '#1e324a' }}>
                            5
                    </Text>
                    </View>

                    <View style={{ alignItems: 'center', marginTop: 5 }}>
                        <Text style={{ fontSize: 20, color: '#acb6c0' }}>
                            Player Needed
                    </Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 30, marginBottom: 15, justifyContent: 'space-around' }}>
                        <TouchableOpacity>
                            <View style={{ height: 40, width: 150, backgroundColor: "#f6f6f6", borderRadius: 4, }}>
                                <Text style={{ fontSize: 16, alignSelf: 'center', color: '#f3ab57', paddingTop: 7 }}>
                                    Not Sure Yet
                        </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={{ height: 40, width: 150, backgroundColor: "#f6f6f6", borderRadius: 4, }}>
                                <Text style={{ fontSize: 16, color: '#fa2225', alignSelf: 'center', paddingTop: 7 }}>
                                    Not joining
                        </Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    SideView: {
        marginTop: 20,
        flexDirection: 'row',
        marginLeft: 20
    },
    SideText: {
        fontSize: 17,
        alignSelf: 'center',
        marginLeft: 20,
        color: 'black'
    },
});
