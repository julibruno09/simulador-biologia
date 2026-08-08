// Complete verified medical data and pathways structures
const anatomyData = {
    main: {
        title: "Main Overview: Select an Organ System",
        description: "This model displays 5 vital human systems. Click on any highlighted primary organ on the silhouette to inspect its complete anatomical system, functional pathways, and specialized mechanics."
    },
    systems: {
        nervous: {
            title: "Central & Peripheral Nervous System",
            color: "var(--nervous)",
            svg: '<ellipse class="clickable-organ" data-type="organ" data-id="brain" cx="100" cy="45" rx="14" ry="12" fill="#ff9ff3" /><line class="clickable-organ" data-type="organ" data-id="spinal_cord" x1="100" y1="57" x2="100" y2="180" stroke="#74b9ff" stroke-width="4" /><path class="system-path clickable-path" data-id="path_nervous" d="M100,80 Q130,110 145,150 M100,100 Q70,130 55,170 M100,180 Q120,250 130,350 M100,180 Q80,250 70,350" stroke="#54a0ff" cursor="pointer" />'
        },
        respiratory: {
            title: "Respiratory System",
            color: "var(--respiratory)",
            svg: '<line x1="100" y1="65" x2="100" y2="105" stroke="#55efc4" stroke-width="3" /><path class="clickable-organ" data-type="organ" data-id="trachea" d="M98,65 L102,65 L102,105 L98,105 Z" fill="#55efc4" /><path class="clickable-organ" data-type="organ" data-id="lungs" d="M98,105 C85,105 75,115 80,140 C85,150 98,145 98,130 Z M102,105 C115,105 125,115 120,140 C115,150 102,145 102,130 Z" fill="#81ecec" /><path class="system-path clickable-path" data-id="path_respiratory" d="M100,55 L100,105 M100,105 Q85,125 85,135 M100,105 Q115,125 115,135" stroke="#00cec9" cursor="pointer" />'
        },
        digestive: {
            title: "Gastrointestinal (Digestive) System",
            color: "var(--digestive)",
            svg: '<path class="clickable-organ" data-type="organ" data-id="stomach" d="M100,135 Q108,150 95,165 Q115,165 112,185 Q90,190 90,170 Z" fill="#ff7675" /><rect class="clickable-organ" data-type="organ" data-id="small_intestine" x="90" y="190" width="22" height="22" rx="5" fill="#fab1a0" /><path class="system-path clickable-path" data-id="path_digestive" d="M100,65 L100,135 Q108,150 95,165 L100,190" stroke="#ffeaa7" cursor="pointer" />'
        },
        circulatory: {
            title: "Cardiovascular (Circulatory) System",
            color: "var(--circulatory)",
            svg: '<path class="clickable-organ" data-type="organ" data-id="heart" d="M100,115 C95,105 85,110 100,128 C115,110 105,105 100,115 Z" fill="#d63031" /><path class="system-path clickable-path" data-id="path_circulatory" d="M100,120 Q130,85 100,45 Q70,85 100,120 M100,125 Q135,225 120,335 M100,125 Q65,225 80,335" stroke="#ff7675" cursor="pointer" />'
        },
        reproductive: {
            title: "Reproductive System",
            color: "var(--reproductive)",
            svg: '<g class="clickable-organ" data-type="organ" data-id="gonads"><circle cx="100" cy="240" r="10" fill="#e84393" /><circle cx="85" cy="235" r="5" fill="#fd79a8" /><circle cx="115" cy="235" r="5" fill="#fd79a8" /></g>'
        }
    },
    pathways: {
        path_nervous: {
            title: "Neurotransmitter & Signal Pathway",
            meta: "Electrochemical Synaptic Transmission",
            content: "<strong>How signals move:</strong> An electrical impulse (action potential) travels down the axon of a neuron. When it reaches the synaptic terminal, it triggers the release of <b>neurotransmitters</b> (chemical messengers like Dopamine, Serotonin, or Acetylcholine) into the synaptic cleft. These molecules bind to receptors on the next neuron, propagating the nerve impulse throughout the peripheral network."
        },
        path_respiratory: {
            title: "Oxygen & Carbon Dioxide Flow",
            meta: "Pulmonary Ventilation and Gas Exchange",
            content: "<strong>The journey of Oxygen:</strong> Inhaled air rich in <b>Oxygen (O2)</b> travels down the nasal cavity, pharynx, larynx, and trachea. It branches into the bronchi and enters the lungs until reaching the alveoli. Here, O2 diffuses into the capillaries. Simultaneously, cellular metabolism waste, <b>Carbon Dioxide (CO2)</b>, leaves the blood, enters the alveoli, and follows the reverse path to be exhaled."
        },
        path_digestive: {
            title: "Gastrointestinal Food Transit",
            meta: "Mechanical and Chemical Food Journey",
            content: "<strong>The journey of Food:</strong> Ingested food is chewed and mixed with saliva to form a compressed <b>bolus</b>, which moves down the esophagus via peristalsis. In the stomach, mechanical churning and hydrochloric acid break it into a semi-liquid paste called <b>chyme</b>. This paste enters the small intestine, where it is broken down by enzymes and nutrients are absorbed into the body."
        },
        path_circulatory: {
            title: "Blood Circulation Pathways",
            meta: "Systemic and Pulmonary Vascular Circuits",
            content: "<strong>The journey of Blood:</strong> Oxygen-depleted blood enters the right side of the heart via the vena cava and is pumped to the lungs to collect oxygen. This oxygenated blood returns to the left side of the heart, which forcefully contracts to pump it through the <b>Aorta</b>. Arteries and capillaries distribute it to nourish tissues, and veins bring the deoxygenated blood back to start over."
        }
    },
    organs: {
        brain: {
            title: "The Brain",
            meta: "System: Nervous | Primary Center",
            content: "The master control unit of the body. It processes sensory inputs, regulates homeostasis, and coordinates voluntary responses.",
            img: "https://wikimedia.org",
            source: "https://wikimedia.org"
        },
        spinal_cord: {
            title: "Spinal Cord",
            meta: "System: Nervous | Signal Highway",
            content: "A thick column of nerve tissue acting as the main pathway connecting peripheral nerves to the brain, steering fast reflex actions.",
            img: "https://wikimedia.org",
            source: "https://wikimedia.org"
        },
        trachea: {
            title: "The Trachea (Windpipe)",
            meta: "System: Respiratory | Air Conduction",
            content: "A resilient cartilaginous tube connecting the larynx to bronchi, preventing airway collapse during lung ventilation changes.",
            img: "https://wikimedia.org",
            source: "https://wikimedia.org"
        },
        lungs: {
            title: "Lungs & Alveolar Networks",
            meta: "System: Respiratory | External Respiration",
            content: "Paired respiratory structures hosting millions of air sacs called alveoli, facilitating direct gas exchange into blood capillaries.",
            img: "https://wikimedia.org",
            source: "https://wikimedia.org"
        },
        stomach: {
            title: "The Stomach",
            meta: "System: Digestive | Protein Breakdown",
            content: "A muscular organ specialized in biochemical extraction and churning of proteins using gastric juices and Pepsin enzymes.",
            img: "https://wikimedia.org",
            source: "https://wikimedia.org"
        },
        small_intestine: {
            title: "Small Intestine",
            meta: "System: Digestive | Nutrient Absorption",
            content: "Primary biological zone for molecular chemical digestion and absolute nutrient extraction using highly folded villi networks.",
            img: "https://wikimedia.org",
            source: "https://wikimedia.org"
        },
        heart: {
            title: "The Heart",
            meta: "System: Circulatory | Muscular Pump",
            content: "A four-chambered muscular mechanism driving the systemic high-pressure circuit and the pulmonary oxygen-collection circuit.",
            img: "https://wikimedia.org",
            source: "https://wikimedia.org"
        },
        gonads: {
            title: "Reproductive Gonads Area",
            meta: "System: Reproductive | Gamete & Hormone Center",
            content: "Anatomical sector producing germ cells and chemical messengers (Testosterone or Estrogen) regulating human development cycles.",
            img: "https://wikimedia.org",
            source: "https://wikimedia.org"
        }
    }
};
// DOM references
const dynamicContent = document.getElementById("dynamicContent");
const btnBack = document.getElementById("btnBack");
const viewTitle = document.getElementById("viewTitle");
const infoTitle = document.getElementById("infoTitle");
const infoMeta = document.getElementById("infoMeta");
const infoContent = document.getElementById("infoContent");
const infoPanel = document.getElementById("infoPanel");

