const makeDropDownMenu = (mainItem, subItems) => {
  if (!mainItem || !subItems)
    return console.error("Parameters required for ", makeDropDownMenu);
  hideAllSubItems();
  mainItem.addEventListener("click", toggleHideSubItems);

  function toggleHideSubItems() {
    areSubItemsHidden() ? unHideAllSubItems() : hideAllSubItems();
  }

  function hideAllSubItems() {
    subItems.forEach((item) => (item.style.display = "none"));
  }

  function unHideAllSubItems() {
    subItems.forEach((item) => (item.style.display = ""));
  }

  function areSubItemsHidden() {
    return subItems.some((item) => item.style.display === "none");
  }
};
