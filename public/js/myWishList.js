const wishList = async () => {
  const response = await fetch("/profile", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/profile");
  } else {
    alert("Failed to redirect.");
  }
};

document.querySelector("#myWishList").addEventListener("click", wishList);
