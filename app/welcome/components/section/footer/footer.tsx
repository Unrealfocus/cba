"use client"
import React, { useContext } from "react";
import { Grid, useMediaQuery } from "@mui/material";

import Link from "next/link";

import FacebookCircleFillIcon from "remixicon-react/FacebookCircleFillIcon";
import TwitterFillIcon from "remixicon-react/TwitterFillIcon";
import InstagramLineIcon from "remixicon-react/InstagramLineIcon";
import footerStyles from "./footer.module";

export default function Footer() {

  const isMobile = useMediaQuery("(max-width:576px)");
 
  return (
    <footer className={footerStyles.footer}>
      <div className="container">
        <Grid container spacing={4}>
          <Grid  size={{xs:12,md:4}} order={isMobile ? 3 : 0}>
            <div className={footerStyles.main}>
              <div>
                <Link href="/" className="flex items-center gap-2.5">
                  <img src="images/logo.png" width="20" height="20" alt="Brand logo dark" />
                  <h2 className="text-white">CateredbyAfrica</h2>
                </Link>
              </div>
              <div className={footerStyles.flex}>
                <a
                  href={'./'}
                  className={footerStyles.item}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/app-store.webp" alt="App store" className="w-full" />
                </a>
                <a
                  href={'./'}
                  className={footerStyles.item}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/google-play.webp" alt="Google play" className="w-full" />
                </a>
              </div>
            </div>
          </Grid>

          <Grid  size={{xs:12, md:2}}>
            <ul className={footerStyles.column}>
              <li className={footerStyles.columnItem}>
                <Link href="/welcome" className={`${footerStyles.listItem} text-base font-semibold`}>
                  "Important Links"
                </Link>
              </li>
              {/* Rest of the links... */}
            </ul>
          </Grid>

          <Grid size ={{xs:12, md:3}}>
            <ul className={footerStyles.column}>
              <li className={footerStyles.columnItem}>
                <Link href="/recipes" className={`${footerStyles.listItem} text-base font-semibold`}>
                  "Follow Us"
                </Link>
              </li>
              <li>
                <Grid size=  {{xs:12, md:1}} flexDirection="row">
                  <div className={footerStyles.social}>
                    <a href={'./'} className={footerStyles.socialItem} target="_blank" rel="noopener noreferrer">
                      <InstagramLineIcon color="#FFD700" />
                    </a>
                    <a href={'./'} className={footerStyles.socialItem} target="_blank" rel="noopener noreferrer">
                      <TwitterFillIcon color="#FFD700" />
                    </a>
                    <a href={'./'} className={footerStyles.socialItem} target="_blank" rel="noopener noreferrer">
                      <FacebookCircleFillIcon color="#FFD700" />
                    </a>
                  </div>
                </Grid>
              </li>
            </ul>
          </Grid>
        </Grid>

        <div className={footerStyles.bottom}>
          <Grid container spacing={4} flexDirection={isMobile ? "column" : "row"}>
            <Grid size={{xs:12,md:12}}>
              <p className={footerStyles.text}>
                &copy; {new Date().getFullYear()} Copyright © 2018-2023 CateredbyAfrica. All Rights Reserved. Accessibility, User Agreement, Privacy, Payments, Terms of Use, Cookies, Your Privacy Choices and AdChoice
              </p>
            </Grid>
          </Grid>
        </div>
      </div>
    </footer>
  );
}