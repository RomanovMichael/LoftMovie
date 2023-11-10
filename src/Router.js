import { useEffect, useState } from "react";

window.addEventListener("click", function (event) {
  const link = event.target.closest("a");
  if (
    !event.button &&
    !event.altKey &&
    !event.ctrlKey &&
    !event.metaKey &&
    !event.shiftKey &&
    link &&
    link.href.startsWith(window.location.origin + "/") &&
    link.target !== "_blank"
  ) {
    event.preventDefault();
    navigate(link.href);
  }
});

export default function Router({ routes, defaultComponent }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);
  return (
    routes.find(({ path, component }) => path === currentPath)?.component ||
    defaultComponent
  );
}

export function navigate(href) {
  window.history.pushState({}, "", href);

  const navEvent = new PopStateEvent("popstate");
  window.dispatchEvent(navEvent);
}

export function getUrlParam(param) {
  const searchParams = new URLSearchParams(window.location.search);
  return searchParams.get(param);
}
