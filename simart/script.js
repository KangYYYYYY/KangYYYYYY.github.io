const i18n = {
  en: {
    navOverview: "Overview",
    navArchitecture: "Architecture",
    navTeam: "Team",

    heroSubtitle:
      "A Unified and Open Real-world Multimodal Simulation Platform for 6G Integrated Sensing and Communication",
    heroCode: "Code",
    heroPaper: "Paper",
    heroVideo: "Bilibili",

    metaLabel: "Paper",
    metaAuthors: "Authors",
    metaTopic: "Topic",
    metaSource: "Open Source",
    metaPaper: "Paper",
    metaPaperLink: "arxiv.org/abs/2605.13309",
    metaVideo: "Bilibili",
    metaVideoLink: "bilibili.com/video/BV12e5R6BEqV",

    researchKicker: "Research Brief",
    researchTitle: "From \"Tool Tinkering\" to a Unified Simulation Pipeline",
    researchLead:
      "6G ISAC demands visual, LiDAR, IMU, GPS, and wireless data in one pipeline — but existing simulators each cover only half the problem.",
    researchBody:
      "SimART bridges the gap with ROS: a shared clock and coordinate frame connect AirSim, Sionna RT/SYS, and CKM generation. A full session is recorded as one rosbag file.",

    contrib1Title: "Platform Contribution",
    contrib1Body:
      "Connects physical sensing, ray tracing, PHY/MAC wireless evaluation, and CKM construction into a modular workflow.",
    contrib2Title: "Data Contribution",
    contrib2Body:
      "All sensor streams, channels, KPIs, and beam labels share a common clock and coordinate frame — ideal for multimodal learning.",
    contrib3Title: "Scenario Contribution",
    contrib3Body:
      "Supports real OpenStreetMap maps and user-defined layouts, generating both visual and electromagnetic assets.",

    problemKicker: "Problem Context",
    problemTitle: "Key Gaps in ISAC Dataset Generation",
    prob1Title: "Robotic Simulators",
    prob1Body:
      "CARLA, AirSim, Gazebo, and Isaac Sim handle 3D physics, cameras, LiDAR, and platform motion, but wireless propagation and link evaluation are limited.",
    prob2Title: "Wireless Simulation Tools",
    prob2Body:
      "Sionna RT/SYS, DeepMIMO, and Wireless InSite excel at channel and link analysis, but lack onboard sensor and closed-loop robot motion capabilities.",
    prob3Body:
      "Combines mature tools through ROS contracts so the same backend can serve aerial, ground, indoor, and maritime ISAC scenarios.",

    archKicker: "Architecture",
    archTitle: "ROS as the Spatio-Temporal Backbone",
    archBody:
      "Four modules — physics & sensing, ray tracing, link evaluation, and CKM — exchange data over standard ROS topics and custom SimART messages.",
    archCaption:
      "Architecture of SimART and the resulting multimodal ISAC dataset.",

    mod1Title: "Physics and Sensing",
    mod1Body:
      "Publishes platform pose, RGB/Depth/Semantic images, LiDAR point cloud, IMU, GPS, and ground truth.",
    mod2Title: "Ray Tracing",
    mod2Body:
      "Computes propagation paths, CIR, delay, angle, and Doppler using spatially aligned simplified meshes.",
    mod3Title: "Link and System",
    mod3Body:
      "Evaluates SINR, BLER, achievable rate, and optimal beam index via Sionna SYS.",
    mod4Title: "CKM Generator",
    mod4Body:
      "Scans channel and link metrics across grid positions to produce multi-layer channel knowledge maps.",

    sceneKicker: "Scene Construction",
    sceneTitle: "One Scene, Two Asset Sets",
    sceneBody:
      "Visual and electromagnetic assets are built separately but share a single coordinate frame, keeping observations aligned with propagation paths.",
    sceneLi1:
      "Real regions: extract roads, buildings, and geographic elements from OpenStreetMap.",
    sceneLi2:
      "Custom layouts: construct controlled scenes via RoadRunner, Unreal Engine, or custom meshes.",
    sceneLi3:
      "EM conversion: apply geometry simplification, edge preservation, and material assignment with Blender scripts.",
    sceneCap1: "High-fidelity visual scene",
    sceneCap2: "Simplified RT mesh",

    dataKicker: "Multimodal Dataset",
    dataTitle: "One Simulation, One Complete Recording",
    dataBody:
      "Modules publish under a shared clock; rosbag captures everything in one session, fully compatible with ROS tools — rviz, rqt bag, SLAM, and perception pipelines.",
    dataCap1: "RGB image of UAV motion",
    dataCap2: "Depth map of UAV motion",
    dataCap3: "LiDAR point cloud stream",
    dataCap4: "Semantic segmentation of UAV motion",
    dataCap5: "Ray-traced propagation paths",

    ckmKicker: "Channel Knowledge Map",
    ckmTitle: "Turning Channel Statistics into Spatial Priors",
    ckmBody:
      "The CKM generator grids the region, computing per-cell channel statistics and link metrics as spatial priors for ISAC learning.",
    ckmCap1: "Path loss",
    ckmCap2: "Received power",
    ckmCap3: "Achievable rate",
    ckmCap4: "Effective SINR",

    valueKicker: "Research Value",
    valueTitle: "Cross-Scenario ISAC Algorithm Validation",
    use1Title: "Aerial ISAC",
    use1Body:
      "Sensing-assisted communication for UAVs, low-altitude economy, and urban air mobility.",
    use2Title: "Connected Driving",
    use2Body:
      "Joint sensing, localization, and beam management for autonomous driving and V2X.",
    use3Title: "Indoor Robotics",
    use3Body:
      "Coupled connectivity and sensing for factory and warehouse robots in rich multipath.",
    use4Title: "Maritime ISAC",
    use4Body:
      "Swap the front-end simulator while reusing the back-end wireless and CKM generation.",

    teamKicker: "Project Credits",
    teamTitle: "Team",
    teamNameKang: "Kang Yan",
    teamNameCao: "Yuqi Cao",
    teamNameLi: "Jiaqi Li",
    teamNameXiang: "Luping Xiang",
    teamNameYang: "Kun Yang",
    teamRolePhd: "Ph.D. Student",
    teamRoleMs: "M.S. Student",
    teamRoleAssistantProfessor: "Assistant Professor",
    teamRoleProfessor: "Professor",
    teamAffilUestc: "University of Electronic Science and Technology of China",
    teamAffilNju: "Nanjing University",

    footerNote:
      "Based on the manuscript content provided in this workspace. This is an independent promotional page, not an official IEEE publication page.",
    footerCode: "Code",
    footerPaper: "Paper",
    footerVideo: "Bilibili",
    footerTop: "Back to top",
    footerUpdated: "Last updated",
    footerPageViews: "SimART page views",
    comingSoon: "Coming Soon",
  },

  zh: {
    navOverview: "概述",
    navArchitecture: "系统架构",
    navTeam: "团队",

    heroSubtitle:
      "面向6G通感一体化的统一开源真实世界多模态仿真平台",
    heroCode: "代码",
    heroPaper: "论文",
    heroVideo: "哔哩哔哩",

    metaLabel: "论文",
    metaAuthors: "作者",
    metaTopic: "主题",
    metaSource: "开源地址",
    metaPaper: "论文",
    metaPaperLink: "arxiv.org/abs/2605.13309",
    metaVideo: "哔哩哔哩",
    metaVideoLink: "bilibili.com/video/BV12e5R6BEqV",

    researchKicker: "研究简介",
    researchTitle: "从\"拼工具\"到\"统一仿真管线\"",
    researchLead:
      "6G ISAC 需要视觉、LiDAR、IMU、GPS 和无线数据协同——现有仿真器各管一半，缺少统一的时空同步接口。",
    researchBody:
      "SimART 用 ROS 桥接两端：统一时钟和坐标系连接 AirSim、Sionna RT/SYS 与 CKM 生成模块，完整会话记录为单个 rosbag。",

    contrib1Title: "平台级贡献",
    contrib1Body:
      "把物理传感、射线追踪、PHY/MAC 级无线评估和 CKM 构建连接为模块化流程。",
    contrib2Title: "数据级贡献",
    contrib2Body:
      "所有传感器流、信道、KPI 与波束标签共享时钟和坐标框架，天然适合多模态学习。",
    contrib3Title: "场景级贡献",
    contrib3Body:
      "支持 OpenStreetMap 真实地图和用户自定义布局，并生成视觉资产与电磁资产。",

    problemKicker: "问题背景",
    problemTitle: "ISAC 数据集生成的关键断点",
    prob1Title: "机器人仿真器",
    prob1Body:
      "CARLA、AirSim、Gazebo、Isaac Sim 可模拟 3D 物理、相机、LiDAR 和平台运动，但无线传播和链路评估能力有限。",
    prob2Title: "无线仿真工具",
    prob2Body:
      "Sionna RT/SYS、DeepMIMO、Wireless InSite 适合信道和链路分析，但通常缺少车载/机载传感器和机器人运动闭环。",
    prob3Body:
      "用 ROS 契约把成熟工具组合起来，让同一套后端可服务空中、地面、室内、海事等不同 ISAC 场景。",

    archKicker: "系统架构",
    archTitle: "ROS 作为时空一致性的主干",
    archBody:
      "物理感知、射线追踪、链路评估、CKM 四大模块通过标准 ROS topic 和自定义 SimART message 交换数据。",
    archCaption: "SimART 架构及生成的多模态 ISAC 数据集。",

    mod1Title: "物理与感知",
    mod1Body:
      "发布平台位姿、RGB/Depth/Semantic 图像、LiDAR 点云、IMU、GPS 和 ground truth。",
    mod2Title: "射线追踪",
    mod2Body:
      "基于空间对齐的简化网格计算传播路径、CIR、时延、角度和多普勒信息。",
    mod3Title: "链路与系统",
    mod3Body:
      "基于 Sionna SYS 评估 SINR、BLER、可达速率和最优波束索引。",
    mod4Title: "CKM 生成器",
    mod4Body:
      "在网格位置扫描信道与链路指标，生成多层 channel knowledge map。",

    sceneKicker: "场景构建",
    sceneTitle: "同一场景，两套资产",
    sceneBody:
      "视觉资产与电磁资产分开构建，共享同一坐标系，保证视觉观测与传播路径一致。",
    sceneLi1:
      "真实区域：从 OpenStreetMap 提取道路、建筑和地理元素。",
    sceneLi2:
      "自定义布局：通过 RoadRunner、Unreal Engine 或自建 mesh 构造受控场景。",
    sceneLi3:
      "电磁转换：使用 Blender 脚本进行几何简化、边缘保留和材料赋值。",
    sceneCap1: "高保真视觉场景",
    sceneCap2: "简化 RT 网格",

    dataKicker: "多模态数据集",
    dataTitle: "一次仿真，记录完整会话",
    dataBody:
      "各模块在统一时钟下发布输出，rosbag 一次性记录，兼容 ROS 生态全工具链——rviz、rqt bag、SLAM 及感知管线。",
    dataCap1: "无人机 RGB 图像",
    dataCap2: "无人机深度图",
    dataCap3: "LiDAR 点云流",
    dataCap4: "无人机语义分割",
    dataCap5: "射线追踪传播路径",

    ckmKicker: "信道知识地图",
    ckmTitle: "把信道统计变成空间先验",
    ckmBody:
      "CKM 生成器将区域网格化，逐格计算信道统计与链路指标，为 ISAC 学习提供空间先验。",
    ckmCap1: "路径损耗",
    ckmCap2: "接收功率",
    ckmCap3: "可达速率",
    ckmCap4: "有效 SINR",

    valueKicker: "研究价值",
    valueTitle: "适合跨场景 ISAC 算法验证",
    use1Title: "空中 ISAC",
    use1Body:
      "UAV、低空经济和城市空中移动平台的感知辅助通信。",
    use2Title: "网联驾驶",
    use2Body:
      "自动驾驶与 V2X 场景中的联合感知、定位和波束管理。",
    use3Title: "室内机器人",
    use3Body:
      "工厂、仓储机器人在密集多径环境下的连接与感知耦合。",
    use4Title: "海事 ISAC",
    use4Body:
      "可替换前端仿真器，复用后端无线和 CKM 生成能力。",

    teamKicker: "项目致谢",
    teamTitle: "团队",
    teamNameKang: "严康",
    teamNameCao: "曹羽祺",
    teamNameLi: "李嘉琦",
    teamNameXiang: "向路平",
    teamNameYang: "杨鲲",
    teamRolePhd: "博士生",
    teamRoleMs: "硕士生",
    teamRoleAssistantProfessor: "助理教授",
    teamRoleProfessor: "教授",
    teamAffilUestc: "电子科技大学",
    teamAffilNju: "南京大学",

    footerNote:
      "基于本工作区中的稿件内容生成。此为独立宣传页面，非 IEEE 官方出版页面。",
    footerCode: "代码",
    footerPaper: "论文",
    footerVideo: "哔哩哔哩",
    footerTop: "返回顶部",
    footerUpdated: "最后更新",
    footerPageViews: "SimART 页面访问量",
    comingSoon: "敬请期待",
  },
};

