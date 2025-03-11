module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/app/data/project.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = [
    {
        input: "featuredProject",
        return: [
            {
                name: "Coaca",
                image: "/coaca.png",
                description: "Simple Weather WebApp that shows the current weather of a city. It uses the OpenWeatherMap API to get the weather data.",
                github: "https://github.com/PatrickZ3/Coaca2",
                liveDemo: "https://coaca2.vercel.app"
            },
            {
                name: "Gridfolio",
                image: "/lightPortfolio.png",
                description: "Gridfolio is a modern, grid-based portfolio with a windowed UI, designed for an intuitive and stylish showcase of projects and experiences. It blends minimalism with interactivity, making self-presentation dynamic and engaging. ",
                github: "https://github.com/PatrickZ3/portoflioo",
                liveDemo: "https://portoflioo.vercel.app"
            },
            {
                name: "Professional Portfolio",
                image: "/portfolio.png",
                description: "A sleek and modern portfolio showcasing skills, experiences, and projects with a clean, intuitive design. Built for easy navigation and professional presentation, it highlights expertise in software engineering through an interactive, responsive layout.",
                github: "https://github.com/PatrickZ3/professionalPortfolio",
                liveDemo: "https://www.google.com"
            }
        ]
    },
    {
        input: "projectsList",
        return: [
            {
                name: "Coaca",
                image: "/coaca.png",
                description: "Simple Weather WebApp that shows the current weather of a city. It uses the OpenWeatherMap API to get the weather data.",
                github: "https://github.com/PatrickZ3/Coaca2",
                liveDemo: "https://coaca2.vercel.app"
            },
            {
                name: "Gridfolio",
                image: "/lightPortfolio.png",
                description: "Gridfolio is a modern, grid-based portfolio with a windowed UI, designed for an intuitive and stylish showcase of projects and experiences. It blends minimalism with interactivity, making self-presentation dynamic and engaging. ",
                github: "https://github.com/PatrickZ3/portoflioo",
                liveDemo: "https://portoflioo.vercel.app"
            },
            {
                name: "Coaca",
                image: "/coaca.png",
                description: "Simple Weather WebApp that shows the current weather of a city. It uses the OpenWeatherMap API to get the weather data.",
                github: "https://github.com/PatrickZ3/Coaca2",
                liveDemo: "https://coaca2.vercel.app"
            },
            {
                name: "Gridfolio",
                image: "/lightPortfolio.png",
                description: "Gridfolio is a modern, grid-based portfolio with a windowed UI, designed for an intuitive and stylish showcase of projects and experiences. It blends minimalism with interactivity, making self-presentation dynamic and engaging. ",
                github: "https://github.com/PatrickZ3/portoflioo",
                liveDemo: "https://portoflioo.vercel.app"
            },
            {
                name: "Coaca",
                image: "/coaca.png",
                description: "Simple Weather WebApp that shows the current weather of a city. It uses the OpenWeatherMap API to get the weather data.",
                github: "https://github.com/PatrickZ3/Coaca2",
                liveDemo: "https://coaca2.vercel.app"
            },
            {
                name: "Gridfolio",
                image: "/lightPortfolio.png",
                description: "Gridfolio is a modern, grid-based portfolio with a windowed UI, designed for an intuitive and stylish showcase of projects and experiences. It blends minimalism with interactivity, making self-presentation dynamic and engaging. ",
                github: "https://github.com/PatrickZ3/portoflioo",
                liveDemo: "https://portoflioo.vercel.app"
            },
            {
                name: "Coaca",
                image: "/coaca.png",
                description: "Simple Weather WebApp that shows the current weather of a city. It uses the OpenWeatherMap API to get the weather data.",
                github: "https://github.com/PatrickZ3/Coaca2",
                liveDemo: "https://coaca2.vercel.app"
            },
            {
                name: "Gridfolio",
                image: "/lightPortfolio.png",
                description: "Gridfolio is a modern, grid-based portfolio with a windowed UI, designed for an intuitive and stylish showcase of projects and experiences. It blends minimalism with interactivity, making self-presentation dynamic and engaging. ",
                github: "https://github.com/PatrickZ3/portoflioo",
                liveDemo: "https://portoflioo.vercel.app"
            }
        ]
    }
];
}}),
"[project]/src/app/allProject/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AllProject)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$project$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data/project.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function AllProject() {
    const allProjects = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$project$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].find((item)=>item.input === "projectsList")?.return || [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: "/arrow.png",
                alt: "arrow",
                className: "backArrow",
                width: 30,
                height: 30,
                style: {
                    rotate: "90deg"
                },
                onClick: ()=>router.push("/")
            }, void 0, false, {
                fileName: "[project]/src/app/allProject/page.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "allproject-container",
                children: allProjects.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "allproject-detail-container color-container flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: project.image,
                                alt: project.name,
                                className: "project-img",
                                width: 400,
                                height: 300
                            }, void 0, false, {
                                fileName: "[project]/src/app/allProject/page.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "skills-sub-title",
                                children: project.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/allProject/page.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "project-description",
                                children: project.description
                            }, void 0, false, {
                                fileName: "[project]/src/app/allProject/page.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "btn-container",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btnProj btn-color-2 project-btn flex items-center gap-1",
                                        onClick: ()=>window.open(project.github, '_blank'),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/github.png",
                                                alt: "GitHub",
                                                className: "w-4 h-4 github-icon",
                                                width: 20,
                                                height: 20
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/allProject/page.tsx",
                                                lineNumber: 46,
                                                columnNumber: 17
                                            }, this),
                                            "Github"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/allProject/page.tsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btnProj btn-color-2 project-btn flex items-center gap-1",
                                        onClick: ()=>window.open(project.liveDemo, '_blank'),
                                        children: [
                                            "Live Demo",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/external.png",
                                                alt: "external",
                                                className: "w-4 h-4 github-icon",
                                                width: 20,
                                                height: 20
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/allProject/page.tsx",
                                                lineNumber: 57,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/allProject/page.tsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/allProject/page.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/src/app/allProject/page.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/allProject/page.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/allProject/page.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__659233bd._.js.map