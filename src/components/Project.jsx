import { useState } from "react";

const projectsData = [
    {
        id: 1,
        title: "Portfolio Website",
        category: "Frontend",
        description: "Modern portofolio saya yang menampilkan proyek dengan animasi halus",
        technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
        icon: "bx bx-briefcase",
        github: "https://github.com/bazwaariii/Portofolio",
        live: "https://portfolio-demo.com",
        color: "#198754"
    },
    {
        id: 2,
        title: "Website Mitra Punjung Rejeki Motor",
        category: "Frontend",
        description: "Pembuatan website untuk membantu usaha mitra UMKM",
        technologies: ["Vscode", "MySQL", "Cpanel", "Bootstrap"],
        icon: "bx bx-briefcase",
        github: "https://github.com/dyatmikawirawan22/UAS_PEMWEB_Bengkel",
        live: "http://punjungrejekimotor.biz.id",
        color: "#198754"
    },
    {
        id: 3,
        title: "Aplikasi BITWALLET",
        category: "UI/UX",
        description: "Aplikasi untuk menyimpan, mengelola, dan melakukan transaksi aset kripto secara aman, cepat, dan mudah",
        technologies: ["Figma"],
        icon: "bx bxl-figma",
        live: "https://www.figma.com/proto/nY4vuLEVKuWmFFUv8CEZJb/PROJECT-PRIBADI?node-id=144-3110&t=ujWe0s5mU0JvTkOP-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
        color: "#dc3545"
    },
    {id: 4,
        title: "Aplikasi Velocity",
        category: "UI/UX",
        description: "Aplikasi smart trafic untuk memantau lalu lintas secara real time",
        technologies: ["Figma"],
        icon: "bx bxl-figma",
        live: "https://www.figma.com/proto/0yxMxgufRYcF3H7Myk4zuq/VELOCITY?node-id=1-7&p=f&t=RNM6mBneqvKyIUmv-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
        color: "#dc3545"
    },
    {
        id: 5,
        title: "Aplikasi Home Fitness",
        category: "UI/UX",
        description: "Aplikasi untuk latihan olahraga dan mengatur nutrisi",
        technologies: ["Figma"],
        icon: "bx bxl-figma",
        live: "https://www.figma.com/proto/inaKd2yHjKOC1YNSwUdpR4/Home-Fitness?t=RNM6mBneqvKyIUmv-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=3-2&starting-point-node-id=145%3A592",
        color: "#dc3545"
    },
    {
        id: 6,
        title: "Prediksi Penyakit Jantung",
        category: "Machine-Learning",
        description: "Memprediksi pasien dengan indikasi penyakit jantung dengan machine learning menggunakan metode lightGBM",
        technologies: ["Python", "Google Colab", "LightGBM"],
        icon: "bx bx-dna",
        github: "https://github.com/bazwaariii/prediksi_penyakitjantung",
        live: null,
        color: "#20c997"
    },
    {
        id: 7,
        title: "Analisis Aspek yang Berkontribusi",
        category: "Machine-Learning",
        description: "Menganalis aspek yang berkontribusi terhadap literasi informasi mahasiswa Surabaya menggunakan metode Chi Square",
        technologies: ["Python", "Google Colab"],
        icon: "bx bx-chart",
        github: "https://github.com/bazwaariii/prediksi_penyakitjantung",
        live: null,
        color: "#1b7599ff"
    },
     {
        id: 8,
        title: "Sistem ATM",
        category: "Machine-Learning",
        description: "Simulasi Sistem ATM Digital menggunakan Python",
        technologies: ["Python", "Vscode"],
        icon: "bx bx-chart",
        github: "https://github.com/bazwaariii/Sistem-ATM-Digital",
        live: null,
        color: "#1b7599ff"
    },
    {
        id: 9,
        title: "Aplikasi Keuangan",
        category: "Frontend",
        description: "Pengembangan aplikasi website kuangan dengan menggunakan PDO",
        technologies: ["XAMPP", "MySQL", "VsCode"],
        icon: "bx bx-wallet-alt",
        github: "https://github.com/bazwaariii/Aplikasi-Website-menggunakan-PDO",
        live: null,
        color: "#fd7e14"
    },
    {
        id: 10,
        title: "Aplikasi Absensi",
        category: "Frontend",
        description: "Pengembangan aplikasi website kuangan dengan menggunakan PDO",
        technologies: ["Java JDK 8", "XAMPP", "MySQL", "CMD", "Vscode", "Git"],
        icon: "bx bx-clipboard",
        github: "https://github.com/UrayMR/aplikasiabsensi",
        live: null,
        color: "#fd7e14"
    },
];

