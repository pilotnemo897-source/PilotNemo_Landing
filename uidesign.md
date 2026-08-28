<!-- PilotNemo - Hero (Reference-Matched) -->
<!DOCTYPE html><html class="scroll-smooth" lang="en" style=""><head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<title>PilotNemo - Digital Product Studio</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700&amp;family=Space+Grotesk:wght@400;500&amp;family=Inter:wght@400&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "surface-container-low": "#f4f4f1",
                        "error": "#ba1a1a",
                        "surface-container": "#eeeeeb",
                        "surface-container-highest": "#e2e3e0",
                        "on-secondary": "#ffffff",
                        "on-error-container": "#93000a",
                        "inverse-primary": "#ffb690",
                        "on-primary-fixed": "#341100",
                        "on-primary": "#ffffff",
                        "architectural-line": "rgba(25, 25, 25, 0.12)",
                        "muted-text": "#929292",
                        "outline-variant": "#dcc1b5",
                        "surface-tint": "#9a460d",
                        "on-tertiary": "#ffffff",
                        "on-secondary-container": "#646468",
                        "tertiary-fixed": "#e3e2e4",
                        "primary-fixed": "#ffdbca",
                        "inverse-on-surface": "#f1f1ee",
                        "structural-bg": "#f5f5f2",
                        "error-container": "#ffdad6",
                        "on-error": "#ffffff",
                        "outline": "#897268",
                        "tech-accent": "#b85c24",
                        "surface-container-lowest": "#ffffff",
                        "surface": "#f9f9f6",
                        "glass-container": "rgba(32, 33, 36, 0.95)",
                        "secondary-fixed": "#e3e2e6",
                        "primary": "#98440b",
                        "surface-dim": "#dadad7",
                        "secondary-container": "#e3e2e6",
                        "surface-container-high": "#e8e8e5",
                        "background": "#f9f9f6",
                        "surface-bright": "#f9f9f6",
                        "primary-container": "#b85c24",
                        "inverse-surface": "#2f312f",
                        "tertiary-container": "#757577",
                        "on-tertiary-fixed-variant": "#464749",
                        "on-secondary-fixed": "#1a1b1e",
                        "tertiary-fixed-dim": "#c7c6c8",
                        "secondary": "#5e5e62",
                        "on-tertiary-fixed": "#1b1c1e",
                        "surface-variant": "#e2e3e0",
                        "on-surface-variant": "#55433a",
                        "on-background": "#1a1c1b",
                        "primary-fixed-dim": "#ffb690",
                        "on-tertiary-container": "#fffdff",
                        "on-primary-fixed-variant": "#783200",
                        "on-surface": "#1a1c1b",
                        "tertiary": "#5c5c5f",
                        "secondary-fixed-dim": "#c7c6ca",
                        "on-primary-container": "#fffeff",
                        "on-secondary-fixed-variant": "#46474a"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.125rem",
                        "lg": "0.25rem",
                        "xl": "0.5rem",
                        "full": "0.75rem"
                    },
                    "spacing": {
                        "gutter": "16px",
                        "container-max-width": "1440px",
                        "margin-desktop": "64px",
                        "unit": "8px",
                        "margin-mobile": "16px",
                        "grid-size": "16px"
                    },
                    "fontFamily": {
                        "headline-lg": ["Plus Jakarta Sans", "sans-serif"],
                        "label-technical": ["Space Grotesk", "monospace"],
                        "body-md": ["Inter", "sans-serif"],
                        "headline-md": ["Plus Jakarta Sans", "sans-serif"],
                        "display-lg": ["Plus Jakarta Sans", "sans-serif"],
                        "label-small": ["Space Grotesk", "monospace"],
                        "headline-lg-mobile": ["Plus Jakarta Sans", "sans-serif"],
                        "body-lg": ["Inter", "sans-serif"]
                    },
                    "fontSize": {
                        "headline-lg": ["60px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                        "label-technical": ["10px", { "lineHeight": "1", "letterSpacing": "0.1em", "fontWeight": "500" }],
                        "body-md": ["14px", { "lineHeight": "1.5", "fontWeight": "400" }],
                        "headline-md": ["32px", { "lineHeight": "1.3", "fontWeight": "600" }],
                        "display-lg": ["72px", { "lineHeight": "1.1", "letterSpacing": "-0.04em", "fontWeight": "700" }],
                        "label-small": ["10px", { "lineHeight": "1", "fontWeight": "400" }],
                        "headline-lg-mobile": ["32px", { "lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                        "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }]
                    }
                }
            }
        }
    </script>
<style>
        .architectural-grid {
            background-size: 16px 16px;
            background-image: 
                linear-gradient(to right, rgba(25, 25, 25, 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(25, 25, 25, 0.05) 1px, transparent 1px);
        }
    </style>
</head>
<body class="bg-structural-bg text-on-surface antialiased architectural-grid min-h-screen flex flex-col" style="background-color: rgb(255, 255, 255);">
<!-- TopNavBar -->
<nav class="bg-glass-container/80 backdrop-blur-md border-b border-architectural-line fixed top-0 w-full z-50 flex justify-between items-center px-margin-desktop py-4 mx-auto">
<div class="font-headline-md text-headline-md font-bold tracking-tighter text-on-surface dark:text-surface-bright">PILOTNEMO</div>
<!-- Web Nav -->
<div class="hidden md:flex gap-8 items-center font-label-technical text-label-technical">
<a class="text-on-surface-variant dark:text-muted-text hover:text-primary dark:hover:text-tech-accent transition-colors" href="#">Work</a>
<a class="text-on-surface-variant dark:text-muted-text hover:text-primary dark:hover:text-tech-accent transition-colors" href="#">Services</a>
<a class="text-on-surface-variant dark:text-muted-text hover:text-primary dark:hover:text-tech-accent transition-colors" href="#">Process</a>
<a class="text-on-surface-variant dark:text-muted-text hover:text-primary dark:hover:text-tech-accent transition-colors" href="#">Team</a>
</div>
<a class="hidden md:flex items-center px-6 py-3 border border-tech-accent/30 text-tech-accent font-label-technical text-label-technical hover:bg-black/5 transition-colors" href="#">START A PROJECT</a>
<!-- Mobile Nav Trigger (Visual Only) -->
<button class="md:hidden text-on-surface">
<span class="material-symbols-outlined">menu</span>
</button>
</nav>
<!-- Hero / Landing Section -->
<main class="flex-grow pb-16 px-margin-mobile md:px-margin-desktop max-w-container-max-width mx-auto w-full flex flex-col md:flex-row gap-12 lg:gap-24 relative overflow-hidden py-16 pt-24 items-center">
<!-- Left Content -->
<div class="w-full md:w-1/2 flex flex-col justify-center z-10">
<div class="mb-4">
<span class="font-label-technical text-label-technical text-tech-accent tracking-widest uppercase border border-tech-accent/20 px-3 py-1 bg-tech-accent/5">PILOTNEMO / DIGITAL PRODUCT STUDIO</span>
</div>
<h1 class="font-headline-lg-mobile text-headline-lg-mobile md:font-display-lg md:text-display-lg text-on-surface leading-tight mb-4">
                We build digital products that move businesses forward.
            </h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-8">
                From first idea to final product, we design, develop and grow digital experiences for modern businesses.
            </p>
<div class="flex flex-col sm:flex-row gap-4 mb-12">
<a class="inline-flex justify-center items-center px-8 py-4 text-on-primary font-label-technical text-label-technical tracking-widest hover:bg-on-surface transition-colors border border-architectural-line group bg-on-surface" href="#">
                    START A PROJECT
                    <span class="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform" style="font-variation-settings: &quot;FILL&quot; 0;">arrow_forward</span>
</a>
<a class="inline-flex justify-center items-center px-8 py-4 border border-outline text-on-surface font-label-technical text-label-technical tracking-widest hover:bg-surface-container-highest transition-colors" href="#">
                    VIEW OUR WORK
                </a>
</div>
<div class="flex items-center gap-4 mt-auto opacity-70">
<span class="font-label-small text-label-small uppercase tracking-widest text-muted-text">ONE TEAM. FROM IDEA TO SCALE.</span>
<div class="h-px bg-architectural-line flex-grow"></div>
</div>
</div><div class="w-full md:w-1/2 relative flex items-center justify-center min-h-[500px] md:min-h-0"><div class="relative w-full flex justify-center items-center"><img alt="Startup collaboration illustration" class="w-full h-auto max-w-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBocDIeKKP4gGz73JBQi5EaH2b8WeG-WN3JNxrc3Isg4TZk6pFnUZ611W0zYDMgiXFYpsuZjQ6R1MPjA96Oxa3wEAiEBByzJunntanLkYYDv5eHPHJOKSdnCPVQEIYO-uuWqMgPATWKg3DpBkGmkzrbhm5RLiMvuc1vvpGj_lmFH8IsXrdETpXoZxpSW6XCjXpH5HVM-saFhyBQxJ36x-UnXBoDgSkPg833FhYbk4X_Yz0ZfjCVQsVjFPM1BQaGB7e7vlEeH58NngS2UOk"></div></div>
<!-- Right Visual - Composition -->
</main>
<!-- Bottom Info Strip -->
<div class="border-t border-architectural-line bg-surface py-6 px-margin-mobile md:px-margin-desktop w-full">
<div class="max-w-container-max-width mx-auto flex flex-wrap justify-between items-center gap-4">
<span class="font-label-technical text-label-technical text-on-surface-variant tracking-widest">01 — STRATEGY</span>
<span class="hidden md:inline-block h-4 w-px bg-architectural-line"></span>
<span class="font-label-technical text-label-technical text-on-surface-variant tracking-widest">02 — DESIGN</span>
<span class="hidden md:inline-block h-4 w-px bg-architectural-line"></span>
<span class="font-label-technical text-label-technical text-on-surface-variant tracking-widest">03 — DEVELOPMENT</span>
<span class="hidden md:inline-block h-4 w-px bg-architectural-line"></span>
<span class="font-label-technical text-label-technical text-on-surface-variant tracking-widest">04 — LAUNCH</span>
<span class="hidden md:inline-block h-4 w-px bg-architectural-line"></span>
<span class="font-label-technical text-label-technical text-on-surface-variant tracking-widest">05 — GROWTH</span>
</div>
</div>




</body></html>

<!-- PilotNemo - About (Reference-Matched) -->
<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Aether Architectural - About Us</title>
<!-- Font Setup -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
          },
          colors: {
            brand: {
              surface: '#f9f9f6',
              dim: '#dadad7',
              dark: '#2d2d2d',
              primary: '#b85c24',
              border: '#e5e5e5'
            }
          },
          gridTemplateColumns: {
            'stats': 'repeat(auto-fit, minmax(140px, 1fr))',
            'process': 'repeat(auto-fit, minmax(200px, 1fr))',
            'expertise': 'repeat(auto-fit, minmax(300px, 1fr))'
          }
        }
      }
    }
  </script>
<!-- Custom Styles -->
<style data-purpose="layout-styles">
    body {
      background-color: theme('colors.brand.surface');
      color: theme('colors.brand.dark');
    }
    
    .tech-grid-bg {
      position: relative;
    }
    .tech-grid-bg::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background-image: 
        linear-gradient(to right, theme('colors.brand.border') 1px, transparent 1px),
        linear-gradient(to bottom, theme('colors.brand.border') 1px, transparent 1px);
      background-size: 40px 40px;
      opacity: 0.15;
      z-index: -1;
      pointer-events: none;
    }

    .tech-border-t { border-top: 1px solid theme('colors.brand.border'); }
    .tech-border-b { border-bottom: 1px solid theme('colors.brand.border'); }
    .tech-border-l { border-left: 1px solid theme('colors.brand.border'); }
    .tech-border-r { border-right: 1px solid theme('colors.brand.border'); }

    /* Crosshair markers */
    .crosshair {
      position: relative;
    }
    .crosshair::before, .crosshair::after {
      content: '';
      position: absolute;
      background-color: theme('colors.brand.border');
    }
    .crosshair-tl::before { top: -5px; left: -1px; width: 3px; height: 11px; }
    .crosshair-tl::after { top: -1px; left: -5px; width: 11px; height: 3px; }
  </style>
<!-- Lucide Icons -->
<script src="https://unpkg.com/lucide@latest"></script>
</head>
<body class="antialiased min-h-screen tech-grid-bg font-sans selection:bg-brand-primary selection:text-white">
<!-- BEGIN: Main Container -->
<main class="max-w-6xl mx-auto px-6 py-16 md:py-24 relative">
<!-- Crosshair Top Left -->
<div aria-hidden="true" class="crosshair crosshair-tl absolute top-16 left-6"></div>
<!-- BEGIN: Header Section -->
<header class="mb-16 md:mb-24 flex flex-col md:flex-row md:items-start justify-between gap-12 relative z-10">
<div class="max-w-3xl">
<div class="inline-block px-3 py-1 bg-[#f4ece4] text-brand-primary text-xs font-bold tracking-widest uppercase mb-8 border border-[#e8d5c4]">
          02 / ABOUT US
        </div>
<h1 class="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-[#1a1a1a] mb-6">
          Architecting the digital frontier.
        </h1>
<p class="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl font-medium">
          We are a collective of digital architects, engineers, and strategists. We believe in building robust, high-performance systems that drive measurable growth and define industry standards.
        </p>
</div>
<!-- Quick Stats Sidebar -->
<aside class="md:w-72 pt-8 tech-border-l pl-8 space-y-6">
<div class="flex items-center gap-4">
<i class="w-5 h-5 text-brand-primary" data-lucide="users"></i>
<span class="text-xs font-bold tracking-widest uppercase text-gray-800">45+ DIGITAL SPECIALISTS</span>
</div>
<div class="flex items-center gap-4">
<i class="w-5 h-5 text-brand-primary" data-lucide="globe"></i>
<span class="text-xs font-bold tracking-widest uppercase text-gray-800">GLOBAL OPERATIONAL REACH</span>
</div>
<div class="flex items-center gap-4">
<i class="w-5 h-5 text-brand-primary" data-lucide="activity"></i>
<span class="text-xs font-bold tracking-widest uppercase text-gray-800">10+ YEARS OF EXCELLENCE</span>
</div>
<div class="flex items-center gap-4">
<i class="w-5 h-5 text-brand-primary" data-lucide="award"></i>
<span class="text-xs font-bold tracking-widest uppercase text-gray-800">AWARD-WINNING SOLUTIONS</span>
</div>
</aside>
</header>
<!-- END: Header Section -->
<!-- BEGIN: Overview & Mission Section -->
<section class="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 relative">
<div aria-hidden="true" class="absolute left-0 -top-8 w-full tech-border-t"></div>
<div aria-hidden="true" class="absolute left-0 -top-2 w-full tech-border-t"></div>
<!-- Left: Company Overview & Big Stats -->
<div class="lg:col-span-7 pt-4">
<p class="text-lg text-gray-700 leading-relaxed mb-12">
          PilotNemo is a premier digital growth &amp; IT engineering partner. We combine technology, strategy, and design to elevate market leaders. 250+ projects delivered, 99% client satisfaction, 10+ years of industry experience.
        </p>
