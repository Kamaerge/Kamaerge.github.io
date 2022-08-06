import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '知识体系',
    Svg: require('@site/static/img/brain-5159705.svg').default,
    description: (
      <>
       什么是深度学习？
      </>
    ),
  },
  {
    title: '专题博客',
    Svg: require('@site/static/img/brain-5159706.svg').default,
    description: (
      <>
        相关领域的个人探索。
      </>
    ),
  },
  {
    title: '待解答的疑问',
    Svg: require('@site/static/img/brain-5159709.svg').default,
    description: (
      <>
        未解决的问题。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
