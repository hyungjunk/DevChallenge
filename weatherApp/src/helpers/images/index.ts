const ImageMap = {
  Rain: "HeavyRain",
  Clouds: "HeavyCloud",
  Clear: "Clear",
};

class ImageHelper {
  getImageByWeather(weather: keyof typeof ImageMap): string {
    const weatherImageName = ImageMap[weather];
    return `/assets/${weatherImageName}.png`;
  }
}

export const imageHelper = new ImageHelper();
