```jsx
const Demo = () => {
  const galleryListings = [
    {
      id: 15286,
      width: 2500,
      height: 1667,
      url: "https://www.pexels.com/photo/person-walking-between-green-forest-trees-15286/",
      photographer: "Luis del Río",
      photographer_url: "https://www.pexels.com/@luisdelrio",
      photographer_id: 1081,
      avg_color: "#283419",
      src: {
        original: "https://images.pexels.com/photos/15286/pexels-photo.jpg",
        large2x:
          "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        large:
          "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=650&w=940",
        medium:
          "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
        small:
          "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=130",
        portrait:
          "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        landscape:
          "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        tiny: "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
      },
      liked: false,
    },
    {
      id: 3408744,
      width: 3546,
      height: 2255,
      url: "https://www.pexels.com/photo/scenic-view-of-snow-capped-mountains-during-night-3408744/",
      photographer: "stein egil liland",
      photographer_url: "https://www.pexels.com/@therato",
      photographer_id: 144244,
      avg_color: "#557088",
      src: {
        original:
          "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg",
        large2x:
          "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        large:
          "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        medium:
          "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&h=350",
        small:
          "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&h=130",
        portrait:
          "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        landscape:
          "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        tiny: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
      },
      liked: false,
    },
    {
      id: 572897,
      width: 6914,
      height: 4463,
      url: "https://www.pexels.com/photo/mountain-covered-snow-under-star-572897/",
      photographer: "eberhard grossgasteiger",
      photographer_url: "https://www.pexels.com/@eberhardgross",
      photographer_id: 121938,
      avg_color: "#5D5A63",
      src: {
        original:
          "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg",
        large2x:
          "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        large:
          "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        medium:
          "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&h=350",
        small:
          "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&h=130",
        portrait:
          "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        landscape:
          "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        tiny: "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
      },
      liked: false,
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-x-4 gap-y-8 xl:grid-cols-3 xl:gap-x-6">
    { galleryListings.map((item) => (
            <GalleryItem
              imageId={item.id}
              imageHeight={item.height}
              imageWidth={item.width}
              imageUrl={item.src.large}
              photographer={item.photographer}
              photographerUrl={item.photographer_url}
              key={item.id}
            />
      ))
    }
    </div>
  );
};

<Demo />
```