<div class="grid grid-cols-stats gap-4">
<!-- Stat 1 -->
<div class="bg-white p-6 border border-brand-border flex flex-col justify-center">
<div class="text-4xl font-bold text-brand-primary mb-2">$50M+</div>
<div class="text-[10px] uppercase tracking-widest font-bold text-gray-500 leading-tight">CLIENT REVENUE<br/>GENERATED</div>
</div>
<!-- Stat 2 -->
<div class="bg-white p-6 border border-brand-border flex flex-col justify-center">
<div class="text-4xl font-bold text-brand-primary mb-2">250+</div>
<div class="text-[10px] uppercase tracking-widest font-bold text-gray-500 leading-tight">ENTERPRISE PROJECTS</div>
</div>
<!-- Stat 3 -->
<div class="bg-white p-6 border border-brand-border flex flex-col justify-center">
<div class="text-4xl font-bold text-brand-primary mb-2">99.8%</div>
<div class="text-[10px] uppercase tracking-widest font-bold text-gray-500 leading-tight">ON-TIME SPRINT DELIVERY</div>
</div>
<!-- Stat 4 -->
<div class="bg-white p-6 border border-brand-border flex flex-col justify-center">
<div class="text-4xl font-bold text-brand-primary mb-2">100%</div>
<div class="text-[10px] uppercase tracking-widest font-bold text-gray-500 leading-tight">CODE TRANSFERRED</div>
</div>
</div>
</div>
<!-- Right: Mission Statement Block -->
<div class="lg:col-span-5 relative">
<div class="bg-brand-dark text-white p-10 h-full flex flex-col shadow-xl">
<!-- Top Bar in dark widget -->
<div class="flex justify-between items-center mb-8 border-b border-gray-700 pb-4">
<span class="text-[10px] font-bold tracking-widest uppercase text-gray-400">OUR.MISSION</span>
<div class="flex gap-1">
<div class="w-1.5 h-1.5 rounded-full bg-brand-primary"></div>
<div class="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
<div class="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
</div>
</div>
<p class="text-xl font-medium leading-snug mb-12 text-gray-100 flex-grow">
             To engineer digital experiences that transcend the ordinary. We aim to empower businesses with technological infrastructure that is not just functional, but transformative.
           </p>
<!-- Target Output Box -->
<div class="border border-gray-700 bg-[#363636] p-6">
<div class="text-[10px] font-bold tracking-widest uppercase text-brand-primary mb-2">TARGET OUTPUT</div>
<div class="text-2xl font-bold text-white">100% Innovation Drive</div>
</div>
</div>
</div>
</section>
<!-- END: Overview & Mission Section -->
<!-- BEGIN: Technical Process Section -->
<section class="mb-24 relative">
<div aria-hidden="true" class="absolute left-0 -top-12 w-full tech-border-t"></div>
<!-- Section Header -->
<div class="flex justify-between items-center mb-6 pb-2 tech-border-b">
<h2 class="text-[10px] font-bold tracking-widest uppercase text-gray-800">TECHNICAL PROCESS</h2>
<span class="text-[10px] font-bold tracking-widest text-gray-400">EXEC.SEQ</span>
</div>
<div class="grid grid-cols-process gap-6">
<!-- Step 01 -->
<div class="bg-white p-6 border border-brand-border h-40 flex flex-col justify-between hover:shadow-md transition-shadow">
<div class="text-xs font-bold tracking-widest uppercase text-brand-primary">01 / ARCHITECTURE</div>
<p class="text-sm text-gray-700 font-medium">Systems design and infrastructure planning.</p>
</div>
<!-- Step 02 -->
<div class="bg-white p-6 border border-brand-border h-40 flex flex-col justify-between hover:shadow-md transition-shadow">
<div class="text-xs font-bold tracking-widest uppercase text-brand-primary">02 / ENGINEERING</div>
<p class="text-sm text-gray-700 font-medium">High-performance code and agile execution.</p>
</div>
<!-- Step 03 -->
<div class="bg-white p-6 border border-brand-border h-40 flex flex-col justify-between hover:shadow-md transition-shadow">
<div class="text-xs font-bold tracking-widest uppercase text-brand-primary">03 / OPTIMIZATION</div>
<p class="text-sm text-gray-700 font-medium">Performance tuning and security hardening.</p>
</div>
<!-- Step 04 -->
<div class="bg-white p-6 border border-brand-border h-40 flex flex-col justify-between hover:shadow-md transition-shadow">
<div class="text-xs font-bold tracking-widest uppercase text-brand-primary">04 / GROWTH</div>
<p class="text-sm text-gray-700 font-medium">Scalability and continuous evolution.</p>
</div>
</div>
</section>
<!-- END: Technical Process Section -->
<!-- BEGIN: Industry Expertise Section -->
<section class="mb-32 relative">
<!-- Section Header -->
<div class="flex justify-between items-center mb-6 pb-2 tech-border-b">
<h2 class="text-[10px] font-bold tracking-widest uppercase text-gray-800">INDUSTRY EXPERTISE</h2>
<span class="text-[10px] font-bold tracking-widest text-gray-400">SECTOR.MAP</span>
</div>
<div class="grid grid-cols-expertise gap-6">
<!-- Expertise 1 -->
<div class="bg-[#2d2d2d] text-white p-8 group hover:bg-[#363636] transition-colors relative overflow-hidden">
<i class="absolute top-4 right-4 w-6 h-6 text-brand-primary opacity-50 group-hover:opacity-100 transition-opacity" data-lucide="building-2"></i>
<h3 class="text-2xl font-bold mb-3 mt-4">Fintech &amp; Digital Banking</h3>
<p class="text-gray-400 text-sm font-medium">Secure, scalable financial infrastructure.</p>
</div>
<!-- Expertise 2 -->
<div class="bg-[#2d2d2d] text-white p-8 group hover:bg-[#363636] transition-colors relative overflow-hidden">
<i class="absolute top-4 right-4 w-6 h-6 text-brand-primary opacity-50 group-hover:opacity-100 transition-opacity" data-lucide="activity-square"></i>
<h3 class="text-2xl font-bold mb-3 mt-4">Healthcare Technology</h3>
<p class="text-gray-400 text-sm font-medium">Compliant data systems and patient portals.</p>
</div>
<!-- Expertise 3 -->
<div class="bg-[#2d2d2d] text-white p-8 group hover:bg-[#363636] transition-colors relative overflow-hidden">
<i class="absolute top-4 right-4 w-6 h-6 text-brand-primary opacity-50 group-hover:opacity-100 transition-opacity" data-lucide="building"></i>
<h3 class="text-2xl font-bold mb-3 mt-4">Enterprise SaaS</h3>
<p class="text-gray-400 text-sm font-medium">Cloud-native architectures for scale.</p>
</div>
<!-- Expertise 4 -->
<div class="bg-[#2d2d2d] text-white p-8 group hover:bg-[#363636] transition-colors relative overflow-hidden">
<i class="absolute top-4 right-4 w-6 h-6 text-brand-primary opacity-50 group-hover:opacity-100 transition-opacity" data-lucide="shopping-cart"></i>
<h3 class="text-2xl font-bold mb-3 mt-4">E-commerce Architecture</h3>
<p class="text-gray-400 text-sm font-medium">High-volume transactional platforms.</p>
</div>
</div>
</section>
<!-- END: Industry Expertise Section -->
<!-- BEGIN: Call to Action -->
<section class="text-center relative py-12">
<div aria-hidden="true" class="absolute left-0 top-0 w-full tech-border-t"></div>
<div aria-hidden="true" class="absolute right-0 top-[-6px] w-3 h-3 text-brand-border">+</div>
<h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-8">Ready to architect your next digital frontier?</h2>
<a class="inline-flex items-center gap-3 bg-brand-primary hover:bg-[#a04e1d] text-white px-8 py-4 text-sm font-bold tracking-wider uppercase transition-colors" href="#">
         START A PROJECT
         <i class="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</section>
<!-- END: Call to Action -->
</main>
<!-- END: Main Container -->
<!-- Initialize Icons -->
<script data-purpose="icon-initialization">
    lucide.createIcons();
  </script>
</body></html>

<!-- PilotNemo - Services (All Visuals Upgraded) -->
<!DOCTYPE html><html lang="en" style=""><head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<title>PilotNemo - Services Architecture</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700&amp;family=Space+Grotesk:wght@400;500;600&amp;family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                            "surface-container-low": "#f4f4f1",
                            "error": "#ba1a1a",
                            "surface-container": "#eeeeeb",
                            "surface-container-highest": "#e2e3e0",
                            "on-secondary": "#ffffff",
                            "on-error-container": "#93000a",
                            "inverse-primary": "#ffb690",
                            "on-primary-fixed": "#341100",
                            "on-primary": "#ffffff",
                            "architectural-line": "rgba(25, 25, 25, 0.12)",
                            "muted-text": "#929292",
                            "outline-variant": "#dcc1b5",
                            "surface-tint": "#9a460d",
                            "on-tertiary": "#ffffff",
                            "on-secondary-container": "#646468",
                            "tertiary-fixed": "#e3e2e4",
                            "primary-fixed": "#ffdbca",
                            "inverse-on-surface": "#f1f1ee",
                            "structural-bg": "#f5f5f2",
                            "error-container": "#ffdad6",
                            "on-error": "#ffffff",
                            "outline": "#897268",
                            "tech-accent": "#b85c24",
                            "surface-container-lowest": "#ffffff",
                            "surface": "#f9f9f6",
                            "glass-container": "rgba(32, 33, 36, 0.95)",
                            "secondary-fixed": "#e3e2e6",
                            "primary": "#98440b",
                            "surface-dim": "#dadad7",
                            "secondary-container": "#e3e2e6",
                            "surface-container-high": "#e8e8e5",
                            "background": "#f9f9f6",
                            "surface-bright": "#f9f9f6",
                            "primary-container": "#b85c24",
                            "inverse-surface": "#2f312f",
                            "tertiary-container": "#757577",
                            "on-tertiary-fixed-variant": "#464749",
                            "on-secondary-fixed": "#1a1b1e",
                            "tertiary-fixed-dim": "#c7c6c8",
                            "secondary": "#5e5e62",
                            "on-tertiary-fixed": "#1b1c1e",
                            "surface-variant": "#e2e3e0",
                            "on-surface-variant": "#55433a",
                            "on-background": "#1a1c1b",
                            "primary-fixed-dim": "#ffb690",
                            "on-tertiary-container": "#fffdff",
                            "on-primary-fixed-variant": "#783200",
                            "on-surface": "#1a1c1b",
                            "tertiary": "#5c5c5f",
                            "secondary-fixed-dim": "#c7c6ca",
                            "on-primary-container": "#fffeff",
                            "on-secondary-fixed-variant": "#46474a"
                    },
                    "borderRadius": {
                            "DEFAULT": "0.125rem",
                            "lg": "0.25rem",
                            "xl": "0.5rem",
                            "full": "0.75rem"
                    },
                    "spacing": {
                            "gutter": "16px",
                            "container-max-width": "1440px",
                            "margin-desktop": "64px",
                            "unit": "8px",
                            "margin-mobile": "16px",
                            "grid-size": "16px"
                    },
                    "fontFamily": {
                            "headline-lg": ["Plus Jakarta Sans"],
                            "label-technical": ["Space Grotesk"],
                            "body-md": ["Inter"],
                            "headline-md": ["Plus Jakarta Sans"],
                            "display-lg": ["Plus Jakarta Sans"],
                            "label-small": ["Space Grotesk"],
                            "headline-lg-mobile": ["Plus Jakarta Sans"],
                            "body-lg": ["Inter"]
                    },
                    "fontSize": {
                            "headline-lg": ["60px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                            "label-technical": ["10px", {"lineHeight": "1", "letterSpacing": "0.1em", "fontWeight": "500"}],
                            "body-md": ["14px", {"lineHeight": "1.5", "fontWeight": "400"}],
                            "headline-md": ["32px", {"lineHeight": "1.3", "fontWeight": "600"}],
                            "display-lg": ["72px", {"lineHeight": "1.1", "letterSpacing": "-0.04em", "fontWeight": "700"}],
                            "label-small": ["10px", {"lineHeight": "1", "fontWeight": "400"}],
                            "headline-lg-mobile": ["32px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                            "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}]
                    }
                }
            }
        }
    </script>
