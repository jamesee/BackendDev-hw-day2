```jsx

import { useGalleryListings } from "domains/gallery";

const Demo = () => {
    const { pagination, setPagination, setQueryTerm} = useGalleryListings();
  return (
    <div className="grid md:grid-cols-2 gap-x-4 gap-y-8 xl:grid-cols-3 xl:gap-x-6">
    {<ImageSearch 
                pagination={pagination}
                setPagination={setPagination}
                searchText={(queryTerm) => { if (queryTerm) setQueryTerm(queryTerm) }} />
    }
    </div>
  );
};

<Demo />
```

