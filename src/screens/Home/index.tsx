import React from "react";
import { 
    ScrollView, 
    TouchableOpacity, 
    View, 
    FlatList, 
    Text, 
    Image 
} from "react-native";
import md5 from 'js-md5'

// const timeStamp = '1638465338'
const public_key = 'fa229d2a8535d6eaee62c1e0953348b7'
const private_key = '6be43767c3b8facb104de41028a2da27f90f892b'
// const md5 = 'd02b012b087324bb3e6a1e10aa8a5b5a'

export default class Home extends React.Component {
    static navigationOptions = {
        title: 'Heroes'
    }

    state = {
        data: []
    }

    async componentDidMount() {
        const timestamp = Number(new Date())
        const hash = md5.create()
        hash.update(timestamp + private_key + public_key)

        const response = 
        await fetch(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=a&ts=${timestamp}&apikey=${public_key}&hash=${hash.hex()}&limit=84`)
        
        const responseJson = await response.json()
        this.setState({ data: responseJson.data.results })
    }

    renderItem = ({ item }) => {
        return (
            <ScrollView>
                <TouchableOpacity onPress={() => {}}
                    style={{flexDirection:'row', padding: 10, alignItems:'center'}}
                >
                    <Image style={{ height: 50, width: 50, borderRadius: 25}} 
                        source={{uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }} 
                    />
                    <Text style={{marginLeft: 10}}>{item.name}</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }

    render() {
        return (
            <FlatList 
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => item.id.toString()}
                ItemSeparatorComponent={()=> 
                <View style={{height:1, backgroundColor:'#f7f7f7'}} 
                />}
            />
        )
    }
}