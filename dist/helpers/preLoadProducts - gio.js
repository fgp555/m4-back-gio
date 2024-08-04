"use strict";
// back\src\helpers\preLoadProducts.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.preLoadProducts = void 0;
const dataSource_1 = require("../config/dataSource");
const Product_1 = require("../entities/Product");
const product_repository_1 = require("../repositories/product.repository");
const productsToPreLoad = [
    {
        name: "iPhone 11",
        price: 699,
        description: "Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
        image: "https://i.postimg.cc/28jfJ0Gn/apple-iphone-11.jpg",
        categoryId: 1,
        stock: 10,
    },
    {
        name: "MacBook Air",
        price: 999,
        description: "Embrace efficiency and sophistication with the MacBook Air: lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.",
        image: "https://i.postimg.cc/ZKgJX1qX/macbookair.jpg",
        categoryId: 2,
        stock: 10,
    },
    {
        name: "iPad Pro",
        price: 799,
        description: "Unleash your creativity and productivity with the iPad Pro: powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Pro the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.",
        image: "https://i.postimg.cc/TwkzgDLB/iPad-Pro.webp",
        categoryId: 3,
        stock: 10,
    },
    {
        name: "Apple Watch Series 6",
        price: 399,
        description: "Stay connected and healthy with the Apple Watch Series 6: track your workouts, monitor your health, and stay in touch with the people and information you care about most. Experience the future of health and wellness with the Apple Watch Series 6.",
        image: "https://i.postimg.cc/rsx7bYY2/Apple-Watch-Series-6.webp",
        categoryId: 4,
        stock: 10,
    },
    {
        name: "AirPods Pro",
        price: 249,
        description: "Immerse yourself in sound with the AirPods Pro: active noise cancellation, transparency mode, and customizable fit make the AirPods Pro the perfect companion for music, calls, and everything in between. Elevate your audio experience with the AirPods Pro.",
        image: "https://i.postimg.cc/DyF2hqQP/Air-Pods-Pro.webp",
        categoryId: 5,
        stock: 10,
    },
    {
        name: "HomePod mini",
        price: 99,
        description: "Elevate your home audio experience with the HomePod mini: immersive sound, intelligent assistant, and smart home hub make the HomePod mini the perfect addition to your home. Enjoy a world of music, news, and more with the HomePod mini.",
        image: "https://i.postimg.cc/Wb61q9py/Home-Pod-mini.webp",
        categoryId: 6,
        stock: 10,
    },
];
const preLoadProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield product_repository_1.ProductRepository.find();
    if (!products.length)
        yield dataSource_1.AppDataSource.createQueryBuilder()
            .insert()
            .into(Product_1.Product)
            .values(productsToPreLoad)
            .execute();
    console.log("Products preloaded");
});
exports.preLoadProducts = preLoadProducts;