const Projects = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [hoveredProject, setHoveredProject] = useState(null);

    const getColorClasses = (color) => {
        const colorMap = {
            '#0d6efd': { bg: 'bg-blue-500', text: 'text-blue-500', bgLight: 'bg-blue-50', border: 'border-blue-500' },
            '#198754': { bg: 'bg-green-500', text: 'text-green-500', bgLight: 'bg-green-50', border: 'border-green-500' },
            '#fd7e14': { bg: 'bg-orange-500', text: 'text-orange-500', bgLight: 'bg-orange-50', border: 'border-orange-500' },
            '#6610f2': { bg: 'bg-purple-500', text: 'text-purple-500', bgLight: 'bg-purple-50', border: 'border-purple-500' },
            '#dc3545': { bg: 'bg-red-500', text: 'text-red-500', bgLight: 'bg-red-50', border: 'border-red-500' },
            '#20c997': { bg: 'bg-teal-500', text: 'text-teal-500', bgLight: 'bg-teal-50', border: 'border-teal-500' }
        };
        return colorMap[color] || colorMap['#0d6efd'];
    };

    const filteredProjects = activeTab === 'all'
        ? projectsData
        : projectsData.filter(project => project.category.toLowerCase() === activeTab);

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden" id="projects">
            <div className="container">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                            Projects & <span className="text-blue-600 dark:text-blue-400">Portfolio</span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            A showcase of my work, demonstrating technical expertise and problem-solving skills across various domains
                        </p>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex justify-center mb-12" data-aos="fade-up">
                        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 bg-white dark:bg-gray-900 p-2 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 overflow-x-auto sm:flex-nowrap">
                            <button
                                onClick={() => setActiveTab('all')}
                                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 text-sm sm:text-base ${activeTab === 'all'
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                                    }`}
                            >
                                <i className="bx bx-grid-alt text-lg sm:text-xl"></i>
                                <span>All</span>
                            </button>
                            <button
                                onClick={() => setActiveTab('frontend')}
                                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 text-sm sm:text-base ${activeTab === 'frontend'
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                                    }`}
                            >
                                <i className="bx bx-laptop text-lg sm:text-xl"></i>
                                <span>Frontend</span>
                            </button>
                            <button
                                onClick={() => setActiveTab('ui/ux')}
                                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 text-sm sm:text-base ${activeTab === 'ui/ux'
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                                    }`}
                            >
                                <i className="bx bx-server text-lg sm:text-xl"></i>
                                <span>UI/UX</span>
                            </button>
                            <button
                                onClick={() => setActiveTab('machine-learning')}
                                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 text-sm sm:text-base ${activeTab === 'machine-learning'
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                                    }`}
                            >
                                <i className="bx bx-code-curly text-lg sm:text-xl"></i>
                                <span>Machine Learning</span>
                            </button>
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.map((project) => {
                            const colorClasses = getColorClasses(project.color);
                            return (
                                <div
                                    key={project.id}
                                    className={`group relative bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${hoveredProject === project.id ? colorClasses.border : 'border-transparent'
                                        } cursor-pointer ${hoveredProject === project.id
                                            ? 'z-[20] -translate-y-2'
                                            : 'z-0 hover:-translate-y-1'
                                        }`}
                                    onMouseEnter={() => setHoveredProject(project.id)}
                                    onMouseLeave={() => setHoveredProject(null)}
                                >

                                    <div className="text-center opacity-100">
                                        <div className={`w-16 h-16 ${colorClasses.bg} rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg transition-all duration-300 ${hoveredProject === project.id ? 'scale-110 rotate-12' : ''}`}>
                                            <i className={`bx ${project.icon} text-2xl`}></i>
                                        </div>
                                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                            {project.title}
                                        </h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap justify-center gap-2 mb-4">
                                            {project.technologies.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className={`text-xs font-semibold ${colorClasses.bgLight} ${colorClasses.text} px-2 py-1 rounded-full`}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex justify-center space-x-4">
                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`text-sm ${colorClasses.text} hover:underline flex items-center space-x-1`}
                                                >
                                                    <i className="bx bxl-github text-lg"></i>
                                                    <span>GitHub</span>
                                                </a>
                                            )}
                                            {project.live && (
                                                <a
                                                    href={project.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`text-sm ${colorClasses.text} hover:underline flex items-center space-x-1`}
                                                >
                                                    <i className="bx bx-link-external text-lg"></i>
                                                    <span>Live Demo</span>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;