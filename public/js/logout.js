async function handleLogout() {
  const response = await fetch("/api/user/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    console.log("couldnt log you out");
  }
}

document.getElementById("logout").addEventListener("click", handleLogout);
