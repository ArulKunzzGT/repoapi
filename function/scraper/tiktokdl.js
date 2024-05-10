const axios = require('axios');

async function tiktokdl(url) {
  try {
    const response = await axios.get(`https://skizo.tech/api/tiktok?apikey=Alok&url=${url}`);
    const tiktokData = response.data;
    return tiktokData;
  } catch (error) {
    return { error: 'Terjadi kesalahan dalam memproses data TikTok' };
  }
}

module.exports = tiktokdl;
