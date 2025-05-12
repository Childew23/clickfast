
const postData = async (score) => {
  const url = "https://672e1217229a881691eed80f.mockapi.io/scores";

  const data = {
    createdAt: new Date().toISOString(),
    username: "Childéric",
    avatar: "https://thispersondoesnotexist.com/",
    score: score,
    website_url: "https://childew23.github.io/clickfast/",
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    console.log("Data posted successfully:", result);
  } catch (error) {
    console.error("Error posting data:", error);
  }
};


setTimeout(()=>{
    let score = parseInt(document.querySelector('.number').textContent);
    postData(score);
}, 5000)