<style>
        .architectural-grid {
            background-image: 
                linear-gradient(to right, rgba(25, 25, 25, 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(25, 25, 25, 0.05) 1px, transparent 1px);
            background-size: 16px 16px;
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        [data-weight="fill"] {
            font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .glass-panel {
            background: rgba(32, 33, 36, 0.95);
            border: 1px solid rgba(255, 255, 255, 0.12);
        }
    </style>
</head>
<body class="bg-structural-bg architectural-grid min-h-screen text-on-surface antialiased">
<!-- TopNavBar -->
<nav class="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max-width mx-auto bg-glass-container/80 backdrop-blur-md border-b border-architectural-line">
<div class="font-headline-md text-headline-md font-bold tracking-tighter text-on-surface dark:text-surface-bright">PILOTNEMO</div>
<ul class="hidden md:flex gap-8 items-center">
<li class=""><a class="font-label-technical text-label-technical text-on-surface-variant dark:text-muted-text hover:text-primary dark:hover:text-tech-accent transition-colors" href="#">Work</a></li>
<li class=""><a class="font-label-technical text-label-technical text-primary dark:text-tech-accent border-b border-primary hover:text-primary dark:hover:text-tech-accent transition-colors opacity-80 scale-95 transition-all" href="#">Services</a></li>
<li class=""><a class="font-label-technical text-label-technical text-on-surface-variant dark:text-muted-text hover:text-primary dark:hover:text-tech-accent transition-colors" href="#">Process</a></li>
<li class=""><a class="font-label-technical text-label-technical text-on-surface-variant dark:text-muted-text hover:text-primary dark:hover:text-tech-accent transition-colors" href="#">Team</a></li>
</ul>
<button class="hidden md:block font-label-technical text-label-technical px-4 py-2 border border-tech-accent/30 text-primary hover:bg-black/5 transition-colors">START A PROJECT</button>
<button class="md:hidden"><span class="material-symbols-outlined text-on-surface">menu</span></button>
</nav>
<!-- Main Content -->
<main class="pt-[100px] pb-24 max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
<!-- Header Section -->
<header class="py-16 md:py-24 border-b border-architectural-line relative">
<span class="absolute top-0 left-0 w-[10px] h-[10px] flex items-center justify-center text-[10px] text-muted-text transform -translate-x-1/2 -translate-y-1/2 bg-structural-bg"><span class="material-symbols-outlined text-[10px]">add</span></span>
<div class="font-label-technical text-label-technical text-tech-accent mb-6 tracking-widest uppercase">02 / WHAT WE DO</div>
<h1 class="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface mb-8 max-w-3xl">One team. Multiple digital capabilities.</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">From product design to development and digital growth, PilotNemo brings the essential capabilities together in one connected workflow.</p>
</header>
<!-- Services Grid -->
<section class="py-16 relative">
<span class="absolute top-0 right-0 w-[10px] h-[10px] flex items-center justify-center text-[10px] text-muted-text transform translate-x-1/2 -translate-y-1/2 bg-structural-bg"><span class="material-symbols-outlined text-[10px]">add</span></span>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
<!-- Card 1 -->
<div class="glass-panel p-6 flex flex-col h-full relative group transition-transform hover:-translate-y-1 min-h-[500px]"><div class="mb-8"><img alt="Mobile App Development Illustration" class="w-full h-auto opacity-80 group-hover:opacity-100 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-CW9PvBjim5Jb3O9hDJvHjdNdMaNrQ39j7tkmSX1az-kErHtiqYqRyZF0kTa-B5Len6W61hvHOUe1HcUXEbsJvtSYfAIihzjJLXDL-AU_9yjUHBdJFyf-ltXta0IzyZHoWWF2Gk-xiGIA5G42_KokGtxKDKnOuLl2--7I9XBGBZ_Q3b3h3raEsRRVNCjR-Fvw-Sooj0NAXeei0bGWsx836PyEyAZfxp1QnPmfV1SK3ipfiz7WrCT_VPXJ78sQbiH-K_QBrnGe2Wv-MS4"></div><div class="mt-auto"><h3 class="font-headline-md text-headline-md text-white mb-4 text-[24px]">Mobile App Development</h3><p class="font-body-md text-body-md text-gray-400 mb-8">Native and cross-platform mobile solutions engineered for performance, scale, and intuitive user experiences.</p><div class="flex flex-wrap gap-2"><span class="font-label-technical text-label-technical px-2 py-1 border border-white/10 text-gray-300 bg-white/5 rounded-DEFAULT">iOS</span><span class="font-label-technical text-label-technical px-2 py-1 border border-white/10 text-gray-300 bg-white/5 rounded-DEFAULT">Android</span><span class="font-label-technical text-label-technical px-2 py-1 border border-white/10 text-gray-300 bg-white/5 rounded-DEFAULT">Flutter</span><span class="font-label-technical text-label-technical px-2 py-1 border border-white/10 text-gray-300 bg-white/5 rounded-DEFAULT">React Native</span><span class="font-label-technical text-label-technical px-2 py-1 border border-white/10 text-gray-300 bg-white/5 rounded-DEFAULT">Swift</span></div></div></div>
<!-- Card 2 -->
<div class="glass-panel p-6 flex flex-col h-full relative group transition-transform hover:-translate-y-1 min-h-[500px]"><div class="mb-8"><img alt="Web Development Illustration" class="w-full h-auto opacity-80 group-hover:opacity-100 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrkX_7bkg9_solx9tD8vBo4CvqYwY38CXOo_s8rY5Pkmegff4LYawT0-sKelerngWo8cKXAaD3OE8rXIXPIJcrXxW-8D9UyXoMqzB5SlvhCMrPDMqrtSRoMJ87gXPtaeg6AeXdq9Dheewc-N08BDqtRtHJ5kMZN2fP8iD9pCATWLWy2ZCrjb2WxrMscMaeJE6McXbCQwaVJwkRwlvvu2CweKMFOuIrt2xL7XqZkp9QTnvbiWFfFdBNSOV2pM7GbwsffJgcQQrQHb8WxNM"></div><div class="mt-auto"><h3 class="font-headline-md text-headline-md text-white mb-4 text-[24px]">Web Development</h3><p class="font-body-md text-body-md text-gray-400 mb-8">Robust, scalable web applications and enterprise platforms built with modern tech stacks and architectural best practices.</p><div class="flex flex-wrap gap-2"><span class="font-label-technical text-label-technical px-2 py-1 border border-white/10 text-gray-300 bg-white/5 rounded-DEFAULT">React</span><span class="font-label-technical text-label-technical px-2 py-1 border border-white/10 text-gray-300 bg-white/5 rounded-DEFAULT">Node.js</span><span class="font-label-technical text-label-technical px-2 py-1 border border-white/10 text-gray-300 bg-white/5 rounded-DEFAULT">Next.js</span><span class="font-label-technical text-label-technical px-2 py-1 border border-white/10 text-gray-300 bg-white/5 rounded-DEFAULT">Python</span><span class="font-label-technical text-label-technical px-2 py-1 border border-white/10 text-gray-300 bg-white/5 rounded-DEFAULT">AWS</span></div></div></div>
<!-- Card 3 -->
<div class="glass-panel p-6 flex flex-col h-full relative group transition-transform hover:-translate-y-1 min-h-[500px]"><div class="mb-8"><img alt="UI/UX Design Illustration" class="w-full h-auto opacity-80 group-hover:opacity-100 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_8NMmc43kqG7A8jn-f-uRvdaPDQJqT9RGQZ22orzZPQ7S-RpIEmXmolyatwBxgM-H1TMA6ZcCk27TqDWVlDwon-A2zyAHBkECjKRI8JnQU1XwmRUjdbbJLAt1lo7drAWaSwvYoobA2Se8UHsgtQwNSGV4-R9M_Rw2TpsVVUjMvLOwyYrU5MIW9lS59nFRivm3mAMCuDCg8pAPsO8DnQDmiclIccSiQ6QbTziYnH2YjwjlXq08pxAxBYl5pODE6J8q6yYwAXSyO2TCnAY"></div><div class="mt-auto"><h3 class="font-headline-md text-headline-md text-white mb-4 text-[24px]">UI/UX Design</h3><p class="font-body-md text-body-md text-gray-400 mb-8">User-centric interface design and experience mapping that drives engagement and simplifies complex workflows.</p><div class="flex flex-wrap gap-2"><span class="font-label-technical text-label-technical px-2 py-1 border border-white/10 text-gray-300 bg-white/5 rounded-DEFAULT">Wireframes</span><span class="font-label-technical text-label-technical px-2 py-1 border border-white/10 text-gray-300 bg-white/5 rounded-DEFAULT">Prototyping</span><span class="font-label-technical text-label-technical px-2 py-1 border border-white/10 text-gray-300 bg-white/5 rounded-DEFAULT">Figma</span><span class="font-label-technical text-label-technical px-2 py-1 border border-white/10 text-gray-300 bg-white/5 rounded-DEFAULT">User Testing</span><span class="font-label-technical text-label-technical px-2 py-1 border border-white/10 text-gray-300 bg-white/5 rounded-DEFAULT">Design Systems</span></div></div></div>
<!-- Card 4 -->
<div class="glass-panel p-6 flex flex-col h-full relative group transition-transform hover:-translate-y-1 min-h-[500px]"><div class="mb-8"><img alt="Digital Marketing Illustration" class="w-full h-auto opacity-80 group-hover:opacity-100 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA45OBCBm564L0zsvporIiYAgAScylxARv16qtNcm22GhBOftkmAtwWYsX5P86m0bZAUTtg6Kd-boo7WzCZZC-qKJS7aZ8Qdv-oPJ3J2s3WvSSpOCT6fBx4VJ5i1Op8Fdw2zv6wSIxsPmIOQTc68Ir-7JEauFx3_LqsqxDyHpwvWqhMPzzXrgrya7rBbZVxQZSppaWRU5MPudg_K8znZQvi7xpnHJWRcApzuY50FBUbUuvIRvAF_9TH3cAPzE_dhS9XcBHLNQNMmTD1ihM"></div><div class="mt-auto"><h3 class="font-headline-md text-headline-md text-white mb-4 text-[24px]">Digital Marketing</h3><p class="font-body-md text-body-md text-gray-400 mb-8">Data-driven acquisition strategies, performance marketing, and conversion optimization to fuel sustainable growth.</p><div class="flex flex-wrap gap-2"><span class="font-label-technical text-label-technical px-2 py-1 border border-white/10 text-gray-300 bg-white/5 rounded-DEFAULT">SEO</span><span class="font-label-technical text-label-technical px-2 py-1 border border-white/10 text-gray-300 bg-white/5 rounded-DEFAULT">PPC</span><span class="font-label-technical text-label-technical px-2 py-1 border border-white/10 text-gray-300 bg-white/5 rounded-DEFAULT">Analytics</span><span class="font-label-technical text-label-technical px-2 py-1 border border-white/10 text-gray-300 bg-white/5 rounded-DEFAULT">Content</span><span class="font-label-technical text-label-technical px-2 py-1 border border-white/10 text-gray-300 bg-white/5 rounded-DEFAULT">CRO</span></div></div></div>
<!-- Card 5 -->
<div class="glass-panel p-6 flex flex-col h-full relative group transition-transform hover:-translate-y-1 min-h-[500px]"><div class="mb-8"><img alt="Branding &amp; Creative Illustration" class="w-full h-auto opacity-80 group-hover:opacity-100 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjCV_UEYyVTFVwCHY8JYU4LpK7pST95317pC-_w4i6VfwuCnqm4M1jswTRExhwCEzRqwgOpi4kJ7t_Ba4TNMjf1QGJYJlcHkxNX8XH_w58ujTZBkLv9HLggZbkc2_vcDTtdi9j7ukSD2ML4sOb196yPVWxcpiW0BGJADHoQHA6h3IINdnI2hSwcxKeEUvQ8i3Tw6OI0t7lgThfjYnexiva4MjXrBVSHuV3AWMO1dpvlMiEZmnWUxgH5r03PLWwGKzfSL1MukACklSMbtc"></div><div class="mt-auto"><h3 class="font-headline-md text-headline-md text-white mb-4 text-[24px]">Branding &amp; Creative</h3><p class="font-body-md text-body-md text-gray-400 mb-8">Strategic brand identity development, visual language systems, and compelling creative direction for digital touchpoints.</p><div class="flex flex-wrap gap-2"><span class="font-label-technical text-label-technical px-2 py-1 border border-white/10 text-gray-300 bg-white/5 rounded-DEFAULT">Identity</span><span class="font-label-technical text-label-technical px-2 py-1 border border-white/10 text-gray-300 bg-white/5 rounded-DEFAULT">Guidelines</span><span class="font-label-technical text-label-technical px-2 py-1 border border-white/10 text-gray-300 bg-white/5 rounded-DEFAULT">Motion</span><span class="font-label-technical text-label-technical px-2 py-1 border border-white/10 text-gray-300 bg-white/5 rounded-DEFAULT">3D</span><span class="font-label-technical text-label-technical px-2 py-1 border border-white/10 text-gray-300 bg-white/5 rounded-DEFAULT">Copywriting</span></div></div></div>
<!-- Card 6 -->
<div class="glass-panel p-6 flex flex-col h-full relative group transition-transform hover:-translate-y-1 min-h-[500px]"><div class="mb-8"><img alt="Custom Software Illustration" class="w-full h-auto opacity-80 group-hover:opacity-100 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTa4kdOzZBanGuZ4Ti97kSV8Q2BtcKzCoM52WCbq8bQeS35TYozSfo6U9v92Unfg49b_BUe452mS5EInFRjm14vWUn5FVBxruaOaSTobQYHmfsF_WoyRyLh-pJ8gP1O3p0Y6pw5_bOZnVr-FpFej294ezibNGhT5CNfHZHKPfdgGiNQvekY3b6kv0wcm2FL31tacb2uPE466wTaf58QRvIMXrAS34PO3eh-MhJ6UzdOQf4khelSSF7Wk11ATapRxSUwo5L_Osw4yPiaLI"></div><div class="mt-auto"><h3 class="font-headline-md text-headline-md text-white mb-4 text-[24px]">Custom Software</h3><p class="font-body-md text-body-md text-gray-400 mb-8">Bespoke software architecture, legacy system modernization, and specialized technical solutions for unique business challenges.</p><div class="flex flex-wrap gap-2"><span class="font-label-technical text-label-technical px-2 py-1 border border-white/10 text-gray-300 bg-white/5 rounded-DEFAULT">SaaS</span><span class="font-label-technical text-label-technical px-2 py-1 border border-white/10 text-gray-300 bg-white/5 rounded-DEFAULT">APIs</span><span class="font-label-technical text-label-technical px-2 py-1 border border-white/10 text-gray-300 bg-white/5 rounded-DEFAULT">Microservices</span><span class="font-label-technical text-label-technical px-2 py-1 border border-white/10 text-gray-300 bg-white/5 rounded-DEFAULT">DevOps</span><span class="font-label-technical text-label-technical px-2 py-1 border border-white/10 text-gray-300 bg-white/5 rounded-DEFAULT">Cloud</span></div></div></div>
</div>
</section>
<!-- Process Flow Diagram -->
<section class="py-16 border-t border-architectural-line relative overflow-hidden">
<span class="absolute top-0 left-0 w-[10px] h-[10px] flex items-center justify-center text-[10px] text-muted-text transform -translate-x-1/2 -translate-y-1/2 bg-structural-bg"><span class="material-symbols-outlined text-[10px]">add</span></span>
<div class="font-label-technical text-label-technical text-muted-text mb-8 tracking-widest uppercase">WORKFLOW ARCHITECTURE</div>
<div class="flex flex-col md:flex-row items-center overflow-x-auto pb-4 no-scrollbar justify-start gap-gutter">
<div class="flex items-center shrink-0">
<span class="font-label-technical text-label-technical px-4 py-2 border border-architectural-line bg-white/50">IDEA</span>
<span class="material-symbols-outlined text-tech-accent mx-2">arrow_right_alt</span>
</div>
<div class="flex items-center shrink-0">
<span class="font-label-technical text-label-technical px-4 py-2 border border-architectural-line bg-white/50">STRATEGY</span>
<span class="material-symbols-outlined text-tech-accent mx-2">arrow_right_alt</span>
</div>
<div class="flex items-center shrink-0">
<span class="font-label-technical text-label-technical px-4 py-2 border border-architectural-line bg-white/50">UI/UX</span>
<span class="material-symbols-outlined text-tech-accent mx-2">arrow_right_alt</span>
</div>
<div class="flex items-center shrink-0">
<span class="font-label-technical text-label-technical px-4 py-2 border border-tech-accent text-tech-accent bg-tech-accent/10">DEVELOPMENT</span>
<span class="material-symbols-outlined text-tech-accent mx-2">arrow_right_alt</span>
</div>
<div class="flex items-center shrink-0">
<span class="font-label-technical text-label-technical px-4 py-2 border border-architectural-line bg-white/50">TESTING</span>
<span class="material-symbols-outlined text-tech-accent mx-2">arrow_right_alt</span>
</div>
<div class="flex items-center shrink-0">
<span class="font-label-technical text-label-technical px-4 py-2 border border-architectural-line bg-white/50">LAUNCH</span>
<span class="material-symbols-outlined text-tech-accent mx-2">arrow_right_alt</span>
</div>
<div class="flex items-center shrink-0">
<span class="font-label-technical text-label-technical px-4 py-2 border border-architectural-line bg-white/50">MARKETING</span>
<span class="material-symbols-outlined text-tech-accent mx-2">arrow_right_alt</span>
</div>
<div class="flex items-center shrink-0">
<span class="font-label-technical text-label-technical px-4 py-2 border border-architectural-line bg-white/50">GROWTH</span>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="w-full px-margin-mobile md:px-margin-desktop py-12 grid grid-cols-1 md:grid-cols-4 gap-gutter max-w-container-max-width mx-auto bg-structural-bg dark:bg-surface-dim border-t border-architectural-line relative">
<div class="col-span-1 md:col-span-1">
<div class="font-headline-md text-headline-md font-bold text-on-surface mb-4">PILOTNEMO</div>
<p class="font-label-technical text-label-technical text-muted-text">Copyright © 2026 PILOTNEMO</p>
</div>
<div class="col-span-1 md:col-span-3 flex flex-wrap gap-8 md:justify-end">
<a class="font-label-technical text-label-technical text-muted-text hover:text-on-surface dark:hover:text-surface-bright underline underline-offset-4 transition-all" href="#">Services</a>
<a class="font-label-technical text-label-technical text-muted-text hover:text-on-surface dark:hover:text-surface-bright underline underline-offset-4 transition-all" href="#">Company</a>
<a class="font-label-technical text-label-technical text-muted-text hover:text-on-surface dark:hover:text-surface-bright underline underline-offset-4 transition-all" href="#">Resources</a>
<a class="font-label-technical text-label-technical text-muted-text hover:text-on-surface dark:hover:text-surface-bright underline underline-offset-4 transition-all" href="#">Connect</a>
</div>
</footer>




</body></html>

<!-- PilotNemo - Team & Culture -->
<!DOCTYPE html><html class="light" lang="en"><head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<title>PilotNemo - Team</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700&amp;family=Space+Grotesk:wght@400;500&amp;family=Inter:wght@400&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<script id="tailwind-config">
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              "colors": {
                      "surface-container-low": "#f4f4f1",
                      "error": "#ba1a1a",
                      "surface-container": "#eeeeeb",
                      "surface-container-highest": "#e2e3e0",
                      "on-secondary": "#ffffff",
                      "on-error-container": "#93000a",
                      "inverse-primary": "#ffb690",
                      "on-primary-fixed": "#341100",
                      "on-primary": "#ffffff",
                      "architectural-line": "rgba(25, 25, 25, 0.12)",
                      "muted-text": "#929292",
                      "outline-variant": "#dcc1b5",
                      "surface-tint": "#9a460d",
                      "on-tertiary": "#ffffff",
                      "on-secondary-container": "#646468",
                      "tertiary-fixed": "#e3e2e4",
                      "primary-fixed": "#ffdbca",
                      "inverse-on-surface": "#f1f1ee",
                      "structural-bg": "#f5f5f2",
                      "error-container": "#ffdad6",
                      "on-error": "#ffffff",
                      "outline": "#897268",
                      "tech-accent": "#b85c24",
                      "surface-container-lowest": "#ffffff",
                      "surface": "#f9f9f6",
                      "glass-container": "rgba(32, 33, 36, 0.95)",
                      "secondary-fixed": "#e3e2e6",
                      "primary": "#98440b",
                      "surface-dim": "#dadad7",
                      "secondary-container": "#e3e2e6",
                      "surface-container-high": "#e8e8e5",
                      "background": "#f9f9f6",
                      "surface-bright": "#f9f9f6",
                      "primary-container": "#b85c24",
                      "inverse-surface": "#2f312f",
                      "tertiary-container": "#757577",
                      "on-tertiary-fixed-variant": "#464749",
                      "on-secondary-fixed": "#1a1b1e",
                      "tertiary-fixed-dim": "#c7c6c8",
                      "secondary": "#5e5e62",
                      "on-tertiary-fixed": "#1b1c1e",
                      "surface-variant": "#e2e3e0",
                      "on-surface-variant": "#55433a",
                      "on-background": "#1a1c1b",
                      "primary-fixed-dim": "#ffb690",
                      "on-tertiary-container": "#fffdff",
                      "on-primary-fixed-variant": "#783200",
                      "on-surface": "#1a1c1b",
                      "tertiary": "#5c5c5f",
                      "secondary-fixed-dim": "#c7c6ca",
                      "on-primary-container": "#fffeff",
                      "on-secondary-fixed-variant": "#46474a"
              },
              "borderRadius": {
                      "DEFAULT": "0.125rem",
                      "lg": "0.25rem",
                      "xl": "0.5rem",
                      "full": "0.75rem"
              },
              "spacing": {
                      "gutter": "16px",
                      "container-max-width": "1440px",
                      "margin-desktop": "64px",
                      "unit": "8px",
                      "margin-mobile": "16px",
                      "grid-size": "16px"
              },
              "fontFamily": {
                      "headline-lg": ["Plus Jakarta Sans"],
                      "label-technical": ["Space Grotesk"],
                      "body-md": ["Inter"],
                      "headline-md": ["Plus Jakarta Sans"],
                      "display-lg": ["Plus Jakarta Sans"],
                      "label-small": ["Space Grotesk"],
                      "headline-lg-mobile": ["Plus Jakarta Sans"],
                      "body-lg": ["Inter"]
              },
              "fontSize": {
                      "headline-lg": ["60px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                      "label-technical": ["10px", {"lineHeight": "1", "letterSpacing": "0.1em", "fontWeight": "500"}],
                      "body-md": ["14px", {"lineHeight": "1.5", "fontWeight": "400"}],
                      "headline-md": ["32px", {"lineHeight": "1.3", "fontWeight": "600"}],
                      "display-lg": ["72px", {"lineHeight": "1.1", "letterSpacing": "-0.04em", "fontWeight": "700"}],
                      "label-small": ["10px", {"lineHeight": "1", "fontWeight": "400"}],
                      "headline-lg-mobile": ["32px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                      "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}]
              }
      },
          },
        }
    </script>
