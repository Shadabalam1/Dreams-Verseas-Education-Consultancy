/* =====================================================
   CONFIG — replace with real business details
===================================================== */
const CONFIG = {
  phone: "+91XXXXXXXXXX",
  whatsapp: "91XXXXXXXXXX",
  email: "riyankainat@gmail.com",
  whatsappMessage: "Hello Dreams Overseas, I would like to know more about studying abroad."
};

/* =====================================================
   DATA
===================================================== */
const DESTINATIONS = [
  { name: "Australia", flag: "🇦🇺", desc: "Explore study opportunities, universities and programs in Australia.", img: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=900&q=80" },
  { name: "Canada", flag: "🇨🇦", desc: "Discover courses and campus life across Canada's leading institutions.", img: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=900&q=80" },
  { name: "Ireland", flag: "🇮🇪", desc: "Study in Ireland's growing hub for research and innovation.", img: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&w=900&q=80" },
  { name: "Europe", flag: "🇪🇺", desc: "Wide-ranging programs across leading European institutions.", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80" },
  { name: "Germany", flag: "🇩🇪", desc: "Engineering and research-focused education in Germany.", img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=900&q=80" },
  { name: "New Zealand", flag: "🇳🇿", desc: "Quality education in a safe, student-friendly environment.", img: "https://images.unsplash.com/photo-1469521669194-babb45599def?auto=format&fit=crop&w=900&q=80" },
  { name: "United Kingdom", flag: "🇬🇧", desc: "Globally recognised degrees from historic UK universities.", img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=80" },
  { name: "United States", flag: "🇺🇸", desc: "A vast range of courses and campuses across the USA.", img: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=900&q=80" }
];

const SERVICES = [
  { icon: "🎯", title: "Career & Course Counselling", desc: "Help students understand course options according to their academic background and goals." },
  { icon: "🏛️", title: "University Selection", desc: "Assist students in exploring suitable university options." },
  { icon: "📝", title: "Application Assistance", desc: "Support students through the application preparation process." },
  { icon: "📄", title: "Documentation Guidance", desc: "Help students understand application-related documentation requirements." },
  { icon: "🛂", title: "Visa Guidance", desc: "Provide guidance around the student visa application process." },
  { icon: "🧳", title: "Pre-Departure Guidance", desc: "Help students prepare for their transition to studying abroad." }
];

const PROCESS_STEPS = [
  "Profile Assessment", "Course & University Selection", "Application Preparation",
  "Offer & Documentation", "Visa Guidance", "Pre-Departure Support"
];

const WHY_US = [
  { title: "Personalized Guidance", desc: "Advice shaped around each student's goals and background." },
  { title: "Destination Support", desc: "Clarity on options across multiple study destinations." },
  { title: "Course Guidance", desc: "Help narrowing down the right course and specialization." },
  { title: "Application Assistance", desc: "Support through each stage of the application process." },
  { title: "Student-Centric Approach", desc: "Guidance built around the student, not a one-size-fits-all process." },
  { title: "End-to-End Support", desc: "Support from first enquiry through to pre-departure." }
];

const UNIVERSITIES = [
  { name: "University of Sydney", country: "Australia", degree: "Master's", course: "Computer Science", programs: "Master of Computer Science, Master of Data Science", logo: "sydney.edu.au" },
  { name: "University of Melbourne", country: "Australia", degree: "Bachelor's", course: "Business", programs: "Bachelor of Commerce, Bachelor of Business", logo: "unimelb.edu.au" },
  { name: "York University", country: "Canada", degree: "Bachelor's", course: "Business", programs: "Bachelor of Commerce, Bachelor of Business Administration", logo: "yorku.ca" },
  { name: "University of Toronto", country: "Canada", degree: "Master's", course: "Data Science", programs: "Master of Data Science, Master of Management Analytics", logo: "utoronto.ca" },
  { name: "University of Manchester", country: "UK", degree: "Master's", course: "Engineering", programs: "MSc Mechanical Engineering, MSc Engineering Project Management", logo: "manchester.ac.uk" },
  { name: "Arizona State University", country: "USA", degree: "Master's", course: "Data Science", programs: "MS Data Science, MS Business Analytics", logo: "asu.edu" },
  { name: "RWTH Aachen University", country: "Germany", degree: "Bachelor's", course: "Engineering", programs: "BSc Mechanical Engineering, BSc Electrical Engineering", logo: "rwth-aachen.de" },
  { name: "Trinity College Dublin", country: "Ireland", degree: "Diploma", course: "Management", programs: "Professional Diploma in Management, Diploma in Business", logo: "tcd.ie" },
  { name: "University of Auckland", country: "New Zealand", degree: "Master's", course: "Computer Science", programs: "Master of Information Technology, Master of Data Science", logo: "auckland.ac.nz" }
];

const TESTIMONIALS = [
  { name: "Aarav Sharma", course: "Master's in Computer Science", uni: "United Kingdom", quote: "The guidance made a confusing process feel structured and manageable.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80" },
  { name: "Priya Nair", course: "Bachelor's in Business", uni: "Canada", quote: "I finally understood which course and university actually fit my goals.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80" },
  { name: "Rohan Mehta", course: "Master's in Data Science", uni: "Germany", quote: "Every step, from documents to visa guidance, was explained clearly.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80" },
  { name: "Ananya Kapoor", course: "Master's in Project Management", uni: "Australia", quote: "The team helped me compare my options and choose a course with confidence.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80" },
  { name: "Riyan Kainat", course: "Bachelor's in Engineering", uni: "Ireland", quote: "The application process felt much easier with clear, timely support at every stage.", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&q=80" },
  { name: "Meera Iyer", course: "Master's in Marketing", uni: "United States", quote: "I received practical advice that helped me prepare for my next step abroad.", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80" }
];
/* Placeholder testimonials — replace with verified student stories */

const FAQS = [
  { q: "What countries do you help students apply to?", a: "We assist students exploring opportunities across Australia, Canada, Ireland, Europe, Germany, New Zealand, UK and USA." },
  { q: "What documents are generally required?", a: "Requirements vary by university and country. Our counsellors will guide you through the specific documentation needed for your applications." },
  { q: "How do I choose the right course?", a: "We assess your academic background, interests and goals to help you explore suitable course options." },
  { q: "How do I choose a university?", a: "We help you compare universities based on your course interest, budget and preferences." },
  { q: "What is the application process?", a: "It generally includes profile assessment, course and university selection, application preparation, and submission of documentation." },
  { q: "Do you provide visa guidance?", a: "Yes, we provide guidance around the student visa application process." },
  { q: "When should I start my application?", a: "It's best to start as early as possible, ideally several months before your intended intake." },
  { q: "How can I book counselling?", a: "You can book a free counselling session through our contact page, WhatsApp, or by calling us directly." }
];

/* =====================================================
   HEADER: scroll state + mobile menu
===================================================== */
const header = document.getElementById("siteHeader");
const hamburger = document.getElementById("hamburger");
const drawer = document.getElementById("mobileDrawer");

function onScroll() {
  if (header) header.classList.toggle("scrolled", window.scrollY > 40);
  const backTop = document.getElementById("backTop");
  if (backTop) backTop.classList.toggle("show", window.scrollY > 500);
}
window.addEventListener("scroll", onScroll);
onScroll();

if (hamburger && drawer) {
  hamburger.addEventListener("click", () => {
    const open = drawer.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", open);
    document.body.classList.toggle("mobile-open", open);
  });
  drawer.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    drawer.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
    document.body.classList.remove("mobile-open");
  }));
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && drawer.classList.contains("open")) {
      drawer.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
      document.body.classList.remove("mobile-open");
      hamburger.focus();
    }
  });
}

/* =====================================================
   RENDER: destinations
===================================================== */
const destGrid = document.getElementById("destGrid");
if (destGrid) {
  destGrid.innerHTML = DESTINATIONS.map(d => `
    <a href="#contact" class="dest-card reveal">
      <img src="${d.img}" alt="${d.name}" loading="lazy">
      <div class="body">
        <h3>${d.name}</h3>
        <p>${d.desc}</p>
        <span class="explore">Explore ${d.name} →</span>
      </div>
    </a>`).join("");
}

/* =====================================================
   RENDER: services
===================================================== */
const servicesGrid = document.getElementById("servicesGrid");
if (servicesGrid) {
  servicesGrid.innerHTML = SERVICES.map(s => `
    <div class="service-card reveal">
      <div class="service-icon">${s.icon}</div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
      <a href="#contact" class="learn">Learn More →</a>
    </div>`).join("");
}

/* =====================================================
   RENDER: process timeline
===================================================== */
const timeline = document.getElementById("timeline");
if (timeline) {
  timeline.innerHTML = PROCESS_STEPS.map((step, i) => `
    <div class="timeline-step reveal">
      <div class="num">${String(i + 1).padStart(2, "0")}</div>
      <p>${step}</p>
    </div>`).join("");
}

/* =====================================================
   RENDER: why choose us
===================================================== */
const whyGrid = document.getElementById("whyGrid");
if (whyGrid) {
  whyGrid.innerHTML = WHY_US.map(w => `
    <div class="why-card reveal"><h3>${w.title}</h3><p>${w.desc}</p></div>`).join("");
}

/* =====================================================
   RENDER + FILTER: universities
===================================================== */
const uniGrid = document.getElementById("uniGrid");
const filterCountry = document.getElementById("filterCountry");
const filterCourse = document.getElementById("filterCourse");
const filterDegree = document.getElementById("filterDegree");

function renderUniversities() {
  if (!uniGrid) return;
  uniGrid.innerHTML = UNIVERSITIES.map(u => `
    <div class="uni-card reveal" data-country="${u.country}" data-degree="${u.degree}" data-course="${u.course}">
      <div class="logo-box"><img class="uni-logo" src="https://www.google.com/s2/favicons?domain=${u.logo}&sz=128" alt="${u.name} logo" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='block'"><span class="logo-fallback">${u.name.charAt(0)}</span></div>
      <div class="country">${u.country}</div>
      <h3>${u.name}</h3>
      <p class="programs">${u.programs}</p>
      <a href="#contact" class="btn btn-dark" style="padding:10px 20px;font-size:0.82rem;">View Details</a>
    </div>`).join("");
}

function populateFilters() {
  if (!filterCountry) return;
  const countries = [...new Set(UNIVERSITIES.map(u => u.country))];
  const courses = [...new Set(UNIVERSITIES.map(u => u.course))];
  filterCountry.innerHTML = `<option value="all">All Countries</option>` + countries.map(c => `<option>${c}</option>`).join("");
  filterCourse.innerHTML = `<option value="all">All Courses</option>` + courses.map(c => `<option>${c}</option>`).join("");
}

function applyFilters() {
  const country = filterCountry.value, degree = filterDegree.value, course = filterCourse.value;
  document.querySelectorAll(".uni-card").forEach(card => {
    const match = (country === "all" || card.dataset.country === country) &&
                  (degree === "all" || card.dataset.degree === degree) &&
                  (course === "all" || card.dataset.course === course);
    card.classList.toggle("hidden", !match);
  });
}

if (uniGrid) {
  populateFilters();
  renderUniversities();
  [filterCountry, filterDegree, filterCourse].forEach(f => f && f.addEventListener("change", applyFilters));
}

/* =====================================================
   RENDER + SLIDER: testimonials
===================================================== */
const testiTrack = document.getElementById("testiTrack");
const testiDots = document.getElementById("testiDots");
let testiIndex = 0;
let testiTimer;

if (testiTrack) {
  testiTrack.innerHTML = TESTIMONIALS.map(t => `
    <div class="testi-slide">
      <div class="testi-card">
        <img class="avatar" src="${t.image}" alt="${t.name}" loading="lazy">
        <div class="rating" aria-label="5 out of 5 stars">★★★★★</div>
        <blockquote>"${t.quote}"</blockquote>
        <div class="name">${t.name}</div>
        <div class="meta">${t.course} · ${t.uni}</div>
      </div>
    </div>`).join("");

  testiDots.innerHTML = TESTIMONIALS.map((_, i) => `<span class="dot${i === 0 ? " active" : ""}" data-i="${i}"></span>`).join("");

  function goToSlide(i) {
    testiIndex = (i + TESTIMONIALS.length) % TESTIMONIALS.length;
    testiTrack.style.transform = `translateX(-${testiIndex * 100}%)`;
    testiDots.querySelectorAll(".dot").forEach((d, di) => d.classList.toggle("active", di === testiIndex));
  }
  document.getElementById("testiPrev").addEventListener("click", () => { goToSlide(testiIndex - 1); resetAutoplay(); });
  document.getElementById("testiNext").addEventListener("click", () => { goToSlide(testiIndex + 1); resetAutoplay(); });
  testiDots.querySelectorAll(".dot").forEach(d => d.addEventListener("click", () => { goToSlide(+d.dataset.i); resetAutoplay(); }));

  function startAutoplay() { testiTimer = setInterval(() => goToSlide(testiIndex + 1), 5000); }
  function resetAutoplay() { clearInterval(testiTimer); startAutoplay(); }
  const testiSection = testiTrack.closest(".testimonials");
  testiSection.addEventListener("mouseenter", () => clearInterval(testiTimer));
  testiSection.addEventListener("mouseleave", startAutoplay);
  startAutoplay();
}

/* =====================================================
   RENDER: FAQ accordion
===================================================== */
const faqList = document.getElementById("faqList");
if (faqList) {
  faqList.innerHTML = FAQS.map((f, i) => `
    <div class="faq-item" data-i="${i}">
      <button class="faq-q" aria-expanded="false">${f.q}<span class="plus">+</span></button>
      <div class="faq-a"><p>${f.a}</p></div>
    </div>`).join("");

  faqList.querySelectorAll(".faq-item").forEach(item => {
    const btn = item.querySelector(".faq-q");
    const answer = item.querySelector(".faq-a");
    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      faqList.querySelectorAll(".faq-item.open").forEach(open => {
        open.classList.remove("open");
        open.querySelector(".faq-a").style.maxHeight = null;
        open.querySelector(".faq-q").setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        item.classList.add("open");
        answer.style.maxHeight = answer.scrollHeight + "px";
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });
}

/* =====================================================
   FOOTER destinations list
===================================================== */
const footerDest = document.getElementById("footerDest");
if (footerDest) {
  footerDest.innerHTML = DESTINATIONS.map(d => `<li><a href="#destinations">${d.name}</a></li>`).join("");
}

/* =====================================================
   WHATSAPP + PHONE CTA
===================================================== */
function buildWhatsappUrl() {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`;
}
document.querySelectorAll("#whatsappBtn, #ctaWhatsapp").forEach(btn => {
  if (btn) btn.href = buildWhatsappUrl();
});
const phoneDisplay = document.getElementById("phoneDisplay");
if (phoneDisplay) phoneDisplay.textContent = CONFIG.phone;

/* =====================================================
   BACK TO TOP
===================================================== */
const backTop = document.getElementById("backTop");
if (backTop) {
  backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* =====================================================
   FORM VALIDATION + SIMULATED SUBMISSION
===================================================== */
const form = document.getElementById("enquiryForm");
if (form) {
  const validators = {
    name: v => v.trim().length >= 2,
    email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
    phone: v => /^[+]?[\d\s-]{7,15}$/.test(v.trim())
  };

  function validateField(fieldEl, input, key) {
    const valid = validators[key](input.value);
    fieldEl.classList.toggle("invalid", !valid);
    return valid;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let allValid = true;
    form.querySelectorAll(".field[data-field]").forEach(fieldEl => {
      const key = fieldEl.dataset.field;
      const input = fieldEl.querySelector("input");
      if (!validateField(fieldEl, input, key)) allValid = false;
    });

    const status = document.getElementById("formStatus");
    if (!allValid) {
      status.className = "form-status show";
      status.style.background = "rgba(192,57,43,0.1)";
      status.style.color = "#C0392B";
      status.textContent = "Please fix the highlighted fields above.";
      return;
    }

    submitEnquiry({
      name: document.getElementById("fName").value,
      email: document.getElementById("fEmail").value,
      phone: document.getElementById("fPhone").value,
      country: document.getElementById("fCountry").value,
      qualification: document.getElementById("fQual").value,
      intake: document.getElementById("fIntake").value,
      course: document.getElementById("fCourse").value,
      message: document.getElementById("fMsg").value
    });
  });
}

async function submitEnquiry(data) {
  const btn = document.getElementById("submitBtn");
  const status = document.getElementById("formStatus");
  form.querySelector('[name="_subject"]').value = `New counselling enquiry from ${data.name}`;
  btn.textContent = "Sending...";
  btn.disabled = true;

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: new FormData(form)
    });
    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || "Form submission failed");
    }

    status.className = "form-status show success";
    status.textContent = "Thank you! Your enquiry has been sent successfully.";
    form.reset();
  } catch (error) {
    console.error("Enquiry submission failed:", error);
    status.className = "form-status show";
    status.style.background = "rgba(192,57,43,0.1)";
    status.style.color = "#C0392B";
    status.textContent = "Unable to send right now. Please try again or email riyankainat@gmail.com directly.";
  } finally {
    btn.textContent = "Submit Enquiry";
    btn.disabled = false;
  }
}

/* =====================================================
   SCROLL REVEAL
===================================================== */
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && revealItems.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealItems.forEach(el => io.observe(el));
} else {
  revealItems.forEach(el => el.classList.add("in-view"));
}

/* =====================================================
   ACTIVE NAV LINK (based on current page)
===================================================== */
const currentHash = window.location.hash || "#home";
document.querySelectorAll(".nav-links a").forEach(a => {
  a.classList.toggle("active", a.getAttribute("href") === currentHash);
});
