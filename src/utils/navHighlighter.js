const navHighlighter = (e) => {
    // Get current scroll position
    let scrollY = window.pageYOffset;
    const sections = document.querySelectorAll("section[id]")

    // Now we loop through sections to get height, top and ID values for each
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 112;
        const sectionId = current.getAttribute("id");

        // If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
        // To know which link needs an active class, we use sectionId variable we are getting while looping through sections as a selector
        if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".links a[href*=" + sectionId + "]").classList.add("active");
        } else {
            document.querySelector(".links a[href*=" + sectionId + "]").classList.remove("active");
        }
    });
}

export default navHighlighter