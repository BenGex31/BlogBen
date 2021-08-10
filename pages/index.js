/** @format */

import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import React from "react";
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I'm a French frontend developer.<br></br>
          You can contact me on :
          <ul>
            <li>
              <a
                href='https://www.linkedin.com/in/benjamindesole/'
                target='_blank'>
                LinkedIn <LinkedInIcon />
              </a>
            </li>
            <li>
              <a href='https://twitter.com/BenjaminDesole' target='_blank'>
                Twitter
              </a>
            </li>
            <li>
              <a href='https://github.com/BenGex31' target='_blank'>
                GitHub
              </a>
            </li>
          </ul>
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this in{" "}
          <a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
