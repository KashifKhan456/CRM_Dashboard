var addNew = document.getElementById("addNew");
      if (addNew) {
        addNew.addEventListener("click", function () {
          var popup = document.getElementById("addNewDeal");
          if (!popup) return;
          var popupStyle = popup.style;
          if (popupStyle) {
            popupStyle.display = "flex";
            popupStyle.zIndex = 100;
            popupStyle.backgroundColor = "rgba(113, 113, 113, 0.3)";
            popupStyle.alignItems = "center";
            popupStyle.justifyContent = "center";
          }
          popup.setAttribute("closable", "");
      
          var onClick =
            popup.onClick ||
            function (e) {
              if (e.target === popup && popup.hasAttribute("closable")) {
                popupStyle.display = "none";
              }
            };
          popup.addEventListener("click", onClick);
        });
      }
      var saveDealBtn = document.getElementById("saveDealBtn");
      if (saveDealBtn) {
        saveDealBtn.addEventListener("click", function (e) {
          window.location.href = "./deals.html";
        });
      }
      var cancelDealBtn = document.getElementById("cancelDealBtn");
      if (cancelDealBtn) {
        cancelDealBtn.addEventListener("click", function (e) {
          window.location.href = "./deals.html";
        });
      }