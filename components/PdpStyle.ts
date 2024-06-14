import { StyleSheet,Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    fixedTop: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        backgroundColor: 'white',
        padding: 10,
    },

    scrollViewContent: {
        paddingTop: 70, // Adjust according to the height of your fixed top view
        paddingBottom: 200, // Adjust according to the height of your fixed bottom view
      },
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#ffffff',
    },
    bg: {
      backgroundColor: '#f2f3f3',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    arrowContainer: {
      width: 48,
      height: 48,
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleContainer: {
      flex: 1,
      marginLeft: 16,
    },
    dressTitle: {
      fontSize: 18,
      fontFamily: 'nunito',
      color: '#212121',
    },
    shareContainer: {
      width: 48,
      height: 48,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 18,
      height: 18,
      resizeMode: 'contain',
    },
    imageContainer: {
      position: 'relative',
    },
    mainPicStyle: {
      height: 480,
      width: width,
      borderBottomLeftRadius: 40,
      borderBottomRightRadius: 40,
    },
    imageWrapper: {
      width: width,
      alignItems: 'center',
    },
    indicatorContainer: {
      top: 11,
      bottom: 11,
      left: 0,
      right: 0,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    indicator: {
      width: 6,
      height: 6,
      borderRadius: 4,
      marginHorizontal: 4,
    },
    activeIndicator: {
      backgroundColor: 'rgba(52, 123, 114, 1)',
    },
    inactiveIndicator: {
      backgroundColor: 'rgba(177, 180, 180, 1)',
    },
    
    groupBuyContainer: {
      position: 'absolute',
      top: 20,
      left: 0,
      backgroundColor: '#FB6514',
      paddingTop: 2,
      paddingRight: 0,
      paddingBottom: 2,
      paddingLeft: 3,
      width: 79,
      height: 28,
      flexDirection: 'row',
      alignItems: 'center',
    },

    groupBuyText: {
      color: 'white',
      fontFamily: 'Nunito',
      fontWeight: 400,
    },
    triangleImage: {
      padding: 8,
      width: 8,
      height: 28,
      resizeMode: 'contain',
    },
    heartContainer: {
      position: 'absolute',
      top: 30,
      right: 14,
      backgroundColor: '#ffffff',
      borderRadius: 25,
      padding: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    heartImage: {
      width: 24,
      height: 24,
      resizeMode: 'contain',
    },
    ratingContainer: {
      position: 'absolute',
      bottom: 30,
      left: 16,
      opacity: 85,
      width: 88,
      height: 28,
      flexDirection: 'row',
      backgroundColor: 'rgba(242, 243, 243, 0.85)',
      borderRadius: 20,
      paddingVertical: 5,
      paddingHorizontal: 10,
      alignItems: 'center',
    },
    chipsImage: {
      position: 'absolute',

      left: 8,
      width: 70,
      height: 22,
      borderRadius:16,
      flexDirection: 'row',
      alignItems: 'center',
  },
    starIcon: {
      width: 7,
      height: 6,
      resizeMode: 'contain',
      marginLeft: 5,
      marginRight: 5,
    },
    ratingText: {
      fontSize: 14,
      color: '#000',
      fontWeight: 'bold',
    },
    reviewCount: {
      fontSize: 14,
      color: '#000',
      marginLeft: 5,
    },
    infoContainer: {
      top: 22,
      padding: 16,
      backgroundColor: '#ffffff',
    },
    nameContainer: {
      flexDirection: 'row'
    },
    productName: {
      fontSize: 16,
      fontFamily: 'Nunito',
      fontWeight: 700,
      color: 'rgba(33, 33, 33, 1)',
      marginBottom: 8,
    },
    productCat: {
      color: 'rgba(124, 126, 126, 1)',
      fontSize: 16,
      fontFamily: 'Nunito',
      
      marginBottom: 8,
    },
    priceContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
    },
    priceIcon: {
      width: 14,
      height: 20
    },
    price: {
      fontSize: 20,
      left: 8,
      fontWeight: 700,
      color: 'rgba(52, 123, 114, 1)',
      fontFamily: 'Nunito',
    },
    sold: {
      fontFamily: 'Nunito',
      top: 4,
      left: 12,
      fontSize: 12,
      color: 'rgba(124, 126, 126, 1)',
    },
    progressBarContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: 350,
      height: 24
    },
    progressBar: {
      flex: 1,
      height: 10,
      backgroundColor: 'rgba(230, 224, 233, 1)',
      borderRadius: 5,
      overflow: 'hidden',
    },
    progress: {
      width: '75%',
      height: '100%',
      borderRadius: 5,
      backgroundColor: 'rgba(251, 101, 20, 1)',
    },
    alertCard: {
      flexDirection: 'row',
      
      height: 20,
      position: 'absolute',
      top:216,
      bottom: 0,
      left: 0,
    },
    alertTextView: {
      backgroundColor: 'rgba(33, 33, 33, 1)',
      justifyContent: 'center',

      width:130,
      paddingLeft:8, // Adjusted padding to fit the text properly
    },
    alertTimeView: {
      backgroundColor: 'rgba(255, 190, 0, 1)',
      justifyContent: 'center',
      alignItems:'center',
      width:65,
      paddingHorizontal: 4, // Adjusted padding to fit the text properly
    },
    alertText: {
      fontWeight: 700,
      color: 'rgba(249, 249, 249, 1)',
      fontFamily: 'nunito',
      fontSize: 10, // Adjusted font size to fit the view
    },
    alertTime: {
      fontFamily: 'nunito',
      fontWeight: 700,
      
      color: 'rgba(0, 0, 0, 1)',
      fontSize: 14, // Adjusted font size to fit the view
    },
    stock: {
      marginLeft: 8,
      fontSize: 14,
      color: '#757575',
    },
    sizeIcon: {
      width: 'auto',
      top: 30,
      height: 220,
      backgroundColor: '#ffffff',
      padding: 16,
    },
    sizeHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
    },
    sizeTitle: {
      fontSize: 14,
      fontFamily: 'Nunito',
      fontWeight: 700,
      color: 'rgba(33, 33, 33, 1)',
    },
    sizeChart: {
      fontSize: 14,
      fontFamily: 'Nunito',
      fontWeight: 400,
      color: 'rgba(52, 123, 114, 1)',
    },
    sizeOptionsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 16,
    },
    sizeOption: {
      width: 48,
      height: 48,
      borderRadius: 24,
      borderWidth: 1,
      borderColor: 'rgba(124, 126, 126, 1)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    sizeText: {
      fontSize: 16,
      fontFamily: 'Nunito',
      fontWeight: 600,
      color: 'rgba(33, 33, 33, 1)',
    },
    quantityTitle: {
      fontSize: 16,
      fontFamily: 'Nunito',
      fontWeight: 700,
      color: 'rgba(33, 33, 33, 1)',
      marginBottom: 8,
      marginTop: 8,
    },
    quantityContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: 120,
    },
    quantityButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#f2f3f3',
      justifyContent: 'center',
      alignItems: 'center',
    },
    quantityButtonText: {
      fontSize: 29,
      fontFamily: 'Nunito',
      fontWeight: 700,
      color: 'rgba(75, 78, 78, 1)',
    },
    quantityText: {
      fontSize: 16,
      fontFamily: 'Nunito',
      fontWeight: 600,
      color: 'rgba(33, 33, 33, 1)',
      width: 58,
      borderRadius: 10,
      marginHorizontal: 10,
      height: 52,
      borderWidth: 1,
      borderColor: 'rgba(203, 205, 205, 1)',
      textAlign: 'center',
      lineHeight: 52, },
      
    deliveryIcon: {
      width: 'auto',
      top: 40,
      height: 128,
    },
    unionIcon: {
      top: 60,
      left: 20,
      width: 264,
      height: 61
    },
    productDetailsContainer: {
      width: "auto",
      top: 80,
      padding: 16,
      borderWidth: 1,
      borderColor: '#e0e0e0',
      borderRadius: 8,
      backgroundColor: '#ffffff',
    },
    productDetailsTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 8,
      color: '#212121',
    },
    productDetailsRow: {
      flexDirection: 'row',
      marginBottom: 8,
    },
    productDetailLabel: {
      fontSize: 14,
      color: '#757575',
      width: '40%',
    },
    productDetailValue: {
      fontSize: 14,
      color: '#212121',
      width: '60%',
    },
    allDetailsLink: {
      fontSize: 14,
      color: 'rgba(52, 123, 114, 1)',
      marginTop: 8,
      alignSelf: 'flex-end',
    },
    soldByIcon: {
      top: 90,
      width: 'auto',
      height: 196
    },
    PRReviewsContainer: {
      top:100,
      padding: 16,
      backgroundColor: '#ffffff',
  
      borderRadius: 8,
      borderColor: '#e0e0e0',
      borderWidth: 1,
    },
    PRReviewsTitle: {
      fontSize: 20,
      fontFamily:'Nunito',
      fontWeight:600,
      marginBottom: 16,
    },
    PR:{
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row'
    },
    PRTitleContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    PRRatingContainer: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    PRRatingValue: {
      fontSize: 28,
      fontFamily:'Nunito',
      color: 'rgba(14, 139, 81, 1)',
    },
    PRRatingStarIcon: {
      width: 13,
      height: 13,
      marginLeft:8
    },
    PRRatingCount: {
      fontSize: 10,
      color: '#757575',
      marginLeft: 16,
    },
    PRReviewCount: {
      fontSize: 10,
      color: '#757575',
      marginLeft: 16,
    },
    PRRatingBreakdownContainer: {
      marginVertical: 16,
      width:251
    },
    PRRatingRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
    },
    PRRatingLabel: {
      width: 70,
      fontSize: 14,
      color: 'rgba(33, 33, 33, 1)',
    },
    PRProgressBar: {
      flex: 1,
      height: 4,
      backgroundColor: '#e0e0e0',
      borderRadius: 4,
      overflow: 'hidden',
      marginHorizontal: 8,
    },
    PRProgress: {
      height: '100%',
      borderRadius: 4,
    },
    PRCustomerImagesTitle: {
      fontSize: 16,
      fontFamily:'Nunito',
      fontWeight:600,
      marginBottom: 8,
    },
    divider:{
        height:1,
        marginBottom:12
    },
    PRCustomerImagesContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop:10,
      marginBottom: 16,
    },
    PRCustomerImage: {
      width: 50,
      height: 50,
      borderRadius: 8,
      marginRight: 8,
    },
    PRMoreImages: {
      width: 50,
      height: 50,
      borderRadius: 8,
      backgroundColor: '#e0e0e0',
      alignItems: 'center',
      justifyContent: 'center',
    },
    PRMoreImagesText: {
      fontSize: 16,
      color: '#757575',
    },
    PRReviewContainer: {
      marginBottom: 16,
    },
    PRReviewHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
    },
    PRReviewUserImage: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 8,
    },
    PRReviewUserName: {
      fontSize: 14,
      fontWeight: 'bold',
      marginRight: 8,
    },
    PRReviewRatingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'rgba(14, 139, 81, 1)',
      borderRadius: 12,
      paddingHorizontal: 8,
      marginRight: 8,
    },
    PRReviewRating: {
      fontSize: 14,
      color: '#ffffff',
      marginRight: 4,
    },
    PRReviewStarIcon: {
      width: 10,
      height: 10,
    },
    PRReviewDate: {
      fontSize: 12,
      color: '#757575',
    },
    PRReviewText: {
      fontSize: 14,
      color: '#212121',
      marginBottom: 8,
    },
    PRReviewImagesContainer: {
      flexDirection: 'row',
      marginBottom: 8,
    },
    PRReviewImage: {
      width: 50,
      height: 50,
      borderRadius: 8,
      marginRight: 8,
    },
    PRUsefulContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop:10
    },
    PRUsefulIcon: {
      width: 16,
      height: 16,
      marginRight: 4,
    },
    PRUsefulText: {
      fontSize: 16,
      color: 'rgba(33, 33, 33, 1)',
    },
    PRViewAllReviews: {
      fontSize: 14,
      color: 'rgba(52, 123, 114, 1)',
      textAlign: 'right',
      textDecorationLine: 'underline',
    },
    faceImage:{
      width:16,
      height:16
    },
    productCard: {
        width: 195,
        height: 370,
        marginHorizontal: 1,
        marginBottom:3,
        backgroundColor: '#fff',
        elevation: 2,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:'black',
        shadowOpacity:0.05
      },
      productImage: {
        width: '100%',
        height: 256,
        resizeMode: 'cover',
      },
      productDetails: {
        padding: 10,
      },
      productTitle: {
        fontSize: 14,
        fontFamily:'nunito',
        marginBottom: 5,
      },
      productPrice: {
        fontSize: 18,
        
        color: 'rgba(33, 33, 33, 1)',
      },
      productOldPrice: {
        fontSize: 12,
        textDecorationLine: 'line-through',
        color: '#757575',
      },
      productDiscount: {
        fontSize: 10,
        marginLeft:3,
        color: 'rgba(18, 186, 108, 1)',
      },
      productSold: {
        fontSize: 10,
        marginLeft:4,
        color: '#757575',
      },
      moreContainer:{
        top:110,
        paddingRight:2,
        backgroundColor: '#ffffff',
      },
      alert:{
        width:'100%',
        height:30
      },
      end:{
        flexDirection:'column',
      },
      fixedBottom: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        width:'100%',
        backgroundColor:'white',
        zIndex: 1,
      },
        alertCard2: {
          flexDirection: 'row',
          width:'100%',
          height:30
        },
        alertTextView2: {
          backgroundColor: 'rgba(33, 33, 33, 1)',
          justifyContent: 'center',
          alignItems:'center',
          width:284,
          paddingLeft:8, // Adjusted padding to fit the text properly
        },
        alertTimeView2: {
          backgroundColor: 'rgba(255, 190, 0, 1)',
          justifyContent: 'center',
          alignItems:'center',
          width:106,
          flexDirection:'row',
          paddingHorizontal: 4, // Adjusted padding to fit the text properly
        },
        alertText2: {
          fontWeight: 700,
          color: 'rgba(249, 249, 249, 1)',
          fontFamily: 'nunito',
          
          fontSize: 16, // Adjusted font size to fit the view
        },
        alertTime2: {
          fontFamily: 'nunito',
          fontWeight: 700,
          
          color: 'rgba(0, 0, 0, 1)',
          fontSize: 14, // Adjusted font size to fit the view
        },
      buy2: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 15,
          paddingHorizontal:10
      },
      singleBuyButton: {
          flex: 1,
          borderWidth: 1,
          borderColor: 'rgba(203, 205, 205, 1)',
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 5,
          paddingVertical: 10,
      },
      groupBuyButton: {
          flex: 1,
          backgroundColor: 'rgba(52, 123, 114, 1)',
          borderRadius: 8,

          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 8,
          paddingVertical: 10,
      },
      singleBuyText: {
          color: 'black',
          fontSize: 16,
          fontFamily: 'Nunito',
      },
      groupBuyText2: {
          color: 'rgba(249, 249, 249, 1)',
          fontSize: 16,
          fontFamily: 'Nunito',
      },
      price2: {
          fontSize:16,
          fontWeight: 700,
          fontFamily:'nunito'
      },
  
    },


      
    );
    
  

export default styles;