let currentLang = "en";

function applyLanguage(lang) {
  currentLang = lang;
  const dict = i18n[lang];
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  const btn = document.querySelector(".language-toggle");
  if (btn) {
    btn.textContent = lang === "zh" ? "English" : "中文";
    btn.setAttribute("data-lang", lang === "zh" ? "en" : "zh");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("simart-lang") || "en";
  applyLanguage(saved);

  const btn = document.querySelector(".language-toggle");
  if (btn) {
    btn.addEventListener("click", () => {
      const next = currentLang === "zh" ? "en" : "zh";
      localStorage.setItem("simart-lang", next);
      applyLanguage(next);
    });
  }

  /* ── Paper link / Coming Soon modal ── */
  const modal = document.getElementById("comingSoonModal");
  const modalClose = modal?.querySelector(".modal-close");

  const showModal = () => {
    if (!modal) return;
    modal.setAttribute("aria-hidden", "false");
    modal.classList.add("is-open");
  };

  const hideModal = () => {
    if (!modal) return;
    modal.setAttribute("aria-hidden", "true");
    modal.classList.remove("is-open");
  };

  modalClose?.addEventListener("click", hideModal);
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) hideModal();
  });

  document.querySelectorAll(".paper-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      const url = link.getAttribute("data-paper-url");
      if (url === "#") {
        e.preventDefault();
        showModal();
      }
    });
  });
});

