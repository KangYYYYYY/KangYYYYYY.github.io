(function () {
  const REPO = "KangYYYYYY/KangYYYYYY.github.io";
  const TIME_ZONE = "Asia/Shanghai";

  function formatCommitTime(isoText) {
    const date = new Date(isoText);
    if (Number.isNaN(date.getTime())) return "";
    const parts = new Intl.DateTimeFormat("sv-SE", {
      timeZone: TIME_ZONE,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).formatToParts(date);
    const byType = Object.fromEntries(parts.map((part) => [part.type, part.value]));
    return `${byType.year}-${byType.month}-${byType.day} ${byType.hour}:${byType.minute}:${byType.second} UTC+8`;
  }

  function updateOne(container) {
    const repo = container.getAttribute("data-github-repo") || REPO;
    const path = container.getAttribute("data-github-path") || "";
    const timeEl = container.querySelector("[data-updated-time]");
    if (!repo || !timeEl || !window.fetch) return;

    const params = new URLSearchParams({ per_page: "1" });
    if (path) params.set("path", path);
    fetch(`https://api.github.com/repos/${repo}/commits?${params.toString()}`, {
      headers: { Accept: "application/vnd.github+json" },
    })
      .then((response) => (response.ok ? response.json() : Promise.reject(response)))
      .then((items) => {
        const commit = Array.isArray(items) ? items[0] : null;
        const isoText = commit?.commit?.committer?.date || commit?.commit?.author?.date || "";
        const formatted = formatCommitTime(isoText);
        if (!formatted) return;
        timeEl.textContent = formatted;
        timeEl.setAttribute("datetime", isoText);
      })
      .catch(() => {
        // Keep the build-time fallback already rendered in the HTML.
      });
  }

  function init() {
    document.querySelectorAll("[data-github-updated]").forEach(updateOne);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
