import React from "react";
import { RichText } from "prismic-reactjs";
import { Link } from 'prismic-reactjs' 
const PostsCards = ({ slice }) => (
  <section className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
      {slice?.items?.map((item, i) => (
        <a href={Link.url(item.blogLink)}>
          <div className="max-w-sm mx-auto rounded-xl text-white group hover:no-underline focus:no-underline bg-gray-600">
            <img
              src={item.image.url}
              alt={item.image.alt}
              className="object-cover w-full rounded h-44"
            />
            <div className="p-6 space-y-2">
              <h2 className="text-3xl font-semibold group-hover:underline group-focus:underline">
                {item.title}
              </h2>
              <RichText render={item.description} />
            </div>
          </div>
        </a>
      ))}
    </div>
    {/* <h1 className="title">
      {slice?.items?.map((item, i) => (
      ))}
    </h1>
    <a rel="noopener noreferrer" href="#" 
    className="max-w-sm mx-auto group hover:no-underline focus:no-underline"
    >
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-coolGray-500" src="https://source.unsplash.com/random/480x360?1">
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
					<span className="text-xs dark:text-coolGray-400">January 21, 2021</span>
					<p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
				</div>
			</a>
    <div>
      {slice?.items?.map((item, i) => (
      ))}
    </div>
    <button>
      {slice?.items?.map((item, i) => (
      ))}
      ))}
    </button> */}
  </section>
);

export default PostsCards;
