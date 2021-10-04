// put all routes
const routes = {
  "/": home,
  "/home": home,
  "/login": login,
  "/signUp": signUp,
  "/aboutUs": aboutUs,
  "/notFound": notFound,
};

// What route I have send user
var routeToGO = sessionStorage.getItem("routeToGO");

//catch root div
const rootDiv = document.getElementById("root");

// sending user on specified route (function)
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


// sending user on specified route (function call)
if (routeToGO === "") {
  onNavigate("/");
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
else if (routeToGO === "aboutUs") {
  console.log("aboutUsaboutUsaboutUsaboutUsaboutUsaboutUs")
  onNavigate("/aboutUs");
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
// window.onpopstate = () => {
//   rootDiv.innerHTML = routes[window.location.pathname];
// };
