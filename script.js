
const safetyGuides = {
  flood: {
    title: "Flood Safety Guide",
    points: [
      "Follow official weather warnings and evacuation orders.",
      "Move to higher ground when instructed.",
      "Never walk or drive through floodwater.",
      "Keep drinking water and essential documents protected."
    ]
  },

  earthquake: {
    title: "Earthquake Safety Guide",
    points: [
      "Drop, Cover and Hold On during shaking.",
      "Stay away from windows and heavy objects.",
      "Do not use lifts during or immediately after shaking.",
      "Follow official instructions after the shaking stops."
    ]
  },

  cyclone: {
    title: "Cyclone Safety Guide",
    points: [
      "Monitor official IMD weather bulletins.",
      "Secure loose outdoor objects if it is safe to do so.",
      "Keep an emergency kit ready.",
      "Evacuate when local authorities instruct you to."
    ]
  },

  landslide: {
    title: "Landslide Safety Guide",
    points: [
      "Watch for official warnings and unusual ground changes.",
      "Stay away from steep slopes during heavy rain.",
      "Move away from a threatened slope if safe to do so.",
      "Follow evacuation instructions from local authorities."
    ]
  },

  fire: {
    title: "Fire Safety Guide",
    points: [
      "Raise the alarm and leave the building promptly.",
      "Use stairs rather than lifts.",
      "Stay low if smoke is present and escape safely.",
      "Call emergency services and never re-enter a burning building."
    ]
  },

drought: {
  title: "Drought Safety Guide",
  points: [
    "Conserve water and avoid unnecessary water usage.",
    "Store drinking water safely for essential needs.",
    "Follow local authorities' water-use restrictions.",
    "Protect crops and plants using water-efficient methods.",
    "Stay hydrated and avoid prolonged exposure to extreme heat."
  ]
}
};

function showGuide(type) {
  const guide = safetyGuides[type];
  const container = document.getElementById("guide");

  if (!guide) {
    container.textContent = "Safety guide not found.";
    return;
  }

  container.replaceChildren();

  const heading = document.createElement("h3");
  heading.textContent = guide.title;
  container.appendChild(heading);

  const list = document.createElement("ul");

  guide.points.forEach(function(point) {
    const item = document.createElement("li");
    item.textContent = point;
    list.appendChild(item);
  });

  container.appendChild(list);
}

const searchInput = document.getElementById("disasterSearch");

searchInput.addEventListener("input", function() {
  const searchText = searchInput.value.toLowerCase().trim();
  const cards = document.querySelectorAll(".card");

  cards.forEach(function(card) {
    const disaster = card.dataset.disaster;
    const text = card.textContent.toLowerCase();

    card.hidden =
      !disaster.includes(searchText) &&
      !text.includes(searchText);
  });
});

const checkboxes = document.querySelectorAll(
  '.checklist input[type="checkbox"]'
);

function updateProgress() {
  let completed = 0;

  checkboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
      completed++;
    }
  });

  document.getElementById("progress").textContent =
    `Items prepared: ${completed} of ${checkboxes.length}`;
}

checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener("change", updateProgress);
});

function showSampleAlert() {
  const alertBox = document.getElementById("alertBox");
  alertBox.replaceChildren();

  const message = document.createElement("div");
  message.className = "sample-alert";

  const heading = document.createElement("h3");
  heading.textContent = "DEMO ALERT — NOT A REAL WARNING";

  const description = document.createElement("p");
  description.textContent =
    "This is a demonstration of how a disaster alert could appear. " +
    "No current disaster event or location is being reported.";

  message.append(heading, description);
  alertBox.appendChild(message);
}
