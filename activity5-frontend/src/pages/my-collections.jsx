import { useContext } from 'react';
import { GalleryItem } from "../domains/gallery";
import { LoginForm, useAuth} from "../domains/auth";
import { CollectionsContext } from '../domains/gallery';



export const CollectionsPage = () => {
  const collectionsCtx = useContext(CollectionsContext);

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
              My Collections
            </h1>
          </div>
  
          {/*  =============== product ul start ============  */}
          <div className="
                      grid
                      md:grid-cols-2
                      gap-x-4 gap-y-8
                      xl:grid-cols-3 xl:gap-x-6
                      mt-10
          ">
            {
              (collectionsCtx.totalCollections === 0) ?
                <div className="flex flex-col mt-10 col-span-3 align-center">
                  <h1 className="text-3xl font-bold text-pink-600 text-center">
                    You got no collections yet. Start adding some?
                  </h1>
                </div>
                :
                collectionsCtx.collections.map((item) => (
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
            {/* =============== product li end ============  */}
          </div>
          {/*  =============== product ul end ============ */}
        </div>
      </div>
    </main>
    }
    </>
  );
}

