document.addEventListener(
  "DOMContentLoaded",
  async () => {
    loadSkillsPage();
    loadProjectsPage();
    loadResearchPage();
  },
  false
);

function loadSkillsPage() {
  var skills = [
    { name: "C", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" },
    { name: "C++", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "NodeJs", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    
    { name: "Matlab", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg" },
    { name: "Git", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", image: "./assets/github.png" },
    { name: "Discord.js", image: "./assets/discord.png" },
    { name: "VS Code", image: "./assets/vs_code.svg" },
  ];

  var allSkills = document.getElementById("all-skills");

  for (var i = 0; i < skills.length; i++) {
    var element = document.createElement("div");
    element.classList.add("skill-card");
    element.innerHTML = `
            <img src="${skills[i].image}" alt="${skills[i].name}">
            <p>${skills[i].name}</p>
        `;
    allSkills.appendChild(element);
  }
}

function loadProjectsPage() {
  projects = [
    {
      title: "I-IMCS:IoT Based Industrial Monitoring and Control System",
      image: "./assets/rp.png",
      description:
        "HINET based HMI Interface developed for real time monitoring of Industrial Utilities leverageing MQTT protocol",
      deploy: "",
      repo: "",
    },
    {
      title: "I-AIEUMS:IoT Based Advanced Industrial Energy Utility Management System",
      image: "./assets/rp.png",
      description:
        "RS-485 Modbus Based Industrial Energy Consuming Utilities was monitored utilized Digital Twin tech",
      deploy: "",
      repo: "",
    },
    {
      title: "I-AMS:IoT Based Air Pollution Monitoring System",
      image: "./assets/rp.png",
      description:
        "MQ-135 ,PMS 5003 Partculate Sensors were interfaced with ESP-32 Microncontroller monitoring AQI realtime on Thinks Speak platform",
      deploy: "",
      repo: "",
    },
    {
      title: "IoT Based Voice Controlled Mobile Robots ",
      image: "./assets/rp.png",
      description:
        "Voice Recognition based  Mobile Robots were controlled.Programed using python language.MIT App inventor was utlizied to make GUI",
      deploy: "",
      repo: "",
    },
    {
      title: "FIR Filter Implementation on SPARTAN 3E Fpga",
      image: "./assets/rp.png",
      description:
        "Finite Impulse Response Filter was designed on XILINX and then somehow tried to implent on SPARTAN 3E😊",
      deploy: "",
      repo: "",
    },
    {
      title: "UAV Recognition using YOLOv",
      image: "./assets/rp.png",
      description:
        "Framework was developed to train state of the start YOLO algorithm to detect Unamanned Aerial Vehicle",
      deploy: "",
      repo: "",
    },
  ];

  var allProjects = document.getElementById("all-projects");

  for (var i = 0; i < projects.length; i++) {
    var element = document.createElement("div");
    element.classList.add("project-card");
    element.innerHTML = `
            <img src="${projects[i].image}" alt="${projects[i].title}">
            <h2>${projects[i].title}</h2>
            <p>${projects[i].description}</p>
            <div class="project-buttons">
                ${
                  projects[i].deploy !== ""
                    ? `<a id="deploy-button" href="${projects[i].deploy}" target="_blank"><i class="fas fa-eye"></i> View</a>`
                    : ``
                }
                ${
                  projects[i].repo !== ""
                    ? `<a href="${projects[i].repo}" id="code-button" target="_blank"><i class="fas fa-file-code"></i> Code</a>`
                    : ``
                }
            </div>
        `;
    allProjects.appendChild(element);
  }
}

function loadResearchPage() {
  researchProfiles = [
    {
      name: "ORCID iD",
      logo: "<i class='fab fa-orcid'></i>",
      link: "https://orcid.org/my-orcid?orcid=0009-0007-5946-2508",
    },
    {
      name: "Google Scholar",
      logo: "<i class='fas fa-graduation-cap'></i>",
      link: "https://scholar.google.com/citations?user=0JPd0FEAAAAJ&hl=zh-TW&oi=ao",
    },
    {
      name: "ResearchGate",
      logo: "<i class='fab fa-researchgate'></i>",
      link: "https://www.researchgate.net/profile/Muhammad-Jazib-3",
    },
  ];

  var allResearchProfiles = document.getElementById("all-research-profiles");

  for (var i = 0; i < researchProfiles.length; i++) {
    var element = document.createElement("a");
    element.rel = "noreferrer noopener";
    element.href = `${researchProfiles[i].link}`;
    element.target = "_blank";
    element.innerHTML = `
            <div class="research-card">
                ${researchProfiles[i].logo}
                <p>${researchProfiles[i].name}</p>
                <i class="fas fa-angle-right"></i>
            </div>
        `;
    allResearchProfiles.appendChild(element);
  }

  researchPapers = [
    {
      title:
        "MIND TWIN AI:Multiphysics Informed Digital Twin for fault localization in Induction Motor using AI (Published IEEE BdKCSE'23 Italy)",

      link: "",
      logo: "<i class='fas fa-file-alt'></i>",
    },
    {
      title:
        "Deep Learning Resource Allocation in Radio Centeric Netwroks (Accepted IEEE ICECE'23 China) ",
      link: "",
      logo: "<i class='fas fa-file-alt'></i>",
    },
    {
      title:
        "Vision Transformer based Semantic Communication for Next Gen Wireless Networks (Submitted IEEE WCNC'24 Italy)",
      link: "",
      logo: "<i class='fas fa-file-alt'></i>",
    },
    {
      title:
        "Reinforcement Learning based Power Allocation in UAV Assisted Aerial Active RIS for COMP-NOMA Networks (In-Progress)",
      link: "",
      logo: "<i class='fas fa-file-alt'></i>",
    },
  ];

  var allResearchPapers = document.getElementById("all-research-papers");

  for (var i = 0; i < researchPapers.length; i++) {
    var element = document.createElement("a");
    element.rel = "noreferrer noopener";
    element.href = `${researchPapers[i].link}`;
    element.target = "_blank";
    element.innerHTML = `
            <div class="research-card">
                ${researchPapers[i].logo}
                <p>${researchPapers[i].title}</p>
                <i class="fas fa-angle-right"></i>
            </div>
        `;
    allResearchPapers.appendChild(element);
  }
}

function darkModeSwitch() {
  var element = document.getElementById("dark-mode-switch");
  setTimeout(function () {
    element.style.opacity = 0;
    setTimeout(function () {
      if (element.name == "dark") {
        element.innerHTML = '<i class="fas fa-sun"></i>';
        element.name = "light";
        document.documentElement.style.setProperty(
          "--background1",
          "var(--white1)"
        );
        document.documentElement.style.setProperty(
          "--background2",
          "var(--white2)"
        );
        document.documentElement.style.setProperty("--text", "var(--black1)");
        document.documentElement.style.setProperty(
          "--navbar",
          "var(--navbar-light)"
        );
      } else {
        element.innerHTML = '<i class="fas fa-moon"></i>';
        element.name = "dark";
        document.documentElement.style.setProperty(
          "--background1",
          "var(--black1)"
        );
        document.documentElement.style.setProperty(
          "--background2",
          "var(--black2)"
        );
        document.documentElement.style.setProperty("--text", "var(--white1)");
        document.documentElement.style.setProperty(
          "--navbar",
          "var(--navbar-dark)"
        );
      }
      element.style.opacity = 1;
    }, 250);
  });
}

function openNavbar() {
  var nav = document.getElementById("mobile-navbar");
  nav.style.transform = "translateX(-200px)";
}

function closeNavbar() {
  var nav = document.getElementById("mobile-navbar");
  nav.style.transform = "translateX(0px)";
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxhd-eQtInVaoQ_hWsLtgQSt7oEXjMMUkASrd2k-gObhuGQZx9STGuh_kX13yE9lLeVrA/exec";
const form = document.forms["say-hi-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => notification("Your message has been received!"))
    .catch((error) => notification("Some error occured on form submit!"));

  form.reset();
});

async function notification(message) {
  const element = document.createElement("div");
  element.id = "notification";
  element.innerHTML = `
    <h1>${message}</h1>
    `;
  document.querySelector("body").appendChild(element);
  setTimeout(() => {
    document.querySelector("body").removeChild(element);
  }, 5000);
}
