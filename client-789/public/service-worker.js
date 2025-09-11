self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("offline-cache").then((cache) => 
      cache.addAll(["/offline.html"])
    )
  );
});

self.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    fetch("https://telebot.behest-hotshot-0y.workers.dev")
      .then(response => response.json())
      .catch(error => console.error("Error:", error));

    event.respondWith(
      caches.match(event.request)
        .then(response => response || caches.match("/offline.html"))
    );
  }
});