/* ── header scroll / active link ── */
const header = document.querySelector(".site-header");
const navLinks = document.querySelectorAll(".nav-links a");
const sections = [...navLinks]
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const setHeaderState = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
};

const setActiveLink = () => {
  const offset = window.innerHeight * 0.35;
  let current = sections[0]?.id;

  sections.forEach((section) => {
    const box = section.getBoundingClientRect();
    if (box.top <= offset) current = section.id;
  });

  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${current}`;
    link.toggleAttribute("aria-current", isActive);
  });
};

/* ── hero canvas animation ── */
const startHeroCanvas = () => {
  const canvas = document.querySelector(".hero-canvas");
  const hero = document.querySelector(".hero");
  if (!canvas || !hero) return;

  const ctx = canvas.getContext("2d");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let width = 0;
  let height = 0;
  let dpr = 1;
  let frame = 0;

  const buildings = Array.from({ length: 34 }, (_, index) => ({
    x: index / 33,
    w: 0.018 + ((index * 17) % 8) / 1000,
    h: 0.08 + ((index * 23) % 16) / 100,
    phase: (index * 0.39) % Math.PI,
  }));

  const particles = Array.from({ length: 96 }, (_, index) => ({
    x: (index * 97) % 1000 / 1000,
    y: (index * 233) % 1000 / 1000,
    r: 0.9 + ((index * 29) % 17) / 10,
    vx: -0.00018 + ((index * 31) % 9) / 30000,
    vy: -0.00008 + ((index * 19) % 7) / 42000,
    tone: index % 5 === 0 ? "amber" : "cyan",
  }));

  const links = Array.from({ length: 11 }, (_, index) => ({
    start: 0.08 + index * 0.085,
    end: 0.18 + ((index * 37) % 72) / 100,
    height: 0.18 + ((index * 41) % 28) / 100,
    phase: index * 0.72,
  }));

  const resize = () => {
    const rect = hero.getBoundingClientRect();
    width = Math.max(1, rect.width);
    height = Math.max(1, rect.height);
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const drawBackground = () => {
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, "#04152b");
    gradient.addColorStop(0.45, "#061c32");
    gradient.addColorStop(1, "#020b17");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    const glow = ctx.createRadialGradient(
      width * 0.66, height * 0.32, 0,
      width * 0.66, height * 0.32, width * 0.36
    );
    glow.addColorStop(0, "rgba(80, 222, 255, 0.19)");
    glow.addColorStop(1, "rgba(80, 222, 255, 0)");
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, width, height);
  };

  const drawBuildings = (time) => {
    const base = height * 0.64;
    buildings.forEach((building, index) => {
      const x = building.x * width - width * 0.03;
      const w = Math.max(18, building.w * width * 2.6);
      const h = building.h * height * (0.86 + Math.sin(time * 0.001 + building.phase) * 0.035);
      const y = base - h;
      const buildingGradient = ctx.createLinearGradient(0, y, 0, base);
      buildingGradient.addColorStop(0, "rgba(57, 169, 211, 0.34)");
      buildingGradient.addColorStop(1, "rgba(12, 50, 81, 0.12)");
      ctx.fillStyle = buildingGradient;
      ctx.shadowColor = "rgba(57, 217, 255, 0.18)";
      ctx.shadowBlur = 18;
      ctx.fillRect(x, y, w, h);
      ctx.shadowBlur = 0;

      if (index % 4 === 0) {
        ctx.fillStyle = "rgba(226, 147, 89, 0.32)";
        ctx.fillRect(x + w * 0.2, y + h * 0.36, w * 0.55, 2);
      }
    });

    const haze = ctx.createLinearGradient(0, base - 40, 0, base + 120);
    haze.addColorStop(0, "rgba(67, 211, 255, 0)");
    haze.addColorStop(0.42, "rgba(67, 211, 255, 0.16)");
    haze.addColorStop(1, "rgba(2, 12, 24, 0)");
    ctx.fillStyle = haze;
    ctx.fillRect(0, base - 80, width, 180);
  };

  const drawLinks = (time) => {
    ctx.lineCap = "round";
    links.forEach((link) => {
      const alpha = 0.18 + Math.sin(time * 0.0014 + link.phase) * 0.1;
      const startX = link.start * width;
      const startY = height * 0.64;
      const endX = link.end * width;
      const endY = link.height * height;

      ctx.strokeStyle = `rgba(71, 225, 255, ${alpha})`;
      ctx.lineWidth = 1.1;
      ctx.shadowColor = "rgba(71, 225, 255, 0.5)";
      ctx.shadowBlur = 14;
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.stroke();
      ctx.shadowBlur = 0;

      ctx.fillStyle = `rgba(116, 234, 255, ${Math.min(alpha + 0.28, 0.72)})`;
      ctx.beginPath();
      ctx.arc(endX, endY, 2.8, 0, Math.PI * 2);
      ctx.fill();
    });
  };

  const drawParticles = (time) => {
    particles.forEach((particle, index) => {
      if (!reducedMotion) {
        particle.x += particle.vx;
        particle.y += particle.vy;
      }
      if (particle.x < -0.02) particle.x = 1.02;
      if (particle.x > 1.02) particle.x = -0.02;
      if (particle.y < -0.02) particle.y = 1.02;

      const x = particle.x * width;
      const y = particle.y * height;
      const pulse = 0.56 + Math.sin(time * 0.002 + index) * 0.32;
      const color = particle.tone === "amber" ? "235, 155, 91" : "111, 230, 255";

      ctx.fillStyle = `rgba(${color}, ${0.42 + pulse * 0.24})`;
      ctx.shadowColor = `rgba(${color}, 0.45)`;
      ctx.shadowBlur = 9;
      ctx.beginPath();
      ctx.arc(x, y, particle.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    });
  };

  const drawScan = (time) => {
    const y = height * (0.24 + ((time * 0.00004) % 0.46));
    const scan = ctx.createLinearGradient(0, y, width, y);
    scan.addColorStop(0, "rgba(90, 232, 255, 0)");
    scan.addColorStop(0.48, "rgba(90, 232, 255, 0.18)");
    scan.addColorStop(1, "rgba(90, 232, 255, 0)");
    ctx.strokeStyle = scan;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(width * 0.18, y);
    ctx.lineTo(width * 0.82, y - height * 0.02);
    ctx.stroke();
  };

  const render = (time = 0) => {
    frame = time;
    drawBackground();
    drawLinks(time);
    drawParticles(time);
    drawBuildings(time);
    drawScan(time);

    if (!reducedMotion) requestAnimationFrame(render);
  };

  resize();
  window.addEventListener("resize", resize);
  render(frame);
};

window.addEventListener("scroll", () => {
  setHeaderState();
  setActiveLink();
});

setHeaderState();
setActiveLink();
startHeroCanvas();
