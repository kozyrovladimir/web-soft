export function packItems<T>(videos: Array<T>, num: number): Array<T>[] {
  const itemPackages: Array<T>[] = [];

  for (let i = 0; i < Math.ceil(videos.length / num); i++) {
    itemPackages[i] = videos.slice(i * num, i * num + num);
  }

  return itemPackages;
}
