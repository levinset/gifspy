//handle favorite function
export const handleToggleFavourite = (gifId: string): void => {
  const favourites: string[] = JSON.parse(
    localStorage.getItem("favourites") || "[]"
  );
  const index = favourites.indexOf(gifId);

  if (index === -1) {
    favourites.push(gifId);
  } else {
    favourites.splice(index, 1);
  }

  localStorage.setItem("favourites", JSON.stringify(favourites));
};
