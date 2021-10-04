// put all routes
const routes = {
  "/": home,
  "/home": home,
  "/login": login,
  "/signUp": signUp,
  "/notFound": notFound,
};

var routeToGO;
//handle route
routeToGO = sessionStorage.getItem("routeToGO");
//catch root div
const rootDiv = document.getElementById("root");

rootDiv.innerHTML = routes[window.location.pathname];
console.log(routes[window.location.pathname],'routes[window.location.pathname];')
console.log(window.location.pathname, "window.location.pathname");




const onNavigate = (pathName) => {
  window.history.pushState(
    {},
    pathName,
    window.location.origin + pathName
  );
  rootDiv.innerHTML = routes[pathName];

  
  // if (pathName === "/login") {
  //   var aboutDemoID = document.getElementById("loginDemo");
  //   console.log(aboutDemoID, "aboutDemoID");
  //   aboutDemoID.innerHTML = `<h1>Added to Login</h1>`;
  // }
};




console.log(routeToGO, "routeToGO -44");
console.log("working, 47");
if (routeToGO === "home") {
  onNavigate("/home");
  sessionStorage.setItem("routeToGO", "");
} 
else if (routeToGO === "home") {
  onNavigate("/home");
  sessionStorage.setItem("routeToGO", "");
} 
else if (routeToGO === "login") {
  onNavigate("/login");
  sessionStorage.setItem("routeToGO", "");
} 
else if (routeToGO === "signUp") {
  onNavigate("/signUp");
  sessionStorage.setItem("routeToGO", "");
} 
else {
  onNavigate("/notFound");
  sessionStorage.setItem("routeToGO", "");
}
// if (routeToGO === undefined) {
//   onNavigate("/notFound");
//   sessionStorage.setItem("routeToGO", "");
// }
window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};

// this is routeControl section