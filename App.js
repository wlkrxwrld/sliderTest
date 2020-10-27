import React from 'react'
import {View,Image, StyleSheet, ScrollView,Dimensions,Text} from 'react-native'

const {width} =Dimensions.get("window");
const height = 812;

const Slides=[
    'https://i.ibb.co/LRCCkT2/3.png',
    'https://i.ibb.co/wBxsDw2/2.png',
    'https://i.ibb.co/hMDQtLD/Modelling.png',
    
]

export default class App extends React.Component{
    state = {
        active: 0
    }
    
    change = ({nativeEvent})=> {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if (slide !== this.state.active ){
            this.setState({active:slide});
        }
    }
    render(){
        return(
            <View style={styles.container}>
        <ScrollView
        onScroll= {this.change}
                style={{width,height,}}
                pagingEnabled
                showsVerticalScrollIndicator={false}
                >
        {
            Slides.map((item, index) => (
                <Image 
                key={index}
                source={{uri:item}}
                style={styles.images}/>
            ))
        }
       
       </ScrollView>
        <View style={styles.pagination}>
            {
                Slides.map((i,k)=>(
                    <Text key={k}  style={k== this.state.active ? styles.paginationDotActive : styles.paginationDot}>⬤</Text>
                ))
            }
       
       
        </View>
        

    </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{},
    images:{
        width:375,
        height:812,
        
    },

    pagination:{
        flexDirection:'column',
        position:'absolute',
        alignSelf:'center',
        justifyContent:'center',
        right:15,
        bottom:450,
    },

    paginationDot:{
        color:'#FFF',
    },
    
    paginationDotActive:{
        color:'#FF0000',
    },

});