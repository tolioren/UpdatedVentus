export default function ionicSelector(selector?: string) {
  const app = document.querySelector(selector || "app");
  const ionApp = document.createElement("ion-app");

  for (let x = 0; x < app.attributes.length; x++) {
    ionApp.setAttribute(app.attributes[x].name, app.attributes[x].value);
  }

  document.body.replaceChild(ionApp, app);
}
