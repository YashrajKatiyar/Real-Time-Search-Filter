let users = [
  {
    name: "Barbarian",
    pic: "Barbarian_info.webp",
    bio: "This fearless warrior relies on his bulging muscles to wreak havoc in enemy villages.",
  },
  {
    name: "Archer",
    pic: "Archer_info.webp",
    bio: "This agile archer strikes from a distance with precision and speed.",
  },
  {
    name: "Giant",
    pic: "Giant_info.webp",
    bio: "This towering giant smashes through defenses with incredible strength.",
  },
  {
    name: "Goblin",
    pic: "Goblin_info.webp",
    bio: "This cunning goblin uses traps and deception to defeat his enemies.",
  },
  {
    name: "Wall Breaker",
    pic: "Wall_Breaker_info.webp",
    bio: "This powerful wall breaker smashes through structures with ease.",
  },
  {
    name: "Balloon",
    pic: "Balloon_info.webp",
    bio: "This floating balloon provides aerial support and can target ground units.",
  },
  {
    name: "Wizard",
    pic: "Wizard_info.webp",
    bio: "This mystical wizard casts powerful spells to defeat his enemies.",
  },
  {
    name: "Healer",
    pic: "Healer_info.webp",
    bio: "This benevolent healer restores health to friendly units.",
  },
  {
    name: "Dragon",
    pic: "Dragon_info.webp",
    bio: "This fierce dragon breathes fire and soars through the skies.",
  },
  {
    name: "P.E.K.K.A",
    pic: "P.E.K.K.A_info.webp",
    bio: "This powerful P.E.K.K.A is a formidable opponent on the battlefield.",
  },
  {
    name: "Baby Dragon",
    pic:"Baby_Dragon_info.webp",
    bio: "This young dragon is still learning to control its fire breath.",
  },
  {
    name: "Miner",
    pic: "Miner_info.webp",
    bio: "This diligent miner excavates tunnels and uncovers valuable resources.",
  },
  {
    name: "Electro Dragon",
    pic:"Electro_Dragon_info.webp",
    bio: "This electrified dragon harnesses the power of lightning in battle.",
  },
  {
    name: "Yeti",
    pic: "Yeti_info.webp",
    bio: "This massive yeti stomps on enemies with incredible force.",
  },
  {
    name: "Dragon Rider",
    pic: "Dragon_Rider_info.webp",
    bio: "The skeleton onboard swears he's not touching the controls.",
  }
];

function showUsers(arr) {
  arr.forEach(function (user) {
    // Create outer card div
    const card = document.createElement("div");
    card.classList.add("card");

    // Create image
    const img = document.createElement("img");
    img.src = user.pic;
    img.classList.add("bg-img");

    // Create blurred-layer div
    const blurredLayer = document.createElement("div");
    blurredLayer.style.backgroundImage = `url(${user.pic})`;
    blurredLayer.classList.add("blurred-layer");

    // Create content div
    const content = document.createElement("div");
    content.classList.add("content");

    // Create h3 and paragraph
    const heading = document.createElement("h3");
    heading.textContent = user.name;

    const para = document.createElement("p");
    para.textContent = user.bio;

    // Append heading and paragraph to content
    content.appendChild(heading);
    content.appendChild(para);

    // Append all to card
    card.appendChild(img);
    card.appendChild(blurredLayer);
    card.appendChild(content);

    // Finally, append card to the body or any container
    document.querySelector(".cards").appendChild(card);
  });
}

showUsers(users);

let inp = document.querySelector(".inp");

inp.addEventListener("input", function () {
  // 1. Get the value and make it case-insensitive
  let searchTerm = inp.value.toLowerCase().trim();

  // 2. Filter the users array
  let newUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(searchTerm);
  });

  // 3. Select and clear the container
  let container = document.querySelector(".cards");
  container.innerHTML = "";

  // 4. Check if we found anything
  if (newUsers.length > 0) {
    // If found, show the matching cards
    showUsers(newUsers);
  } else {
    // 5. If NOT found, create and show the "No Card Found" message
    const noCardMsg = document.createElement("h2");
    noCardMsg.textContent = "No Card Found";
    
    // Applying styles via JS to center it in your 5-column grid
    noCardMsg.style.gridColumn = "span 5"; 
    noCardMsg.style.textAlign = "center";
    noCardMsg.style.color = "white";
    noCardMsg.style.padding = "100px";
    noCardMsg.style.fontFamily = "sans-serif";
    noCardMsg.style.opacity = "0.6";

    container.appendChild(noCardMsg);
  }
});