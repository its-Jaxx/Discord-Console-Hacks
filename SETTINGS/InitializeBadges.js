(() => {

    const state = {
    userBadges: new Map(),
    profileBadges: new Set()
  };

  const Badge = {
    MPA: { key: "MPA", url: "https://cdn.discordapp.com/badge-icons/fee1624003e2fee35cb398e125dc479b.png" },
    Staff: { key: "Staff", url: "https://cdn.discordapp.com/badge-icons/5e74e9b61934fc1f67c65515d1f7e60d.png" },
    HSE: { key: "HSE", url: "https://cdn.discordapp.com/badge-icons/bf01d1073931f921909045f3a39fd264.png" },
    Supporter: { key: "Supporter", url: "https://cdn.discordapp.com/badge-icons/7060786766c9c840eb3019e725d2b358.png" },
    Quest: { key: "Quest", url: "https://cdn.discordapp.com/badge-icons/7d9ae358c8c5e118768335dbe68b4fb8.png" },
    Orb: { key: "Orb", url: "https://cdn.discordapp.com/badge-icons/83d8a1eb09a8d64e59233eec5d4d5c2d.png" },

    DBH: lvl => ({
      key: `DBH-${lvl}`,
      url: lvl === 2
        ? "https://cdn.discordapp.com/badge-icons/848f79194d4be5ff5f81505cbd0ce1e6.png"
        : "https://cdn.discordapp.com/badge-icons/2717692c7dca7289b35297368a940dd0.png"
    }),

    Booster: lvl => {
      const map = {
        1:"51040c70d4f20a921ad6674ff86fc95c",
        2:"0e4080d1d333bc7ad29ef6528b6f2fb7",
        3:"72bed924410c304dbe3d00a6e593ff59",
        4:"df199d2050d3ed4ebf84d64ae83989f8",
        5:"996b3e870e8a22ce519b3a50e6bdd52f",
        6:"991c9f39ee33d7537d9f408c3e53141e",
        7:"cb3ae83c15e970e8f3d410bc62cb8b99",
        8:"7142225d31238f6387d9f09efaa02759",
        9:"ec92202290b48d0879b7413d2dde3bab"
      };
      return {
        key: `Booster-${lvl}`,
        url: `https://cdn.discordapp.com/badge-icons/${map[lvl]}.png`
      };
    }
  };

  window.Badge = Badge;

  function badgeNode(badge) {
    const a = document.createElement("a");
    a.dataset.fakeBadge = badge.key;
    a.className = "anchor_edefb8 anchorUnderlineOnHover_edefb8";

    const img = document.createElement("img");
    img.className = "badge__8061a";
    img.src = badge.url;
    img.alt = " ";

    a.appendChild(img);
    return a;
  }

  function inject(container, badge) {
    if (!container || container.querySelector(`[data-fake-badge="${badge.key}"]`)) return;
    container.appendChild(badgeNode(badge));
  }

  function remove(container, badge) {
    container
      ?.querySelectorAll(`[data-fake-badge="${badge.key}"]`)
      .forEach(n => n.remove());
  }

  function findUserRoots(username) {
    return [...document.querySelectorAll("span.userTagUsername__63ed3")]
      .filter(n => n.textContent === username)
      .map(n => n.closest('[class*="profile"], [class*="userPopout"], [class*="root"]'))
      .filter(Boolean);
  }

  function userBadgeContainers(root) {
    return root?.querySelectorAll('.container__8061a[aria-label="User Badges"]') ?? [];
  }

  function profileBadgeContainers() {
    return document.querySelectorAll(
      '.badgeList__1fed1[aria-label="User Badges"]'
    );
  }

  function reapplyAll() {
    for (const [username, keys] of state.userBadges) {
      const roots = findUserRoots(username);
      roots.forEach(root => {
        userBadgeContainers(root).forEach(container => {
          keys.forEach(key => {
            const badge = resolveBadge(key);
            if (badge) inject(container, badge);
          });
        });
      });
    }

    profileBadgeContainers().forEach(container => {
      state.profileBadges.forEach(key => {
        const badge = resolveBadge(key);
        if (badge) inject(container, badge);
      });
    });
  }

  function resolveBadge(key) {
    for (const v of Object.values(Badge)) {
      if (typeof v === "function") continue;
      if (v.key === key) return v;
    }
    if (key.startsWith("DBH")) {
      const lvl = +key.split("-")[1];
      return Badge.DBH(lvl);
    }
    if (key.startsWith("Booster")) {
      const lvl = +key.split("-")[1];
      return Badge.Booster(lvl);
    }
  }

  const observer = new MutationObserver(reapplyAll);
  observer.observe(document.body, { childList: true, subtree: true });

  window.getBadge = (badge, username) => {
    if (!state.userBadges.has(username)) {
      state.userBadges.set(username, new Set());
    }
    state.userBadges.get(username).add(badge.key);
    reapplyAll();
  };

  window.removeBadge = (badge, username) => {
    state.userBadges.get(username)?.delete(badge.key);
    reapplyAll();
  };

  window.getProfileBadge = badge => {
    state.profileBadges.add(badge.key);
    reapplyAll();
  };

  window.removeProfileBadge = badge => {
    state.profileBadges.delete(badge.key);
    reapplyAll();
  };

  console.log("Persistent fake badge system loaded.");
})();
