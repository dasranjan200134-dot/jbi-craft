// JBI CRAFT - Live Luxury Theme & Color Palette Controller
(function() {
  const PALETTES = [
    { id: "indigo", name: "Royal Indigo & Sovereign Gold", primary: "#1e3a8a", accent: "#d4af37", icon: "👑" },
    { id: "crimson", name: "Sacred Crimson & Antique Brass", primary: "#881337", accent: "#d4af37", icon: "🌺" },
    { id: "emerald", name: "Heritage Emerald & Gilded Ochre", primary: "#14532d", accent: "#eab308", icon: "🌿" },
    { id: "terracotta", name: "Royal Saffron & Terracotta", primary: "#c85018", accent: "#d4af37", icon: "🏺" }
  ];

  function getStoredTheme() {
    try {
      return localStorage.getItem("jbi_active_theme") || "indigo";
    } catch {
      return "indigo";
    }
  }

  function applyTheme(themeId) {
    document.documentElement.setAttribute("data-theme", themeId);
    try {
      localStorage.setItem("jbi_active_theme", themeId);
    } catch {}
    
    // Update active state on buttons
    document.querySelectorAll(".jbi-palette-btn").forEach(btn => {
      if (btn.getAttribute("data-palette-id") === themeId) {
        btn.classList.add("active");
        btn.style.outline = "2px solid " + btn.getAttribute("data-color");
      } else {
        btn.classList.remove("active");
        btn.style.outline = "none";
      }
    });
  }

  // Apply immediately on parse
  const initialTheme = getStoredTheme();
  document.documentElement.setAttribute("data-theme", initialTheme);

  // Mount Floating Palette Dock
  function mountDock() {
    if (document.getElementById("jbi-palette-dock")) return;
    
    const dock = document.createElement("div");
    dock.id = "jbi-palette-dock";
    dock.className = "jbi-palette-dock";
    dock.setAttribute("aria-label", "Color Palette Switcher");
    dock.innerHTML = `
      <div class="jbi-palette-label" title="Switch Color Palette">
        <span>🎨</span>
        <span class="hidden sm:inline">Palette</span>
      </div>
      <div style="display:flex;align-items:center;gap:6px;">
        ${PALETTES.map(p => `
          <button 
            type="button" 
            class="jbi-palette-btn ${p.id === initialTheme ? 'active' : ''}" 
            data-palette-id="${p.id}" 
            data-color="${p.primary}"
            title="${p.name}" 
            aria-label="${p.name}"
            style="background: ${p.primary};"
          ></button>
        `).join("")}
      </div>
    `;

    document.body.appendChild(dock);

    dock.querySelectorAll(".jbi-palette-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const themeId = btn.getAttribute("data-palette-id");
        applyTheme(themeId);
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountDock);
  } else {
    mountDock();
  }
})();
