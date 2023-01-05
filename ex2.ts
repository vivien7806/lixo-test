//We could factorize the url prefix and iterate over the range of post ids
const urls: string[] = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

//display the list of response contents of a given list of uri
async function displayPosts(params: string[]) {
  const posts: string[] = [];
  for (const url of urls) {
    try {
      const response = await fetch(url);

      if (response.ok) {
        // if HTTP-status is 200-299
        const json: string = await response.json();
        posts.push(json);
      } else {
        console.error(`HTTP-Error: ${response.status}`);
      }
    } catch (err) {
      console.error(`Issue while retrieving post ${url}`, err);
    }
  }
  console.log(posts);
}

displayPosts(urls);
