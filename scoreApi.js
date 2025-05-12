
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

const getData = async () => {
  const url = "https://672e1217229a881691eed80f.mockapi.io/scores";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("Data retrieved successfully:", data);
    return data;
  } catch (error) {
    console.error("Error retrieving data:", error);
  }
};

function buildTable(data) {
  let table = document.querySelector('#scoreboard');

  data.forEach(player => {
    let row = `
    <tr>
      <td><a href="${player.website_url}">${player.username}</a></td>
      <td>${player.score}</td>
      <td><img src="${player.avatar}" class="img-thumbnail" /></td>
    </tr>`;
    table.innerHTML += row
  });
}



const usernameToDelete = "Childéric";

const deleteUserByUsername = async (username, score) => {
  const url = "https://672e1217229a881691eed80f.mockapi.io/scores";

  try {
    // Étape 1 : Récupérer les utilisateurs avec le même username
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const users = await response.json();
    const usersToDelete = users.filter(
      (user) => user.username === username
    );

    // Étape 2 : Supprimer chaque utilisateur trouvé
    for (const user of usersToDelete) {
      const deleteResponse = await fetch(`${url}/${user.id}`, {
        method: "DELETE",
      });

      if (!deleteResponse.ok) {
        console.error(
          `Error deleting user with ID ${user.id}:`,
          deleteResponse.statusText
        );
      } else {
        console.log(`User with ID ${user.id} deleted successfully.`);
      }
    }

    // Étape 3 : Ajouter un nouvel utilisateur
    const newUserData = {
      createdAt: new Date().toISOString(),
      username: "Childéric",
      avatar: "https://thispersondoesnotexist.com/",
      score: score,
      website_url: "https://childew23.github.io/clickfast/",
    };

    const postResponse = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserData),
    });

    if (!postResponse.ok) {
      throw new Error("Network response was not ok");
    }

    const newUserResult = await postResponse.json();
    console.log("New user posted successfully:", newUserResult);
  } catch (error) {
    console.error("Error:", error);
  }
};
getData()
  .then(data => {
    if (Array.isArray(data)) {
      buildTable(data);
    } else {
      console.error("Données innatendues :", data);
    }
  })
  .catch(err => { console.error("Erreur lors du chargement des données : ", err) });



setTimeout(() => {
  let score = parseInt(document.querySelector('.number').textContent);
  postData(score);
  deleteUserByUsername(usernameToDelete, score);
}, 5000)