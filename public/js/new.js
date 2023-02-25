//new form handler
const newFormHandler = async (event) => {
  //prevent default
  event.preventDefault();
  //get title and body
  const title = document.querySelector('input[name="post-title"]').value;
  const body = document.querySelector('textarea[name="post-body"]').value;
  //check if title and body exist
  if (title && body) {
    //send to api/post
    const response = await fetch(`/api/post`, {
      method: "POST",
      body: JSON.stringify({ title, body }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      //reload page
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};
document
  .querySelector("#new-post-form")
  .addEventListener("submit", newFormHandler);
