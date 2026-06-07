(function () {
  const repo = "https://github.com/enigm-llc/docs";

  function pagePath() {
    const path = window.location.pathname.replace(/^\/+|\/+$/g, "");
    return path || "introduction";
  }

  function filePath() {
    return `${pagePath()}.mdx`;
  }

  function icon(name) {
    const paths = {
      up: '<path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/>',
      down: '<path d="M17 14V2"/><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"/>',
      edit: '<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
      issue: '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/>'
    };
    return `<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${paths[name]}</svg>`;
  }

  function makeButton(label, iconName, type) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `enigm-feedback-button enigm-feedback-${type}`;
    button.innerHTML = `${icon(iconName)}<span>${label}</span>`;
    return button;
  }

  function makeLink(label, iconName, href) {
    const link = document.createElement("a");
    link.className = "enigm-feedback-button";
    link.href = href;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.innerHTML = `${icon(iconName)}<span>${label}</span>`;
    return link;
  }

  function mountFeedback() {
    if (document.querySelector(".enigm-feedback-toolbar")) return;

    const content = document.querySelector("#content") || document.querySelector(".mdx-content");
    if (!content) return;

    const toolbar = document.createElement("section");
    toolbar.className = "enigm-feedback-toolbar";
    toolbar.setAttribute("aria-label", "Page feedback");

    const label = document.createElement("p");
    label.textContent = "Was this page helpful?";

    const yes = makeButton("Yes", "up", "yes");
    const no = makeButton("No", "down", "no");

    const editHref = `${repo}/edit/main/${filePath()}`;
    const issueUrl = new URL(`${repo}/issues/new`);
    issueUrl.searchParams.set("title", `Docs feedback: ${pagePath()}`);
    issueUrl.searchParams.set("body", `Page: ${window.location.href}\n\nDescribe the issue or suggested improvement:\n`);

    const suggest = makeLink("Suggest edits", "edit", editHref);
    const issue = makeLink("Raise issue", "issue", issueUrl.toString());

    const rating = document.createElement("div");
    rating.className = "enigm-feedback-rating";
    rating.append(yes, no);

    const actions = document.createElement("div");
    actions.className = "enigm-feedback-actions";
    actions.append(suggest, issue);

    toolbar.append(label, rating, actions);

    const pagination = document.querySelector("#pagination");
    if (pagination && pagination.parentElement) {
      pagination.parentElement.insertBefore(toolbar, pagination);
    } else {
      content.appendChild(toolbar);
    }

    const storageKey = `enigm-docs-feedback:${pagePath()}`;
    const saved = window.localStorage.getItem(storageKey);
    if (saved) toolbar.dataset.feedback = saved;

    yes.addEventListener("click", () => {
      window.localStorage.setItem(storageKey, "yes");
      toolbar.dataset.feedback = "yes";
    });

    no.addEventListener("click", () => {
      window.localStorage.setItem(storageKey, "no");
      toolbar.dataset.feedback = "no";
    });
  }

  function scheduleMount() {
    window.requestAnimationFrame(() => window.setTimeout(mountFeedback, 100));
  }

  document.addEventListener("DOMContentLoaded", scheduleMount);
  window.addEventListener("popstate", scheduleMount);

  const observer = new MutationObserver(scheduleMount);
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
