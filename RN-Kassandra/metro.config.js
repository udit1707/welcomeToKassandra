
const { getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
  
defaultConfig.resolver.assetExts.push('obj');

defaultConfig.resolver.assetExts.push('mtl');
  
module.exports = defaultConfig;
  