<style>
        /* Architectural Grid Background */
        body {
            background-color: theme('colors.structural-bg');
            background-image: 
                linear-gradient(theme('colors.architectural-line') 1px, transparent 1px),
                linear-gradient(90deg, theme('colors.architectural-line') 1px, transparent 1px);
            background-size: 16px 16px;
        }
        
        .glass-panel {
            background-color: theme('colors.surface-container-highest');
            border: 1px solid theme('colors.architectural-line');
        }

        .dark .glass-panel {
            background-color: theme('colors.glass-container');
            border: 1px solid rgba(255, 255, 255, 0.12);
        }
    </style>
</head>
<body class="text-on-surface antialiased flex flex-col min-h-screen">
<!-- TopNavBar (Shared Component) -->
<nav class="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max-width mx-auto bg-glass-container/80 backdrop-blur-md border-b border-architectural-line">
<div class="font-headline-md text-headline-md font-bold tracking-tighter text-on-surface dark:text-surface-bright">PILOTNEMO</div>
<div class="hidden md:flex gap-gutter items-center">
<a class="font-label-technical text-label-technical text-on-surface-variant dark:text-muted-text hover:text-primary dark:hover:text-tech-accent transition-colors" href="#">Work</a>
<a class="font-label-technical text-label-technical text-on-surface-variant dark:text-muted-text hover:text-primary dark:hover:text-tech-accent transition-colors" href="#">Services</a>
<a class="font-label-technical text-label-technical text-on-surface-variant dark:text-muted-text hover:text-primary dark:hover:text-tech-accent transition-colors" href="#">Process</a>
<a class="font-label-technical text-label-technical text-primary dark:text-tech-accent border-b border-primary opacity-80 scale-95 transition-all" href="#">Team</a>
</div>
<button class="hidden md:block font-label-technical text-label-technical px-4 py-2 border border-tech-accent/30 text-primary hover:bg-black/5 transition-colors uppercase">
            START A PROJECT
        </button>
<div class="md:hidden">
<span class="material-symbols-outlined text-primary">menu</span>
</div>
</nav>
<!-- Main Content -->
<main class="flex-grow pt-[100px] pb-margin-desktop max-w-container-max-width mx-auto w-full px-margin-mobile md:px-margin-desktop">
<!-- Section Header -->
<header class="mb-16 border-b border-architectural-line pb-8">
<div class="flex items-center gap-2 mb-4">
<span class="material-symbols-outlined text-[10px] text-primary">add</span>
<span class="font-label-technical text-label-technical text-primary tracking-widest uppercase">04 / THE PEOPLE</span>
</div>
<h1 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6 max-w-3xl">
                People behind the products.
            </h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                A multidisciplinary team combining product thinking, engineering, design and digital growth.
            </p>
</header>
<!-- Bento Grid: Capabilities & Stats -->
<section class="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-margin-desktop">
<!-- Capabilities Column -->
<div class="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-gutter">
<!-- Capability Card -->
<div class="glass-panel p-6 relative flex flex-col justify-between min-h-[200px]">
<span class="absolute top-4 right-4 material-symbols-outlined text-[10px] text-muted-text">add</span>
<h3 class="font-headline-md text-headline-md text-on-surface mb-4">PRODUCT</h3>
<div class="flex flex-wrap gap-2">
<span class="font-label-technical text-label-technical px-2 py-1 border border-architectural-line rounded-DEFAULT bg-surface text-on-surface-variant">STRATEGY</span>
<span class="font-label-technical text-label-technical px-2 py-1 border border-architectural-line rounded-DEFAULT bg-surface text-on-surface-variant">ROADMAP</span>
<span class="font-label-technical text-label-technical px-2 py-1 border border-architectural-line rounded-DEFAULT bg-surface text-on-surface-variant">ANALYTICS</span>
</div>
</div>
<!-- Capability Card -->
<div class="glass-panel p-6 relative flex flex-col justify-between min-h-[200px]">
<span class="absolute top-4 right-4 material-symbols-outlined text-[10px] text-muted-text">add</span>
<h3 class="font-headline-md text-headline-md text-on-surface mb-4">DESIGN</h3>
<div class="flex flex-wrap gap-2">
<span class="font-label-technical text-label-technical px-2 py-1 border border-architectural-line rounded-DEFAULT bg-surface text-on-surface-variant">UI/UX</span>
<span class="font-label-technical text-label-technical px-2 py-1 border border-architectural-line rounded-DEFAULT bg-surface text-on-surface-variant">SYSTEMS</span>
<span class="font-label-technical text-label-technical px-2 py-1 border border-architectural-line rounded-DEFAULT bg-surface text-on-surface-variant">INTERACTION</span>
</div>
</div>
<!-- Capability Card -->
<div class="glass-panel p-6 relative flex flex-col justify-between min-h-[200px]">
<span class="absolute top-4 right-4 material-symbols-outlined text-[10px] text-muted-text">add</span>
<h3 class="font-headline-md text-headline-md text-on-surface mb-4">ENGINEERING</h3>
<div class="flex flex-wrap gap-2">
<span class="font-label-technical text-label-technical px-2 py-1 border border-architectural-line rounded-DEFAULT bg-surface text-on-surface-variant">FRONTEND</span>
<span class="font-label-technical text-label-technical px-2 py-1 border border-architectural-line rounded-DEFAULT bg-surface text-on-surface-variant">BACKEND</span>
<span class="font-label-technical text-label-technical px-2 py-1 border border-architectural-line rounded-DEFAULT bg-surface text-on-surface-variant">DEVOPS</span>
</div>
</div>
<!-- Capability Card -->
<div class="glass-panel p-6 relative flex flex-col justify-between min-h-[200px]">
<span class="absolute top-4 right-4 material-symbols-outlined text-[10px] text-muted-text">add</span>
<h3 class="font-headline-md text-headline-md text-on-surface mb-4">GROWTH</h3>
<div class="flex flex-wrap gap-2">
<span class="font-label-technical text-label-technical px-2 py-1 border border-architectural-line rounded-DEFAULT bg-surface text-on-surface-variant">SEO</span>
<span class="font-label-technical text-label-technical px-2 py-1 border border-architectural-line rounded-DEFAULT bg-surface text-on-surface-variant">MARKETING</span>
<span class="font-label-technical text-label-technical px-2 py-1 border border-architectural-line rounded-DEFAULT bg-surface text-on-surface-variant">CONVERSION</span>
</div>
</div>
</div>
<!-- Stats Panel -->
<div class="md:col-span-4 glass-panel p-6 flex flex-col justify-between min-h-[416px] bg-primary text-on-primary">
<div>
<div class="font-label-technical text-label-technical mb-2 opacity-80 uppercase">TEAM METRICS</div>
<div class="border-t border-on-primary/20 my-4 w-full"></div>
</div>
<div class="space-y-8">
<div>
<div class="font-headline-lg text-headline-lg font-bold">05+</div>
<div class="font-label-technical text-label-technical opacity-80 uppercase">CORE CAPABILITIES</div>
</div>
<div>
<div class="font-headline-lg text-headline-lg font-bold">08+</div>
<div class="font-label-technical text-label-technical opacity-80 uppercase">DISCIPLINES</div>
</div>
<div>
<div class="font-headline-md text-headline-md font-bold mb-1">ONE</div>
<div class="font-label-technical text-label-technical opacity-80 uppercase">SHARED WORKFLOW</div>
</div>
</div>
</div>
</section>
<!-- Quote Section -->
<section class="py-16 border-y border-architectural-line mb-margin-desktop flex items-center justify-center text-center">
<blockquote class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary max-w-4xl mx-auto">
                "Different skills. One shared responsibility: building something useful."
            </blockquote>