// Initialize application on window load
function initApp() {
    btnBack.addEventListener("click", showMainDashboard);
    showMainDashboard();
}

// Render Level 1 layout (All organ entry points)
function showMainDashboard() {
    btnBack.classList.add("hidden");
    viewTitle.innerText = anatomyData.main.title;
    
    dynamicContent.innerHTML = `
        <!-- NERVIOSO: Cerebro -->
        <ellipse class="clickable-organ" data-type="system" data-id="nervous" cx="100" cy="45" rx="14" ry="12" fill="var(--nervous)" />
        
        <!-- RESPIRATORIO: Pulmones -->
        <g class="clickable-organ" data-type="system" data-id="respiratory">
            <path d="M98,105 C85,105 75,115 80,140 C85,150 98,145 98,130 Z" fill="var(--respiratory)" />
            <path d="M102,105 C115,105 125,115 120,140 C115,150 102,145 102,130 Z" fill="var(--respiratory)" />
        </g>

        <!-- CIRCULATORIO: Corazon -->
        <path class="clickable-organ" data-type="system" data-id="circulatory" d="M100,115 C95,105 85,110 100,128 C115,110 105,105 100,115 Z" fill="var(--circulatory)" />

        <!-- DIGESTIVO: Estomago -->
        <path class="clickable-organ" data-type="system" data-id="digestive" d="M100,135 Q108,150 95,165 Q115,165 112,185 Q90,190 90,170 Z" fill="var(--digestive)" />

        <!-- REPRODUCTIVO: Gónadas (Sin linea de recorrido) -->
        <g class="clickable-organ" data-type="system" data-id="reproductive">
            <circle cx="100" cy="240" r="10" fill="var(--reproductive)" />
            <circle cx="85" cy="235" r="5" fill="var(--reproductive)" />
            <circle cx="115" cy="235" r="5" fill="var(--reproductive)" />
        </g>
    `;
    
    infoTitle.innerText = anatomyData.main.title;
    infoMeta.innerText = "";
    infoContent.innerHTML = anatomyData.main.description;
    infoPanel.style.borderLeftColor = "var(--accent-blue)";
    
    attachEventListeners();
}

