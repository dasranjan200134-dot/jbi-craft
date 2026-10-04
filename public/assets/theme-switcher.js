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

  // Palette dock disabled/removed per user request
  function mountDock() {
    const existing = document.getElementById("jbi-palette-dock");
    if (existing) existing.remove();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountDock);
  } else {
    mountDock();
  }
})();
