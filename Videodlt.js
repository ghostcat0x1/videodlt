async function deleteVideo() {
  try {
    // Step 1: List videos
    const listRes = await fetch("https://api.vimeo.com/me/videos?per_page=1", {
      credentials: "include",
      headers: {
        Authorization: "jwt YOUR_TOKEN_HERE",
        Accept: "application/vnd.vimeo.*; version=3.4.2",
      },
    });
    const videos = await listRes.json();
    if (videos.data.length > 0) {
      const videoId = videos.data[0].uri.split("/").pop(); // Extract ID
      // Step 2: Delete
      const deleteRes = await fetch(`https://api.vimeo.com/videos/${videoId}`, {
        method: "DELETE",
        headers: { Authorization: "jwt YOUR_TOKEN_HERE" },
      });
      if (deleteRes.ok) {
        resultDiv.innerHTML += "<p>Video Deleted! High Impact Achieved.</p>";
      } else {
        resultDiv.innerHTML += `<p>Delete Error: ${deleteRes.status}</p>`;
      }
    } else {
      resultDiv.innerHTML += "<p>No videos to delete.</p>";
    }
  } catch (error) {
    resultDiv.innerHTML += `<p>Delete Failed: ${error.message}</p>`;
  }
}
// Button add: <button onclick="deleteVideo()">Delete My First Video!</button>
