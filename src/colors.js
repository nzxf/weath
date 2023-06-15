const colors = {
  blue: ['#CFE4FF', '#4CB6FE'],
  blue2: ['#BBDEFB', '#2196F3'],
  orange: ['#FFD54F', '#FFB900'],
  green: ['#C8E6C9', '#66BB6A'],
  green2: ['#DCEDC8', '#689F38'],
  red: ['#FCE4EC', '#EC407A'],
  purple: ['#E1BEE7', '#9C27B0'],
  yellow: ['#FFEB3B', '#FBC02D'],
  black: ['#757575', '#212121'],
};

const weathers = {
  clear_d: {
    codes: [1000],
    icon: 'https://cdn-icons-png.flaticon.com/512/6421/6421095.png',
  },
  clear_n: 'https://cdn-icons-png.flaticon.com/512/6421/6421006.png',

  cloudy_d: {
    codes: [1003, 1006,1009],
    icon: 'https://cdn-icons-png.flaticon.com/512/6420/6420952.png',
  },
  cloudy_n: 'https://cdn-icons-png.flaticon.com/512/6421/6421065.png',

  rain_d: {
    codes: [],
    icon: 'https://cdn-icons-png.flaticon.com/512/6420/6420972.png',
  },
  rain_n: 'https://cdn-icons-png.flaticon.com/512/6421/6421070.png',

  drizzle: {
    codes: [1072, 1150, 1153, 1168, 1171, 1180, 1183],
    icon: 'https://cdn-icons-png.flaticon.com/512/6421/6421115.png',
  },
  rain: {
    codes: [1063, 1186, 1189, 1192, 1195, 1198, 1201, 1240, 1243, 1246],
    icon: 'https://cdn-icons-png.flaticon.com/512/6420/6420907.png',
  },
  snowy: {
    codes: [
      1066, 1069, 1114, 1204, 1207, 1210, 1213, 1216, 1219, 1222, 1225, 1237,
      1249, 1252, 1255, 1258,
    ],
    icon: 'https://cdn-icons-png.flaticon.com/512/6420/6420927.png',
  },
  hailstorm: {
    codes: [1261, 1264],
    icon: 'https://cdn-icons-png.flaticon.com/512/6421/6421109.png',
  },
  thunderstorm: {
    codes: [1087, 1117, 1273, 1276, 1279, 1282],
    icon: 'https://cdn-icons-png.flaticon.com/512/6420/6420987.png',
  },
  fog: {
    codes: [1135, 1147, 1030],
    icon: '',
  },
};

export { colors };