</section>
<!-- Team Members Grid -->
<section>
<div class="flex items-center gap-2 mb-8">
<span class="material-symbols-outlined text-[10px] text-primary">add</span>
<span class="font-label-technical text-label-technical text-on-surface-variant tracking-widest uppercase">CORE TEAM</span>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
<!-- Team Member 1 -->
<div class="group cursor-pointer">
<div class="aspect-[3/4] mb-4 overflow-hidden bg-surface-container-highest relative">
<img class="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" data-alt="A striking portrait of a diverse tech professional in a modern, well-lit brutalist office setting. The lighting is high-key and soft, emphasizing clean lines and a minimalist architectural aesthetic. The color palette features whites, grays, and subtle earthy tones. The mood is professional, intellectual, and confident." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMCmcfSd2y4go82HDTDONNVfnwRQwVcgLHoOlIsiORn5QIF_4CmyR6VPh-DHA5ZiX0ttJKnESfCjgVaePZ2URTVLGI4DVEiiEQHyD2cNkMPhapEsOIBaZDtQ7_cTTNR4otSehK5i_mK5Rt2O9nWKz0ZCctsN0Xvk8SRsZzLO2_sqG8LPLwqO47QJX6T2gxMVjVS22VouB4BUyFCT-zTZQAykqM0pclKD4PuehDd6rPzladYShKUoGQqg">
<div class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/50 to-transparent"></div>
</div>
<div class="border-t border-architectural-line pt-4">
<h4 class="font-headline-md text-[20px] font-bold text-on-surface uppercase mb-1">[TEAM MEMBER]</h4>
<p class="font-label-technical text-label-technical text-primary mb-3 uppercase">[ROLE]</p>
<p class="font-body-md text-body-md text-on-surface-variant line-clamp-3">
                            [SHORT BIO] A highly skilled professional focusing on bringing structure and clarity to complex digital systems. Expertise in scaling technical operations.
                        </p>
</div>
</div>
<!-- Team Member 2 -->
<div class="group cursor-pointer">
<div class="aspect-[3/4] mb-4 overflow-hidden bg-surface-container-highest relative">
<img class="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" data-alt="A striking portrait of a diverse tech professional in a modern, well-lit brutalist office setting. The lighting is high-key and soft, emphasizing clean lines and a minimalist architectural aesthetic. The color palette features whites, grays, and subtle earthy tones. The mood is professional, intellectual, and confident." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-s0ZWd2h12oCfmYy0mRaWkRZSe1PhGvcbqWKR-KdlAaMlvfS0HMrNrA3d3GDJbwyZXGpH-Z0f-1AyZtjafFsxPDQ3mVQQttH0cSxFLlZPd7wwsJBwBl2GGHaLr5Znff5Fl6KOAJjZRuEeMPvpbVQfxrD8XEwVRfMYUjrYrx6ac6r8ggFt4KaDb3eLzVlKwuYYUn_i4UaKbxQtEfqqIHSBnFofhCZEpj_fRM1JDu_W3lFihtUybBA2ug">
<div class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/50 to-transparent"></div>
</div>
<div class="border-t border-architectural-line pt-4">
<h4 class="font-headline-md text-[20px] font-bold text-on-surface uppercase mb-1">[TEAM MEMBER]</h4>
<p class="font-label-technical text-label-technical text-primary mb-3 uppercase">[ROLE]</p>
<p class="font-body-md text-body-md text-on-surface-variant line-clamp-3">
                            [SHORT BIO] Specializes in crafting intuitive user experiences based on rigorous research and architectural design principles.
                        </p>
</div>
</div>
<!-- Team Member 3 -->
<div class="group cursor-pointer">
<div class="aspect-[3/4] mb-4 overflow-hidden bg-surface-container-highest relative">
<img class="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" data-alt="A striking portrait of a diverse tech professional in a modern, well-lit brutalist office setting. The lighting is high-key and soft, emphasizing clean lines and a minimalist architectural aesthetic. The color palette features whites, grays, and subtle earthy tones. The mood is professional, intellectual, and confident." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfn8zzGwD27t7gZ5GEWyn8ZXTWxpMJc_K2qJ17AqIJBd1MVyhk9Bj9fJjMQyNLCu8-vIQdeO-m_A_H8dE4r8dbaKx79a6gpnWo9S1enG2Cyd-000BqdrlgE90dFOAPM_0ySVsFB0-mTmAbqcKu1KSuhNTP5M5n_6LMWtlrGAPHt9ZAM3eFHB16lWPewL4SWRw_njSNvmg9VSbrhZ6Djj_O96SRdVn4JMPEQwf38y_EmlVPjzr7IKJzhA">
<div class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/50 to-transparent"></div>
</div>
<div class="border-t border-architectural-line pt-4">
<h4 class="font-headline-md text-[20px] font-bold text-on-surface uppercase mb-1">[TEAM MEMBER]</h4>
<p class="font-label-technical text-label-technical text-primary mb-3 uppercase">[ROLE]</p>
<p class="font-body-md text-body-md text-on-surface-variant line-clamp-3">
                            [SHORT BIO] Engineering lead bridging the gap between elegant frontend interfaces and robust backend architectures.
                        </p>
</div>
</div>
<!-- Team Member 4 -->
<div class="group cursor-pointer">
<div class="aspect-[3/4] mb-4 overflow-hidden bg-surface-container-highest relative">
<img class="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" data-alt="A striking portrait of a diverse tech professional in a modern, well-lit brutalist office setting. The lighting is high-key and soft, emphasizing clean lines and a minimalist architectural aesthetic. The color palette features whites, grays, and subtle earthy tones. The mood is professional, intellectual, and confident." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBksJONIxHoT6GZUa1R90gz9tMBLoaRB5GYiNKnyTsNRAzWUfendozgdR1Prav-3eP6WJ2SCqozL5R9rwtwkc5sm-_rJwMQZSTryAuiv-OmZGeZ3HCmgaSKHWLK4xCS0wDvGUAQBpMFJXzIfRoA-L0PUgFN5G1G1Gw2o1wEBhsDYVA0ghVva5Jss0w7ivoUm4awalDGELJoHVrdK3x2WKDzsAxF2889ad-DDnc7bwFNJRdW4y1VZdN_CA">
<div class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/50 to-transparent"></div>
</div>
<div class="border-t border-architectural-line pt-4">
<h4 class="font-headline-md text-[20px] font-bold text-on-surface uppercase mb-1">[TEAM MEMBER]</h4>
<p class="font-label-technical text-label-technical text-primary mb-3 uppercase">[ROLE]</p>
<p class="font-body-md text-body-md text-on-surface-variant line-clamp-3">
                            [SHORT BIO] Drives product adoption through data-driven strategies and a deep understanding of market dynamics.
                        </p>
</div>
</div>
</div>
</section>
</main>
<!-- Footer (Shared Component) -->
<footer class="w-full px-margin-mobile md:px-margin-desktop py-12 grid grid-cols-1 md:grid-cols-4 gap-gutter max-w-container-max-width mx-auto bg-structural-bg dark:bg-surface-dim border-t border-architectural-line mt-auto">
<div class="col-span-1 md:col-span-1 flex flex-col justify-between h-full">
<div class="font-headline-md text-headline-md font-bold text-on-surface mb-8">PILOTNEMO</div>
<div class="font-label-technical text-label-technical text-muted-text">Copyright © 2026 PILOTNEMO</div>
</div>
<div class="col-span-1 md:col-span-3 flex flex-wrap gap-x-12 gap-y-4 md:justify-end items-start pt-2">
<a class="font-label-technical text-label-technical text-muted-text hover:text-on-surface dark:hover:text-surface-bright underline underline-offset-4 transition-colors" href="#">Services</a>
<a class="font-label-technical text-label-technical text-muted-text hover:text-on-surface dark:hover:text-surface-bright underline underline-offset-4 transition-colors" href="#">Company</a>
<a class="font-label-technical text-label-technical text-muted-text hover:text-on-surface dark:hover:text-surface-bright underline underline-offset-4 transition-colors" href="#">Resources</a>
<a class="font-label-technical text-label-technical text-muted-text hover:text-on-surface dark:hover:text-surface-bright underline underline-offset-4 transition-colors" href="#">Connect</a>
</div>
</footer>
</body></html>

<!-- PilotNemo - Our Approach (Refined Bold & Integrated Visuals) -->
<!DOCTYPE html><html lang="en" style=""><head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<title>PilotNemo - Our Approach</title>
<!-- Google Fonts & Icons -->
<link href="https://fonts.googleapis.com" rel="preconnect">
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;family=Plus+Jakarta+Sans:wght@500;600;700;800&amp;family=Space+Grotesk:wght@400;500;600;700&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<!-- Tailwind Config -->
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "surface-container-low": "#f4f4f1",
                        "error": "#ba1a1a",
                        "surface-container": "#eeeeeb",
                        "surface-container-highest": "#e2e3e0",
                        "on-secondary": "#ffffff",
                        "on-error-container": "#93000a",
                        "inverse-primary": "#ffb690",
                        "on-primary-fixed": "#341100",
                        "on-primary": "#ffffff",
                        "architectural-line": "rgba(25, 25, 25, 0.12)",
                        "muted-text": "#929292",
                        "outline-variant": "#dcc1b5",
                        "surface-tint": "#9a460d",
                        "on-tertiary": "#ffffff",
                        "on-secondary-container": "#646468",
                        "tertiary-fixed": "#e3e2e4",
                        "primary-fixed": "#ffdbca",
                        "inverse-on-surface": "#f1f1ee",
                        "structural-bg": "#f5f5f2",
                        "error-container": "#ffdad6",
                        "on-error": "#ffffff",
                        "outline": "#897268",
                        "tech-accent": "#b85c24",
                        "surface-container-lowest": "#ffffff",
                        "surface": "#f9f9f6",
                        "glass-container": "rgba(32, 33, 36, 0.95)",
                        "secondary-fixed": "#e3e2e6",
                        "primary": "#98440b",
                        "surface-dim": "#dadad7",
                        "secondary-container": "#e3e2e6",
                        "surface-container-high": "#e8e8e5",
                        "background": "#f9f9f6",
                        "surface-bright": "#f9f9f6",
                        "primary-container": "#b85c24",
                        "inverse-surface": "#2f312f",
                        "tertiary-container": "#757577",
                        "on-tertiary-fixed-variant": "#464749",
                        "on-secondary-fixed": "#1a1b1e",
                        "tertiary-fixed-dim": "#c7c6c8",
                        "secondary": "#5e5e62",
                        "on-tertiary-fixed": "#1b1c1e",
                        "surface-variant": "#e2e3e0",
                        "on-surface-variant": "#55433a",
                        "on-background": "#1a1c1b",
                        "primary-fixed-dim": "#ffb690",
                        "on-tertiary-container": "#fffdff",
                        "on-primary-fixed-variant": "#783200",
                        "on-surface": "#1a1c1b",
                        "tertiary": "#5c5c5f",
                        "secondary-fixed-dim": "#c7c6ca",
                        "on-primary-container": "#fffeff",
                        "on-secondary-fixed-variant": "#46474a"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.125rem",
                        "lg": "0.25rem",
                        "xl": "0.5rem",
                        "full": "0.75rem"
                    },
                    "spacing": {
                        "gutter": "16px",
                        "container-max-width": "1440px",
                        "margin-desktop": "64px",
                        "unit": "8px",
                        "margin-mobile": "16px",
                        "grid-size": "16px"
                    },
                    "fontFamily": {
                        "headline-lg": ["Plus Jakarta Sans"],
                        "label-technical": ["Space Grotesk"],
                        "body-md": ["Inter"],
                        "headline-md": ["Plus Jakarta Sans"],
                        "display-lg": ["Plus Jakarta Sans"],
                        "label-small": ["Space Grotesk"],
                        "headline-lg-mobile": ["Plus Jakarta Sans"],
                        "body-lg": ["Inter"]
                    },
                    "fontSize": {
                        "headline-lg": ["60px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "800" }],
                        "label-technical": ["10px", { "lineHeight": "1", "letterSpacing": "0.1em", "fontWeight": "600" }],
                        "body-md": ["14px", { "lineHeight": "1.5", "fontWeight": "500" }],
                        "headline-md": ["32px", { "lineHeight": "1.3", "fontWeight": "700" }],
                        "display-lg": ["72px", { "lineHeight": "1.1", "letterSpacing": "-0.04em", "fontWeight": "800" }],
                        "label-small": ["10px", { "lineHeight": "1", "fontWeight": "500" }],
                        "headline-lg-mobile": ["32px", { "lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "800" }],
                        "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "500" }]
                    }
                }
            }
        }
    </script>
<style>
        body {
            background-color: #f5f5f2; /* structural-bg */
            background-image: linear-gradient(rgba(25, 25, 25, 0.03) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(25, 25, 25, 0.03) 1px, transparent 1px);
            background-size: 16px 16px;
        }
    </style>
</head>
<body class="bg-structural-bg text-on-surface antialiased min-h-screen flex flex-col relative overflow-x-hidden font-body-md">
<!-- Top Navigation (Generated from JSON) -->
<nav class="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max-width mx-auto bg-glass-container/80 backdrop-blur-md border-b border-architectural-line transition-all duration-300">
<div class="flex items-center">
<a class="font-headline-md text-headline-md font-bold tracking-tighter text-on-surface dark:text-surface-bright" href="#">PILOTNEMO</a>
</div>
<div class="hidden md:flex items-center space-x-8">
<a class="text-on-surface-variant dark:text-muted-text font-label-technical text-label-technical font-bold hover:text-primary dark:hover:text-tech-accent transition-colors opacity-80 scale-95 transition-all" href="#">Work</a>
<a class="text-on-surface-variant dark:text-muted-text font-label-technical text-label-technical font-bold hover:text-primary dark:hover:text-tech-accent transition-colors" href="#">Services</a>
<a class="text-primary dark:text-tech-accent border-b border-primary font-label-technical text-label-technical font-bold hover:text-primary dark:hover:text-tech-accent transition-colors" href="#">Process</a>
<a class="text-on-surface-variant dark:text-muted-text font-label-technical text-label-technical font-bold hover:text-primary dark:hover:text-tech-accent transition-colors" href="#">Team</a>
</div>
<div class="flex items-center">
<a class="hidden md:flex items-center justify-center px-4 py-2 border border-tech-accent/30 rounded-DEFAULT text-tech-accent font-label-technical text-label-technical font-bold hover:bg-black/5 transition-colors" href="#">
                START A PROJECT
            </a>
