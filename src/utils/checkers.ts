import axios from "axios";

export default function checker(dirPath: any, filePath: any, fileContent: any) {
  const fileFirstLine = fileContent.split("\n")[0];
  const courseName = fileFirstLine.split("/")[2];
  const taskNum = fileFirstLine.match(/\d+/g);
  axios
    .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then((response) => {
      console.log(response.data.url);
      console.log(response.data.explanation);
    })
    .catch((error) => {
      console.log(error);
    });
}
