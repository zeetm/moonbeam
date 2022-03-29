import React from 'react';
import Head from 'next/head';

export default function SEO({
  // description = 'We provide services that create business, customer and community value. Focusing on ecommerce, technology, agri-food as well as import and export',
  meta,
  title = 'Moonbeam Trading Company',
}) {
  const metaData = [
    {
      name: `description`,
      content: 'We provide services that create business, customer and community value. Focusing on ecommerce, technology, agri-food as well as import and export',
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: 'We provide services that create business, customer and community value. Focusing on ecommerce, technology, agri-food as well as import and export',
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      property: `og:image`,
      content: `https://imgur.com/4VMrEi4`,
    },
    {
      property: `og:url`,
      content: `https://moonbeamtrading.ca/`,
    },
  ].concat(meta);
  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};