<!-- Mobile Menu Toggle -->
<button class="md:hidden text-on-surface">
<span class="material-symbols-outlined">menu</span>
</button>
</div>
</nav>
<!-- Main Content -->
<main class="flex-grow pt-[100px] pb-24 md:pb-32 px-margin-mobile md:px-margin-desktop w-full max-w-container-max-width mx-auto relative z-10">
<!-- Header Section -->
<header class="mb-16 md:mb-24 border-b border-architectural-line pb-12 md:pb-16 pt-8">
<div class="flex items-center gap-2 mb-6">
<span class="material-symbols-outlined text-[10px] text-muted-text">add</span>
<span class="font-label-technical text-label-technical text-muted-text font-bold uppercase tracking-widest">03 / OUR APPROACH</span>
</div>
<div class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
<div class="md:col-span-8 lg:col-span-7">
<h1 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-extrabold mb-6 leading-tight">Strategy first. Built for what comes next.</h1>
</div>
<div class="md:col-span-4 lg:col-span-5 flex items-end">
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-md border-l border-architectural-line pl-6 font-medium">
                        At PilotNemo, we don't start with code. We first understand the business, the users and the problem — then design and build the right digital solution.
                    </p>
</div>
</div>
</header>
<!-- SECTION 01 — OUR STRATEGY -->
<section class="mb-24">
<div class="flex items-center gap-2 mb-10">
<span class="material-symbols-outlined text-[10px] text-tech-accent">add</span>
<h2 class="font-label-technical text-label-technical text-on-surface font-bold uppercase tracking-widest">SECTION 01 — OUR STRATEGY</h2>
</div>
<div class="overflow-x-auto pb-8 scrollbar-hide">
<div class="flex flex-nowrap min-w-max md:min-w-0 md:grid md:grid-cols-5 gap-0 border border-architectural-line bg-surface">
<!-- Discover -->
<div class="w-72 md:w-auto p-6 md:p-8 border-r border-architectural-line relative group hover:bg-surface-variant/50 transition-colors bg-surface-container-low">
<div class="font-label-technical text-label-technical text-tech-accent font-bold mb-4">01</div>
<div class="mb-6 overflow-hidden rounded-sm bg-transparent flex justify-center items-center"><img alt="Discover Phase Illustration" class="w-[110%] h-auto object-cover scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGYAD0cqclkryJR4BojRwwG_tOJ3WtrNaSngwWYChFd8D6wapj_t6XPUjqWju__E3fdNyyPIv8dapN7o038VU43x57pENRidZ_DQnueOvAC_InTJv7sR2I-e33_McT2fDCUEy_sZ2CTAWEQjQ_PVZ4WLxPBiKX4Y4LIX72fxZchAGhMQYjxLihvA2ptqSEmysEyn7HqpaYddWIF1suK3jI-9to1xJSpasKHqn0DMjp1x7orUTIZrqC5-5F6adgaqyZ_s_iz0ytjJPlKsA"></div><h3 class="font-headline-md text-xl md:text-2xl text-on-surface font-bold mb-4">DISCOVER</h3>
<ul class="space-y-2 font-body-md text-on-surface-variant font-medium">
<li class="font-semibold">Business goals</li>
<li class="font-semibold">User needs</li>
<li class="font-semibold">Market context</li>
<li class="font-semibold">Existing challenges</li>
</ul>
<span class="material-symbols-outlined absolute top-1/2 -right-3 text-architectural-line bg-surface hidden md:block z-10 group-hover:text-tech-accent transition-colors">arrow_forward</span>
</div>
<!-- Plan -->
<div class="w-72 md:w-auto p-6 md:p-8 border-r border-architectural-line relative group hover:bg-surface-variant/50 transition-colors bg-surface-container-low">
<div class="font-label-technical text-label-technical text-tech-accent font-bold mb-4">02</div>
<div class="mb-6 overflow-hidden rounded-sm bg-transparent flex justify-center items-center"><img alt="Plan Phase Illustration" class="w-[110%] h-auto object-cover scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZLi8i8hEdlf2EE_aTNELERoHvW0zlW6sOu3AHP5ar70Yue3QaQJghsc81H3I9YDUMEO_m98Mld9CmZKR0kh87YTTtl85PeoLDfKlqWueqeAeY268C8cQrWL9HtYP7Nzmx1GLsbpdXAWvETqoY6R2Rc3C2WO7tHPlj6gWk7bz9RlMpQg0xvayLWUGwC9y5W8tVOj2GH5K3DOJRbYJZZce8kmeniKhcj18bV_BxwfX6seL44jFIUQxSdayGJV9Pk6zmipueMVmm76J_x7I"></div><h3 class="font-headline-md text-xl md:text-2xl text-on-surface font-bold mb-4">PLAN</h3>
<ul class="space-y-2 font-body-md text-on-surface-variant font-medium">
<li class="font-semibold">Product strategy</li>
<li class="font-semibold">Feature planning</li>
<li class="font-semibold">Technology selection</li>
<li class="font-semibold">Project roadmap</li>
</ul>
<span class="material-symbols-outlined absolute top-1/2 -right-3 text-architectural-line bg-surface hidden md:block z-10 group-hover:text-tech-accent transition-colors">arrow_forward</span>
</div>
<!-- Design -->
<div class="w-72 md:w-auto p-6 md:p-8 border-r border-architectural-line relative group hover:bg-surface-variant/50 transition-colors bg-surface-container-low">
<div class="font-label-technical text-label-technical text-tech-accent font-bold mb-4">03</div>
<div class="mb-6 overflow-hidden rounded-sm bg-transparent flex justify-center items-center"><img alt="Design Phase Illustration" class="w-[110%] h-auto object-cover scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrYq57v2RD06C8BGcV1mpUgBr8cU1pt1HLltVCE7-dvyhudQz780aK6HXFbccPDcOtKixfZ12sO54sZz7fYJnL1CmAgtn4R9Ohy9pF2FAN-doYrdYVNvNjyXPz2hs60-jxUfn4z8LN1DOKfeL9Ke0_xceeoF2rEMDM-xyTO9qjkrSTq8jHw6wfukjt__RVG7ZVEO14FnCpKTdFX8lK9EOzEU57fbt8dU8xwj9TQXe15z3OP7qv5BDDtvZakhqJWQ3RiMyxHkEPvEyP8qI"></div><h3 class="font-headline-md text-xl md:text-2xl text-on-surface font-bold mb-4">DESIGN</h3>
<ul class="space-y-2 font-body-md text-on-surface-variant font-medium">
<li class="font-semibold">UX research</li>
<li class="font-semibold">User flows</li>
<li class="font-semibold">Wireframes</li>
<li class="font-semibold">UI design, Prototypes</li>
</ul>
<span class="material-symbols-outlined absolute top-1/2 -right-3 text-architectural-line bg-surface hidden md:block z-10 group-hover:text-tech-accent transition-colors">arrow_forward</span>
</div>
<!-- Build -->
<div class="w-72 md:w-auto p-6 md:p-8 border-r border-architectural-line relative group hover:bg-surface-variant/50 transition-colors bg-surface-container-low">
<div class="font-label-technical text-label-technical text-tech-accent font-bold mb-4">04</div>
<div class="mb-6 overflow-hidden rounded-sm bg-transparent flex justify-center items-center"><img alt="Build Phase Illustration" class="w-[110%] h-auto object-cover scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-6GT6mXm4nlnisc_Fl3gtJFzC1VJiEy6MlWiq1PWp1ACSsuYWrAA-bC3ZR-bc_ltgWE4d7gBJ4tl2fl0OOS55m73FrSba-fkcJDFFvfm0-fbACjq0UqzJZ-DDc-VsBFckmDZyHb6ARkyE5-V0MIjEYzGyX-RMzD2QryN2Dgo4mH5BpM0a-X6tPpdAx9dkINq156McLu0Wo8MGMr9vmKJ774UtlU57GJ6rbYMeRIReLDQZZaPELbpW4Kgy_Tw3qjXV1wrMLJt4sFawa_g"></div><h3 class="font-headline-md text-xl md:text-2xl text-on-surface font-bold mb-4">BUILD</h3>
<ul class="space-y-2 font-body-md text-on-surface-variant font-medium">
<li class="font-semibold">Mobile dev</li>
<li class="font-semibold">Web dev</li>
<li class="font-semibold">Backend systems</li>
<li class="font-semibold">API integration, Testing</li>
</ul>
<span class="material-symbols-outlined absolute top-1/2 -right-3 text-architectural-line bg-surface hidden md:block z-10 group-hover:text-tech-accent transition-colors">arrow_forward</span>
</div>
<!-- Grow -->
<div class="w-72 md:w-auto p-6 md:p-8 relative group hover:bg-surface-variant/50 transition-colors bg-surface-container-low">
<div class="font-label-technical text-label-technical text-tech-accent font-bold mb-4">05</div>
<div class="mb-6 overflow-hidden rounded-sm bg-transparent flex justify-center items-center"><img alt="Grow Phase Illustration" class="w-[110%] h-auto object-cover scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6AdolD28w_DWyxnoAKY6wN6q21d33yIaUVIqpLF5S3hYKFel8u6lvBQGiIyeNP2disUYvhitZdAYtG6Gkravy47gLumWYvLArJICqUCuc9u2kjHan0tQj3lpOhAToiagyjKd_K3pcj_VdNf1G8-xKYS5nzuPhTWlNtv2rgnlyQTzhDjyK7zp_JmPrMXxr1RtIJUBmqnRXeLh3bylVDidNDqTjmI3euMLesqCdlFMzU5NR5rW1K9oZVFccP-Xzcn8qgWhBF_zlkDLMnBA"></div><h3 class="font-headline-md text-xl md:text-2xl text-on-surface font-bold mb-4">GROW</h3>
<ul class="space-y-2 font-body-md text-on-surface-variant font-medium">
<li class="font-semibold">Digital marketing</li>
<li class="font-semibold">SEO</li>
<li class="font-semibold">Analytics</li>
<li class="font-semibold">Optimization, Growth</li>
</ul>
</div>
</div>
</div>
<div class="mt-4 flex items-center justify-center p-4 border border-architectural-line bg-surface/50">
<p class="font-label-technical text-label-technical text-on-surface font-bold tracking-widest uppercase">
        FROM IDEA <span class="text-tech-accent mx-2 font-extrabold">→</span> PRODUCT <span class="text-tech-accent mx-2 font-extrabold">→</span> GROWTH. One connected process. One team.
    </p>
</div>
</section>
<!-- SECTION 02 — WHY PILOTNEMO -->
<section class="mb-24">
<div class="flex items-center gap-2 mb-6">
<span class="material-symbols-outlined text-[10px] text-tech-accent">add</span>
<h2 class="font-label-technical text-label-technical text-on-surface font-bold uppercase tracking-widest">SECTION 02 — WHY PILOTNEMO</h2>
</div>
<h3 class="font-headline-md text-headline-md text-on-surface font-bold mb-10">More than development. A complete digital partner.</h3>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
<div class="p-8 border border-architectural-line hover:border-tech-accent/30 transition-colors bg-surface-container-low">
<h4 class="font-headline-md text-xl text-on-surface font-bold mb-4">ONE TEAM</h4>
<p class="font-body-md text-on-surface-variant font-medium">We bring strategy, design, development and growth marketing under one roof. No silos, no miscommunication.</p>
</div>
<div class="p-8 border border-architectural-line hover:border-tech-accent/30 transition-colors bg-surface-container-low">
<h4 class="font-headline-md text-xl text-on-surface font-bold mb-4">BUSINESS-FIRST THINKING</h4>
<p class="font-body-md text-on-surface-variant font-medium">We don't just write code. We build digital products that drive revenue, efficiency and business value.</p>
</div>
<div class="p-8 border border-architectural-line hover:border-tech-accent/30 transition-colors bg-surface-container-low">
<h4 class="font-headline-md text-xl text-on-surface font-bold mb-4">DESIGN + DEVELOPMENT</h4>
<p class="font-body-md text-on-surface-variant font-medium">Our designers code and our developers design. The result is beautiful software that actually works.</p>
</div>
<div class="p-8 border border-architectural-line hover:border-tech-accent/30 transition-colors bg-surface-container-low">
<h4 class="font-headline-md text-xl text-on-surface font-bold mb-4">BUILT TO SCALE</h4>
<p class="font-body-md text-on-surface-variant font-medium">We architect our solutions to grow with your business, using robust, modern technology stacks.</p>
</div>
<div class="p-8 border border-architectural-line hover:border-tech-accent/30 transition-colors bg-surface-container-low">
<h4 class="font-headline-md text-xl text-on-surface font-bold mb-4">USER-CENTERED EXPERIENCES</h4>
<p class="font-body-md text-on-surface-variant font-medium">We prioritize intuitive UX/UI that your customers will love to use, reducing friction and increasing engagement.</p>
</div>
<div class="p-8 border border-architectural-line hover:border-tech-accent/30 transition-colors bg-surface-container-low">
<h4 class="font-headline-md text-xl text-on-surface font-bold mb-4">GROWTH AFTER LAUNCH</h4>
<p class="font-body-md text-on-surface-variant font-medium">Launch is just the beginning. We provide ongoing support, optimization, and digital marketing to ensure success.</p>
</div>
</div>
</section>
<!-- SECTION 03 — PILOTNEMO DIFFERENCE -->
<section class="mb-24">
<div class="flex items-center gap-2 mb-6">
<span class="material-symbols-outlined text-[10px] text-tech-accent">add</span>
<h2 class="font-label-technical text-label-technical text-on-surface font-bold uppercase tracking-widest">SECTION 03 — PILOTNEMO DIFFERENCE</h2>
</div>
<h3 class="font-headline-md text-headline-md text-on-surface font-bold mb-10 max-w-2xl">Why work with multiple teams when one team can connect everything?</h3>
<div class="grid grid-cols-1 md:grid-cols-2 gap-0 border border-architectural-line">
<!-- Traditional -->
<div class="p-8 md:p-12 border-b md:border-b-0 md:border-r border-architectural-line bg-surface-variant/30">
<div class="font-label-technical text-label-technical text-on-surface font-bold mb-8">TRADITIONAL APPROACH</div>
<div class="flex flex-col space-y-4 mb-8">
<div class="p-4 border border-architectural-line bg-surface text-center opacity-50 font-medium">Strategy -&gt; Agency</div>
<div class="h-4 flex justify-center"><div class="w-px bg-architectural-line h-full"></div></div>
<div class="p-4 border border-architectural-line bg-surface text-center opacity-50 font-medium">Design -&gt; Different Agency</div>
<div class="h-4 flex justify-center"><div class="w-px bg-architectural-line h-full"></div></div>
<div class="p-4 border border-architectural-line bg-surface text-center opacity-50 font-medium">Development -&gt; Freelancer</div>
</div>
<div class="text-center font-label-technical text-label-technical text-error font-bold uppercase tracking-widest">Disconnected workflows</div>
</div>
<!-- PilotNemo -->
<div class="p-8 md:p-12 bg-surface relative overflow-hidden">
<div class="absolute top-0 right-0 w-32 h-32 bg-tech-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div class="font-label-technical text-label-technical text-tech-accent font-bold mb-8">PILOTNEMO</div>
<div class="p-6 border border-tech-accent/30 bg-surface shadow-sm mb-8">
<div class="flex flex-col space-y-2 font-body-md text-on-surface font-medium">
<div class="flex items-center gap-4"><span class="material-symbols-outlined text-tech-accent text-sm">check_circle</span> Strategy</div>
<div class="pl-4 border-l border-tech-accent/20 ml-2 h-4"></div>
<div class="flex items-center gap-4"><span class="material-symbols-outlined text-tech-accent text-sm">check_circle</span> Design</div>
<div class="pl-4 border-l border-tech-accent/20 ml-2 h-4"></div>
<div class="flex items-center gap-4"><span class="material-symbols-outlined text-tech-accent text-sm">check_circle</span> Development</div>
<div class="pl-4 border-l border-tech-accent/20 ml-2 h-4"></div>
<div class="flex items-center gap-4"><span class="material-symbols-outlined text-tech-accent text-sm">check_circle</span> Launch</div>
<div class="pl-4 border-l border-tech-accent/20 ml-2 h-4"></div>
<div class="flex items-center gap-4"><span class="material-symbols-outlined text-tech-accent text-sm">check_circle</span> Marketing &amp; Growth</div>
</div>
</div>
<div class="text-center font-label-technical text-label-technical text-tech-accent font-bold uppercase tracking-widest">ONE TEAM, ONE WORKFLOW</div>
</div>
</div>
</section>
<!-- SECTION 04 — WHAT WE BRING TO THE TABLE -->
<section class="mb-24">
<div class="flex items-center gap-2 mb-6">
<span class="material-symbols-outlined text-[10px] text-tech-accent">add</span>
<h2 class="font-label-technical text-label-technical text-on-surface font-bold uppercase tracking-widest">SECTION 04 — WHAT WE BRING TO THE TABLE</h2>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-architectural-line bg-surface">
<div class="p-6 border-b sm:border-b-0 sm:border-r border-architectural-line">
<h4 class="font-label-technical text-label-technical text-tech-accent font-bold mb-6">STRATEGY</h4>
<ul class="space-y-3 font-body-md text-on-surface-variant font-medium text-sm">
<li class="font-semibold">Digital Transformation</li>
<li class="font-semibold">Product Strategy</li>
<li class="font-semibold">Market Research</li>
<li class="font-semibold">Technical Architecture</li>
</ul>
</div>
<div class="p-6 border-b lg:border-b-0 lg:border-r border-architectural-line">
<h4 class="font-label-technical text-label-technical text-tech-accent font-bold mb-6">DESIGN</h4>
<ul class="space-y-3 font-body-md text-on-surface-variant font-medium text-sm">
<li class="font-semibold">UX/UI Design</li>
<li class="font-semibold">Brand Identity</li>
<li class="font-semibold">Prototyping</li>
<li class="font-semibold">Design Systems</li>
</ul>
</div>
<div class="p-6 border-b sm:border-b-0 sm:border-r border-architectural-line">
<h4 class="font-label-technical text-label-technical text-tech-accent font-bold mb-6">DEVELOPMENT</h4>
<ul class="space-y-3 font-body-md text-on-surface-variant font-medium text-sm">
<li class="font-semibold">Web Applications</li>
<li class="font-semibold">Mobile Apps</li>
<li class="font-semibold">Custom Software</li>
<li class="font-semibold">E-Commerce</li>
</ul>
</div>
<div class="p-6">
<h4 class="font-label-technical text-label-technical text-tech-accent font-bold mb-6">GROWTH</h4>
<ul class="space-y-3 font-body-md text-on-surface-variant font-medium text-sm">
<li class="font-semibold">SEO &amp; Content</li>
<li class="font-semibold">Performance Marketing</li>
<li class="font-semibold">Data &amp; Analytics</li>
<li class="font-semibold">CRO</li>
</ul>
</div>
</div>
</section>
<!-- CTA Section -->
<section class="border-t border-architectural-line pt-16 md:pt-24 pb-8 flex flex-col items-center justify-center text-center">
<h2 class="font-headline-md md:font-display-lg text-headline-md md:text-display-lg text-on-surface font-extrabold mb-6 max-w-4xl leading-tight">HAVE AN IDEA? LET'S TURN IT INTO SOMETHING REAL.</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant font-medium max-w-2xl mb-10">
    Whether you are starting from an idea, improving an existing product or looking to grow your digital presence, PilotNemo can help you plan, design, build and grow it.
