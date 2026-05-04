// import React, { useState } from 'react';
// import { 
//   Server, 
//   Wifi, 
//   Terminal, 
//   Wrench, 
//   Award, 
//   Briefcase, 
//   GraduationCap, 
//   Mail, 
//   Phone, 
//   MapPin, 
//   ChevronDown,
//   Cpu,
//   Globe,
//   Camera
// } from 'lucide-react';

// export default function App() {
//   const [activeTab, setActiveTab] = useState('experience');

//   const galleryImages = [
//     { src: "https://placehold.co/800x600/e2e8f0/475569?text=Datacenter+Rack", alt: "Datacenter Rack setup" },
//     { src: "/gallery2.jpg", alt: "Structured cabling work" },
//     { src: "https://placehold.co/800x600/e2e8f0/475569?text=Hardware+Diagnostics", alt: "Motherboard diagnostics" },
//     { src: "https://placehold.co/800x600/e2e8f0/475569?text=AI+Workflow", alt: "AI workflow analysis" },
//     { src: "https://placehold.co/800x600/e2e8f0/475569?text=Server+Installation", alt: "Server installation" },
//     { src: "/gallery6.jpg", alt: "Lecturing and IT training session" },
//   ];

//   const skills = [
//     {
//       category: "Datacenter Operations",
//       icon: <Server className="w-5 h-5 text-blue-600" />,
//       items: ["Rack and Stack", "Structured Cabling (Cat5e/Cat6/Fiber)", "PDUs", "Hardware Installation/Decommissioning", "Asset Management", "Environmental Monitoring"]
//     },
//     {
//       category: "Networking",
//       icon: <Wifi className="w-5 h-5 text-blue-600" />,
//       items: ["Cisco Routing & Switching", "VLANs", "TCP/IP", "DNS & DHCP", "Network Troubleshooting", "Port Security"]
//     },
//     {
//       category: "Systems & AI Tools",
//       icon: <Terminal className="w-5 h-5 text-blue-600" />,
//       items: ["Linux (Ubuntu, CentOS)", "Windows Server", "macOS", "Bash", "Python", "C++", "ROS", "ServiceNow", "Jira", "Machine Learning"]
//     },
//     {
//       category: "Hardware & Repair",
//       icon: <Wrench className="w-5 h-5 text-blue-600" />,
//       items: ["Server Components", "RAID Configuration", "Diagnostics", "PCBM/otherboard Repair", "Micro and Nano-Soldering", "Hardware Upgrades"]
//     }
//   ];

