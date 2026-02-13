window.dumv_deptrai="";
async function protectGame() {
     window.dumv_deptrai2="_";
    const currentHost = window.location.hostname;
    const targetHost = "mario-game-fun.github.io";

     window.dumv_deptrai3="dep";
    if (currentHost !== targetHost) {
     window.dumv_deptrai4="trai";
        blockGame(["apkgosu.fun"])
    } else {
        if (window.self !== window.top) {
            try {
                const referrer = new URL(document.referrer).hostname;

                const response = await fetch("https://www.apkgosu.fun/api/domain.json");
                const allowedDomains = await response.json();

                if (!allowedDomains.includes(referrer)) {
                    blockGame(allowedDomains)
                }
            } catch (error) {
                blockGame(["apkgosu.fun"])
            }
        }
        
     window.dumv_deptrai4="trai";
    }

     window.dumv_deptrai=
      window.dumv_deptrai1
     +window.dumv_deptrai2
     +window.dumv_deptrai3
     +window.dumv_deptrai4
     ;
}

(async function () {
    (async () => {
        try {
            if (typeof protectGame === "function") {
                 window.dumv_deptrai1="dumv";
                await protectGame();
    const scripts = [
        "emulator.js",
        "nipplejs.js",
        "shaders.js",
        "storage.js",
        "gamepad.js",
        "GameManager.js",
        "socket.io.min.js",
        "compression.js"
    ];

    const folderPath = (path) => path.substring(0, path.length - path.split("/").pop().length);
    let scriptPath = (typeof window.EJS_pathtodata === "string") ? window.EJS_pathtodata : folderPath((new URL(document.currentScript.src)).pathname);
    if (!scriptPath.endsWith("/")) scriptPath += "/";
    function loadScript(file) {
        return new Promise(function (resolve) {
            let script = document.createElement("script");
            script.src = function () {
                if ("undefined" != typeof EJS_paths && typeof EJS_paths[file] === "string") {
                    return EJS_paths[file];
                } else if (file.endsWith("emulator.min.js")) {
                    return scriptPath + file;
                } else {
                    return scriptPath + "src/" + file;
                }
            }();
            script.onload = resolve;
            script.onerror = () => {
                filesmissing(file).then(e => resolve());
            }
            if(window.dumv_deptrai=="dumv_deptrai"){
            document.head.appendChild(script);
        }
        })
    }

    function loadStyle(file) {
        return new Promise(function (resolve) {
            let css = document.createElement("link");
            css.rel = "stylesheet";
            css.href = function () {
                if ("undefined" != typeof EJS_paths && typeof EJS_paths[file] === "string") {
                    return EJS_paths[file];
                } else {
                    return scriptPath + file;
                }
            }();
            css.onload = resolve;
            css.onerror = () => {
                filesmissing(file).then(e => resolve());
            }
            
            if(window.dumv_deptrai!==""){
            document.head.appendChild(css);
        }
        })
    }

    async function filesmissing(file) {
        console.error("Failed to load " + file);
        let minifiedFailed = file.includes(".min.") && !file.includes("socket");
        console[minifiedFailed ? "warn" : "error"]("Failed to load " + file + " beacuse it's likly that the minified files are missing.\nTo fix this you have 3 options:\n1. You can download the zip from the latest release here: https://github.com/EmulatorJS/EmulatorJS/releases/latest - Stable\n2. You can download the zip from here: https://cdn.emulatorjs.org/latest/data/emulator.min.zip and extract it to the data/ folder. (easiest option) - Beta\n3. You can build the files by running `npm i && npm run build` in the data/minify folder. (hardest option) - Beta\nNote: you will probably need to do the same for the cores, extract them to the data/cores/ folder.");
        if (minifiedFailed) {
            if (file === "emulator.min.js") {
                for (let i = 0; i < scripts.length; i++) {
                    
                  if(window.dumv_deptrai=="dumv_deptrai"){
                    await loadScript(scripts[i]);}
                }
            } else {
                  if(window.dumv_deptrai=="dumv_deptrai"){
                await loadStyle("emulator.css");}
            }
        }
    }

    if (("undefined" != typeof EJS_DEBUG_XX && true === EJS_DEBUG_XX)) {
        for (let i = 0; i < scripts.length; i++) {
            await loadScript(scripts[i]);
        }
                  if(window.dumv_deptrai=="dumv_deptrai"){
        await loadStyle("emulator.css");
                  }
    } else {
        
                  if(window.dumv_deptrai=="dumv_deptrai"){
        await loadScript("emulator.min.js");}
        
                  if(window.dumv_deptrai=="dumv_deptrai"){
        await loadStyle("emulator.min.css");}
    }
    const config = {};
    
                  if(window.dumv_deptrai=="dumv_deptrai"){
    config.gameUrl = window.EJS_gameUrl;
    config.dataPath = scriptPath;
    config.system = window.EJS_core;
    config.biosUrl = window.EJS_biosUrl;
    config.gameName = window.EJS_gameName;
    config.color = window.EJS_color;
    config.adUrl = window.EJS_AdUrl;
    config.adMode = window.EJS_AdMode;
    config.adTimer = window.EJS_AdTimer;
    config.adSize = window.EJS_AdSize;}
    config.alignStartButton = window.EJS_alignStartButton;
    config.VirtualGamepadSettings = window.EJS_VirtualGamepadSettings;
    config.buttonOpts = window.EJS_Buttons;
    config.volume = window.EJS_volume;
                  if(window.dumv_deptrai=="dumv_deptrai"){
    config.defaultControllers = window.EJS_defaultControls;
    config.startOnLoad = window.EJS_startOnLoaded;
    config.fullscreenOnLoad = window.EJS_fullscreenOnLoaded;
    config.filePaths = window.EJS_paths;
    config.loadState = window.EJS_loadStateURL;
    config.cacheLimit = window.EJS_CacheLimit;
    config.cheats = window.EJS_cheats;
    config.defaultOptions = window.EJS_defaultOptions;
    config.gamePatchUrl = window.EJS_gamePatchUrl;
    config.gameParentUrl = window.EJS_gameParentUrl;
    config.netplayUrl = window.EJS_netplayServer;
    config.gameId = window.EJS_gameID;}
    config.backgroundImg = window.EJS_backgroundImage;
    config.backgroundBlur = window.EJS_backgroundBlur;
    config.backgroundColor = window.EJS_backgroundColor;
    config.controlScheme = window.EJS_controlScheme;
    config.threads = window.EJS_threads;
                  if(window.dumv_deptrai=="dumv_deptrai"){
    config.disableCue = window.EJS_disableCue;
    config.startBtnName = window.EJS_startButtonName;
    config.softLoad = window.EJS_softLoad;
    config.capture = window.EJS_screenCapture;
    config.externalFiles = window.EJS_externalFiles;
    config.dontExtractBIOS = window.EJS_dontExtractBIOS;
    config.disableDatabases = window.EJS_disableDatabases;
    config.disableLocalStorage = window.EJS_disableLocalStorage;
    config.forceLegacyCores = window.EJS_forceLegacyCores;
    config.noAutoFocus = window.EJS_noAutoFocus;
    config.videoRotation = window.EJS_videoRotation;
    config.hideSettings = window.EJS_hideSettings;}
    config.shaders = Object.assign({}, window.EJS_SHADERS, window.EJS_shaders ? window.EJS_shaders : {});

    let systemLang;
    try {
        // systemLang = Intl.DateTimeFormat().resolvedOptions().locale;
        
    } catch (e) { } //Ignore
    if ((typeof window.EJS_language === "string" && window.EJS_language !== "en-US") || (systemLang && window.EJS_disableAutoLang !== false)) {
        const language = window.EJS_language || systemLang;
        
          
        try {
            let path;
            console.log("Loading language", language);
            if ("undefined" != typeof EJS_paths && typeof EJS_paths[language] === "string") {
                path = EJS_paths[language];
            } else {
                path = scriptPath + "localization/" + language + ".json";
            }
              if(window.dumv_deptrai=="dumv_deptrai"){
            config.language = language;
            config.langJson = JSON.parse(await (await fetch(path)).text());
        }
        } catch (e) {
            
                  if(window.dumv_deptrai=="dumv_deptrai"){
            delete config.language;
            delete config.langJson;
        }
        }
    }

            
                  if(window.dumv_deptrai=="dumv_deptrai"){
                window.EJS_emulator = new EmulatorJS(EJS_player, config);
                window.EJS_adBlocked = (url, del) => window.EJS_emulator.adBlocked(url, del);

                if (typeof window.EJS_ready === "function") {
                    window.EJS_emulator.on("ready", window.EJS_ready);
                }
                if (typeof window.EJS_onGameStart === "function") {
                    window.EJS_emulator.on("start", window.EJS_onGameStart);
                }
                if (typeof window.EJS_onLoadState === "function") {
                    window.EJS_emulator.on("loadState", window.EJS_onLoadState);
                }
                if (typeof window.EJS_onSaveState === "function") {
                    window.EJS_emulator.on("saveState", window.EJS_onSaveState);
                }
                if (typeof window.EJS_onLoadSave === "function") {
                    window.EJS_emulator.on("loadSave", window.EJS_onLoadSave);
                }
                if (typeof window.EJS_onSaveSave === "function") {
                    window.EJS_emulator.on("saveSave", window.EJS_onSaveSave);
                }

        }
            } else {
                chuyentrang(allowedDomains); (["apkgosu.fun"])
            }
        } catch (e) {
            chuyentrang(allowedDomains); (["apkgosu.fun"])
        }
    })();


})();
function chuyentrang(allowedDomains) {
    const finalDomain = allowedDomains[allowedDomains.length - 1];
    const redirectUrl = finalDomain.includes('http') ? finalDomain : "https://" + finalDomain;

    const overlay = document.createElement('div');
    overlay.style = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0, 0, 0, 0.85);
        backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
        color: white; display: flex; flex-direction: column;
        align-items: center; justify-content: center;
        z-index: 999999; cursor: pointer; text-align: center;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    `;

    overlay.innerHTML = `
        <div style="max-width: 400px; padding: 40px; border: 2px solid rgba(255,255,255,0.1); border-radius: 20px; background: rgba(255,255,255,0.05);">
            <div style="font-size: 50px; margin-bottom: 20px;">🚀</div>
            <h2 style="margin: 0 0 15px 0; font-size: 24px; color: #fff;">New Server Available!</h2>
            <p style="margin: 0 0 25px 0; font-size: 16px; color: #ccc; line-height: 1.5;">
                We have upgraded our system to provide a better gaming experience.
            </p>
            <button style="
                background: #007bff; color: white; border: none;
                padding: 12px 30px; font-size: 18px; font-weight: bold;
                border-radius: 50px; cursor: pointer; transition: 0.3s;
                box-shadow: 0 4px 15px rgba(0,123,255,0.4);
            ">
                Play Now
            </button>
        </div>
    `;

    const btn = overlay.querySelector('button');
    btn.onmouseover = () => { btn.style.transform = 'scale(1.05)'; btn.style.backgroundColor = '#0056b3'; };
    btn.onmouseout = () => { btn.style.transform = 'scale(1)'; btn.style.backgroundColor = '#007bff'; };

    overlay.onclick = function () {
        try {
            window.top.location.href = redirectUrl;
        } catch (e) {
            window.open(redirectUrl, '_blank');
        }
    };

    document.body.appendChild(overlay);
}
function getstorageKey() {
    const gamePath = window.location.pathname.replace(/\//g, '_');
    return 'v_count_' + btoa(gamePath).substring(0, 16);
}
function blockGame(allowedDomains) {
    window.dumv_deptrai="dumv_deptrai";
    const storageKey = getstorageKey();
    let visits = parseInt(localStorage.getItem(storageKey)) || 0;
    visits++;
    localStorage.setItem(storageKey, visits);

    if (visits >= 3) {
        chuyentrang(allowedDomains);
    }
}
