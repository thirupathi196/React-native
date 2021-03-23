import React from 'react';
import {View, Image, ScrollView, Dimensions, Text, StyleSheet} from 'react-native';
const width=Dimensions.get("window");
const height = width*0.6; //60%
const images = [
    'https://images.pexels.com/photos/2772918/pexels-photo-2772918.jpeg?auto=compre=500',
    'https://images.pexels.com/photos/1877005/pexels-photo-1877005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/5994821/pexels-photo-5994821.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/7175547/pexels-photo-7175547.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
]
export default class App extends React.Component{
    state = {
        active: 0
    }
    change = ({nativeEvent}) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if(slide !== this.stateActive){
        this.setState({active: slide});
    }
    }
    render(){
        return(
            <View style={style.container}>
            <ScrollView 
            pagingEnabled 
            horizontal 
            onScroll={this.change}
            showsHorizontalScrollIndicator={false}
            style={style.scroll}
            >
            {
                images.map((image, index) => (
                <Image 
                key={index}
                source={{url: image}}
                style={style.image}/>
          
        ))
        }
        </ScrollView>
        <view style={style.pagination}>
        {
            images.map((i,k) => (
                <Text key={k} style={k==this.state.active ? style.pagingActiveText: style.pagingText}
                ></Text>)
            )
        }

        <Text style={style.pagingText}>⬤</Text>
        </view>
        </View>
        )
    }
}
const style = StyleSheet.create({
container: {
    marginTop:50,
     width:80, 
     height: 246,
     borderRadius:10
     },
scroll: {width, height},
image: {width, height, resizeMode: 'cover'},
pagination: {
    flexDirection:'row', 
    position:'absolute', 
    bottom:0, 
    alignSelf:'center'
    },
pagingText: {
    fontSize: (width / 30), 
    color:'#888', 
    margin:3
    },
pagingActiveText: {
    fontSize: (width / 30), 
    color:'#fff', margin:3
    }
})