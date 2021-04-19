import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';
import { icons, images, SIZES, COLORS, FONTS } from '../constants'
const Home = ({ navigation }) => {

    // Dummy Datas

    const initialCurrentLocation = {
        streetName: "Rabbit House",
        gps: {
            latitude: 1.5496614931250685,
            longitude: 110.36381866919922
        }
    }

    const categoryData = [
        {
            id: 1,
            name: "Cafe",
            icon: icons.cafe,
        },
        {
            id: 2,
            name: "Nước ngọt",
            icon: icons.drink,
        },
        {
            id: 3,
            name: "Ăn vặt",
            icon: icons.anvat,
        },
        {
            id: 4,
            name: "Bánh mì",
            icon: icons.hotdog,
        },
        {
            id: 5,
            name: "Cơm",
            icon: icons.rice_bowl,
        },
        {
            id: 6,
            name: "Snacks",
            icon: icons.fries,
        },
    ]

    // price rating
    const affordable = 1
    const fairPrice = 2
    const expensive = 3

    const restaurantData = [
        {
            id: 1,
            name: "Cafe",
            rating: 4.8,
            categories: [1],
            priceRating: affordable,
            photo: images.blackcafe,
            duration: "5 - 10 phút",
            location: {
                latitude: 1.5347282806345879,
                longitude: 110.35632207358996,
            },
            courier: {
                avatar: images.avatar_1,
                name: "cafe"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Capuchino",
                    photo: images.capuchino,
                    description: "Cafe capuchino",
                    calories: 200,
                    price: 10
                },
                {
                    menuId: 2,
                    name: "Black Cafe",
                    photo: images.blackcafe,
                    description: "Black Cafe",
                    calories: 250,
                    price: 10
                },
                {
                    menuId: 3,
                    name: "Sakura Cafe",
                    photo: images.sakura,
                    description: "Cafe làm từ Sakura",
                    calories: 194,
                    price: 10
                }
            ]
        },
        {
            id: 2,
            name: "Nước Ngọt",
            rating: 4.8,
            categories: [2],
            priceRating: expensive,
            photo: images.coca,
            duration: "5 - 10 min",
            location: {
                latitude: 1.556306570595712,
                longitude: 110.35504616746915,
            },
            courier: {
                avatar: images.avatar_2,
                name: "nuocngot"
            },
            menu: [
                {
                    menuId: 4,
                    name: "Coca",
                    photo: images.coca,
                    description: "Nước ngọt coca",
                    calories: 250,
                    price: 10
                },
                {
                    menuId: 5,
                    name: "7 up",
                    photo: images.nc7up,
                    description: "Nước ngọt 7 up",
                    calories: 250,
                    price: 10
                },
                {
                    menuId: 6,
                    name: "Pepsi",
                    photo: images.pepsi,
                    description: "Nước ngọt pepsi",
                    calories: 100,
                    price: 10
                },
                {
                    menuId: 7,
                    name: "Ô long",
                    photo: images.olong,
                    description: "Nước ngọt ngựa rồng",
                    calories: 100,
                    price: 10
                }
            ]
        },
        {
            id: 3,
            name: "Ăn Vặt",
            rating: 4.8,
            categories: [3],
            priceRating: expensive,
            photo: images.banhtrangtron,
            duration: "10 - 15 min",
            location: {
                latitude: 1.5238753474714375,
                longitude: 110.34261833833622,
            },
            courier: {
                avatar: images.avatar_3,
                name: "anvat"
            },
            menu: [
                {
                    menuId: 8,
                    name: "Bánh tráng trộn",
                    photo: images.banhtrangtron,
                    description: "Bánh tráng trộn",
                    calories: 100,
                    price: 20
                },
                {
                    menuId: 9,
                    name: "Bánh tráng cuốn",
                    photo: images.banhtrangcuon,
                    description: "Bánh tráng cuốn",
                    calories: 100,
                    price: 20
                },
                {
                    menuId: 10,
                    name: "Bông lan trứng muối",
                    photo: images.bonglan,
                    description: "Bánh Bông lan trứng muối",
                    calories: 100,
                    price: 20
                }
            ]
        },
        {
            id: 4,
            name: "Bánh Mỳ",
            rating: 4.8,
            categories: [4],
            priceRating: expensive,
            photo: images.banhmykep,
            duration: "10 - 15 min",
            location: {
                latitude: 1.5578068150528928,
                longitude: 110.35482523764315,
            },
            courier: {
                avatar: images.avatar_4,
                name: "banhmy"
            },
            menu: [
                {
                    menuId: 11,
                    name: "Bánh mỳ nướng muối ớt",
                    photo: images.banhmynuong,
                    description: "Bánh mỳ nướng muối ớt",
                    calories: 100,
                    price: 25
                },
                {
                    menuId: 12,
                    name: "Bánh mỳ kẹp",
                    photo: images.banhmykep,
                    description: "Bánh mỳ kẹp",
                    calories: 100,
                    price: 25
                }
            ]
        },
        {
            id: 5,
            name: "Cơm",
            rating: 4.8,
            categories: [5],
            priceRating: affordable,
            photo: images.comnhat,
            duration: "15 - 20 min",
            location: {
                latitude: 1.558050496260768,
                longitude: 110.34743759630511,
            },
            courier: {
                avatar: images.avatar_4,
                name: "com"
            },
            menu: [
                {
                    menuId: 13,
                    name: "Cơm cháy",
                    photo: images.comchay,
                    description: "Cơm cháy chà bông kho quệt",
                    calories: 200,
                    price: 50
                },
                {
                    menuId: 14,
                    name: "Cơm Nhật Bản",
                    photo: images.comnhat,
                    description: "Cơm Nhật Bản",
                    calories: 300,
                    price: 100
                },
            ]
        },
        {
            id: 6,
            name: "Snack",
            rating: 4.8,
            categories: [6],
            priceRating: affordable,
            photo: images.baprang,
            duration: "5 - 10 min",
            location: {
                latitude: 1.558050496260768,
                longitude: 110.34743759630511,
            },
            courier: {
                avatar: images.avatar_4,
                name: "snack"
            },
            menu: [
                {
                    menuId: 15,
                    name: "Bấp rang bơ",
                    photo: images.baprang,
                    description: "Bấp rang bơ",
                    calories: 200,
                    price: 5
                },
                {
                    menuId: 16,
                    name: "Khoai tây chiên",
                    photo: images.khoai,
                    description: "Khoai tây chiên",
                    calories: 300,
                    price: 8
                },
            ]
        },
    ]

    const [categories, setCategories] = React.useState(categoryData)
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [restaurants, setRestaurants] = React.useState(restaurantData)
    const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)


    function onSelectCategory(category) {
        //filter restaurant
        let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))

        setRestaurants(restaurantList)

        setSelectedCategory(category)
    }

    function getCategoryNameById(id) {
        let category = categories.filter(a => a.id == id)

        if (category.length > 0)
            return category[0].name

        return ""
    }

    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', height: 50, paddingTop: 10}}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                    onPress = {() => {navigation.openDrawer()}}
                >
                    <Image
                        source={icons.list}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View
                        style={{
                            width: '70%',
                            height: "100%",
                            backgroundColor: COLORS.lightGray3,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SIZES.radius
                        }}
                    >
                        <Text style={{ ...FONTS.h3 }}>{currentLocation.streetName}</Text>
                    </View>
                </View>

               <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                    onPress = {() => {navigation.openDrawer()}}
                >
                    <Image
                        source={images.avatar_4}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderMainCategories() {
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{
                        padding: SIZES.padding,
                        paddingBottom: SIZES.padding * 2,
                        backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
                        borderRadius: SIZES.radius,
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: SIZES.padding,
                        ...styles.shadow
                    }}
                    onPress={() => onSelectCategory(item)}
                >
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray
                        }}
                    >
                        <Image
                            source={item.icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                    </View>

                    <Text
                        style={{
                            marginTop: SIZES.padding,
                            color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
                            ...FONTS.body5
                        }}
                    >
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ padding: SIZES.padding }}>
                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
                />
            </View>
        )
    }

    function renderRestaurantList() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginBottom: SIZES.padding * 2 }}
                onPress={() => navigation.navigate("Restaurant", {
                    item,
                    currentLocation
                })}
            >
                {/* Image */}
                <View
                    style={{
                        marginBottom: SIZES.padding
                    }}
                >
                    <Image
                        source={item.photo}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: 200,
                            borderRadius: SIZES.radius
                        }}
                    />

                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            height: 50,
                            width: SIZES.width * 0.3,
                            backgroundColor: COLORS.white,
                            borderTopRightRadius: SIZES.radius,
                            borderBottomLeftRadius: SIZES.radius,
                            alignItems: 'center',
                            justifyContent: 'center',
                            ...styles.shadow
                        }}
                    >
                        <Text style={{ ...FONTS.h4 }}>{item.duration}</Text>
                    </View>
                </View>

                {/* Restaurant Info */}
                <Text style={{ ...FONTS.body2 }}>{item.name}</Text>

                <View
                    style={{
                        marginTop: SIZES.padding,
                        flexDirection: 'row'
                    }}
                >
                    {/* Rating */}
                    <Image
                        source={icons.star}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: COLORS.primary,
                            marginRight: 10
                        }}
                    />
                    <Text style={{ ...FONTS.body3 }}>{item.rating}</Text>

                    {/* Categories */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginLeft: 10
                        }}
                    >
                        {
                            item.categories.map((categoryId) => {
                                return (
                                    <View
                                        style={{ flexDirection: 'row' }}
                                        key={categoryId}
                                    >
                                        <Text style={{ ...FONTS.body3 }}>{getCategoryNameById(categoryId)}</Text>
                                        <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}> . </Text>
                                    </View>
                                )
                            })
                        }

                        {/* Price */}
                        {
                            [1, 2, 3].map((priceRating) => (
                                <Text
                                    key={priceRating}
                                    style={{
                                        ...FONTS.body3,
                                        color: (priceRating <= item.priceRating) ? COLORS.black : COLORS.darkgray
                                    }}
                                >$</Text>
                            ))
                        }
                    </View>
                </View>
            </TouchableOpacity>
        )

        return (
            <FlatList
                data={restaurants}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30
                }}
            />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderMainCategories()}
            {renderRestaurantList()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})

export default Home;