//   const experience = [
//     {
//       role: "Datacenter Operations Technician",
//       company: "Handy Hunts, Italy",
//       type: "Freelance",
//       date: "Jul 2024 - Present",
//       description: [
//         "Performed rack and stack operations, including rail installation and structured cabling.",
//         "Installed and decommissioned servers and network equipment following datacenter standards.",
//         "Monitored environmental conditions (temperature, humidity) and hardware health.",
//         "Supported capacity expansion and infrastructure deployment projects."
//       ]
//     },
//     {
//       role: "IT Support Engineer",
//       company: "Tech Domain / Solution Hub (Italy-Dispatch)",
//       type: "Freelance",
//       date: "Feb 2025 - Present",
//       description: [
//         "Delivered Tier 2/3 support for hardware, OS, and network issues under SLA constraints.",
//         "Deployed access points and IP cameras for enterprises like Adidas, Primark, Motorola, and ENG SPA.",
//         "Installed and configured routers, switches, and wireless networks.",
//         "Resolved incidents efficiently to minimize downtime through remote and on-site troubleshooting."
//       ]
//     },
//     {
//       role: "AI & Machine Learning Intern",
//       company: "iMouse Solutions, Italy",
//       type: "Internship",
//       date: "Dec 2024 - Jul 2025",
//       description: [
//         "Assisted in data preparation and workflow optimization for ML systems.",
//         "Improved system performance and stability through rigorous data analysis.",
//         "Collaborated with technical teams on dataset annotation and testing."
//       ]
//     },
//     {
//       role: "Technical Trainer & Network Admin",
//       company: "IOM & Khamsys Institute of Technology, Gambia",
//       type: "Full-time",
//       date: "Jan 2021 - Dec 2022",
//       description: [
//         "Managed campus network infrastructure (routers, switches, LAN).",
//         "Delivered hands-on training in electronics repair, IT fundamentals, and server management.",
//         "Provided technical support and troubleshooting for staff and students."
//       ]
//     },
//     {
//       role: "Founder & Lead Technical Engineer",
//       company: "B-Square Electronics, Gambia",
//       type: "Founder",
//       date: "Nov 2017 - Oct 2022",
//       description: [
//         "Built and managed an IT services business serving enterprise and government clients.",
//         "Led development of a biometric attendance system using facial recognition.",
//         "Managed end-to-end technical project delivery, network installations, and system setups."
//       ]
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-slate-50 font-sans text-slate-800 scroll-smooth">
//       {/* Navigation */}
//       <nav className="bg-white shadow-sm sticky top-0 z-50">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16 items-center">
//             <span className="font-bold text-xl text-slate-900 tracking-tight">BD<span className="text-blue-600">.</span></span>
//             <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
//               <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
//               <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
//               <a href="#gallery" className="hover:text-blue-600 transition-colors">Gallery</a>
//               <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
//               <a href="#education" className="hover:text-blue-600 transition-colors">Education</a>
//             </div>
//             <a href="mailto:aladra8@gmail.com" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors">
//               Contact Me
//             </a>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="bg-slate-900 text-white py-20 lg:py-32 relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent"></div>
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
//             <div className="lg:col-span-3">
//               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-6">
//                 <Globe className="w-4 h-4" />
//                 <span>Frankfurt, Germany | Open to Relocation</span>
//               </div>
//               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
//                 Hi, I'm Baba Drammeh. <br/>
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
//                   IT Infrastructure Engineer & AI Specialist.
//                 </span>
//               </h1>
//               <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-2xl">
//                 10+ years of hands-on experience in enterprise IT and now datacenter operations, server hardware, and SLA-driven troubleshooting, bridging the gap between physical infrastructure and advanced Computer Engineering.
//               </p>
              
//               <div className="flex flex-wrap gap-4">
//                 <a href="mailto:aladra8@gmail.com" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition-all">
//                   <Mail className="w-5 h-5" />
//                   aladra8@gmail.com
//                 </a>
//                 <a href="/Baba_Drammeh_CV.pdf" download className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
//                   Download CV
//                 </a>
//                 <div className="flex gap-4">
//                   <a href="https://linkedin.com/in/baba-drammeh" target="_blank" rel="noreferrer" className="flex items-center justify-center w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
//                   </a>
//                   <a href="https://github.com/Aladra8" target="_blank" rel="noreferrer" className="flex items-center justify-center w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path></svg>
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Profile Image Section */}
//             <div className="lg:col-span-2 flex justify-center lg:justify-end mt-12 lg:mt-0">
//               <div className="relative">
//                 <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>
//                 <img 
//                   src="baba-profile.jpg" 
//                   alt="Baba Drammeh" 
//                   className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 object-cover object-top rounded-full border-4 border-slate-800 shadow-2xl"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//             <div className="lg:col-span-2">
//               <h2 className="text-3xl font-bold text-slate-900 mb-6">Professional Summary</h2>
//               <p className="text-slate-600 text-lg leading-relaxed mb-6">
//                 I am a highly reliable, detail-oriented professional with extensive experience in fast-paced IT infractures such as DataCenters: Engineering and operations. My expertise spans rack and stack, server hardware and configurations, structured cabling, and critical issue resolution in enterprise environments like Motorola's Schio production site and ENG Italia.
//               </p>
//               <p className="text-slate-600 text-lg leading-relaxed mb-6">
//                 Recently, I have completed my M.Sc. in Computer Engineering (AI and Robotics), allowing me to combine deep, practical field experience with advanced technical knowledge in AI and Machine learning, system modeling, understanding and operations of Autonomous Robots and ROS, Robotic Hardware and data analytics. This unique blend of hands-on datacenter expertise and cutting-edge AI research enables me to approach IT infrastructure challenges with a holistic perspective, optimizing both physical and digital systems for maximum performance and reliability.
//               </p>

