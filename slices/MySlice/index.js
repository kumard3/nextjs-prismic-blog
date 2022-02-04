import React from "react";
import { RichText } from "prismic-reactjs";

const MySlice = ({ slice }) => (
  <section>
    <div className="text-2xl">
      {slice?.items?.map((item, i) => (
        <img src={item.image.url} alt={item.image.alt} />
      ))}
    </div>
    {slice.primary.description ? (
      <RichText render={slice.primary.description} />
    ) : (
      <p>start by editing this slice from inside Prismic builder!</p>
    )}
    <style jsx>{`
      section {
        max-width: 600px;
        margin: 4em auto;
        text-align: center;
      }
      .title {
        color: #8592e0;
      }
    `}</style>
  </section>
);

export default MySlice;
