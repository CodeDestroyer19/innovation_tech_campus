import Head from "next/head";
import React from "react";
import { NextComponentType } from "next";

const Meta = ({
  title,
  description,
  keyWords,
}: {
  title: string;
  description: string;
  keyWords: string;
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyWords" content={keyWords} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Meta;
