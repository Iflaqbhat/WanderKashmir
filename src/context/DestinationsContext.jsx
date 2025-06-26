import { createContext, useContext } from "react";

const DestinationsContext = createContext();

export function DestinationsProvider({ children }) {
  const destinations = {
    srinagar: {
      img: "https://media-cdn.tripadvisor.com/media/photo-s/1a/cf/4a/6d/beautiful-kashmir.jpg",
      images: [
        "https://media-cdn.tripadvisor.com/media/photo-s/1a/cf/4a/6d/beautiful-kashmir.jpg",
        "https://www.holidify.com/images/bgImages/SRINAGAR.jpg",
        "https://www.tourmyindia.com/states/jammu-kashmir/image/srinagar-1.jpg",
        "https://www.kashmirhills.com/wp-content/uploads/2016/03/srinagar.jpg",
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/Dal-Lake.jpg"
      ],
      desc: "The heart of Kashmir, known for Dal Lake, houseboats, and Mughal Gardens.",
    },
    gulmarg: {
      img: "https://media-cdn.tripadvisor.com/media/photo-s/11/38/bd/f3/gulmarg-is-a-hill-resort.jpg",
      images: [
        "https://media-cdn.tripadvisor.com/media/photo-s/11/38/bd/f3/gulmarg-is-a-hill-resort.jpg",
        "https://www.holidify.com/images/bgImages/GULMARG.jpg",
        "https://www.tourmyindia.com/states/jammu-kashmir/image/gulmarg-1.jpg",
        "https://www.kashmirhills.com/wp-content/uploads/2016/03/gulmarg.jpg",
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/Gulmarg.jpg"
      ],
      desc: "A paradise for skiing, cable car rides, and breathtaking landscapes.",
    },
    pahalgam: {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJnBxBGAhP8ynOUsj477-bcDW5QCt9yWD0SHhseULamenCPKntEVYAVOdCf9cPvCPb59Y&usqp=CAU", // Fixed URL
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJnBxBGAhP8ynOUsj477-bcDW5QCt9yWD0SHhseULamenCPKntEVYAVOdCf9cPvCPb59Y&usqp=CAU",
        "https://www.holidify.com/images/bgImages/PAHALGAM.jpg",
        "https://www.tourmyindia.com/states/jammu-kashmir/image/pahalgam-1.jpg",
        "https://www.kashmirhills.com/wp-content/uploads/2016/03/pahalgam.jpg",
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/Pahalgam.jpg"
      ],
      desc: "Famous for lush meadows, Lidder River, and the Amarnath Yatra.",
    },
    sonmarg: {
      img: "https://www.holidify.com/images/bgImages/SONAMARG.jpg",
      images: [
        "https://www.holidify.com/images/bgImages/SONAMARG.jpg",
        "https://www.tourmyindia.com/states/jammu-kashmir/image/sonmarg-1.jpg",
        "https://www.kashmirhills.com/wp-content/uploads/2016/03/sonmarg.jpg",
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/Sonmarg.jpg"
      ],
      desc: "Meadow of Gold with stunning glaciers and trekking routes.",
    },
    doodhpathri: {
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/ec/a2/b0/scenery.jpg?w=1200&h=-1&s=1",
      images: [
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/ec/a2/b0/scenery.jpg?w=1200&h=-1&s=1",
        "https://www.holidify.com/images/bgImages/DOODHPATHRI.jpg",
        "https://www.tourmyindia.com/states/jammu-kashmir/image/doodhpathri-1.jpg",
        "https://www.kashmirhills.com/wp-content/uploads/2016/03/doodhpathri.jpg",
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/Doodhpathri.jpg",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
      ],
      desc: "A hidden gem with lush green meadows.",
    },
    yusmarg: {
      img: "https://www.kashmironline.com/top-destinations/yousmarg/images/Yousmarg%20Meadows.jpg",
      images: [
        "https://www.kashmironline.com/top-destinations/yousmarg/images/Yousmarg%20Meadows.jpg",
        "https://www.holidify.com/images/bgImages/YUSMARG.jpg",
        "https://www.tourmyindia.com/states/jammu-kashmir/image/yusmarg-1.jpg",
        "https://www.kashmirhills.com/wp-content/uploads/2016/03/yusmarg.jpg",
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/Yusmarg.jpg",
        "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80"
      ],
      desc: "A beautiful meadow surrounded by dense forests.",
    },
    "aru-valley": {
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/ec/dc/15/aru-city.jpg?w=1200&h=-1&s=1",
      images: [
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/ec/dc/15/aru-city.jpg?w=1200&h=-1&s=1",
        "https://www.holidify.com/images/bgImages/ARU-VALLEY.jpg",
        "https://www.tourmyindia.com/states/jammu-kashmir/image/aru-valley-1.jpg",
        "https://www.kashmirhills.com/wp-content/uploads/2016/03/aru-valley.jpg",
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/Aru-Valley.jpg",
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80"
      ],
      desc: "A mesmerizing valley near Pahalgam.",
    },
    "betaab-valley": {
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/71/3f/53/betaab-valley.jpg?w=1200&h=1200&s=1",
      images: [
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/71/3f/53/betaab-valley.jpg?w=1200&h=1200&s=1",
        "https://www.holidify.com/images/bgImages/BETAAB-VALLEY.jpg",
        "https://www.tourmyindia.com/states/jammu-kashmir/image/betaab-valley-1.jpg",
        "https://www.kashmirhills.com/wp-content/uploads/2016/03/betaab-valley.jpg",
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/Betaab-Valley.jpg",
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
      ],
      desc: "Named after the Bollywood movie Betaab.",
    },
    tosamaidan: {
      img: "https://www.bikatadventures.com/images/Blogspot/LargeImage-tosa-maidan-and-greater-lakes-photo-story-Bikat-Adventures.png",
      images: [
        "https://www.bikatadventures.com/images/Blogspot/LargeImage-tosa-maidan-and-greater-lakes-photo-story-Bikat-Adventures.png",
        "https://www.holidify.com/images/bgImages/TOSAMAIDAN.jpg",
        "https://www.tourmyindia.com/states/jammu-kashmir/image/tosamaidan-1.jpg",
        "https://www.kashmirhills.com/wp-content/uploads/2016/03/tosamaidan.jpg",
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/Tosamaidan.jpg",
        "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80"
      ],
      desc: "A vast meadow perfect for camping.",
    },
    kokernag: {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrhGBl1o179a0sf6D_7yL-iKKS7K6ycYZ2rg&s",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrhGBl1o179a0sf6D_7yL-iKKS7K6ycYZ2rg&s",
        "https://www.holidify.com/images/bgImages/KOKERNAG.jpg",
        "https://www.tourmyindia.com/states/jammu-kashmir/image/kokernag-1.jpg",
        "https://www.kashmirhills.com/wp-content/uploads/2016/03/kokernag.jpg",
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/Kokernag.jpg",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
      ],
      desc: "Famous for freshwater springs and lush gardens.",
    },
    verinag: {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqNaCodCwJ4V-y11w_24MzRXxKDX05U4ejlg&s",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqNaCodCwJ4V-y11w_24MzRXxKDX05U4ejlg&s",
        "https://www.holidify.com/images/bgImages/VERINAG.jpg",
        "https://www.tourmyindia.com/states/jammu-kashmir/image/verinag-1.jpg",
        "https://www.kashmirhills.com/wp-content/uploads/2016/03/verinag.jpg",
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/Verinag.jpg",
        "https://images.unsplash.com/photo-1465101178521-c1a9136a3fdc?auto=format&fit=crop&w=800&q=80"
      ],
      desc: "The source of the Jhelum River with Mughal gardens.",
    },
    "gurez-valley": {
      img: "https://s3.india.com/travel/wp-content/uploads/2018/06/Gurez-Valley-1.jpg",
      images: [
        "https://s3.india.com/travel/wp-content/uploads/2018/06/Gurez-Valley-1.jpg",
        "https://www.holidify.com/images/bgImages/GUREZ-VALLEY.jpg",
        "https://www.tourmyindia.com/states/jammu-kashmir/image/gurez-valley-1.jpg",
        "https://www.kashmirhills.com/wp-content/uploads/2016/03/gurez-valley.jpg",
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/Gurez-Valley.jpg",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
      ],
      desc: "A remote yet stunning valley near the LoC.",
    },
    "bangus-valley": {
      img: "https://utsav.gov.in/public/uploads/event_cover_image/event_591/16594356581794110725.jpg",
      images: [
        "https://utsav.gov.in/public/uploads/event_cover_image/event_591/16594356581794110725.jpg",
        "https://www.holidify.com/images/bgImages/BANGUS-VALLEY.jpg",
        "https://www.tourmyindia.com/states/jammu-kashmir/image/bangus-valley-1.jpg",
        "https://www.kashmirhills.com/wp-content/uploads/2016/03/bangus-valley.jpg",
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/Bangus-Valley.jpg",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
      ],
      desc: "A lesser-explored valley with alpine meadows.",
    },
    "lolab-valley": {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvl6rUQPJWh56vmwGEruljMFOVISUHZcsBvQ&s",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvl6rUQPJWh56vmwGEruljMFOVISUHZcsBvQ&s",
        "https://www.holidify.com/images/bgImages/LOLAB-VALLEY.jpg",
        "https://www.tourmyindia.com/states/jammu-kashmir/image/lolab-valley-1.jpg",
        "https://www.kashmirhills.com/wp-content/uploads/2016/03/lolab-valley.jpg",
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/Lolab-Valley.jpg",
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
      ],
      desc: "A charming valley in Kupwara.",
    },
    daksum: {
      img: "https://go2kashmir.com/kashmir/img/daksum-bg.jpg",
      images: [
        "https://go2kashmir.com/kashmir/img/daksum-bg.jpg",
        "https://www.holidify.com/images/bgImages/DAKSUM.jpg",
        "https://www.tourmyindia.com/states/jammu-kashmir/image/daksum-1.jpg",
        "https://www.kashmirhills.com/wp-content/uploads/2016/03/daksum.jpg",
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/Daksum.jpg",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
      ],
      desc: "A picturesque spot in Anantnag.",
    },
    "aharbal-waterfall": {
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/cd/6d/d2/aharbal-waterfall.jpg?w=1200&h=-1&s=1",
      images: [
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/cd/6d/d2/aharbal-waterfall.jpg?w=1200&h=-1&s=1",
        "https://www.holidify.com/images/bgImages/AHARBAL.jpg",
        "https://www.tourmyindia.com/states/jammu-kashmir/image/aharbal-waterfall-1.jpg",
        "https://www.kashmirhills.com/wp-content/uploads/2016/03/aharbal-waterfall.jpg",
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/Aharbal-Waterfall.jpg",
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
      ],
      desc: "Known as the 'Niagara of Kashmir.'",
    },
    "mughal-road-&-peer-ki-gali": {
      img: "https://upload.wikimedia.org/wikipedia/commons/4/43/Peer_Ki_Gali%2C_Mughal_Road_%2C_J%26K.jpg",
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/4/43/Peer_Ki_Gali%2C_Mughal_Road_%2C_J%26K.jpg",
        "https://www.holidify.com/images/bgImages/MUGHAL-ROAD.jpg",
        "https://www.tourmyindia.com/states/jammu-kashmir/image/mughal-road-1.jpg",
        "https://www.kashmirhills.com/wp-content/uploads/2016/03/mughal-road.jpg",
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/Mughal-Road.jpg",
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
      ],
      desc: "A scenic road trip destination.",
    },
    "mansar-lake": {
      img: "https://www.jktdc.co.in/img/places/mansar.jpg",
      images: [
        "https://www.jktdc.co.in/img/places/mansar.jpg",
        "https://www.holidify.com/images/bgImages/MANSAR-LAKE.jpg",
        "https://www.tourmyindia.com/states/jammu-kashmir/image/mansar-lake-1.jpg",
        "https://www.kashmirhills.com/wp-content/uploads/2016/03/mansar-lake.jpg",
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/Mansar-Lake.jpg",
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
      ],
      desc: "A beautiful lake with religious significance.",
    },
    "sinthan-top": {
      img: "https://i.pinimg.com/736x/8d/84/c4/8d84c45c52788f882510aba99af76a80.jpg",
      images: [
        "https://i.pinimg.com/736x/8d/84/c4/8d84c45c52788f882510aba99af76a80.jpg",
        "https://www.holidify.com/images/bgImages/SINTHAN-TOP.jpg",
        "https://www.tourmyindia.com/states/jammu-kashmir/image/sinthan-top-1.jpg",
        "https://www.kashmirhills.com/wp-content/uploads/2016/03/sinthan-top.jpg",
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/Sinthan-Top.jpg",
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
      ],
      desc: "A high-altitude pass with stunning views.",
    },
    "bungus-valley": {
      img: "https://images.unsplash.com/photo-1531252582519-2d7e6795be96?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFuZ3VzJTIwdmFsbGV5fGVufDB8fDB8fHww",
      images: [
        "https://images.unsplash.com/photo-1531252582519-2d7e6795be96?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFuZ3VzJTIwdmFsbGV5fGVufDB8fDB8fHww",
        "https://www.holidify.com/images/bgImages/BUNGUS-VALLEY.jpg",
        "https://www.tourmyindia.com/states/jammu-kashmir/image/bungus-valley-1.jpg",
        "https://www.kashmirhills.com/wp-content/uploads/2016/03/bungus-valley.jpg",
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/Bungus-Valley.jpg",
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
      ],
      desc: "A hidden gem with vast green meadows.",
    },
    "charar-e-sharief": {
      img: "https://media-cdn.tripadvisor.com/media/photo-s/04/13/22/5b/shrine-of-sheikh-ul-alam.jpg",
      images: [
        "https://media-cdn.tripadvisor.com/media/photo-s/04/13/22/5b/shrine-of-sheikh-ul-alam.jpg",
        "https://www.holidify.com/images/bgImages/CHARAR-E-SHARIEF.jpg",
        "https://www.tourmyindia.com/states/jammu-kashmir/image/charar-e-sharief-1.jpg",
        "https://www.kashmirhills.com/wp-content/uploads/2016/03/charar-e-sharief.jpg",
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/Charar-e-Sharief.jpg",
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
      ],
      desc: "Shrine of Sheikh Noor-ud-Din Noorani.",
    },
    "hazratbal-shrine": {
      img: "https://t4.ftcdn.net/jpg/02/87/54/91/360_F_287549182_NdEI9Hj8x3RI93p3KHgTZ4Cq9sZwB3dP.jpg",
      images: [
        "https://t4.ftcdn.net/jpg/02/87/54/91/360_F_287549182_NdEI9Hj8x3RI93p3KHgTZ4Cq9sZwB3dP.jpg",
        "https://www.holidify.com/images/bgImages/HAZRATBAL-SHRINE.jpg",
        "https://www.tourmyindia.com/states/jammu-kashmir/image/hazratbal-shrine-1.jpg",
        "https://www.kashmirhills.com/wp-content/uploads/2016/03/hazratbal-shrine.jpg",
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/Hazratbal-Shrine.jpg",
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
      ],
      desc: "A sacred place housing a relic of Prophet Muhammad (PBUH).",
    },
    "shankaracharya-temple": {
      img: "https://s7ap1.scene7.com/is/image/incredibleindia/shankaracharya-temple-srinagar-jammu--kashmir-rya-1-musthead-hero?qlt=82&ts=1726816563245",
      images: [
        "https://s7ap1.scene7.com/is/image/incredibleindia/shankaracharya-temple-srinagar-jammu--kashmir-rya-1-musthead-hero?qlt=82&ts=1726816563245",
        "https://www.holidify.com/images/bgImages/SHANKARACHARYA-TEMPLE.jpg",
        "https://www.tourmyindia.com/states/jammu-kashmir/image/shankaracharya-temple-1.jpg",
        "https://www.kashmirhills.com/wp-content/uploads/2016/03/shankaracharya-temple.jpg",
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/Shankaracharya-Temple.jpg",
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
      ],
      desc: "A Hindu temple with panoramic views.",
    },
    "hari-parbat-fort": {
      img: "https://a.travel-assets.com/findyours-php/viewfinder/images/res40/489000/489190-hari-parbat-fort.jpg",
      images: [
        "https://a.travel-assets.com/findyours-php/viewfinder/images/res40/489000/489190-hari-parbat-fort.jpg",
        "https://www.holidify.com/images/bgImages/HARI-PARBAT-FORT.jpg",
        "https://www.tourmyindia.com/states/jammu-kashmir/image/hari-parbat-fort-1.jpg",
        "https://www.kashmirhills.com/wp-content/uploads/2016/03/hari-parbat-fort.jpg",
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/Hari-Parbat-Fort.jpg",
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
      ],
      desc: "A historical fort with stunning views.",
    },
    "jamia-masjid-srinagar": {
      img: "https://i0.wp.com/thelandofwanderlust.com/wp-content/uploads/2025/01/FB_IMG_1736148514712.jpg?resize=1024%2C768&ssl=1",
      images: [
        "https://i0.wp.com/thelandofwanderlust.com/wp-content/uploads/2025/01/FB_IMG_1736148514712.jpg?resize=1024%2C768&ssl=1",
        "https://www.holidify.com/images/bgImages/JAMIA-MASJID.jpg",
        "https://www.tourmyindia.com/states/jammu-kashmir/image/jamia-masjid-1.jpg",
        "https://www.kashmirhills.com/wp-content/uploads/2016/03/jamia-masjid.jpg",
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/Jamia-Masjid.jpg",
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
      ],
      desc: "A historic mosque in Srinagar known for its stunning architecture and 370 wooden pillars.",
    },
    "makhdoom-sahib-shrine": {
      img: "https://kashmirsufis.wordpress.com/wp-content/uploads/2021/06/fb_img_1599415409389.jpg",
      images: [
        "https://kashmirsufis.wordpress.com/wp-content/uploads/2021/06/fb_img_1599415409389.jpg",
        "https://www.holidify.com/images/bgImages/MAKHDOOM-SAHIB-SHRINE.jpg",
        "https://www.tourmyindia.com/states/jammu-kashmir/image/makhdoom-sahib-shrine-1.jpg",
        "https://www.kashmirhills.com/wp-content/uploads/2016/03/makhdoom-sahib-shrine.jpg",
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/Makhdoom-Sahib-Shrine.jpg",
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
      ],
      desc: "A revered Sufi shrine atop Hari Parbat, offering spiritual solace and city views.",
    },
    "chatti-padshahi-gurudwara": {
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/67/ae/80/cortile-interno.jpg?w=900&h=500&s=1",
      images: [
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/67/ae/80/cortile-interno.jpg?w=900&h=500&s=1",
        "https://www.holidify.com/images/bgImages/CHATTI-PADSHAHI-GURUDWARA.jpg",
        "https://www.tourmyindia.com/states/jammu-kashmir/image/chatti-padshahi-gurudwara-1.jpg",
        "https://www.kashmirhills.com/wp-content/uploads/2016/03/chatti-padshahi-gurudwara.jpg",
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/Chatti-Padshahi-Gurudwara.jpg",
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
      ],
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
