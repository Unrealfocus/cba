import React from "react";
import { styles } from "./heroStyles";

const Hero = () => {
    return (
        <div className={styles.hero.container}>
            <div className="container mx-auto px-4">
                <div
                    data-aos="fade-right"
                    className={styles.hero.content}
                >
                    <div className={styles.hero.box}>
                        <h1 className={styles.text.heading}>Find Grocery,<br/> Cuisines and<br/> Caterers</h1>
                        <p className={styles.text.subHeading}>
                            Try African food today!
                        </p>
                        <div className="flex flex-col gap-5 pt-[30px]">
                            <div className={styles.buttons.appStoreBtn}>
                                <a href="#" className="flex items-center gap-2">
                                    <img src="/images/Apple_icon.png" alt="Apple store" />
                                    <p className={styles.buttons.appStoreText}>Download on Apple Store</p>
                                </a>
                            </div>
                            <div className={styles.buttons.appStoreBtn}>
                                <a href="#" className="flex items-center gap-2">
                                    <img src="/images/GooglePlay_icon.png" alt="Google play" />
                                    <p className={styles.buttons.appStoreText}>Download on Google Play</p>
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center mt-12">
                            <div className="flex items-center gap-4 pr-8 border-r border-white">
                                <span className={styles.text.statNumber}>10,000+</span>
                                <span className={styles.text.statLabel}>people trust us</span>
                            </div>
                            <div className="flex items-center gap-4 pl-8">
                                <span className={styles.text.statNumber}>5k+</span>
                                <span className={styles.text.statLabel}>successful deliveries</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.hero.imageWrapper}>
                        <img
                            src="images/FoodVisuals.png"
                            className={styles.hero.image}
                            alt="Brand logo dark"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
