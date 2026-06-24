const cursor = document.querySelector(".cursor");

    document.addEventListener("mousemove",(e)=>{
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
    });

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
    if(entry.isIntersecting){
    entry.target.classList.add("show");
    }
    });
    });

    sections.forEach(sec=>observer.observe(sec));

    const text = "Привет! Я Ирина";
    let i = 0;

    function type(){
    if(i < text.length){
    document.getElementById("typing").innerHTML += text[i];
    i++;
    setTimeout(type,90);
    }
    }
    type();