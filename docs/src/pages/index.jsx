import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "简单，易上手",
    imageUrl: "img/1.svg",
    description: (
      <>
        vue-fast-admin 的设计初衷就是为了方便后端工程师进行 to B
        系统的快速开发。6 行代码就可以实现一个表格。
      </>
    ),
  },
  {
    title: "可插拔的轻量级库",
    imageUrl: "img/2.svg",
    description: (
      <>
        vue-fast-admin 不会改变您的编码习惯，本质上它仅仅是一个基于 Element-ui
        之上的组件库，而非框架。
      </>
    ),
  },
  {
    title: "覆盖经典业务场景",
    imageUrl: "img/3.svg",
    description: (
      <>
        vue-fast-admin 考虑到了 to B
        系统中页面的单一性，所以针对经典业务组件进行了封装。足以覆盖 70%
        的业务场景。
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      // title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/get-started")}
            >
              快速开始
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
