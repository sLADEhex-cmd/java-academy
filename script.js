    const sidebar = document.getElementById("sidebar");
    const searchBox = document.getElementById("searchBox");
    const topicList = document.getElementById("topicList");
    const links = topicList.querySelectorAll("a");

    function toggleSidebar() {
      sidebar.classList.toggle("open");
    }

    searchBox.addEventListener("input", () => {
      const q = searchBox.value.toLowerCase().trim();
      links.forEach(a => {
        const text = a.textContent.toLowerCase();
        a.parentElement.style.display = text.includes(q) ? "block" : "none";
      });
    });

    links.forEach(link => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 980) sidebar.classList.remove("open");
      });
    });

    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll(".navlinks a, .topic-list a");

    window.addEventListener("scroll", () => {
      let current = "";
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 140) current = section.id;
      });
      navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === "#" + current);
      });
    });