import { createContext, useState, useEffect} from 'react';

export const CollectionsContext = createContext({
  collections: [],
  totalCollections: 0,
  addCollection: (collection) => {},
  removeCollection: (imageId) => {},
  itemIsCollection: (imageId) => {}
});

export function CollectionsContextProvider(props) {
  const [userCollections, setUserCollections] = useState(()=>{
    const localData = localStorage.getItem("collections");
    return localData? JSON.parse(localData): [];
  });

  useEffect(() => {
    localStorage.setItem("collections", JSON.stringify(userCollections))
  }, [userCollections])

  function addCollectionHandler (collection) {
    // console.log(`[DEBUG] addCollection`)
    setUserCollections((prevUserCollections) => {
      return prevUserCollections.concat(collection);
    });
  }

  function removeCollectionHandler (id) {
    // console.log(`[DEBUG] removeCollection`)
    setUserCollections(prevUserCollections => {
      return prevUserCollections.filter(collection => collection._id !== id);
    });
  }

  function itemIsCollectionHandler (id) {
    // console.log(`[DEBUG] itemIsCollection`)
    return userCollections.some(collection => collection._id === id);
  }

  const context = {
    collections: userCollections,
    totalCollections: userCollections.length,
    addCollection: addCollectionHandler,
    removeCollection: removeCollectionHandler,
    itemIsCollection: itemIsCollectionHandler
  };

  return (
    <CollectionsContext.Provider value={context}>
      {props.children}
    </CollectionsContext.Provider>
  );
}

