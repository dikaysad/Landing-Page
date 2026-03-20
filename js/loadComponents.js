async function loadComponent(id, file) {
  const res = await fetch(file);
  const data = await res.text();
  document.getElementById(id).innerHTML = data;
}

loadComponent("header", "./components/header.html");
loadComponent("hero", "./components/hero.html");
loadComponent("course", "./components/course.html");
loadComponent("testimonial", "./components/testimonial.html");
loadComponent("form", "./components/form.html");
loadComponent("footer", "./components/footer.html");