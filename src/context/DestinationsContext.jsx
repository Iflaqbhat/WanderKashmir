import { createContext, useContext } from "react";

const DestinationsContext = createContext();

export function DestinationsProvider({ children }) {
  const destinations = {
    srinagar: {
      img: "https://media-cdn.tripadvisor.com/media/photo-s/1a/cf/4a/6d/beautiful-kashmir.jpg",
      desc: "The heart of Kashmir, known for Dal Lake, houseboats, and Mughal Gardens.",
    },
    gulmarg: {
      img: "https://media-cdn.tripadvisor.com/media/photo-s/11/38/bd/f3/gulmarg-is-a-hill-resort.jpg",
      desc: "A paradise for skiing, cable car rides, and breathtaking landscapes.",
    },
    pahalgam: {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJnBxBGAhP8ynOUsj477-bcDW5QCt9yWD0SHhseULamenCPKntEVYAVOdCf9cPvCPb59Y&usqp=CAU", // Fixed URL
      desc: "Famous for lush meadows, Lidder River, and the Amarnath Yatra.",
    },
    sonmarg: {
      img: "https://www.holidify.com/images/bgImages/SONAMARG.jpg",
      desc: "Meadow of Gold with stunning glaciers and trekking routes.",
    },
    doodhpathri: {
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/ec/a2/b0/scenery.jpg?w=1200&h=-1&s=1",
      desc: "A hidden gem with lush green meadows.",
    },
    yusmarg: {
      img: "https://www.kashmironline.com/top-destinations/yousmarg/images/Yousmarg%20Meadows.jpg",
      desc: "A beautiful meadow surrounded by dense forests.",
    },
    "aru-valley": {
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/ec/dc/15/aru-city.jpg?w=1200&h=-1&s=1",
      desc: "A mesmerizing valley near Pahalgam.",
    },
    "betaab-valley": {
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/71/3f/53/betaab-valley.jpg?w=1200&h=1200&s=1",
      desc: "Named after the Bollywood movie Betaab.",
    },
    tosamaidan: {
      img: "https://www.bikatadventures.com/images/Blogspot/LargeImage-tosa-maidan-and-greater-lakes-photo-story-Bikat-Adventures.png", // Fixed URL path
      desc: "A vast meadow perfect for camping.",
    },
    kokernag: {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrhGBl1o179a0sf6D_7yL-iKKS7K6ycYZ2rg&s", // Fixed URL
      desc: "Famous for freshwater springs and lush gardens.",
    },
    verinag: {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqNaCodCwJ4V-y11w_24MzRXxKDX05U4ejlg&s", // Fixed URL
      desc: "The source of the Jhelum River with Mughal gardens.",
    },
    "gurez-valley": {
      img: "https://s3.india.com/travel/wp-content/uploads/2018/06/Gurez-Valley-1.jpg",
      desc: "A remote yet stunning valley near the LoC.",
    },
    "bangus-valley": {
      img: "https://utsav.gov.in/public/uploads/event_cover_image/event_591/16594356581794110725.jpg",
      desc: "A lesser-explored valley with alpine meadows.",
    },
    "lolab-valley": {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvl6rUQPJWh56vmwGEruljMFOVISUHZcsBvQ&s", // Fixed URL
      desc: "A charming valley in Kupwara.",
    },
    daksum: {
      img: "https://go2kashmir.com/kashmir/img/daksum-bg.jpg",
      desc: "A picturesque spot in Anantnag.",
    },
    "aharbal-waterfall": {
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/cd/6d/d2/aharbal-waterfall.jpg?w=1200&h=-1&s=1",
      desc: "Known as the ‘Niagara of Kashmir.’",
    },
    "mughal-road-&-peer-ki-gali": {
      img: "https://upload.wikimedia.org/wikipedia/commons/4/43/Peer_Ki_Gali%2C_Mughal_Road_%2C_J%26K.jpg",
      desc: "A scenic road trip destination.",
    },
    "mansar-lake": {
      img: "https://www.jktdc.co.in/img/places/mansar.jpg",
      desc: "A beautiful lake with religious significance.",
    },
    "sinthan-top": {
      img: "https://i.pinimg.com/736x/8d/84/c4/8d84c45c52788f882510aba99af76a80.jpg",
      desc: "A high-altitude pass with stunning views.",
    },
    "bungus-valley": {
      img: "https://images.unsplash.com/photo-1531252582519-2d7e6795be96?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFuZ3VzJTIwdmFsbGV5fGVufDB8fDB8fHww",
      desc: "A hidden gem with vast green meadows.",
    },
    "charar-e-sharief": {
      img: "https://media-cdn.tripadvisor.com/media/photo-s/04/13/22/5b/shrine-of-sheikh-ul-alam.jpg",
      desc: "Shrine of Sheikh Noor-ud-Din Noorani.",
    },
    "hazratbal-shrine": {
      img: "https://t4.ftcdn.net/jpg/02/87/54/91/360_F_287549182_NdEI9Hj8x3RI93p3KHgTZ4Cq9sZwB3dP.jpg",
      desc: "A sacred place housing a relic of Prophet Muhammad (PBUH).",
    },
    "shankaracharya-temple": {
      img: "https://s7ap1.scene7.com/is/image/incredibleindia/shankaracharya-temple-srinagar-jammu--kashmir-rya-1-musthead-hero?qlt=82&ts=1726816563245",
      desc: "A Hindu temple with panoramic views.",
    },
    "hari-parbat-fort": {
      img: "https://a.travel-assets.com/findyours-php/viewfinder/images/res40/489000/489190-hari-parbat-fort.jpg",
      desc: "A historical fort with stunning views.",
    },
    "jamia-masjid-srinagar": {
      img: "https://i0.wp.com/thelandofwanderlust.com/wp-content/uploads/2025/01/FB_IMG_1736148514712.jpg?resize=1024%2C768&ssl=1",
      desc: "A historic mosque in Srinagar known for its stunning architecture and 370 wooden pillars.",
    },
    "makhdoom-sahib-shrine": {
      img: "https://kashmirsufis.wordpress.com/wp-content/uploads/2021/06/fb_img_1599415409389.jpg",
      desc: "A revered Sufi shrine atop Hari Parbat, offering spiritual solace and city views.",
    },
    "chatti-padshahi-gurudwara": {
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/67/ae/80/cortile-interno.jpg?w=900&h=500&s=1",
      desc: "A significant Sikh gurudwara near Srinagar, visited by devotees and tourists alike.",
    },
  };

  return (
    <DestinationsContext.Provider value={{ destinations }}>
      {children}
    </DestinationsContext.Provider>
  );
}

export function useDestinations() {
  const context = useContext(DestinationsContext);
  if (!context) {
    throw new Error(
      "useDestinations must be used within a DestinationsProvider"
    );
  }
  return context;
}