//               {/* Action Shot / Datacenter Image Section - TWO PICTURE LAYOUT */}
//               <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-slate-100">
//                   <img 
//                     src="/lab-action1.jpg" 
//                     alt="Datacenter Operations 1" 
//                     className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
//                   />
//                 </div>
//                 <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-slate-100">
//                   <img 
//                     src="/lab-action2.jpg" 
//                     alt="Datacenter Operations 2" 
//                     className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
//               <h3 className="font-semibold text-slate-900 mb-4 pb-4 border-b border-slate-200">Quick Details</h3>
//               <ul className="space-y-4">
//                 <li className="flex items-start gap-3">
//                   <MapPin className="w-5 h-5 text-blue-600 mt-0.5" />
//                   <div>
//                     <span className="block text-sm font-medium text-slate-900">Location</span>
//                     <span className="block text-sm text-slate-600">Frankfurt, Germany</span>
//                   </div>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <Phone className="w-5 h-5 text-blue-600 mt-0.5" />
//                   <div>
//                     <span className="block text-sm font-medium text-slate-900">Phone</span>
//                     <span className="block text-sm text-slate-600">+39 351 648 6976</span>
//                   </div>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <Globe className="w-5 h-5 text-blue-600 mt-0.5" />
//                   <div>
//                     <span className="block text-sm font-medium text-slate-900">Languages</span>
//                     <span className="block text-sm text-slate-600">English (Fluent), Italian (Basic)</span>
//                   </div>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <Briefcase className="w-5 h-5 text-blue-600 mt-0.5" />
//                   <div>
//                     <span className="block text-sm font-medium text-slate-900">Availability</span>
//                     <span className="block text-sm text-slate-600">Shift work, on-call, &gt;50kg capable</span>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section id="skills" className="py-20 bg-slate-50">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl font-bold text-slate-900 mb-4">Technical Expertise</h2>
//             <p className="text-slate-600 max-w-2xl mx-auto">A comprehensive toolkit spanning physical infrastructure, networking protocols, and modern software deployment.</p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {skills.map((skillGroup, index) => (
//               <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
//                 <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
//                   {skillGroup.icon}
//                 </div>
//                 <h3 className="text-lg font-bold text-slate-900 mb-4">{skillGroup.category}</h3>
//                 <ul className="space-y-2">
//                   {skillGroup.items.map((item, i) => (
//                     <li key={i} className="text-sm text-slate-600 flex items-center gap-2">
//                       <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>

//           <div className="mt-12 text-center">
//             <div className="inline-flex flex-wrap justify-center items-center gap-3 bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-100">
//               <Award className="w-5 h-5 text-amber-500" />
//               <span className="font-semibold text-slate-900">Certifications:</span>
//               <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">CCNA (Routing & Switching)</span>
//               <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">CompTIA A+</span>
//               <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">CompTIA Network+</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Photo Gallery Section */}
//       <section id="gallery" className="py-20 bg-white border-b border-slate-100">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center gap-3 mb-10">
//             <Camera className="w-8 h-8 text-blue-600" />
//             <h2 className="text-3xl font-bold text-slate-900">Project Gallery</h2>
//           </div>
//           <p className="text-slate-600 mb-10 max-w-2xl">
//             A visual overview of my hands-on work in datacenter environments, hardware deployments, and technical setups.
//           </p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {galleryImages.map((img, index) => (
//               <div key={index} className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-slate-100 aspect-video">
//                 <img 
//                   src={img.src} 
//                   alt={img.alt} 
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
//                   <span className="text-white font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
//                     {img.alt}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Experience & Education Section */}
//       <section id="experience" className="py-20 bg-slate-50">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-center mb-12">
//             <div className="inline-flex bg-slate-100 p-1 rounded-xl">
//               <button 
//                 onClick={() => setActiveTab('experience')}
//                 className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === 'experience' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
//               >
//                 Professional Experience
//               </button>
//               <button 
//                 onClick={() => setActiveTab('education')}
//                 className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === 'education' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
//               >
//                 Education & Projects
//               </button>
//             </div>
//           </div>

