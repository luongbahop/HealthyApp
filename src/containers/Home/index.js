import React from 'react'
import Dimensions from 'Dimensions';

import {
    TouchableHighlight,
    View,
    Text,
    ListView,
    Image,
    ScrollView,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux'
import { Actions } from 'react-native-router-flux';

import {fetchData} from '../../actions'





const Home = (props) => {
    const {
        container,
        text,button,
        buttonText,
        mainContent,
        item
    } = styles
    let mang = ["Tùng","dũng","hợp"]
    const images = [
        'http://sv1.upsieutoc.com/2016/12/07/christmas.png',
        'http://sv1.upsieutoc.com/2016/12/07/my-love.png',
        'http://sv1.upsieutoc.com/2016/12/07/birthday.png',
        'http://sv1.upsieutoc.com/2016/12/07/memory.png',
        'http://sv1.upsieutoc.com/2016/12/07/family.png',
        'http://sv1.upsieutoc.com/2016/12/07/teacher.png',
        'http://sv1.upsieutoc.com/2016/12/07/like-gift.png',
    ];

    /*
    http://sv1.upsieutoc.com/2016/12/07/birthday.png
    http://sv1.upsieutoc.com/2016/12/07/christmas.png
    http://sv1.upsieutoc.com/2016/12/07/family.png
    http://sv1.upsieutoc.com/2016/12/07/like-gift.png
    http://sv1.upsieutoc.com/2016/12/07/memory.png
    http://sv1.upsieutoc.com/2016/12/07/my-love.png
    http://sv1.upsieutoc.com/2016/12/07/teacher.png
    */
    const categories = [
        {id: 1, featuredImage: images[0], name: "Giáng sinh"},
        {id: 2, featuredImage: images[1], name: "Người yêu"},
        {id: 3, featuredImage: images[2], name: "Sinh nhật"},
        {id: 4, featuredImage: images[3], name: "Kỷ niệm"},
        {id: 5, featuredImage: images[4], name: "Gia đình"},
        {id: 6, featuredImage: images[5], name: "Thầy cô"},
        {id: 7, featuredImage: images[6], name: "Thích thì tặng", horizontal: true},
    ];


    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
        dataSource: ds.cloneWithRows(mang),
        categories : [
            {id: 1, featuredImage: images[0], name: "Giáng sinh"},
            {id: 2, featuredImage: images[1], name: "Người yêu"},
            {id: 3, featuredImage: images[2], name: "Sinh nhật"},
            {id: 4, featuredImage: images[3], name: "Kỷ niệm"},
            {id: 5, featuredImage: images[4], name: "Gia đình"},
            {id: 6, featuredImage: images[5], name: "Thầy cô"},
            {id: 7, featuredImage: images[6], name: "Thích thì tặng", horizontal: true},
        ]
    }
   
    return (
        <View flex={1}> 
            <View style={styles.navBar}>
                <View  style={styles.navBarContent}>
                    <TouchableOpacity style={styles.iconLeft} >
                        <Icon name="home" size={30} color="red" />
                    </TouchableOpacity >
                </View>
            </View>
            <ScrollView style={container}>
                <View style={mainContent}>
                    
                {
                    
                        this.state.categories.map((category,i) =>{
                            return <TouchableOpacity key={i} style={item}>
                                <Image source={{uri: category.featuredImage}}
       style={styles.imageCat} >
                                    <Text style={styles.title}> {category.name}</Text>
                                </Image>
                            </TouchableOpacity>
                        })
                    
                }
                </View>
                
            </ScrollView>
        </View>
    )
}

let deviceWidth = Dimensions.get('window').width;
styles = StyleSheet.create({
    navBar: {
        height:56,
        paddingTop:0,
        paddingLeft:21,
        paddingRight:21,
        backgroundColor:'green'
    },
    navBarContent: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:"space-between"
    },
    iconLeft:{
        height:40,
    },
    container: {
        marginTop:30
    },
    mainContent: {
        flexDirection:"row",
        justifyContent:"space-between",
        flexWrap:"wrap",
        flex:1,
        paddingLeft:21,
        paddingRight:21
    },
    item: {
        marginBottom:21,
        position:"relative",
        height:156,
        width:155,
        
        
    },
    imageCat: {
        height:156,
        width:155,
        borderRadius:20,
        resizeMode:"cover",
    },
    title: {
        color:'#fff'
    }
    

})

function mapStateToProps(state){
    return {
        appData: state.appData
    }
}

function mapDispatchToProps(dispatch){
    return{
        fetchData: () => dispatch(fetchData())
    } 
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)