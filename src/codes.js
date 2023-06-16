const weatherCodes = {
  clear: [1000],
  cloudy: [1003, 1006, 1009],
  drizzly: [1072, 1150, 1153, 1168, 1171, 1180, 1183],
  rainy: [1063, 1186, 1189, 1192, 1195, 1198, 1201, 1240, 1243, 1246],
  snowy: [
    1066, 1069, 1114, 1204, 1207, 1210, 1213, 1216, 1219, 1222, 1225, 1237,
    1249, 1252, 1255, 1258,
  ],
  thundery: [1087, 1117, 1273, 1276, 1279, 1282],
  stormy: [1261, 1264],
  misty: [1135, 1147, 1030],
};

export { weatherCodes };