//           {activeTab === 'experience' && (
//             <div className="max-w-4xl mx-auto">
//               <div className="space-y-8">
//                 {experience.map((job, index) => (
//                   <div key={index} className="relative pl-8 sm:pl-0">
//                     <div className="sm:flex items-start gap-8">
//                       <div className="hidden sm:block w-32 shrink-0 text-right pt-1">
//                         <span className="text-sm font-medium text-blue-600">{job.date}</span>
//                       </div>
//                       <div className="absolute left-0 top-2 sm:static sm:w-auto w-3 h-3 bg-blue-200 border-2 border-blue-600 rounded-full mt-1.5 sm:mt-0 z-10"></div>
//                       <div className="hidden sm:block absolute left-[8.5rem] top-3 bottom-[-3rem] w-px bg-slate-200 last:hidden"></div>
                      
//                       <div className="flex-1 bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-blue-100 transition-colors">
//                         <div className="sm:hidden mb-2">
//                           <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-md">{job.date}</span>
//                         </div>
//                         <h3 className="text-xl font-bold text-slate-900">{job.role}</h3>
//                         <div className="text-slate-600 font-medium mb-4 flex items-center gap-2">
//                           {job.company} 
//                           <span className="text-xs bg-slate-200 text-slate-700 px-2 py-0.5 rounded-md">{job.type}</span>
//                         </div>
//                         <ul className="space-y-2">
//                           {job.description.map((desc, i) => (
//                             <li key={i} className="text-slate-600 text-sm flex items-start gap-2">
//                               <span className="text-blue-400 mt-1">•</span>
//                               {desc}
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {activeTab === 'education' && (
//             <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8" id="education">
//               <div className="space-y-8">
//                 <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-6">
//                   <GraduationCap className="text-blue-600" /> Education
//                 </h3>
                
//                 <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 relative overflow-hidden">
//                   <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-bl-full -mr-4 -mt-4 opacity-50"></div>
//                   <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full mb-4">Graduating 2026</span>
//                   <h4 className="text-lg font-bold text-slate-900">M.Sc. Computer Engineering</h4>
//                   <p className="text-blue-600 font-medium mb-2">AI and Robotics</p>
//                   <p className="text-slate-600 text-sm">University of Padova, Italy</p>
//                 </div>

//                 <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
//                   <span className="inline-block px-3 py-1 bg-slate-200 text-slate-700 text-xs font-bold rounded-full mb-4">Class of 2020</span>
//                   <h4 className="text-lg font-bold text-slate-900">B.Sc. Computer Science</h4>
//                   <p className="text-slate-600 text-sm mt-2">American International University West Africa</p>
//                 </div>
//               </div>

//               <div className="space-y-8">
//                 <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-6">
//                   <Cpu className="text-blue-600" /> Research & Projects
//                 </h3>

//                 <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
//                   <span className="text-sm font-medium text-blue-600 block mb-2">Apr 2025 - Oct 2025</span>
//                   <h4 className="text-lg font-bold text-slate-900 mb-1">Predictive Maintenance Systems</h4>
//                   <p className="text-slate-500 text-sm font-medium mb-4">University of Pisa, Italy (AI Research)</p>
//                   <ul className="space-y-2">
//                     <li className="text-slate-600 text-sm flex items-start gap-2">
//                       <span className="text-blue-400 mt-1">•</span>
//                       Conducted research on predictive maintenance using machine learning.
//                     </li>
//                     <li className="text-slate-600 text-sm flex items-start gap-2">
//                       <span className="text-blue-400 mt-1">•</span>
//                       Processed and analyzed datasets for reliability modeling.
//                     </li>
//                     <li className="text-slate-600 text-sm flex items-start gap-2">
//                       <span className="text-blue-400 mt-1">•</span>
//                       Contributed to evaluation of fault detection algorithms.
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-slate-900 py-12 text-center text-slate-400">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="flex justify-center gap-6 mb-8">
//             <a href="mailto:aladra8@gmail.com" className="hover:text-white transition-colors">
//               <Mail className="w-6 h-6" />
//             </a>
//             <a href="https://linkedin.com/in/baba-drammeh" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
//             </a>
//             <a href="https://github.com/Aladra8" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path></svg>
//             </a>
//           </div>
//           <p>&copy; {new Date().getFullYear()} Baba Drammeh. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { 
  Server, 
  Wifi, 
  Terminal, 
  Wrench, 
  Award, 
  Briefcase, 
  GraduationCap, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronDown,
  Cpu,
  Globe,
  Camera
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('experience');

  const galleryImages = [
    { src: "/gallery1.jpg", alt: "Datacenter Rack setup" },
    { src: "/gallery2.jpg", alt: "Structured cabling work" },
    { src: "/gallery3.jpg", alt: "Hardware diagnostics: Bsquare Electronics" },
    { src: "/gallery4.jpg", alt: "AI workflow analysis" },
    { src: "/gallery5.jpg", alt: "Electronic Repair Program Presentation: IOM" },
    { src: "/gallery6.jpg", alt: "Lecturing and IT training session" },
    { src: "https://placehold.co/800x600/e2e8f0/475569?text=Hardware+Diagnostics", alt: "Motherboard diagnostics" },
    { src: "https://placehold.co/800x600/e2e8f0/475569?text=AI+Workflow", alt: "AI workflow analysis" },
    { src: "https://placehold.co/800x600/e2e8f0/475569?text=Server+Installation", alt: "Server installation" },
  ];

  const skills = [
    {
      category: "Datacenter Operations",
      icon: <Server className="w-5 h-5 text-blue-600" />,
      items: ["Rack and Stack", "Structured Cabling (Cat5e/Cat6/Fiber)", "PDUs", "Hardware Installation/Decommissioning", "Asset Management", "Environmental Monitoring"]
    },
    {
      category: "Networking",
      icon: <Wifi className="w-5 h-5 text-blue-600" />,
      items: ["Cisco Routing & Switching", "VLANs", "TCP/IP", "DNS & DHCP", "Network Troubleshooting", "Port Security"]
    },
    {
      category: "Systems & AI Tools",
      icon: <Terminal className="w-5 h-5 text-blue-600" />,
      items: ["Linux (Ubuntu, CentOS)", "Windows Server", "macOS", "Bash", "Python", "C++", "ROS", "ServiceNow", "Jira", "Machine Learning"]
    },
    {
      category: "Hardware & Repair",
      icon: <Wrench className="w-5 h-5 text-blue-600" />,
      items: ["Server Components", "RAID Configuration", "Diagnostics", "PCBM/otherboard Repair", "Micro and Nano-Soldering", "Hardware Upgrades"]
    }
  ];

  const experience = [
    {
      role: "Datacenter Operations Technician",
      company: "Handy Hunts (Italy-Dispatch)",
      type: "Freelance",
      date: "Jul 2024 - Present",
      description: [
        "Performed rack and stack operations, including rail installation and structured cabling.",
        "Installed and decommissioned servers and network equipment following datacenter standards.",
        "Monitored environmental conditions (temperature, humidity) and hardware health.",
        "Supported capacity expansion and infrastructure deployment projects."
      ]
    },
    {
      role: "IT Support Engineer",
      company: "Tech Domain / Solution Hub / Beta Tech / Cure-IT (Italy-Dispatch)",
      type: "Freelance",
      date: "Feb 2025 - Present",
      description: [
        "Delivered Tier 2/3 support for hardware, OS, and network issues under SLA constraints.",
        "Deployed access points and IP cameras for enterprises like Adidas, Primark, Motorola, and ENG SPA.",
        "Installed and configured routers, switches, and wireless networks.",
        "Resolved incidents efficiently to minimize downtime through remote and on-site troubleshooting."
      ]
    },
    {
      role: "AI & Machine Learning Intern",
      company: "iMouse Solutions, Italy",
      type: "Internship",
      date: "Dec 2024 - Jul 2025",
      description: [
        "Assisted in data preparation and workflow optimization for ML systems.",
        "Improved system performance and stability through rigorous data analysis.",
        "Collaborated with technical teams on dataset annotation and testing."
      ]
    },
    {
      role: "Technical Trainer & Network Admin",
      company: "IOM & Khamsys Institute of Technology, Gambia",
      type: "Full-time",
      date: "Jan 2021 - Dec 2022",
      description: [
        "Managed campus network infrastructure (routers, switches, LAN).",
        "Delivered hands-on training in electronics repair, IT fundamentals, and server management.",
        "Provided technical support and troubleshooting for staff and students."
      ]
    },
    {
      role: "Founder & Lead Technical Engineer",
      company: "B-Square Electronics, Gambia",
      type: "Founder",
      date: "Nov 2017 - Oct 2022",
      description: [
        "Built and managed an IT services business serving enterprise and government clients.",
        "Led development of a biometric attendance system using facial recognition.",
        "Managed end-to-end technical project delivery, network installations, and system setups."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 scroll-smooth">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            
            {/* New Professional Clickable Logo */}
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
              className="cursor-pointer group"
            >
              <span className="font-black text-3xl text-slate-900 tracking-tighter group-hover:text-slate-700 transition-colors">
                BD<span className="text-blue-600">.</span>
              </span>
            </a>

            <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
              <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
              <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
              <a href="#gallery" className="hover:text-blue-600 transition-colors">Gallery</a>
              <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
              <a href="#education" className="hover:text-blue-600 transition-colors">Education</a>
            </div>
            <a href="mailto:aladra8@gmail.com" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors">
              Contact Me
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-6">
                <Globe className="w-4 h-4" />
                <span>Frankfurt, Germany | Open to Relocation</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Hi, I'm Baba Drammeh. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                  IT Infrastructure Ops & Computer Engineer (AI & Robotics).
                </span>
              </h1>
              <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-2xl">
                10+ years of hands-on experience in enterprise IT and now datacenter operations, server hardware, and SLA-driven troubleshooting, bridging the gap between physical infrastructure and advanced Computer Engineering.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="mailto:aladra8@gmail.com" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition-all">
                  <Mail className="w-5 h-5" />
                  aladra8@gmail.com
                </a>
                <a href="/Baba_Drammeh_CV.pdf" download className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  Download CV
                </a>
                <div className="flex gap-4">
                  <a href="https://linkedin.com/in/baba-drammeh" target="_blank" rel="noreferrer" className="flex items-center justify-center w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                  <a href="https://github.com/Aladra8" target="_blank" rel="noreferrer" className="flex items-center justify-center w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Profile Image Section */}
            <div className="lg:col-span-2 flex justify-center lg:justify-end mt-12 lg:mt-0">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>
                {/* Note: I added the leading slash '/' to baba-profile.jpg here so it loads on Vercel */}
                <img 
                  src="/baba-profile.jpg" 
                  alt="Baba Drammeh" 
                  className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 object-cover object-top rounded-full border-4 border-slate-800 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Professional Summary</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                I am a highly reliable, detail-oriented professional with extensive experience in fast-paced IT infractures such as DataCenters: Engineering and operations. My expertise spans rack and stack, server hardware and configurations, structured cabling, and critical issue resolution in enterprise environments like Motorola's Schio production site and ENG Italia.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Recently, I have completed my M.Sc. in Computer Engineering (AI and Robotics), allowing me to combine deep, practical field experience with advanced technical knowledge in AI and Machine learning, system modeling, understanding and operations of Autonomous Robots and ROS, Robotic Hardware and data analytics. This unique blend of hands-on datacenter expertise and cutting-edge AI research enables me to approach IT infrastructure challenges with a holistic perspective, optimizing both physical and digital systems for maximum performance and reliability.
              </p>

              {/* Action Shot / Datacenter Image Section - TWO PICTURE LAYOUT */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-slate-100">
                  <img 
                    src="/lab-action1.jpg" 
                    alt="Datacenter Operations 1" 
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-slate-100">
                  <img 
                    src="/lab-action2.jpg" 
                    alt="Datacenter Operations 2" 
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="font-semibold text-slate-900 mb-4 pb-4 border-b border-slate-200">Quick Details</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <span className="block text-sm font-medium text-slate-900">Location</span>
                    <span className="block text-sm text-slate-600">Frankfurt, Germany</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <span className="block text-sm font-medium text-slate-900">Phone</span>
                    <span className="block text-sm text-slate-600">+39 351 648 6976</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <span className="block text-sm font-medium text-slate-900">Languages</span>
                    <span className="block text-sm text-slate-600">English (Fluent), Italian (Basic)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Briefcase className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <span className="block text-sm font-medium text-slate-900">Availability</span>
                    <span className="block text-sm text-slate-600">Shift work, on-call, &gt;50kg capable</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Technical Expertise</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">A comprehensive toolkit spanning physical infrastructure, networking protocols, and modern software deployment.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  {skillGroup.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((item, i) => (
                    <li key={i} className="text-sm text-slate-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex flex-wrap justify-center items-center gap-3 bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-100">
              <Award className="w-5 h-5 text-amber-500" />
              <span className="font-semibold text-slate-900">Certifications:</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">CCNA (Routing & Switching)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">CompTIA A+</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">CompTIA Network+</span>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section id="gallery" className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <Camera className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-slate-900">Project Gallery</h2>
          </div>
          <p className="text-slate-600 mb-10 max-w-2xl">
            A visual overview of my hands-on work in datacenter environments, hardware deployments, and technical setups.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, index) => (
              <div key={index} className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-slate-100 aspect-video">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-white font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {img.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-slate-100 p-1 rounded-xl">
              <button 
                onClick={() => setActiveTab('experience')}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === 'experience' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Professional Experience
              </button>
              <button 
                onClick={() => setActiveTab('education')}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === 'education' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Education & Projects
              </button>
            </div>
          </div>

          {activeTab === 'experience' && (
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {experience.map((job, index) => (
                  <div key={index} className="relative pl-8 sm:pl-0">
                    <div className="sm:flex items-start gap-8">
                      <div className="hidden sm:block w-32 shrink-0 text-right pt-1">
                        <span className="text-sm font-medium text-blue-600">{job.date}</span>
                      </div>
                      <div className="absolute left-0 top-2 sm:static sm:w-auto w-3 h-3 bg-blue-200 border-2 border-blue-600 rounded-full mt-1.5 sm:mt-0 z-10"></div>
                      <div className="hidden sm:block absolute left-[8.5rem] top-3 bottom-[-3rem] w-px bg-slate-200 last:hidden"></div>
                      
                      <div className="flex-1 bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-blue-100 transition-colors">
                        <div className="sm:hidden mb-2">
                          <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-md">{job.date}</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">{job.role}</h3>
                        <div className="text-slate-600 font-medium mb-4 flex items-center gap-2">
                          {job.company} 
                          <span className="text-xs bg-slate-200 text-slate-700 px-2 py-0.5 rounded-md">{job.type}</span>
                        </div>
                        <ul className="space-y-2">
                          {job.description.map((desc, i) => (
                            <li key={i} className="text-slate-600 text-sm flex items-start gap-2">
                              <span className="text-blue-400 mt-1">•</span>
                              {desc}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'education' && (
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8" id="education">
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-6">
                  <GraduationCap className="text-blue-600" /> Education
                </h3>
                
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-bl-full -mr-4 -mt-4 opacity-50"></div>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full mb-4">Graduating 2026</span>
                  <h4 className="text-lg font-bold text-slate-900">M.Sc. Computer Engineering</h4>
                  <p className="text-blue-600 font-medium mb-2">AI and Robotics</p>
                  <p className="text-slate-600 text-sm">University of Padova, Italy</p>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <span className="inline-block px-3 py-1 bg-slate-200 text-slate-700 text-xs font-bold rounded-full mb-4">Class of 2020</span>
                  <h4 className="text-lg font-bold text-slate-900">B.Sc. Computer Science</h4>
                  <p className="text-slate-600 text-sm mt-2">American International University West Africa</p>
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-6">
                  <Cpu className="text-blue-600" /> Research & Projects
                </h3>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <span className="text-sm font-medium text-blue-600 block mb-2">Apr 2025 - Oct 2025</span>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Predictive Maintenance Systems</h4>
                  <p className="text-slate-500 text-sm font-medium mb-4">University of Pisa, Italy (AI Research)</p>
                  <ul className="space-y-2">
                    <li className="text-slate-600 text-sm flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      Conducted research on predictive maintenance using machine learning.
                    </li>
                    <li className="text-slate-600 text-sm flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      Processed and analyzed datasets for reliability modeling.
                    </li>
                    <li className="text-slate-600 text-sm flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      Contributed to evaluation of fault detection algorithms.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 text-center text-slate-400">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center gap-6 mb-8">
            <a href="mailto:aladra8@gmail.com" className="hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/baba-drammeh" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://github.com/Aladra8" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path></svg>
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} Baba Drammeh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}