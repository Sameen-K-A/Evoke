import { IFile } from "@/interfaces/Icollections";

const files: IFile[] = [
   { id: "1", name: "portrait.jpg", path: "https://img.freepik.com/free-photo/portrait-handsome-young-man-with-black-hair-smiling-looking-camera_1150-15009.jpg", uploadDate: "2024-11-23", uploadTime: "10:30 AM", size: "100 KB" },
   { id: "2", name: "sports-car.jpg", path: "https://img.freepik.com/free-photo/red-sports-car_144627-35461.jpg", uploadDate: "2024-11-23", uploadTime: "11:00 AM", size: "250 KB" },
   { id: "4", name: "city.jpg", path: "https://img.freepik.com/free-photo/modern-cityscape-night-scene_1150-16917.jpg", uploadDate: "2024-11-23", uploadTime: "12:00 PM", size: "300 KB" },
   { id: "6", name: "beach.jpg", path: "https://img.freepik.com/free-photo/beautiful-beach-sunset_1150-16435.jpg", uploadDate: "2024-11-23", uploadTime: "01:00 PM", size: "500 KB" },
   { id: "8", name: "family.jpg", path: "https://img.freepik.com/free-photo/happy-family-relaxing-together_1150-14924.jpg", uploadDate: "2024-11-23", uploadTime: "02:00 PM", size: "400 KB" },
   { id: "9", name: "car.jpg", path: "https://img.freepik.com/free-photo/close-up-modified-car-exterior_1150-14849.jpg", uploadDate: "2024-11-23", uploadTime: "02:30 PM", size: "250 KB" },
   { id: "10", name: "woman.jpg", path: "https://img.freepik.com/free-photo/smiling-woman_1150-14102.jpg", uploadDate: "2024-11-23", uploadTime: "03:00 PM", size: "300 KB" },
   { id: "20", name: "traveler.jpg", path: "https://img.freepik.com/free-photo/hiker-mountain_1150-16449.jpg", uploadDate: "2024-11-23", uploadTime: "08:00 PM", size: "300 KB" },
   { id: "21", name: "sunset.jpg", path: "https://img.freepik.com/free-photo/sunset-sea_1150-14829.jpg", uploadDate: "2024-11-23", uploadTime: "08:30 PM", size: "110 KB" },
   { id: "22", name: "sky.jpg", path: "https://img.freepik.com/free-photo/scenic-sky_1150-15090.jpg", uploadDate: "2024-11-23", uploadTime: "09:00 PM", size: "300 KB" },
   { id: "37", name: "plane.jpg", path: "https://img.freepik.com/free-photo/airplane-sky_1150-16000.jpg", uploadDate: "2024-11-23", uploadTime: "04:30 AM", size: "450 KB" },
   { id: "38", name: "sunrise.jpg", path: "https://img.freepik.com/free-photo/sunrise-forest_1150-14950.jpg", uploadDate: "2024-11-23", uploadTime: "05:00 AM", size: "420 KB" },
   { id: "39", name: "sunlight.jpg", path: "https://img.freepik.com/free-photo/sunlight-forest_1150-15683.jpg", uploadDate: "2024-11-23", uploadTime: "05:30 AM", size: "290 KB" },
   { id: "40", name: "earth.jpg", path: "https://img.freepik.com/free-photo/earth-view-space_1150-16087.jpg", uploadDate: "2024-11-23", uploadTime: "06:00 AM", size: "350 KB" },
   { id: "3", name: "nature.jpg", path: "https://img.freepik.com/free-photo/scenic-mountain-landscape-sunrise_1150-16193.jpg", uploadDate: "2024-11-21", uploadTime: "11:30 AM", size: "150 KB" },
   { id: "5", name: "business.jpg", path: "https://img.freepik.com/free-photo/successful-businessman-posing_1150-15372.jpg", uploadDate: "2024-11-21", uploadTime: "12:30 PM", size: "200 KB" },
   { id: "11", name: "cityscape.jpg", path: "https://img.freepik.com/free-photo/downtown-cityscape-with-traffic_1150-15785.jpg", uploadDate: "2024-11-21", uploadTime: "03:30 PM", size: "120 KB" },
   { id: "23", name: "technology.jpg", path: "https://img.freepik.com/free-photo/close-up-technology-gadgets_1150-15111.jpg", uploadDate: "2024-11-19", uploadTime: "09:30 PM", size: "150 KB" },
   { id: "24", name: "countryside.jpg", path: "https://img.freepik.com/free-photo/peaceful-countryside_1150-16144.jpg", uploadDate: "2024-11-19", uploadTime: "10:00 PM", size: "330 KB" },
   { id: "25", name: "food.jpg", path: "https://img.freepik.com/free-photo/delicious-dinner-food_1150-15110.jpg", uploadDate: "2024-11-19", uploadTime: "10:30 PM", size: "240 KB" },
   { id: "26", name: "train.jpg", path: "https://img.freepik.com/free-photo/modern-train-tracks_1150-15287.jpg", uploadDate: "2024-11-19", uploadTime: "11:00 PM", size: "510 KB" },
   { id: "27", name: "night.jpg", path: "https://img.freepik.com/free-photo/beautiful-night-sky_1150-14837.jpg", uploadDate: "2024-11-19", uploadTime: "11:30 PM", size: "460 KB" },
   { id: "12", name: "skyline.jpg", path: "https://img.freepik.com/free-photo/beautiful-city-skyline-dusk_1150-15680.jpg", uploadDate: "2024-11-16", uploadTime: "04:00 PM", size: "250 KB" },
   { id: "13", name: "coast.jpg", path: "https://img.freepik.com/free-photo/beautiful-coastal-scene_1150-15988.jpg", uploadDate: "2024-11-16", uploadTime: "04:30 PM", size: "150 KB" },
   { id: "14", name: "forest.jpg", path: "https://img.freepik.com/free-photo/beautiful-forest-path_1150-15982.jpg", uploadDate: "2024-11-16", uploadTime: "05:00 PM", size: "320 KB" },
   { id: "15", name: "building.jpg", path: "https://img.freepik.com/free-photo/modern-building_1150-14912.jpg", uploadDate: "2024-11-16", uploadTime: "05:30 PM", size: "250 KB" },
   { id: "16", name: "wedding.jpg", path: "https://img.freepik.com/free-photo/happy-bride-groom-wedding-ceremony_1150-15104.jpg", uploadDate: "2024-11-16", uploadTime: "06:00 PM", size: "500 KB" },
   { id: "17", name: "office.jpg", path: "https://img.freepik.com/free-photo/successful-young-businessman-office_1150-15371.jpg", uploadDate: "2024-11-16", uploadTime: "06:30 PM", size: "450 KB" },
   { id: "18", name: "adventure.jpg", path: "https://img.freepik.com/free-photo/surfer-waves-sunset_1150-16275.jpg", uploadDate: "2024-11-16", uploadTime: "07:00 PM", size: "500 KB" },
   { id: "19", name: "computer.jpg", path: "https://img.freepik.com/free-photo/top-view-computer-keyboard_1150-15740.jpg", uploadDate: "2024-11-16", uploadTime: "07:30 PM", size: "250 KB" },
   { id: "29", name: "moon.jpg", path: "https://img.freepik.com/free-photo/full-moon-night_1150-15952.jpg", uploadDate: "2024-11-13", uploadTime: "09:00 AM", size: "200 KB" },
   { id: "30", name: "camping.jpg", path: "https://img.freepik.com/free-photo/tent-camping-sunset_1150-16022.jpg", uploadDate: "2024-11-13", uploadTime: "09:30 AM", size: "300 KB" },
   { id: "31", name: "mountain.jpg", path: "https://img.freepik.com/free-photo/snowy-mountain-sunset_1150-16173.jpg", uploadDate: "2024-11-13", uploadTime: "10:00 AM", size: "220 KB" },
   { id: "32", name: "landscape.jpg", path: "https://img.freepik.com/free-photo/beautiful-rural-landscape_1150-16261.jpg", uploadDate: "2024-11-13", uploadTime: "10:30 AM", size: "290 KB" },
   { id: "33", name: "space.jpg", path: "https://img.freepik.com/free-photo/space-cosmos_1150-15600.jpg", uploadDate: "2024-11-13", uploadTime: "11:00 AM", size: "250 KB" },
   { id: "34", name: "desert.jpg", path: "https://img.freepik.com/free-photo/desert-sand-dunes_1150-15297.jpg", uploadDate: "2024-11-13", uploadTime: "11:30 AM", size: "310 KB" },
   { id: "35", name: "ocean.jpg", path: "https://img.freepik.com/free-photo/ocean-blue_1150-15672.jpg", uploadDate: "2024-11-13", uploadTime: "12:00 PM", size: "370 KB" },
   { id: "36", name: "waterfall.jpg", path: "https://img.freepik.com/free-photo/beautiful-waterfall_1150-16182.jpg", uploadDate: "2024-11-13", uploadTime: "12:30 PM", size: "450 KB" }
];

export default files