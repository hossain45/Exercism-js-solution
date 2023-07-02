export function removeDuplicates(playlist) {
  return [...new Set(playlist)];
}

export function hasTrack(playlist, track) {
  return new Set(playlist).has(track);
}

export function addTrack(playlist, track) {
  return [...new Set(playlist).add(track)];
}

export function deleteTrack(playlist, track) {
  const set = new Set(playlist);
  set.delete(track);
  //return Array.from(set);
  return [...set];
}

export function listArtists(playlist) {
  const set = new Set(playlist);
  const artists = [];

  set.forEach((value) => {
    const artist = value.split(/\- /)[1];
    artists.push(artist);
  });
  return [...new Set(artists)];
}
