const get_show_episodes = (id: number, showEpisodesHandler: (data: []) => void) => {
  fetch("https://api.tvmaze.com/shows/" + id + "/episodes")
    .then((response) => {
      if (!response.ok || response.status !== 200) {
        throw new Error("Network response was not OK");
      }
      return response.json();
    })
    .then((data) => showEpisodesHandler(data))
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
};

export default get_show_episodes;