</p>
<div class="flex flex-col sm:flex-row gap-4">
<button class="flex items-center justify-center gap-2 px-8 py-4 bg-tech-accent text-on-primary hover:bg-primary transition-colors font-label-technical text-label-technical font-bold uppercase tracking-widest rounded-sm group">
        START A CONVERSATION
        <span class="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
<button class="flex items-center justify-center gap-2 px-8 py-4 border border-architectural-line text-on-surface hover:bg-black/5 transition-colors font-label-technical text-label-technical font-bold uppercase tracking-widest rounded-sm group">
        EXPLORE OUR SERVICES
        <span class="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
</div>
</section>
</main>
<!-- Footer (Generated from JSON) -->
<footer class="w-full px-margin-mobile md:px-margin-desktop py-12 grid grid-cols-2 md:grid-cols-4 gap-gutter max-w-container-max-width mx-auto border-t border-architectural-line bg-structural-bg dark:bg-surface-dim">
<div class="col-span-2 md:col-span-1 mb-8 md:mb-0">
<span class="font-headline-md text-headline-md font-bold text-on-surface">PILOTNEMO</span>
<p class="font-body-md text-body-md text-on-surface-variant font-medium mt-4">Copyright © 2026 PILOTNEMO</p>
</div>
<div class="flex flex-col space-y-4">
<a class="font-label-technical text-label-technical text-on-surface-variant font-bold hover:text-on-surface dark:hover:text-surface-bright underline underline-offset-4 uppercase transition-colors" href="#">Services</a>
<a class="font-label-technical text-label-technical text-on-surface-variant font-bold hover:text-on-surface dark:hover:text-surface-bright underline underline-offset-4 uppercase transition-colors" href="#">Company</a>
</div>
<div class="flex flex-col space-y-4">
<a class="font-label-technical text-label-technical text-on-surface-variant font-bold hover:text-on-surface dark:hover:text-surface-bright underline underline-offset-4 uppercase transition-colors" href="#">Resources</a>
<a class="font-label-technical text-label-technical text-on-surface-variant font-bold hover:text-on-surface dark:hover:text-surface-bright underline underline-offset-4 uppercase transition-colors" href="#">Connect</a>
</div>
<div class="hidden md:flex justify-end items-end col-span-2 md:col-span-1">
<!-- Architectural detail -->
<div class="w-8 h-8 border-r border-b border-architectural-line relative">
<span class="material-symbols-outlined absolute -bottom-1 -right-1 text-[10px] text-muted-text">add</span>
</div>
</div>
</footer>


</body></html>

<!-- PilotNemo - Project Enquiry & Strategy Intake -->
<!DOCTYPE html><html class="scroll-smooth" lang="en" style=""><head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<title>PilotNemo - Start a Project</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700&amp;family=Space+Grotesk:wght@400;500;600&amp;family=Inter:wght@400;500&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<style>
        .material-symbols-outlined {
            font-family: 'Material Symbols Outlined';
            font-weight: normal;
            font-style: normal;
            font-size: 24px;
            line-height: 1;
            letter-spacing: normal;
            text-transform: none;
            display: inline-block;
            white-space: nowrap;
            word-wrap: normal;
            direction: ltr;
            -webkit-font-feature-settings: 'liga';
            -webkit-font-smoothing: antialiased;
        }
    </style>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-secondary-container": "#646468",
                        "on-tertiary": "#ffffff",
                        "muted-text": "#929292",
                        "tertiary-fixed": "#e3e2e4",
                        "secondary-container": "#e3e2e6",
                        "on-primary-fixed-variant": "#783200",
                        "primary": "#98440b",
                        "on-surface": "#1a1c1b",
                        "on-tertiary-fixed-variant": "#464749",
                        "primary-fixed-dim": "#ffb690",
                        "error": "#ba1a1a",
                        "surface-container-lowest": "#ffffff",
                        "surface-container-high": "#e8e8e5",
                        "on-secondary": "#ffffff",
                        "inverse-primary": "#ffb690",
                        "on-error-container": "#93000a",
                        "on-tertiary-container": "#fffdff",
                        "on-primary-container": "#fffeff",
                        "surface": "#f9f9f6",
                        "inverse-on-surface": "#f1f1ee",
                        "tertiary-fixed-dim": "#c7c6c8",
                        "architectural-line": "rgba(25, 25, 25, 0.12)",
                        "secondary-fixed-dim": "#c7c6ca",
                        "on-background": "#1a1c1b",
                        "on-surface-variant": "#55433a",
                        "secondary-fixed": "#e3e2e6",
                        "on-error": "#ffffff",
                        "glass-container": "rgba(32, 33, 36, 0.95)",
                        "surface-container-highest": "#e2e3e0",
                        "background": "#f9f9f6",
                        "inverse-surface": "#2f312f",
                        "on-primary": "#ffffff",
                        "surface-container-low": "#f4f4f1",
                        "tertiary-container": "#757577",
                        "error-container": "#ffdad6",
                        "surface-dim": "#dadad7",
                        "primary-container": "#b85c24",
                        "surface-container": "#eeeeeb",
                        "on-tertiary-fixed": "#1b1c1e",
                        "surface-tint": "#9a460d",
                        "surface-bright": "#f9f9f6",
                        "primary-fixed": "#ffdbca",
                        "tech-accent": "#b85c24",
                        "tertiary": "#5c5c5f",
                        "on-secondary-fixed": "#1a1b1e",
                        "outline": "#897268",
                        "secondary": "#5e5e62",
                        "on-primary-fixed": "#341100",
                        "structural-bg": "#f5f5f2",
                        "outline-variant": "#dcc1b5",
                        "surface-variant": "#e2e3e0",
                        "on-secondary-fixed-variant": "#46474a"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.125rem",
                        "lg": "0.25rem",
                        "xl": "0.5rem",
                        "full": "0.75rem"
                    },
                    "spacing": {
                        "unit": "8px",
                        "container-max-width": "1440px",
                        "gutter": "16px",
                        "margin-mobile": "16px",
                        "margin-desktop": "64px",
                        "grid-size": "16px"
                    },
                    "fontFamily": {
                        "label-small": ["Space Grotesk"],
                        "body-lg": ["Inter"],
                        "headline-lg-mobile": ["Plus Jakarta Sans"],
                        "label-technical": ["Space Grotesk"],
                        "headline-md": ["Plus Jakarta Sans"],
                        "body-md": ["Inter"],
                        "display-lg": ["Plus Jakarta Sans"],
                        "headline-lg": ["Plus Jakarta Sans"]
                    },
                    "fontSize": {
                        "label-small": ["10px", { "lineHeight": "1", "fontWeight": "400" }],
                        "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
                        "headline-lg-mobile": ["32px", { "lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                        "label-technical": ["10px", { "lineHeight": "1", "letterSpacing": "0.1em", "fontWeight": "500" }],
                        "headline-md": ["32px", { "lineHeight": "1.3", "fontWeight": "600" }],
                        "body-md": ["14px", { "lineHeight": "1.5", "fontWeight": "400" }],
                        "display-lg": ["72px", { "lineHeight": "1.1", "letterSpacing": "-0.04em", "fontWeight": "700" }],
                        "headline-lg": ["60px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700" }]
                    },
                    backgroundImage: {
                        'architectural-grid': `linear-gradient(to right, rgba(25, 25, 25, 0.05) 1px, transparent 1px),
                                             linear-gradient(to bottom, rgba(25, 25, 25, 0.05) 1px, transparent 1px)`
                    }
                }
            }
        }
    </script>
</head>
<body class="bg-structural-bg text-on-surface font-body-md min-h-screen relative overflow-x-hidden antialiased" style="background-image: theme('backgroundImage.architectural-grid'); background-size: 16px 16px;">
<!-- TopNavBar component -->
<nav class="fixed top-0 w-full z-50 flex justify-between items-center px-margin-desktop py-4 max-w-container-max-width mx-auto bg-glass-container/80 backdrop-blur-md border-b border-architectural-line transition-all duration-300">
<div class="font-headline-md text-headline-md font-bold tracking-tighter text-on-surface dark:text-surface-bright">PILOTNEMO</div>
<div class="hidden md:flex gap-8 items-center">
<a class="font-label-technical text-label-technical text-on-surface-variant dark:text-muted-text hover:text-primary dark:hover:text-tech-accent transition-colors" href="#">Work</a>
<a class="font-label-technical text-label-technical text-on-surface-variant dark:text-muted-text hover:text-primary dark:hover:text-tech-accent transition-colors" href="#">Services</a>
<a class="font-label-technical text-label-technical text-on-surface-variant dark:text-muted-text hover:text-primary dark:hover:text-tech-accent transition-colors" href="#">Process</a>
<a class="font-label-technical text-label-technical text-on-surface-variant dark:text-muted-text hover:text-primary dark:hover:text-tech-accent transition-colors" href="#">Team</a>
</div>
<button class="font-label-technical text-label-technical border border-tech-accent/30 text-primary dark:text-tech-accent px-4 py-2 hover:bg-black/5 transition-all">START A PROJECT</button>
</nav>
<!-- Main Content -->
<main class="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop pt-32 pb-24 min-h-screen">
<div class="grid grid-cols-1 md:grid-cols-12 gap-gutter relative">
<!-- Grid Lines Background Decoration -->
<div class="absolute inset-0 pointer-events-none hidden md:grid grid-cols-12 gap-gutter opacity-20">
<div class="col-span-1 border-r border-architectural-line h-full"></div>
<div class="col-span-1 border-r border-architectural-line h-full"></div>
<div class="col-span-1 border-r border-architectural-line h-full"></div>
<div class="col-span-1 border-r border-architectural-line h-full"></div>
<div class="col-span-1 border-r border-architectural-line h-full"></div>
<div class="col-span-1 border-r border-architectural-line h-full"></div>
<div class="col-span-1 border-r border-architectural-line h-full"></div>
<div class="col-span-1 border-r border-architectural-line h-full"></div>
<div class="col-span-1 border-r border-architectural-line h-full"></div>
<div class="col-span-1 border-r border-architectural-line h-full"></div>
<div class="col-span-1 border-r border-architectural-line h-full"></div>
<div class="col-span-1 border-r border-architectural-line h-full"></div>
</div>
<!-- Left Side: Form (7 columns) -->
<div class="md:col-span-7 pt-12 pr-0 md:pr-16 relative z-10">
<span class="font-label-technical text-label-technical text-primary tracking-widest uppercase mb-6 block border-b border-architectural-line pb-2 inline-block">05 / START A PROJECT</span>
<h1 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6 leading-tight">Have an idea? Let's build it.</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant mb-4 max-w-2xl">Tell us what you're building. We'll help you figure out what's next.</p>
<p class="font-body-md text-body-md text-muted-text mb-12 max-w-2xl border-l-2 border-primary/30 pl-4">Whether you're starting a new product, improving an existing platform or looking to grow your digital presence, share a few details about your requirements and our team will review your request.</p>
<form class="space-y-10">
<!-- Basic Info -->
<div class="space-y-8 mb-12">
  <div class="flex flex-col md:flex-row md:items-center gap-8">
    <label class="md:w-[35%] font-label-technical text-label-technical font-bold text-on-surface tracking-widest uppercase" for="name">Name *</label>
    <div class="relative md:w-[55%]">
      <input class="w-full bg-surface-container-low border border-on-surface/20 px-4 py-3 rounded-lg font-body-md text-on-surface focus:border-primary focus:ring-0 transition-all" id="name" placeholder="Enter your name" required="" type="text">
      <span class="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-muted-text text-sm">person</span>
    </div>
  </div>
  <div class="flex flex-col md:flex-row md:items-center gap-8">
    <label class="md:w-[35%] font-label-technical text-label-technical font-bold text-on-surface tracking-widest uppercase" for="email">Work Email *</label>
    <div class="relative md:w-[55%]">
      <input class="w-full bg-surface-container-low border border-on-surface/20 px-4 py-3 rounded-lg font-body-md text-on-surface focus:border-primary focus:ring-0 transition-all" id="email" placeholder="email@company.com" required="" type="email">
      <span class="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-muted-text text-sm">mail</span>
    </div>
  </div>
  <div class="flex flex-col md:flex-row md:items-center gap-8">
    <label class="md:w-[35%] font-label-technical text-label-technical font-bold text-on-surface tracking-widest uppercase" for="company">Company</label>
    <div class="relative md:w-[55%]">
      <input class="w-full bg-surface-container-low border border-on-surface/20 px-4 py-3 rounded-lg font-body-md text-on-surface focus:border-primary focus:ring-0 transition-all" id="company" placeholder="Your organization" type="text">
      <span class="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-muted-text text-sm">domain</span>
    </div>
  </div>