// Render Level 2 Layout (Isolated deep system elements)
function loadSpecificSystem(systemKey) {
    const system = anatomyData.systems[systemKey];
    if (!system) return;

    btnBack.classList.remove("hidden");
    viewTitle.innerText = system.title;
    dynamicContent.innerHTML = system.svg;
    
    infoTitle.innerText = system.title;
    infoMeta.innerText = "Mode: Detailed System View";
    infoContent.innerHTML = "<p>Excellent. Now click on any organ structure, or <b>click directly on the animated dotted pathway</b> to analyze the system flow mechanics.</p>";
    infoPanel.style.borderLeftColor = system.color;

    attachEventListeners();
}

// Render Level 3 Data Presentation Card
function loadOrganData(organKey) {
    const organ = anatomyData.organs[organKey];
    if (!organ) return;

    infoTitle.innerText = organ.title;
    infoMeta.innerText = organ.meta;
    infoContent.innerHTML = "<p>" + organ.content + "</p><img class='info-image' src='" + organ.img + "' alt='" + organ.title + "'><br><a class='source-link' href='" + organ.source + "' target='_blank'>🔬 View high-res scientific graphic source</a>";
}

// Render Pathway Data Card
function loadPathwayData(pathwayKey) {
    const path = anatomyData.pathways[pathwayKey];
    if (!path) return;

    infoTitle.innerText = path.title;
    infoMeta.innerText = "System Pathway: " + path.meta;
    infoContent.innerHTML = "<p>" + path.content + "</p><div style='margin-top:15px; padding:10px; background:rgba(255,255,255,0.05); border-radius:5px; border-left:3px solid #fff; font-size:0.9em; font-style:italic;'>Interactive Flow Track Mode Active</div>";
}

// Handles dynamic assignment of DOM pointer actions
function attachEventListeners() {
    // Organ Event Handlers
    const elements = document.querySelectorAll(".clickable-organ");
    elements.forEach(el => {
        el.addEventListener("click", (event) => {
            event.stopPropagation();
            const type = el.getAttribute("data-type");
            const id = el.getAttribute("data-id");

            if (type === "system") {
                loadSpecificSystem(id);
            } else if (type === "organ") {
                loadOrganData(id);
            }
        });
    });

    // Pathway Dotted Line Event Handlers
    const pathways = document.querySelectorAll(".clickable-path");
    pathways.forEach(path => {
        path.addEventListener("click", (event) => {
            event.stopPropagation();
            const id = path.getAttribute("data-id");
            loadPathwayData(id);
        });
    });
}

// Start core listeners on load
window.onload = initApp;
