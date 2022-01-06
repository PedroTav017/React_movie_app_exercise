// initialShowStateType
type initShowState = {
  name: string;
  summary: string;
  image: { medium: string; original: string };
};

const get_show = (id: number, showHandler: (data: initShowState) => void) => {
  fetch("https://api.tvmaze.com/shows/" + id)
    .then((response) => {
      if (!response.ok || response.status !== 200) {
        throw new Error("Network response was not OK");
      }
      return response.json();
    })
    .then((data) => showHandler(data))
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
};

export default get_show;