</div>
<!-- Services Needed (Chips) -->
<div class="pt-8 border-t border-architectural-line">
  <label class="font-label-technical text-label-technical text-on-surface font-bold block mb-6 uppercase tracking-widest">WHAT DO YOU NEED?</label>
  <div class="flex flex-wrap gap-3">
    <label class="cursor-pointer group">
      <input class="peer sr-only" name="service" type="checkbox" value="Mobile App">
      <span class="flex items-center gap-2 px-4 py-2 border border-architectural-line rounded-lg text-muted-text font-label-technical text-label-technical font-bold uppercase hover:border-primary/50 hover:bg-black/5 peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:text-primary transition-all">
        <span class="material-symbols-outlined text-sm">smartphone</span>
        MOBILE APP
      </span>
    </label>
    <label class="cursor-pointer group">
      <input class="peer sr-only" name="service" type="checkbox" value="Web Development">
      <span class="flex items-center gap-2 px-4 py-2 border border-architectural-line rounded-lg text-muted-text font-label-technical text-label-technical font-bold uppercase hover:border-primary/50 hover:bg-black/5 peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:text-primary transition-all">
        <span class="material-symbols-outlined text-sm">code</span>
        WEB DEVELOPMENT
      </span>
    </label>
    <label class="cursor-pointer group">
      <input class="peer sr-only" name="service" type="checkbox" value="UI UX Design">
      <span class="flex items-center gap-2 px-4 py-2 border border-architectural-line rounded-lg text-muted-text font-label-technical text-label-technical font-bold uppercase hover:border-primary/50 hover:bg-black/5 peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:text-primary transition-all">
        <span class="material-symbols-outlined text-sm">palette</span>
        UI / UX DESIGN
      </span>
    </label>
    <label class="cursor-pointer group">
      <input class="peer sr-only" name="service" type="checkbox" value="Digital Marketing">
      <span class="flex items-center gap-2 px-4 py-2 border border-architectural-line rounded-lg text-muted-text font-label-technical text-label-technical font-bold uppercase hover:border-primary/50 hover:bg-black/5 peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:text-primary transition-all">
        <span class="material-symbols-outlined text-sm">campaign</span>
        DIGITAL MARKETING
      </span>
    </label>
    <label class="cursor-pointer group">
      <input class="peer sr-only" name="service" type="checkbox" value="Branding">
      <span class="flex items-center gap-2 px-4 py-2 border border-architectural-line rounded-lg text-muted-text font-label-technical text-label-technical font-bold uppercase hover:border-primary/50 hover:bg-black/5 peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:text-primary transition-all">
        <span class="material-symbols-outlined text-sm">auto_awesome</span>
        BRANDING &amp; DESIGN
      </span>
    </label>
    <label class="cursor-pointer group">
      <input class="peer sr-only" name="service" type="checkbox" value="Custom Software">
      <span class="flex items-center gap-2 px-4 py-2 border border-architectural-line rounded-lg text-muted-text font-label-technical text-label-technical font-bold uppercase hover:border-primary/50 hover:bg-black/5 peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:text-primary transition-all">
        <span class="material-symbols-outlined text-sm">terminal</span>
        CUSTOM SOFTWARE
      </span>
    </label>
    <label class="cursor-pointer group">
      <input class="peer sr-only" name="service" type="checkbox" value="Other">
      <span class="flex items-center gap-2 px-4 py-2 border border-architectural-line rounded-lg text-muted-text font-label-technical text-label-technical font-bold uppercase hover:border-primary/50 hover:bg-black/5 peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:text-primary transition-all">
        <span class="material-symbols-outlined text-sm">more_horiz</span>
        OTHER
      </span>
    </label>
  </div>
</div>
<!-- Project Description -->
<div class="relative group pt-4 border-t border-architectural-line">
<textarea class="w-full bg-surface-container-low border border-on-surface/20 p-4 rounded-lg font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-0 transition-all peer placeholder-transparent resize-none" id="description" placeholder="Tell us about your project..." rows="4"></textarea>
<label class="absolute left-4 top-2 font-label-technical text-label-technical text-on-surface font-bold transition-all peer-focus:-top-3 peer-focus:left-2 peer-focus:bg-structural-bg peer-focus:px-2 peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:bg-structural-bg peer-[:not(:placeholder-shown)]:px-2 uppercase" for="description">Project Details</label>
</div>
<!-- Timeline & Budget Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-architectural-line">
<div>
<label class="font-label-technical text-label-technical text-on-surface-variant block mb-4 uppercase tracking-widest">EXPECTED TIMELINE</label>
<div class="flex flex-col gap-2">
<label class="cursor-pointer flex items-center group">
<input class="peer sr-only" name="timeline" type="radio" value="ASAP">
<div class="w-4 h-4 border border-architectural-line rounded-full mr-3 group-hover:border-primary peer-checked:border-primary peer-checked:border-[4px] transition-all"></div>
<span class="font-label-technical text-label-technical text-muted-text group-hover:text-on-surface peer-checked:text-primary uppercase">ASAP</span>
</label>
<label class="cursor-pointer flex items-center group">
<input class="peer sr-only" name="timeline" type="radio" value="1-3">
<div class="w-4 h-4 border border-architectural-line rounded-full mr-3 group-hover:border-primary peer-checked:border-primary peer-checked:border-[4px] transition-all"></div>
<span class="font-label-technical text-label-technical text-muted-text group-hover:text-on-surface peer-checked:text-primary uppercase">1–3 MONTHS</span>
</label>
<label class="cursor-pointer flex items-center group">
<input class="peer sr-only" name="timeline" type="radio" value="3-6">
<div class="w-4 h-4 border border-architectural-line rounded-full mr-3 group-hover:border-primary peer-checked:border-primary peer-checked:border-[4px] transition-all"></div>
<span class="font-label-technical text-label-technical text-muted-text group-hover:text-on-surface peer-checked:text-primary uppercase">3–6 MONTHS</span>
</label>
</div>
</div>
<div>
<label class="font-label-technical text-label-technical text-on-surface-variant block mb-4 uppercase tracking-widest">BUDGET RANGE</label>
<div class="relative">
<select class="w-full bg-white/30 backdrop-blur-sm border border-architectural-line py-3 px-4 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-0 appearance-none rounded-none cursor-pointer hover:bg-white/50 transition-colors">
<option disabled="" selected="" value="">Select Budget...</option>
<option value="undecided">Not decided yet</option>
<option value="under1l">Under ₹1L</option>
<option value="1l-5l">₹1L – ₹5L</option>
<option value="5l-10l">₹5L – ₹10L</option>
<option value="10l+">₹10L+</option>
</select>
<span class="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-muted-text pointer-events-none" data-icon="expand_more">expand_more</span>
</div>
</div>
</div>
<!-- Submit Area -->
<div class="pt-8 border-t border-architectural-line flex flex-col sm:flex-row items-center gap-6">
<button class="w-full sm:w-auto bg-on-surface text-on-tertiary font-label-technical text-label-technical uppercase px-8 py-4 tracking-widest hover:bg-primary transition-colors flex items-center justify-center gap-2 group" type="submit">
                            SEND PROJECT REQUEST
                            <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</button>
<p class="font-label-small text-label-small text-muted-text max-w-xs uppercase">We review every project request and get back with the next steps.</p>
</div>
</form>
</div>
<!-- Right Side: Visual (5 columns) -->
<div class="hidden md:block md:col-span-5 relative h-full min-h-[800px] border-l border-architectural-line pl-gutter z-10">
<div class="sticky top-32 h-[calc(100vh-8rem)]">
<!-- Main Visual Container -->
<div class="w-full h-3/4 relative overflow-hidden bg-glass-container p-4 border border-architectural-line group">
<!-- Decorative Grid Markers -->
<span class="absolute top-2 left-2 material-symbols-outlined text-muted-text text-[10px]" data-icon="add">add</span>
<span class="absolute top-2 right-2 material-symbols-outlined text-muted-text text-[10px]" data-icon="add">add</span>
<span class="absolute bottom-2 left-2 material-symbols-outlined text-muted-text text-[10px]" data-icon="add">add</span>
<span class="absolute bottom-2 right-2 material-symbols-outlined text-muted-text text-[10px]" data-icon="add">add</span>
<div class="w-full h-full relative border border-architectural-line/20 overflow-hidden bg-white/5">
<div class="absolute inset-0 bg-contain bg-center bg-no-repeat transition-all duration-700 ease-in-out" style="background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuDrP-zww0blUdHtUmLoCa-CASidtKkqYt9-HGD1iu0acJZ_lEGOqw-5syyvtY_rtbzeWU_f6vNvyGgQGWhEtn6CeqY9DxV4qdWGsGYubvT8ahW0ZgwN2Cx0Ik6cG0EMeHO19vVm74MZ0FtLtdudJxJ-W8GKxVh3fgugYkX6izZINBYafzcigJDZJcASWpSEomLnJw_N6ciVtQ8Y-iBuBPVVmByI5KMF8Vgv2ybQ-f6u0tK_QvUd7xOg6IAS8BEs3iUBfi8Zw1BiXX2l-zo&quot;);"></div>
<!-- Floating Labels over Visual -->
<div class="absolute top-8 right-8 bg-glass-container border border-architectural-line px-3 py-1">
<span class="font-label-technical text-label-technical text-on-tertiary tracking-widest uppercase">PRODUCT</span>
</div>
<div class="absolute bottom-16 left-8 bg-glass-container border border-architectural-line px-3 py-1">
<span class="font-label-technical text-label-technical text-on-tertiary tracking-widest uppercase">USER EXPERIENCE</span>
</div>
</div>
</div>
<!-- Restrained Typography Lockup -->
<div class="mt-8 border-l-2 border-primary/40 pl-4 h-1/4">
<p class="font-label-technical text-label-technical text-on-surface-variant uppercase tracking-[0.2em] leading-loose max-w-[200px]">
                            FROM FIRST IDEA TO FINAL PRODUCT.<br>
<span class="text-primary font-bold">DESIGN.</span><br>
<span class="text-primary font-bold">DEVELOPMENT.</span><br>
<span class="text-primary font-bold">GROWTH.</span><br>
                            ONE CONNECTED TEAM.
                        </p>
</div>
</div>
</div>
</div>
<!-- Bottom Section -->
<div class="mt-24 pt-12 border-t border-architectural-line flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative z-10">
<div>
<h3 class="font-headline-md text-headline-md text-on-surface mb-2">READY WHEN YOU ARE.</h3>
<p class="font-label-technical text-label-technical text-muted-text uppercase tracking-widest">START WITH AN IDEA. WE'LL HELP YOU BUILD THE REST.</p>
</div>
<button class="font-label-technical text-label-technical text-primary border border-primary px-6 py-3 hover:bg-primary hover:text-on-tertiary transition-colors flex items-center gap-2 uppercase tracking-widest">
                START YOUR PROJECT
                <span class="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</main>
<!-- Footer component -->
<footer class="w-full bg-structural-bg dark:bg-surface-dim border-t border-architectural-line">
<div class="w-full px-margin-desktop py-12 grid grid-cols-4 gap-gutter max-w-container-max-width mx-auto">
<div class="col-span-4 md:col-span-1 mb-8 md:mb-0">
<div class="font-headline-md text-headline-md font-bold text-on-surface mb-4">PILOTNEMO</div>
<div class="font-label-technical text-label-technical text-muted-text">Copyright © 2026 PILOTNEMO</div>
</div>
<div class="col-span-2 md:col-span-1">
<a class="font-label-technical text-label-technical text-muted-text hover:text-on-surface dark:hover:text-surface-bright underline underline-offset-4 block mb-2 transition-all" href="#">Services</a>
</div>
<div class="col-span-2 md:col-span-1">
<a class="font-label-technical text-label-technical text-muted-text hover:text-on-surface dark:hover:text-surface-bright underline underline-offset-4 block mb-2 transition-all" href="#">Company</a>
<a class="font-label-technical text-label-technical text-muted-text hover:text-on-surface dark:hover:text-surface-bright underline underline-offset-4 block mb-2 transition-all" href="#">Resources</a>
</div>
<div class="col-span-4 md:col-span-1">
<a class="font-label-technical text-label-technical text-muted-text hover:text-on-surface dark:hover:text-surface-bright underline underline-offset-4 block mb-2 transition-all" href="#">Connect</a>
</div>
</div>
</footer>


</body></html>