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
      const deleteRes = await fetch(`https://api.vimeo.com/videos/${1124993996}`, {
        method: "DELETE",
        headers: { Authorization: "jwt eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3NTk4NTcxODAsInVzZXJfaWQiOjI0ODI1NDA0NywiYXBwX2lkIjo1ODQ3OSwic2NvcGVzIjoicHVibGljIGludGVyYWN0IHByaXZhdGUgdXBsb2FkIGNyZWF0ZSBlZGl0IGRlbGV0ZSBlbWFpbCBzdGF0cyB2aWRlb19maWxlcyIsInRlYW1fdXNlcl9pZCI6bnVsbCwianRpIjoiMDAzM2UxNWItMDYwYS00MGIyLTg2ZTYtZWJhZTcyY2RjYzgxIiwic2giOiJjOWJmYjczMmQzYjEyNGI2NGIwNWM3OTBjZDYxMjhmNjdhZjA3OTVmZDcyMzBlNGQ1NWZhZGU1MDllMjQ2ODU3In0.69ObgaEqgkvaq6yCGeCPiLILRUQPQbcx1hq-cSgzLGk" },
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

