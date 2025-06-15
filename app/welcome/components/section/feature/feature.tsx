"use client"

import React, { useState, useEffect } from 'react';
import cls from './feature.module';
import { AnimatePresence, motion } from "framer-motion";


const CustomerSection = () => {
    const [tab, setTab] = useState('customer');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const customerImages = [
        {
            src: 'images/orderfood.png',
            title: 'Enjoy The Best Meals',
            description: 'Find African restaurants or caterers around you',
        },
        {
            src: 'images/bro.png',
            title: 'Enjoy The Best Meals',
            description: 'Find African restaurants or caterers around you',
        },
        {
            src: 'images/pana.png',
            title: 'Lightning Fast Delivery',
            description: 'Experience the taste of Africa delivered to your doorstep',
        },
    ];

    const partnerImages = [
        {
            src: 'images/partner.png',
            title: 'Become a Partner',
            description: 'Expand to a new audience that has never tried African food before',
        },
        {
            src: 'images/bro1.png',
            title: 'Payment Processing',
            description: 'Upgrade to an easy-to-use POS system designed for your business type and get up to 0% in credit card processing fees for any of your locations',
        },
        {
            src: 'images/rafiki.png',
            title: 'Get Working Capital Loan within 3 minutes',
            description: 'You can use it to hire more employees, upgrade your POS systems offer, buy new kitchen equipment or store equipment. We help you grow as a dedicated long-term partner.',
        },
    ];


    const tabContentVariant = {
        active: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        },
        inactive: {
            opacity: 0,
            y: 20,
            transition: {
                duration: 0.2
            }
        }
    };

    const cardVariant = {
        active: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4
            }
        },
        inactive: {
            opacity: 0,
            y: 20,
            transition: {
                duration: 0.3
            }
        }
    };

    const tabVariant = {
        active: {
            width: "60%",
            backgroundColor: "#facc15", // yellow-400
            transition: {
                type: "tween",
                duration: 0.3
            }
        },
        inactive: {
            width: "40%",
            backgroundColor: "#ffffff", // white
            transition: {
                type: "tween",
                duration: 0.3
            }
        }
    };


    const images = tab === 'customer' ? customerImages : partnerImages;

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 576);
        };

        if (typeof window !== 'undefined') {
            setIsMobile(window.innerWidth <= 576);
            window.addEventListener('resize', handleResize);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', handleResize);
            }
        };
    }, []);

    useEffect(() => {
        let interval: number | undefined;
    
        if (isMobile) {
            interval = window.setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 5000);
        }
    
        return () => {
            if (interval !== undefined) {
                clearInterval(interval);
            }
        };
    }, [isMobile, images.length]);
    
    return (
        <div className={cls.container}>
            <div className={cls.tab}>
                <motion.div
                    variants={tabVariant}
                    animate={tab === 'customer' ? "active" : "inactive"}
                    className={`${cls.tabButton}`}
                    onClick={() => setTab('customer')}
                >
                    Customer
                </motion.div>
                <motion.div
                    variants={tabVariant}
                    animate={tab === 'partner' ? "active" : "inactive"}
                    className={`${cls.tabButton}`}
                    onClick={() => setTab('partner')}
                >
                    Partner
                </motion.div>
            </div>

            <div className={cls.logoContainer}>
                <img src="images/GooglePlay_Icon.png" width="20px" alt="Google Play logo" />
                <img src="images/Apple_Icon.png" width="20px" alt="Apple logo" />
            </div>

            <AnimatePresence mode="wait">
                {isMobile ? (
                    <motion.div
                        key={`mobile-${tab}`}
                        initial="inactive"
                        animate="active"
                        exit="inactive"
                        variants={tabContentVariant}
                        className={cls.mobileContent}
                    >
                        <div className={cls.imageContainer}>
                            <img src={images[currentIndex].src} width="200px" alt="Image" />
                            <p className={cls.imageTitle}>{images[currentIndex].title}</p>
                            <p className={cls.imageDescription}>{images[currentIndex].description}</p>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key={`desktop-${tab}`}
                        initial="inactive"
                        animate="active"
                        exit="inactive"
                        variants={tabContentVariant}
                        className={cls.desktopContent}
                    >
                        {images.map((image, index) => (
                            <motion.div 
                                key={index}
                                variants={cardVariant}
                                className={cls.imageContainer}
                            >
                                <img src={image.src} width="200px" alt="Image" />
                                <p className={cls.imageTitle}>{image.title}</p>
                                <p className={cls.imageDescription}>{image.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default CustomerSection;