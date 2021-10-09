import { useGalleryListings } from "../domains/gallery";
import { LoginForm, useAuth} from "../domains/auth";
import * as React from "react";
import { Button } from "../components/button";
import { GalleryItem} from "../domains/gallery";

export const Gallery = () => {
  const { page, setPage, isLoading, galleryListings } = useGalleryListings();
  const auth = useAuth();

  return (

    <>
      {
        auth.status === "anonymous" &&
        <main className="bg-gray-50 p-6 sm:p-12 min-h-screen">
          <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
            <LoginForm />
          </div>
        </main>
      }
      {
      auth.status === "authenticated" &&

    <main className="bg-gray-50 lg:flex">

      <div className="flex-1">
        <div className="max-w-7xl mx-auto pt-10 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:flex-col sm:align-center">
            <h1 className="text-5xl font-extrabold text-pink-700 sm:text-center">
              Movies Gallery
            </h1>
          </div>

          {/*  =============== Prev & Next buttons ============  */}
          <div className="flex justify-between">
            <Button
              type="button"
              className="
                      w-30 h-10
                      bg-transparent 
                      hover:bg-pink-600 
                      text-pink-700 
                      font-semibold 
                      hover:text-white 
                      py-2 px-10 
                      border 
                      border-pink-600 
                      hover:border-transparent 
                      rounded-2xl
                      focus:ring-pink-900
                      m-2
                      my-5
                    "
              disabled={page === 1}
              onClick={() => setPage(()=> parseInt(page-1))}
            >
              Prev
            </Button>




            <Button
              type="button"
              className="
                      w-30 h-10
                      bg-transparent 
                      hover:bg-pink-600 
                      text-pink-700 
                      font-semibold 
                      hover:text-white 
                      py-2 px-10 
                      border 
                      border-pink-600 
                      hover:border-transparent 
                      rounded-2xl
                      focus:ring-pink-900
                      m-2
                      my-5
                    "
              onClick={() => setPage(()=> parseInt(page+1))}
            >
              Next
            </Button>
          </div>
          {/*  =============== product ul start ============  */}
          <div className="
                          grid
                          md:grid-cols-2
                          gap-x-4 gap-y-8
                          xl:grid-cols-3 xl:gap-x-6
              ">
            {/*  =============== product li start ============  */}
            {galleryListings && !isLoading &&
              galleryListings.map((item) => (
                <GalleryItem
                      _id={item._id}
                      releaseDate={item.releaseDate}
                      adult={item.adult}
                      backdropUrl={item.backdropUrl}
                      posterUrl={item.posterUrl}
                      title={item.title}
                      overview={item.overview}
                      key={item._id}
                />
              ))
            }
            {
              isLoading &&
              <div className="col-span-3 text-center text-pink-600 mt-20 text-3xl font-bold">
                Loading ...
              </div>
            }
            {/* =============== product li end ============  */}
          </div>
          {/*  =============== product ul end ============ */}
        </div>
      </div>



    </main>
  }

</>
  );
};
