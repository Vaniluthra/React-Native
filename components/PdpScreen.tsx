import React, { useState, useRef, useEffect } from 'react';
import { SafeAreaView, TouchableOpacity, ScrollView, View, Text, Image, FlatList, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import styles from './PdpStyle';

const images = [
    require('../assets/mainPic1.jpeg'),
    require('../assets/mainPic1.jpeg'),
    require('../assets/mainPic1.jpeg'),
    require('../assets/mainPic1.jpeg'),
    require('../assets/mainPic1.jpeg')
];

const reviews = [
    {
        userName: 'Kishore',
        rating: 4,
        date: '10 days ago',
        reviewText: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print...',
        usefulCount: 20,
        userImage: require('../assets/PicCover.jpeg'),
        reviewImages: [require('../assets/mainPic1.jpeg'), require('../assets/mainPic1.jpeg')]
    },
    {
        userName: 'Kishore',
        rating: 5,
        date: '10 days ago',
        reviewText: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print...',
        usefulCount: 15,
        userImage: require('../assets/PicCover.jpeg'),
        reviewImages: [require('../assets/mainPic1.jpeg'), require('../assets/mainPic1.jpeg')]
    }
];

const products = [
    {
        id: 1,
        title: 'Fablee',
        category: 'Women Maxi Dress',
        price: 199,
        oldPrice: null,
        discount: null,
        sold: '42k Sold',
        image: require('../assets/Pic1.jpeg'),
        rating: 4.0,
        progress: require('../assets/progress.png'),
        reviews: 246,
        groupBuy: true,
        stockLeft: 122,
    },
    {
        id: 2,
        title: 'MINI WESST',
        category: 'Oversized Tote Bag',
        price: 540,
        oldPrice: 540,
        discount: '20% off',
        sold: '42k Sold',
        image: require('../assets/Pic2.jpeg'),
        rating: 4.0,
        reviews: 246,
        bestSeller: true,
    },
    {
        id: 3,
        title: 'Saraf Jewellery',
        category: 'Rose Gold-plated AD-Studded',
        price: 699,
        oldPrice: null,
        discount: null,
        sold: '42k Sold',
        image: require('../assets/Pic3.jpeg'),
        rating: 4.0,
        progress: require('../assets/progress.png'),
        reviews: 246,
        groupBuy: true,
    },
    {
        id: 4,
        title: 'Rubans',
        category: 'Set of 2 Oxidised Bangle',
        price: 225,
        oldPrice: null,
        discount: null,
        sold: '42k Sold',
        image: require('../assets/Pic4.jpeg'),
        rating: 4.0,
        progress: require('../assets/progress.png'),
        reviews: 246,
        groupBuy: true,
    },
    {
        id: 5,
        title: 'Nautica',
        category: 'Women Mid-Top Healed Boots',
        price: 399,
        oldPrice: null,
        discount: null,
        sold: '42k Sold',
        image: require('../assets/Pic5.jpeg'),
        rating: 4.0,
        progress: require('../assets/progress.png'),
        reviews: 246,
        groupBuy: true,
    },
    {
        id: 6,
        title: 'Becca',
        category: 'Matte Lipstick+Blushing Nude M9',
        price: 540,
        oldPrice: 540,
        discount: '20% off',
        sold: '42k Sold',
        image: require('../assets/Pic6.jpeg'),
        rating: 4.0,
        reviews: 246,
        bestSeller: true,
    }
];
const PdpScreen = () => {
    const [timer, setTimer] = useState(83520); // Initial timer value in seconds (e.g., 1 hour)

    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [timer]);

    const formatTime = (seconds: number) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h}:${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
    };

    const renderProductCard = ({ item }: { item: any }) => {
        const imageWidth = 194;
        const imageHeight = 256;
        const groupBuyWidth = imageWidth * (110 / 390);
        const groupBuyHeight = imageHeight * (31 / 480);

        return (
            <View style={styles.productCard}>
                <Image source={item.image} style={styles.productImage} />
                {item.groupBuy && (
                    <View style={[styles.groupBuyContainer, { width: groupBuyWidth, height: groupBuyHeight, flexDirection: 'column' }]}>
                        <>
                            <Text style={[styles.groupBuyText, { fontSize: 8 }]}>Group buy</Text>
                            <Image source={require('../assets/face.png')} style={[styles.faceImage, { bottom:26, right:18}]} />
                            <Image source={require('../assets/Chips.png')} style={[styles.chipsImage, { top: 190 }]} />
                        </>
                        <View style={styles.alertCard}>
                            <View style={styles.alertTextView}>
                                <Text style={styles.alertText}>Hurry! Group buy end in</Text>
                            </View>
                            <View style={styles.alertTimeView}>
                                <Text style={styles.alertTime}>{formatTime(timer)}</Text>
                            </View>
                        </View>
                    </View>
                )}
                {item.bestSeller && (
                    <View style={[styles.groupBuyContainer, { width: groupBuyWidth, height: groupBuyHeight, backgroundColor: 'rgba(238, 70, 188, 1)' }]}>
                        <Text style={[styles.groupBuyText, { fontSize: 8 }]}>Best seller</Text>
                        <Image source={require('../assets/Chips.png')} style={[styles.chipsImage, { top: 206 }]} />
                    </View>
                )}
                <View style={styles.productDetails}>
                    <Text style={styles.productTitle}>{item.title}</Text>
                    <Text style={[styles.productCat, { fontSize: 12 }]} numberOfLines={1}>{item.category}</Text>
                    {!item.discount && (
                        <Image source={require('../assets/progress.png')} style={{ height: 4, width: 160 }} />
                    )}
                    <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                        {item.oldPrice && <Text style={styles.productOldPrice}>₹{item.oldPrice}</Text>}
                        {!item.discount ? (
                            <>
                                <Image source={require('../assets/priceIcon.png')} style={{ width: 12, height: 17, marginRight: 4 }} />
                                <Text style={[styles.productPrice, { fontWeight: 800, paddingTop: 7, color: 'rgba(52, 123, 114, 1)' }]}>₹{item.price}</Text>
                                <Text style={styles.productSold}>{item.sold}</Text>
                            </>
                        ) : (
                            <Text style={styles.productPrice}> ₹{item.price}</Text>
                        )}
                        {item.discount && <><Text style={styles.productDiscount}>{item.discount}</Text><Text style={styles.productSold}>{item.sold}</Text></>}
                    </View>
                </View>
            </View>
        );
    };

    const [currentIndex, setCurrentIndex] = useState(0);
    const [quantity, setQuantity] = useState(1);

    const flatListRef = useRef<FlatList>(null);

    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const slideSize = event.nativeEvent.layoutMeasurement.width;
        const index = Math.floor(event.nativeEvent.contentOffset.x / slideSize);
        setCurrentIndex(index);
    };

    const renderImage = ({ item }: { item: any }) => (
        <View style={styles.imageWrapper}>
            <Image source={item} style={styles.mainPicStyle} />
        </View>
    );

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    return (
        <SafeAreaView style={styles.bg}>

            <View style={[styles.container, styles.fixedTop]}>
                <View style={styles.row}>
                    <View style={styles.arrowContainer}>
                        <Image source={require('../assets/back_arrow.png')} style={styles.image} />
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.dressTitle}>Pepe Jeans</Text>
                    </View>
                    <View style={styles.shareContainer}>
                        <Image source={require('../assets/Share.png')} style={styles.image} />
                    </View>
                </View>
            </View>
            <ScrollView  nestedScrollEnabled contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.imageContainer}>
                    <FlatList
                        ref={flatListRef}
                        data={images}
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        onScroll={onScroll}
                        renderItem={renderImage}
                        keyExtractor={(item, index) => index.toString()}
                    />
                    <View style={styles.indicatorContainer}>
                        {images.map((_, index) => (
                            <View
                                key={index}
                                style={[
                                    styles.indicator,
                                    currentIndex === index ? styles.activeIndicator : styles.inactiveIndicator,
                                ]}
                            />
                        ))}
                    </View>
                    <View style={styles.groupBuyContainer}>
                        <Text style={styles.groupBuyText}>Group buy</Text>
                        <Image source={require('../assets/Rectangle.png')} style={styles.triangleImage} />
                    </View>
                    <View style={styles.heartContainer}>
                        <Image source={require('../assets/heart.png')} style={styles.heartImage} />
                    </View>
                    <View style={styles.ratingContainer}>
                        <Text style={styles.ratingText}>4.0</Text>
                        <Image source={require('../assets/star_icon.png')} style={styles.starIcon} />
                        <Text style={styles.reviewCount}>246</Text>
                    </View>
                </View>

                <View style={styles.infoContainer}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.productName}>Pepe Jeans </Text>
                        <Text style={styles.productCat}>Women checked Jacket</Text></View>

                    <View style={styles.priceContainer}>
                        <Image source={require('../assets/priceIcon.png')} style={styles.priceIcon} />
                        <Text style={styles.price}>₹225</Text>
                        <Text style={styles.sold}>42k Sold</Text>
                    </View>
                    <View style={styles.progressBarContainer}>
                        <View style={styles.progressBar}>
                            <View style={styles.progress}></View>
                        </View>
                        <Text style={styles.stock}><Text style={{ fontWeight: 700, fontSize: 16, color: 'rgba(33, 33, 33, 1)' }}>122</Text>/200</Text>
                    </View>
                </View>

                <View style={styles.sizeIcon}>
                    <View style={styles.sizeHeader}>
                        <Text style={styles.sizeTitle}>Size</Text>
                        <TouchableOpacity>
                            <Text style={styles.sizeChart}>Size chart</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.sizeOptionsContainer}>
                        {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                            <TouchableOpacity key={size} style={styles.sizeOption}>
                                <Text style={styles.sizeText}>{size}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <Text style={styles.quantityTitle}>Quantity</Text>
                    <View style={styles.quantityContainer}>
                        <TouchableOpacity onPress={() => setQuantity(Math.max(1, quantity - 1))} style={styles.quantityButton}>
                            <Text style={styles.quantityButtonText}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.quantityText}>{quantity}</Text>
                        <TouchableOpacity onPress={() => setQuantity(quantity + 1)} style={styles.quantityButton}>
                            <Text style={styles.quantityButtonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <Image source={require('../assets/delivery.png')} style={styles.deliveryIcon} />

                <Image source={require('../assets/Union.png')} style={styles.unionIcon} />

                <View style={styles.productDetailsContainer}>
                    <Text style={styles.productDetailsTitle}>Product Details</Text>
                    <View style={styles.productDetailsRow}>
                        <Text style={styles.productDetailLabel}>Color</Text>
                        <Text style={styles.productDetailValue}>Blue</Text>
                    </View>
                    <View style={styles.productDetailsRow}>
                        <Text style={styles.productDetailLabel}>Fabric</Text>
                        <Text style={styles.productDetailValue}>Polyester</Text>
                    </View>
                    <View style={styles.productDetailsRow}>
                        <Text style={styles.productDetailLabel}>Pattern</Text>
                        <Text style={styles.productDetailValue}>Solid</Text>
                    </View>
                    <View style={styles.productDetailsRow}>
                        <Text style={styles.productDetailLabel}>Type</Text>
                        <Text style={styles.productDetailValue}>Bomber Jacket</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.allDetailsLink}>All Details &gt;</Text>
                    </TouchableOpacity>
                </View>
                <Image source={require('../assets/soldBy.png')} style={styles.soldByIcon} />

                <View style={styles.PRReviewsContainer}>
                    <Text style={styles.PRReviewsTitle}>Product Rating & Reviews</Text>
                    <View style={styles.PR}>
                        <View style={styles.PRRatingContainer}>
                            <View style={styles.PRTitleContainer}>
                                <Text style={styles.PRRatingValue}>4.0</Text>
                                <Image source={require('../assets/Star1.png')} style={styles.PRRatingStarIcon} />
                            </View>
                            <Text style={styles.PRRatingCount}>1,820 rating</Text>
                            <Text style={styles.PRReviewCount}>627 reviews</Text>
                        </View>

                        <View style={styles.PRRatingBreakdownContainer}>
                            <View style={styles.PRRatingRow}>
                                <Text style={styles.PRRatingLabel}>Excellent</Text>
                                <View style={styles.PRProgressBar}>
                                    <View style={[styles.PRProgress, { width: '90%', backgroundColor: '#4CAF50' }]}></View>
                                </View>
                                <Text style={styles.PRRatingCount}>900</Text>
                            </View>
                            <View style={styles.PRRatingRow}>
                                <Text style={styles.PRRatingLabel}>Good</Text>
                                <View style={styles.PRProgressBar}>
                                    <View style={[styles.PRProgress, { width: '75%', backgroundColor: '#8BC34A' }]}></View>
                                </View>
                                <Text style={styles.PRRatingCount}>750</Text>
                            </View>
                            <View style={styles.PRRatingRow}>
                                <Text style={styles.PRRatingLabel}>Average</Text>
                                <View style={styles.PRProgressBar}>
                                    <View style={[styles.PRProgress, { width: '20%', backgroundColor: '#FFC107' }]}></View>
                                </View>
                                <Text style={styles.PRRatingCount}>200</Text>
                            </View>
                            <View style={styles.PRRatingRow}>
                                <Text style={styles.PRRatingLabel}>Poor</Text>
                                <View style={styles.PRProgressBar}>
                                    <View style={[styles.PRProgress, { width: '70%', backgroundColor: '#F44336' }]}></View>
                                </View>
                                <Text style={styles.PRRatingCount}>700</Text>
                            </View>
                        </View>
                    </View>
                    <Image source={require('../assets/Divider.png')} style={styles.divider} />

                    <Text style={styles.PRCustomerImagesTitle}>Real image and videos from customers</Text>
                    <View style={styles.PRCustomerImagesContainer}>
                        {Array(5).fill(0).map((_, index) => (
                            <Image key={index} source={require('../assets/mainPic1.jpeg')} style={styles.PRCustomerImage} />
                        ))}
                        <View style={styles.PRMoreImages}>
                            <Text style={styles.PRMoreImagesText}>+12</Text>
                        </View>
                    </View>
                    

                    {reviews.map((review, index) => (
                        
                        <View key={index} style={styles.PRReviewContainer}>
                            <Image source={require('../assets/Divider.png')} style={styles.divider} />
                            <View style={styles.PRReviewHeader}>
                                <Image source={review.userImage} style={styles.PRReviewUserImage} />
                                <Text style={styles.PRReviewUserName}>{review.userName}</Text>
                                <View style={styles.PRReviewRatingContainer}>
                                    <Text style={styles.PRReviewRating}>{review.rating}</Text>
                                    <Image source={require('../assets/whiteStar.png')} style={styles.PRReviewStarIcon} />
                                </View>
                                <Text style={styles.PRReviewDate}>{review.date}</Text>
                            </View>
                            <Text style={styles.PRReviewText}>{review.reviewText}</Text>
                            <View style={styles.PRReviewImagesContainer}>
                                {review.reviewImages.map((image, idx) => (
                                    <Image key={idx} source={image} style={styles.PRReviewImage} />
                                ))}
                            </View>
                            <View style={styles.PRUsefulContainer}>
                                <Image source={require('../assets/thumb_icon.png')} style={styles.PRUsefulIcon} />
                                <Text style={styles.PRUsefulText}>Useful ({review.usefulCount})</Text>
                            </View>
                        </View>
                    ))}

                    <TouchableOpacity>
                        <Text style={styles.PRViewAllReviews}>View All Reviews &gt;</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.moreContainer}>
                    <Text style={{ fontSize: 20, fontFamily: 'nunito', color: 'rgba(33, 33, 33, 1)', margin: 10 }}>People Also Viewed</Text>
                    <FlatList

                        data={products}
                        renderItem={renderProductCard}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={2}
                        columnWrapperStyle={{ justifyContent: 'space-between' }}
                    />

                </View>
            </ScrollView>
            <View style={[styles.end, styles.fixedBottom]}>
            <View style={styles.alertCard2}>
                            <View style={styles.alertTextView2}>
                                <Text style={styles.alertText2}>Hurry! This group buy will end in</Text>
                            </View>
                            <View style={styles.alertTimeView2}>
                            <Image source={require('../assets/Vector.png')} style={{width:17,height:17,marginRight:3}} />
                                <Text style={styles.alertTime2}>{formatTime(timer)}</Text>
                            </View>
                        </View>
                        <View style={styles.buy2}>
            <TouchableOpacity style={styles.singleBuyButton}>
                <Text style={styles.singleBuyText}>
                    <Text style={styles.price2}>₹600 </Text>Single Buy
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.groupBuyButton}>
                <Text style={styles.groupBuyText2}>
                    <Text style={styles.price2}>₹540 </Text>Group Buy
                </Text>
            </TouchableOpacity>
        </View>
            </View>

        </SafeAreaView>
    );
};

export default PdpScreen;