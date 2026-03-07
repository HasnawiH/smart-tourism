'use strict';

import {StyleSheet, Dimensions} from "react-native";
import ColorsApp from './ColorsApp';
import hexToRgba from 'hex-to-rgba';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const PrimaryColor = ColorsApp.PRIMARY;
const SecondaryColor = ColorsApp.SECONDARY;

module.exports = StyleSheet.create({

//////////////////////// LOGIN/SIGNUP

AuthTitle:{
width: '100%',
maxHeight: '100%',
marginBottom: 20,
alignSelf: 'center', 
justifyContent: 'center',
alignItems: 'center',
textAlign: 'center' 
},

AuthLogo:{
width: '100%',
height: screenHeight/7,
maxHeight: '100%',
marginBottom: 50
},

AuthContent:{
marginHorizontal: 50
},

AuthInput:{
marginBottom: 10,
backgroundColor: "transparent"
},

AuthButton:{
marginTop: 15,
borderRadius: 50,
elevation: 0
},

AuthButtonContent:{
paddingVertical: 10,
},

AuthButtonLabel:{
letterSpacing: 0,
fontWeight: 'bold',
},

AuthCheckBoxLabel:{
textTransform: 'capitalize',
marginLeft: 5,
letterSpacing: 0,
},

AuthCheckBoxContent:{
//backgroundColor: '#fff'
},

AuthBottomText:{
fontSize: 16
},

AuthBottomContent:{
marginTop: 20,
alignItems: 'center'
},

ForgotPass:{
fontSize: 16,
marginVertical: 10,
alignSelf: 'flex-end',
marginHorizontal: 4
},

textArea:{
//backgroundColor: '#fff'
},

//////////////////////// DRAWER MENU

Drawer:{
flex: 1,
paddingBottom: 30
},

DrawerHeader:{
paddingTop: screenHeight/17,
paddingBottom: screenHeight/24,
justifyContent: 'center',
alignItems: 'center'  
},

DrawerImage:{
width: '100%',
height: screenHeight/6,
maxHeight: '100%'
},

DrawerMenuItem:{
marginHorizontal: 20,
borderRadius: 6
},

DrawerTitleMenu:{
fontSize: 16,
fontWeight: '600', 
},

DrawerIconMenu:{
fontSize: 30,
marginRight: 15,
},

DrawerIconRightMenu:{
fontSize: 25,
opacity: 0.3
},

DrawerButton:{
borderRadius: 6,
marginHorizontal: 15,
marginVertical: 10,
},

DrawerButtonLabel:{
textTransform: 'capitalize',
fontSize: 17,
},

DrawerButtonContent:{
height: 50,
width: '100%'
},

DrawerTitleHeader:{
fontWeight: 'bold',
fontSize: 20,
marginBottom: 8
},

DrawerSubTitleHeader:{
fontSize: 14,
},

DrawerFooter:{
height: screenHeight*0.10,
width: '100%',
position: 'absolute',
justifyContent: 'center',
alignContent: 'center',
alignItems: 'center',
bottom: 0
},

DrawerSearchInput:{
marginHorizontal: 15,
marginVertical: 15
},

//////////////////////// HEADING

headingTitle:{
fontSize: 18,
fontWeight: 'bold'
},

headingSubTitle:{
fontSize: 16,
},

headingButton:{

borderWidth: 2,
paddingHorizontal: 12,
paddingVertical: 5,
borderRadius: 50
},

headingButtonText:{
fontSize: 12,
fontWeight: 'bold',
textTransform: 'uppercase' 
},

homeTitle:{
    fontSize: 26,
    fontWeight: 'bold',
    marginTop:10
},

homeSearchBar:{
    marginTop:15,
	borderRadius:60
},

titleWidget:{
    fontSize: 18,
    fontWeight: 'bold',
},

//////////////////////// BUTTONS

Button1:{
alignItems: 'center',
flexDirection: 'row',
height: screenHeight*0.065,
width: '100%',
paddingHorizontal: 55,
position: 'relative',
marginTop: 10
},

Button1Text:{
fontSize: 16,
},

Button1IconLeft:{
color: PrimaryColor,
position: 'absolute',
left: 20,
fontSize: 20,
},

Button1IconRight:{
color: PrimaryColor,
position: 'absolute',
right: 15,
fontSize: 20
},

//////////////////////// PROFILE

HeaderProfile:{
width: '100%',
height: screenHeight*0.30,
alignItems: 'center',
justifyContent: 'center',
marginTop: 20
},

ImageProfile:{
borderRadius: 100,
width: screenWidth*0.28,
height: 'auto',
minHeight: screenWidth*0.28,
marginBottom: 20	
},

ButtonProfile:{
borderRadius: 60,
width: '40%',
marginHorizontal: 15,
marginTop: 20,
},

ButtonLabelProfile:{
fontWeight: 'bold',
fontSize: 16,
},

ButtonContentProfile:{
height: screenHeight*0.05,
width: '100%'
},

SubTextProfile:{
fontSize: 16,
},

SmallTextProfile:{
fontSize: 14,
marginTop:5,
opacity:0.5,
},

TextProfile:{
fontSize: 18,
marginRight: 4,
fontWeight:'bold',
marginBottom: 5
},

SignButton:{
marginHorizontal: 15,
marginVertical: 10,
},

SignButtonLabel:{
//color: '#fff',

},

SignButtonContent:{
paddingVertical: 10,
backgroundColor: PrimaryColor,
width: '100%',
},

SignButtonTextContent:{
marginVertical: 20,
fontSize: 16
},

//////////////////////// BUTTONS

Button2:{
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 60,
    marginRight: 0
    },
    
    Button2Text:{
    color: PrimaryColor,
    fontSize: 14,
    fontWeight: 'bold' 
    },
    
    Button1:{
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
        height: screenHeight*0.080,
        borderRadius: 60,
        width: '100%',
        paddingHorizontal: 55,
        position: 'relative',
        marginBottom: 20
    },
    
    Button1Text:{
        fontSize: 16,
    },
    
    Button1IconLeft:{
        color: PrimaryColor,
        position: 'absolute',
        left: 20,
        fontSize: 20,
    },
    
    Button1IconRight:{
        color: PrimaryColor,
        position: 'absolute',
        right: 15,
        fontSize: 20
    },

////////////////////////////////////////////////

card1_gradient:{
position: 'absolute',
padding:15,
left: 0,
right: 0,
bottom: 0,
height: screenHeight * 0.23,
alignItems: 'flex-start',
justifyContent: 'flex-end',
borderRadius: 8
},

card1_background:{
width: screenWidth*0.70,
height: screenHeight * 0.23,
alignItems: 'flex-start',
alignSelf: 'center', 
justifyContent: 'flex-end',
padding: 15,
marginBottom: 20,
marginLeft: 20,
position:'relative'
},

card1_title:{
color: "#fff",
fontWeight: 'bold',
fontSize:16
},

card1_subtitle:{
color: PrimaryColor,
fontWeight: 'bold',
},

card1_viewicon:{
backgroundColor:"rgba(0,0,0,0.3)",
borderRadius:100,
padding: 10,
position: 'absolute',
right: 10,
top: 10
},

card1_icon:{
color: PrimaryColor,
fontWeight: 'bold'
},

card2_view:{
width: screenWidth*0.23,
marginLeft: 15,
justifyContent: 'center',
alignItems: 'center'
},

card2_content:{
justifyContent: 'center',
alignItems: 'center',
},

card2_title:{
marginTop: 10,
fontSize: 15,
textAlign: 'center',
},

card3_title:{
color: '#FFF',
fontSize: 15,
fontWeight: 'bold' 
},

card3_subtitle:{
color: '#FFF',
fontSize: 14,
opacity: 0.8,
marginVertical: 6
},

card3_category:{
marginBottom: 4,
color: '#fff',
opacity: 0.8,
fontSize: 14,
},

card3_gradient:{
position: 'absolute',
padding:15,
left: 0,
right: 0,
bottom: 0,
height: screenHeight * 0.23,
alignItems: 'flex-start',
justifyContent: 'flex-end',
borderRadius: 8
},

card3_background:{
width: screenWidth*0.9,
height: screenHeight * 0.23,
alignItems: 'flex-start',
alignSelf: 'center', 
justifyContent: 'flex-end',
padding: 15,
marginTop: 5,
marginBottom: 10
},

card3_viewicon:{
flexDirection: 'row',
backgroundColor:"rgba(0,0,0,0.3)",
borderRadius:100,
padding: 10,
position: 'absolute',
left: 10,
top: 10
},

card3_rate:{
flexDirection: 'row',
padding: 10,
position: 'absolute',
right: 10,
top: 7
},

card3_icon:{
color: '#fff',
marginLeft:8,
fontSize:13
},

card4_title:{
color: '#FFF',
fontSize: 15,
fontWeight: 'bold' 
},

card4_viewicon:{
flexDirection: 'row',
backgroundColor:"rgba(0,0,0,0.3)",
borderRadius:100,
padding: 3,
paddingHorizontal:10,
marginBottom:3
},

card4_gradient:{
position: 'absolute',
padding:15,
left: 0,
right: 0,
bottom: 0,
height: screenHeight * 0.15,
alignItems: 'flex-start',
justifyContent: 'flex-end',
borderRadius: 8
},

card4_background:{
width: '100%',
height: screenHeight * 0.15,
alignItems: 'flex-start',
alignSelf: 'center', 
justifyContent: 'flex-end',
},

card5_title:{
color: '#FFF',
fontSize: 15,
fontWeight: 'bold' 
},

card5_border:{
backgroundColor:PrimaryColor,
width:25,
height:4,
marginVertical:8
},

card5_gradient:{
position: 'absolute',
padding:15,
left: 0,
right: 0,
bottom: 0,
height: screenHeight * 0.19,
alignItems: 'flex-start',
justifyContent: 'flex-end',
borderRadius: 8
},

card5_background:{
width: '100%',
height: screenHeight * 0.19,
alignItems: 'flex-start',
alignSelf: 'center', 
justifyContent: 'flex-end',
},

card6_view:{
width: screenWidth*0.35,
marginLeft: 10,
},

card6_background:{
width: screenWidth*0.35,
height: screenHeight * 0.13,
marginLeft: 10,
},

card6_gradient:{
width: screenWidth*0.35,
height: screenHeight * 0.13,
backgroundColor: hexToRgba('#000', '0.6'),
borderRadius: 8,
justifyContent: 'flex-end',
alignItems: 'flex-start',
paddingHorizontal:15,
paddingVertical:10,
},

card6_title:{
fontSize: 15,
color:'#fff',
fontWeight:'bold'
},

card6_subtitle:{
    fontSize: 14,
    color:PrimaryColor,
},


card7:{
	marginBottom: 25,
	position: 'relative',
	marginLeft: 20,
	width: screenWidth*0.70,
	height: screenHeight * 0.23,
	overflow: 'hidden',
	borderRadius: 8
},

card7Content:{
	width: screenWidth*0.70,
	height: screenHeight * 0.23,
	borderRadius: 8,
	justifyContent: 'flex-end',
	paddingHorizontal:15,
},

card7Title:{
	color: '#fff',
	fontSize: 16,
	fontWeight: 'bold',
},

card7OldPrice:{
	color: '#ff6b81',
	fontWeight: 'bold',
	fontSize: 16,
	textDecorationLine: 'line-through',
	marginRight: 10
},

card7Price:{
	color: '#2ed573',
	fontSize: 16,
	fontWeight: 'bold',
	marginRight: 5
	
},

card7DiscountView:{
	marginRight: 10,
	backgroundColor: '#27ae60',
	paddingHorizontal: 15,
	paddingVertical: 3,
	borderRadius: 100
},

card7DiscountText:{
	color: '#d0fcb4',
	fontSize: 14,
},

card7Badge:{
	backgroundColor: 'rgba(0,0,0,0.35)',
	paddingVertical: 6,
	paddingHorizontal: 15,
	borderRadius: 50,
	marginBottom: 10,
	alignSelf: 'flex-start'
},

card7Expire:{
	position: 'absolute',
	top: 0,
	right:0,
	left: 0,
	zIndex: 9,
	backgroundColor: 'red',
	paddingVertical: 10,
	paddingHorizontal: 15,
	justifyContent: 'center',
	flexDirection: 'row',
	alignItems: 'center'
},

card8Content:{
	paddingLeft:15,
},

card8Title:{
	fontSize: 17,
	marginTop: 10,
	fontWeight: 'bold',
	marginBottom: 6
},

card8SubTitle:{
	fontSize: 14,
},

card8OldPrice:{
	opacity: 0.3,
	fontWeight: 'bold',
	fontSize: 20,
	textDecorationLine: 'line-through',
	marginRight: 10
},

card8Price:{
	fontSize: 20,
	fontWeight: 'bold',
	marginRight: 10
	
},

card8DiscountView:{
	marginRight: 10,
	backgroundColor: '#d0fcb4',
	paddingHorizontal: 15,
	paddingVertical: 3,
	borderRadius: 100
},

card8DiscountText:{
	color: '#27ae60',
	fontSize: 14,
},

card8Badge:{
	backgroundColor: '#f1c40f',
	paddingVertical: 6,
	paddingHorizontal: 15,
	borderRadius: 50,
	marginTop: 10,
	flexDirection: 'row',
	flexDirection: 'row',
	alignItems: 'center',
	alignSelf: 'flex-start'
},

card9View:{
width: screenWidth*0.38,
marginLeft: 10,
marginRight: 5
},

card9Background:{
width: screenWidth*0.38,
height: screenHeight * 0.15,
marginLeft: 10,
marginRight: 5
},

card9Gradient:{
width: screenWidth*0.38,
height: screenHeight * 0.15,
borderRadius: 6,
justifyContent: 'flex-end',
alignItems: 'flex-start'
},

card9Title:{
fontSize: 15,
paddingHorizontal:15,
paddingVertical:10,
color:'#fff',
fontWeight:'bold'
},

itemListView:{
width:70,
height:70,
backgroundColor:PrimaryColor,
borderRadius: 100,
marginRight:10,
justifyContent: 'center',
alignItems: 'center',
alignSelf: 'center', 
},

itemListImage:{
width:45,
height:45,
},

itemListView2:{
width:90,
height:90,
backgroundColor:'#fff',
borderRadius: 100,
marginRight:10,
justifyContent: 'center',
alignItems: 'center',
alignSelf: 'center', 
},

itemListImage2:{
width:70,
height:70,
},

title_categories:{
color: '#FFF',
fontSize: 14,
fontWeight: 'bold'
},

title_categories_background:{
width: screenWidth*0.9,
alignItems: 'center',
padding: 15,
borderBottomLeftRadius: 8,
borderBottomRightRadius: 8
},

title_categories_border:{
height: 2,
backgroundColor: PrimaryColor,
width: 50
},

gradient_categories:{
position: 'absolute',
left: 0,
right: 0,
bottom: 0,
height: screenHeight*0.21,
alignSelf: 'center', 
alignItems: 'center',
justifyContent: 'flex-end',
borderRadius: 8
},

background_categories:{
width: screenWidth*0.9,
alignSelf: 'center', 
height: screenHeight*0.21,
alignItems: 'center',
justifyContent: 'flex-end',
marginBottom: 10,
borderRadius: 8
},

switchRow: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'space-between',
paddingVertical: 8,
paddingHorizontal: 16,
},

LoadMore:{
borderRadius: 100,
borderWidth: 1.5,
borderColor: PrimaryColor,
width: '93%',
height: screenHeight*0.07,
marginHorizontal: 20,
alignSelf: 'center',
justifyContent: 'center',
alignContent: 'center',
alignItems: 'center',
},

NoMoreItems:{
height: 50,
alignItems: 'center',
justifyContent: 'center',
borderRadius: 6,
marginBottom: 60
},

PageLogo:{
width: '100%',
height: screenHeight/8,
maxHeight: '100%',
marginBottom: 50,
},

AnimatedScrollScreen:{
width: '100%',
paddingVertical: 45,
paddingHorizontal: 10,
flex: 1,
},

ContentScreen:{
width: '100%',
paddingVertical: 10,
paddingHorizontal: 10,
flex: 1,
},

ModalScreen:{
width: '100%',
paddingHorizontal: 10,
flex: 1,	
},

PageScreen:{
width: '100%',
paddingVertical: 30,
paddingHorizontal: 30,
flex: 1,
},

StoreScreen:{
    paddingVertical: 15,
},

GuestPageScreen:{
width: '100%',
paddingVertical: 30,
paddingHorizontal: 30,
flex: 1,
},

RowBackground:{
margin: 10,
borderRadius: 10,
justifyContent:'center',
alignItems:'center',
flexDirection:'column'
},

RowBorder:{
width: 60,
height: 4,
marginTop:10,
backgroundColor: PrimaryColor
},

SearchInput:{
marginHorizontal: 15,
marginVertical: 15,
elevation:0,
borderWidth:1
},

SearchInputStyle:{
fontSize: 17,
},

//////////////////////// SINGLE

detailsScreen:{
	width: '100%',
	paddingVertical: 10,
	paddingHorizontal: 15,
	flex: 1,
	},

detailsTitle:{
	fontSize:20,
	fontWeight:'bold',
	marginBottom:5
},

detailsTopTitle:{
	fontSize:15,
	fontWeight:'bold',
	color: PrimaryColor,
	marginBottom:5
},

detailsSubTitle:{
	fontSize:14,
	opacity:0.5
},

detailsSectionTitle:{
	fontSize:16,
	fontWeight:'bold',
	marginVertical:10,
	marginBottom:10
},

detailsPrice:{
color: '#2ed573',
fontSize: 24,
	fontWeight:'bold',
},

detailsOldPrice:{
color: '#ff6b81',
fontSize: 16,
	textDecorationLine: 'line-through',
},

detailsBuyNow:{
	width: screenWidth,
	height: screenHeight*0.10,
	alignContent:'center',
	justifyContent:'center',
	alignItems:'center',
	backgroundColor:PrimaryColor,
	flexDirection:'row'
},

detailsBuyNowLabel:{
	color:'#fff',
	fontWeight:'bold',
	fontSize:18,
	marginHorizontal:5
},

webViewLoader:{
	flex: 1,
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	position: 'absolute',
	alignItems: 'center',
	justifyContent: 'center'
},

//////////////////////// HEADER

headerBackground:{
	width: '100%',
	height: screenHeight*0.40,
},

headerOverlay:{
	height: screenHeight*0.40,
	justifyContent: 'center',
	paddingHorizontal: 20
},

headerTitle:{
	fontSize: 24,
	color: '#fff',
	fontWeight: 'bold',
	textAlign: 'center',
	marginHorizontal: 30
},

headerSubTitle:{
	fontSize: 18,
	color: '#fff',
	textAlign: 'center',
	marginBottom: 10,
	marginHorizontal: 30
},

headerInput:{
	shadowColor: '#666',
	paddingHorizontal: 10,
	shadowRadius: 10,
	shadowOpacity: 0.15
},

Header2Image:{
width: screenWidth,
height: screenHeight*0.40,
},

Header2Gradient:{
width: screenWidth,
height: screenHeight*0.40,
justifyContent:'flex-end',
alignItems:'flex-start',
paddingVertical:30,
paddingHorizontal:25
},

Header2Category:{
fontWeight:'bold',
color:PrimaryColor,
fontSize:16,
},

Header2Title:{
fontWeight:'bold',
color:'#fff',
fontSize:20,
marginVertical:8,
},

Header2SubTitle:{
color:'rgba(255,255,255,0.8)',
fontSize:16	
},

WorkoutGrid:{
backgroundColor:PrimaryColor
},

WorkoutGridCol:{
padding: 10,
alignItems:'center',
},

WorkoutGridTitle:{
fontSize:16,
color:'rgba(0,0,0,0.7)',
fontWeight:'bold',
},

WorkoutGridSubTitle:{
fontSize:16,
color:'rgba(0,0,0,0.5)',
},

DietGrid:{
backgroundColor:PrimaryColor
},

DietGridCol:{
padding: 15,
alignItems:'center',
},

DietGridTitle:{
fontSize:16,
fontWeight:'bold',
color:'black'
},

DietGridSubTitle:{
fontSize:16,
color:'rgba(0,0,0,0.8)',
},

DayList:{
paddingVertical:15,
marginHorizontal:10,
backgroundColor:'rgba(255,255,255,0.1)',
flexDirection:'row',
marginVertical:5,
borderRadius:8,
paddingHorizontal:15,
position:'relative'
},

DayListText:{
fontSize:15,
},

DayListIcon:{
color:PrimaryColor,
fontSize:22,
right:10,
top:13,
position:'absolute'
},

HomeImage:{
width: screenWidth,
height: screenHeight*0.30,
},

HomeGradient:{
width: screenWidth,
height: screenHeight*0.30,
justifyContent:'center',
alignItems:'center',
},

HomeLogo:{
    width: '100%',
    height: screenHeight/7.5,
    maxHeight: '100%',
    },

HomeMenu:{
    marginVertical: 10
},

HomeScreen:{
	width: '100%',
	paddingBottom: 30,
	flex: 1,
},

HomePaddingH:{
    marginHorizontal:20
},

HomeIconList:{
    marginHorizontal: 20,
    marginBottom: 5
},

HomeLabel:{
    fontWeight:'bold',
    marginHorizontal: 10
},

HomeIcon:{

},

HomeIconRight:{

},

gridView:{
    flexDirection: 'row',
    },
    
    gridViewItem:{
        flex: 1,
        width: screenWidth*0.50,
        margin:5
    },
    
    gridView_2:{
    flexDirection: 'row',
    },
    
    gridViewItem_2:{
        flex: 1,
        width: screenWidth*0.50,
        margin:8
    },
    
    gridViewTitle_2:{
        marginTop: 6,
        fontSize:15,
    },
    
    gridViewSubtitle_2:{
        color: PrimaryColor,
        fontSize:15,
        fontWeight:'bold',
        marginBottom: 6
    },
    
    gridViewImage_2:{
    height: screenHeight * 0.14
    },

});