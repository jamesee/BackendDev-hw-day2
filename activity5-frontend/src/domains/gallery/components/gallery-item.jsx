import * as React from "react";
// import PropTypes from "prop-types";
import { useContext } from "react";
import { Link } from 'react-router-dom';
import {
  ThumbUpIcon,
  ThumbDownIcon
} from "@heroicons/react/solid";
import { Button } from "../../../components/button";
import { CollectionsContext } from '../store/collections-context';


export const GalleryItem = (props) => {

  const { _id, releaseDate, adult, backdropUrl, posterUrl, title, overview } = props;
  const collectionsCtx = useContext(CollectionsContext);
  const itemIsCollection = collectionsCtx.itemIsCollection(_id);
  
  // console.log(`id: ${_id}, itemIsCollection: ${itemIsCollection}`)

  const toggleCollectionStatusHandler = () => {
    if (itemIsCollection) {
      collectionsCtx.removeCollection(_id);
    } else {
      collectionsCtx.addCollection({_id, releaseDate, adult, backdropUrl, posterUrl, title, overview});
    }
    // console.log(collectionsCtx);
  }

  return (
    <>
      <div className="relative flex flex-col items-center">

        <div className="
                        absolute 
                        inset-0 
                        w-full 
                        h-full
                        object-cover 
                        object-center 
                        group 
                        block 
                        rounded-lg 
                        bg-gray-100 
                        focus-within:ring-2 
                        focus-within:ring-offset-2 
                        focus-within:ring-offset-gray-100 
                        focus-within:ring-pink-500 
                        overflow-hidden
                      "
        >
          <img
            src={backdropUrl}
            alt=""
            className="object-cover pointer-events-none group-hover:opacity-75 w-full h-80 overflow-hidden"
          />
        </div>
        <div
          className="px-8 py-10 rounded-lg relative z-10 w-full h-80 bg-indigo-500 opacity-0 hover:opacity-100"
        >

          <div className="flex justify-evenly">
          <div>
              <div className="p-8 relative z-10 w-full border-4 border-gray-200 bg-indigo-500 opacity-90">
                <h1 className="title-font text-lg font-bold text-white hover:text-indigo-100 ">{title}</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-2">
            <Link  className="underline text-center text-xl leading-relaxed text-white" to={`/movie/${_id}` }>[  View movie details  ]</Link>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-1 mt-4 py-1">

            <Button variant="primary" onClick={toggleCollectionStatusHandler}>
              {itemIsCollection? <ThumbDownIcon className="h-4 w-4 mr-1.5" /> : <ThumbUpIcon className="h-4 w-4 mr-1.5" />}
              {itemIsCollection ? 'Remove Likes' : 'Likes'}
            </Button>

          </div>
        </div>

      </div>
    </>
  );
};


// GalleryItem.propTypes = {
//   imageId: PropTypes.number.isRequired,
//   imageHeight: PropTypes.number.isRequired,
//   imageWidth: PropTypes.number.isRequired,
//   imageUrl: PropTypes.string.isRequired,
//   photographerUrl: PropTypes.string.isRequired,
//   photographer: PropTypes.string.isRequired,
// };
