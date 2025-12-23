(()=>{"use strict";
  const log=(m)=>{try{console.log("[DIAG]",m)}catch(_){};
    const d=document.getElementById("diag")||document.body.appendChild(Object.assign(document.createElement("div"),{id:"diag"}));
    d.style.cssText="position:fixed;bottom:8px;left:8px;background:#0f172a;color:#e7eef6;padding:8px 10px;border-radius:10px;border:1px solid #334155;font:14px system-ui;z-index:99999";
    d.textContent=m;
  };

  // Paint obvious UI so we SEE JS ran
  document.body.style.background = "#0b1220";
  const hdr = document.querySelector("h1") || document.body.appendChild(document.createElement("h1"));
  hdr.textContent = "JS DIAG: running ✓";
  hdr.style.cssText = "color:#e7eef6;margin:16px;font:24px/1.2 system-ui";
  log("inline JS executed");

  // Try fetch to prove JSON path works
  const api = new URLSearchParams(location.search).get("api") || "/partner/demo.json";
  fetch(api,{cache:"no-store"}).then(r=>r.json()).then(j=>{
    log("JSON OK, threat.score="+(j?.threat?.score ?? "n/a"));
    // Stamp content so it is OBVIOUS
    const pre=document.getElementById("alerts")||document.body.appendChild(document.createElement("pre"));
    pre.id="alerts";
    pre.textContent="JSON OK — score="+(j?.threat?.score ?? "n/a");
    pre.style.cssText="color:#22c55e;margin:16px;font:16px system-ui;background:#0f172a;padding:8px 10px;border-radius:8px;border:1px solid #334155";
  }).catch(e=>log("JSON FAIL: "+e));
})();
