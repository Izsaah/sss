window.onload = function () {
    console.log("Page loaded successfully!");
  
    const images = document.querySelectorAll(".gallery img");
  
    images.forEach((img) => {
      // Mouse events
      img.addEventListener("mouseover", () => {
        console.log(`Mouse over: ${img.alt}`);
        img.style.border = "2px solid #007BFF";
      });
  
      img.addEventListener("mouseleave", () => {
        console.log(`Mouse leave: ${img.alt}`);
        img.style.border = "none";
      });
  
      // Focus events
      img.addEventListener("focus", () => {
        console.log(`Focus: ${img.alt}`);
        img.style.outline = "2px solid #007BFF";
      });
  
      img.addEventListener("blur", () => {
        console.log(`Blur: ${img.alt}`);
        img.style.outline = "none";
      });
    });
  };