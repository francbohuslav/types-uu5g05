// Node 18 required
(async () => {
  const res = await fetch("https://cdn.plus4u.net/uu-gds-svgg01/1.0.0/assets/stencil-map.json");
  const data = await res.json();
  for (const sectionName in data) {
    for (const iconName in data[sectionName].iconMap) {
      console.log(`| "uugdsstencil-${sectionName}-${iconName}"`);
    }
  }
})();
