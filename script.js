const form = document.getElementById("registrationForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzK2o8saEDpWoJCwajWmbfAWG-cY4qLJNah2Wk3JMhjk73tJQaTKqsvyOCr8elAZX2Z/exec",
      {
        method: "POST",
        body: new FormData(form),
      }
    );

    const data = await response.json();

    if (data.result === "success") {
      alert("Anda telah berhasil berlanganan.");
      window.location.reload();
    } else {
      throw new Error(data.error);
    }
  } catch (error) {
    console.error("Error! Something's wrong", error.message);
    alert("Langanan Gagal! Silahkan coba lagi.");
  }
});
