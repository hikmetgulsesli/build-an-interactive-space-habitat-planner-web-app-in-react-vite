// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Görev Panosu
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface GorevPanosuProps {}

export function GorevPanosu(props: GorevPanosuProps) {
  return (
    <>
      {/* SIDE NAVIGATION */}
      <aside className="fixed left-0 h-full w-64 border-r border-slate-800 shadow-[0_0_15px_rgba(37,99,235,0.1)] bg-slate-950 flex flex-col py-4 space-y-2 z-50 flex-shrink-0">
      {/* Header */}
      <div className="px-6 mb-6 flex flex-col gap-sm">
      <div className="flex items-center gap-md">
      <div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden border border-outline-variant flex items-center justify-center">
      <img alt="İstasyon Logosu" className="w-full h-full object-cover grayscale opacity-80" data-alt="A sleek, minimalist corporate logo for a deep-space station displayed on a dark, matte background. The logo features sharp, geometric lines in a vibrant space blue color, subtly glowing to indicate an active operational status. The overall aesthetic is strictly sci-fi, authoritative, and utilitarian." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPIdf_TjNCI5VwKJi_zExGJn36E8AoRe0DpP-dDUH1izAtGs04Plhqje60JhbiEWMmnDLUj6cFbgb3fgm-iJ6A-_U-cVHi2pcXJA4MldpfbdZvePnDGJ6Vl0JziLEqcuuz4e9bDXbq1sZZUi6t0smQ-lOa3NYBVUqNR9Nrki0SsmzaZmiT7QtuJZjRwgNHYxSkbIvq361XKg-OLBqFGDD2toNTkTq78avXJUN30KX3qQjp5JfEugW2ke2Uef1qE8-DPvtlA-Jq_Mc" />
      </div>
      <div>
      <h1 className="text-lg font-bold text-blue-500 tracking-wider">SEKTÖR-7</h1>
      <p className="font-inter text-xs font-medium tracking-tight text-emerald-400/80">Operasyonel Durum: Aktif</p>
      </div>
      </div>
      </div>
      {/* Navigation Links */}
      <nav className="flex-1 px-2 flex flex-col gap-1">
      {/* Active Tab: Görev Panosu */}
      <a className="font-inter text-sm font-medium tracking-tight bg-blue-600/10 text-blue-400 border-r-4 border-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.3)] hover:bg-slate-900 transition-all duration-150 px-4 py-3 flex items-center gap-3" href="#">
      <span className="material-symbols-outlined" data-icon="assignment_late">assignment_late</span>
                      Görev Panosu
                  </a>
      <a className="font-inter text-sm font-medium tracking-tight text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 flex items-center gap-3" href="#">
      <span className="material-symbols-outlined" data-icon="architecture">architecture</span>
                      Habitat Tasarımı
                  </a>
      <a className="font-inter text-sm font-medium tracking-tight text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 flex items-center gap-3" href="#">
      <span className="material-symbols-outlined" data-icon="groups">groups</span>
                      Mürettebat
                  </a>
      <a className="font-inter text-sm font-medium tracking-tight text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 flex items-center gap-3" href="#">
      <span className="material-symbols-outlined" data-icon="timeline">timeline</span>
                      Kaynaklar
                  </a>
      <a className="font-inter text-sm font-medium tracking-tight text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 flex items-center gap-3" href="#">
      <span className="material-symbols-outlined" data-icon="warning">warning</span>
                      Uyarılar
                  </a>
      <a className="font-inter text-sm font-medium tracking-tight text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 flex items-center gap-3" href="#">
      <span className="material-symbols-outlined" data-icon="settings">settings</span>
                      Ayarlar
                  </a>
      </nav>
      {/* Footer Actions */}
      <div className="px-2 mt-auto flex flex-col gap-1 border-t border-slate-800 pt-4">
      <a className="font-inter text-sm font-medium tracking-tight text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 flex items-center gap-3" href="#">
      <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
                      Profil
                  </a>
      <a className="font-inter text-sm font-medium tracking-tight text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 flex items-center gap-3" href="#">
      <span className="material-symbols-outlined" data-icon="logout">logout</span>
                      Çıkış
                  </a>
      </div>
      </aside>
      {/* MAIN CONTENT WRAPPER */}
      <div className="ml-64 flex-1 flex flex-col h-screen overflow-hidden">
      {/* TOP NAVIGATION */}
      <header className="docked full-width top-0 border-b border-slate-800 flex justify-between items-center w-full h-16 px-6 z-40 bg-slate-950/90 backdrop-blur-md flex-shrink-0">
      {/* Brand */}
      <div className="flex items-center gap-md">
      <span className="text-xl font-black text-slate-100 tracking-widest uppercase">HABİTAT KONTROL</span>
      </div>
      {/* Telemetry & Search & Actions */}
      <div className="flex items-center gap-lg">
      {/* Telemetry Links */}
      <div className="flex items-center gap-md mr-md">
      <span className="font-inter tracking-tighter text-xs font-bold uppercase text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 transition-colors duration-200 px-3 py-1 rounded border border-slate-800">O2: %98</span>
      <span className="font-inter tracking-tighter text-xs font-bold uppercase text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 transition-colors duration-200 px-3 py-1 rounded border border-slate-800">GÜÇ: %85</span>
      <span className="font-inter tracking-tighter text-xs font-bold uppercase text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 transition-colors duration-200 px-3 py-1 rounded border border-slate-800">GIDA: %92</span>
      </div>
      {/* Search Bar */}
      <div className="relative group">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">search</span>
      <input className="bg-surface-container-highest border border-slate-800 rounded-full py-1.5 pl-9 pr-4 text-xs font-mono-tr text-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 focus:outline-none transition-all w-64 bg-slate-950" placeholder="Modül veya Görev Ara..." type="text" />
      </div>
      {/* Trailing Icons */}
      <div className="flex items-center gap-2">
      <button className="text-blue-600 dark:text-blue-500 hover:bg-slate-900/50 transition-colors duration-200 p-2 rounded-full flex items-center justify-center relative">
      <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
      <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full shadow-[0_0_5px_rgba(255,180,171,0.8)]"></span>
      </button>
      <button className="text-blue-600 dark:text-blue-500 hover:bg-slate-900/50 transition-colors duration-200 p-2 rounded-full flex items-center justify-center">
      <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
      </button>
      </div>
      </div>
      </header>
      {/* CANVAS AREA */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto p-xl relative">
      {/* Background Texture Layer */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{backgroundImage: "radial-gradient(circle at 2px 2px, var(--tw-colors-primary-fixed) 1px, transparent 0)", backgroundSize: "32px 32px"}}></div>
      {/* Header Section */}
      <div className="flex items-center justify-between mb-lg relative z-10">
      <div>
      <h2 className="font-display-tr text-display-tr text-on-background mb-xs">Operasyon Panosu</h2>
      <p className="font-body-tr text-body-tr text-on-surface-variant">Sektör-7 Habitat bakım ve mühendislik görev takibi.</p>
      </div>
      <button className="bg-primary-container text-on-primary-container font-label-tr text-label-tr px-md py-sm rounded flex items-center gap-2 hover:brightness-110 transition-all shadow-[0_0_10px_rgba(37,99,235,0.2)]">
      <span className="material-symbols-outlined text-sm">add</span>
                          YENİ GÖREV
                      </button>
      </div>
      {/* Kanban Board Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter h-[calc(100%-80px)] relative z-10">
      {/* Column 1: Bekleyen */}
      <div className="flex flex-col bg-surface-container-low border border-surface-container-highest rounded-xl p-md">
      <div className="flex items-center justify-between mb-md border-b border-surface-container-highest pb-sm">
      <div className="flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-outline"></span>
      <h3 className="font-title-tr text-title-tr text-on-surface">Bekleyen</h3>
      </div>
      <span className="bg-surface-variant text-on-surface-variant px-2 py-0.5 rounded font-mono-tr text-mono-tr text-xs">3</span>
      </div>
      <div className="flex flex-col gap-sm overflow-y-auto pr-1 custom-scrollbar">
      {/* Task Card 1 */}
      <div className="bg-surface-container border border-outline-variant hover:border-outline rounded p-md flex flex-col gap-sm transition-colors cursor-pointer group">
      <div className="flex items-start justify-between">
      <span className="bg-surface-variant text-on-surface px-1.5 py-0.5 rounded text-[10px] font-mono-tr uppercase tracking-wider border border-outline-variant">GÜÇ SİSTEMİ</span>
      <span className="material-symbols-outlined text-outline-variant group-hover:text-outline text-sm">more_horiz</span>
      </div>
      <h4 className="font-title-tr text-base text-on-background leading-tight">Güneş Paneli Dizi-A Kalibrasyonu</h4>
      <div className="flex items-center gap-md mt-1">
      <div className="flex items-center gap-1 text-on-surface-variant text-xs">
      <span className="material-symbols-outlined text-[14px]">schedule</span>
      <span>02:30:00</span>
      </div>
      <div className="flex items-center gap-1 text-error text-xs font-medium">
      <span className="material-symbols-outlined text-[14px]">warning</span>
      <span>Kritik</span>
      </div>
      </div>
      <div className="flex items-center justify-between mt-sm border-t border-outline-variant/30 pt-sm">
      <div className="flex items-center gap-2">
      <div className="w-6 h-6 rounded-full overflow-hidden border border-outline">
      <img alt="Mühendis Avatarı" className="w-full h-full object-cover" data-alt="A small, circular avatar portrait of a male aerospace engineer in a dark control room setting. His face is lit by the cool blue light of a monitor. The image has a low-contrast, muted cinematic tone fitting a deep-space operational interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAszCnktEfoNrQ98q6SsDmxQWSz05zdLVqhTQhEhGNs-MPNIhiFSrqKCfFxIO-v2-N6VUBfFFj9BDuzZU3TnLqOsh49JvYyuifp2l-IEU9UWXiX22XM5xKMEmLLlQ6Pdw45FDQUkqhVTLEHcZVpdsZ7bvKlFCHBAGclqYWB0gxXd80kw5X63pbLYNnCrfpBK3h-VEbjj6xu8ZENJLQSiW8NVGmtuZsC-Qm2EuL4b7l-f2WNk04E8JVZX6EZfpSJ66CJkbkzgLop8T8" />
      </div>
      <span className="font-mono-tr text-[11px] text-on-surface-variant">Müh. Yılmaz</span>
      </div>
      <span className="font-mono-tr text-[10px] text-outline">ID: T-892</span>
      </div>
      </div>
      {/* Task Card 2 */}
      <div className="bg-surface-container border border-outline-variant hover:border-outline rounded p-md flex flex-col gap-sm transition-colors cursor-pointer group">
      <div className="flex items-start justify-between">
      <span className="bg-surface-variant text-on-surface px-1.5 py-0.5 rounded text-[10px] font-mono-tr uppercase tracking-wider border border-outline-variant">YAŞAM DESTEK</span>
      <span className="material-symbols-outlined text-outline-variant group-hover:text-outline text-sm">more_horiz</span>
      </div>
      <h4 className="font-title-tr text-base text-on-background leading-tight">Oksijen Filtresi Değişimi Modül-3</h4>
      <div className="flex items-center gap-md mt-1">
      <div className="flex items-center gap-1 text-on-surface-variant text-xs">
      <span className="material-symbols-outlined text-[14px]">schedule</span>
      <span>00:45:00</span>
      </div>
      <div className="flex items-center gap-1 text-primary text-xs font-medium">
      <span className="material-symbols-outlined text-[14px]">info</span>
      <span>Normal</span>
      </div>
      </div>
      <div className="flex items-center justify-between mt-sm border-t border-outline-variant/30 pt-sm">
      <div className="flex items-center gap-2">
      <div className="w-6 h-6 rounded-full bg-surface-variant flex items-center justify-center border border-outline border-dashed text-[10px] text-on-surface-variant font-mono-tr">
                                              +
                                          </div>
      <span className="font-mono-tr text-[11px] text-on-surface-variant italic">Atanmadı</span>
      </div>
      <span className="font-mono-tr text-[10px] text-outline">ID: T-894</span>
      </div>
      </div>
      </div>
      </div>
      {/* Column 2: Aktif (ACTIVE STATE) */}
      <div className="flex flex-col bg-surface-container-low border border-primary/20 rounded-xl p-md relative shadow-[0_0_30px_rgba(37,99,235,0.05)]">
      {/* Subtle Glow Background for Active Column */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none rounded-xl"></div>
      <div className="flex items-center justify-between mb-md border-b border-primary/20 pb-sm relative z-10">
      <div className="flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_5px_var(--tw-colors-primary)]"></span>
      <h3 className="font-title-tr text-title-tr text-primary">Aktif</h3>
      </div>
      <span className="bg-primary/20 text-primary border border-primary/30 px-2 py-0.5 rounded font-mono-tr text-mono-tr text-xs">2</span>
      </div>
      <div className="flex flex-col gap-sm overflow-y-auto pr-1 custom-scrollbar relative z-10">
      {/* Active Task Card 1 */}
      <div className="bg-surface-container border border-primary/50 shadow-[0_0_15px_rgba(37,99,235,0.15)] rounded p-md flex flex-col gap-sm cursor-pointer">
      <div className="flex items-start justify-between">
      <span className="bg-primary-container text-on-primary-container px-1.5 py-0.5 rounded text-[10px] font-mono-tr uppercase tracking-wider">İLETİŞİM</span>
      <span className="material-symbols-outlined text-primary text-sm">satellite_alt</span>
      </div>
      <h4 className="font-title-tr text-base text-on-background leading-tight">Dünya ile Veri Senkronizasyonu</h4>
      {/* Progress Bar for Active Task */}
      <div className="w-full bg-surface-variant rounded-full h-1 mt-1 mb-1 overflow-hidden">
      <div className="bg-primary h-1 rounded-full w-[65%] shadow-[0_0_5px_var(--tw-colors-primary)]"></div>
      </div>
      <div className="flex items-center justify-between mt-1">
      <div className="flex items-center gap-1 text-primary-fixed-dim text-xs">
      <span className="material-symbols-outlined text-[14px]">sync</span>
      <span>Devam Ediyor (%65)</span>
      </div>
      <div className="flex items-center gap-1 text-error text-xs font-medium">
      <span className="material-symbols-outlined text-[14px]">priority_high</span>
      <span>Yüksek</span>
      </div>
      </div>
      <div className="flex items-center justify-between mt-sm border-t border-primary/20 pt-sm">
      <div className="flex items-center gap-2">
      <div className="w-6 h-6 rounded-full overflow-hidden border border-primary">
      <img alt="İletişim Subayı" className="w-full h-full object-cover" data-alt="A small, circular avatar portrait of a female communications officer. She is illuminated by the stark, clinical light of a high-tech console interface against a pitch-black background. The mood is focused and serious, fitting a mission-critical space operation interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWxtLfDKt4778pfk2CM21bOr08moY6yDlEPxixVeb4Coo0E0YnlbSsx34ugAMALztHDvLfnGx_6cXT1Uq6nHTit8l2wAC1HQ0Tg6HVKfP5VHqheSTibWxxSLy49o16w8Mq90OYC-ZlO6jdjE1-RUwv5JfdyO1W1wS4clgM3y_g3tomI3XPvIlUudKWwIxF6gxK4V6saAB8ecMmIBT2Nkhr6gJxbmt7hgQsZiG9PzJxhFIw6pLvTqCo0-OAsZkaELiULDa1mt7h7hE" />
      </div>
      <span className="font-mono-tr text-[11px] text-primary-fixed-dim">Sb. Demir</span>
      </div>
      <span className="font-mono-tr text-[10px] text-primary/60">ID: C-112</span>
      </div>
      </div>
      </div>
      </div>
      {/* Column 3: Tamamlanmış */}
      <div className="flex flex-col bg-surface-container-low border border-surface-container-highest rounded-xl p-md opacity-80">
      <div className="flex items-center justify-between mb-md border-b border-surface-container-highest pb-sm">
      <div className="flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-secondary"></span>
      <h3 className="font-title-tr text-title-tr text-on-surface-variant">Tamamlanmış</h3>
      </div>
      <span className="bg-surface-variant text-on-surface-variant px-2 py-0.5 rounded font-mono-tr text-mono-tr text-xs">12</span>
      </div>
      <div className="flex flex-col gap-sm overflow-y-auto pr-1 custom-scrollbar">
      {/* Completed Task Card 1 */}
      <div className="bg-surface-container border border-outline-variant/50 rounded p-md flex flex-col gap-sm">
      <div className="flex items-start justify-between">
      <span className="bg-surface-variant text-on-surface-variant px-1.5 py-0.5 rounded text-[10px] font-mono-tr uppercase tracking-wider">HİDRO-TARIM</span>
      <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
      </div>
      <h4 className="font-title-tr text-base text-on-surface-variant line-through decoration-outline-variant/50 leading-tight">Bölüm-B Su Pompası Bakımı</h4>
      <div className="flex items-center gap-md mt-1">
      <div className="flex items-center gap-1 text-on-surface-variant/50 text-xs">
      <span className="material-symbols-outlined text-[14px]">done_all</span>
      <span>Tamamlandı (08:00)</span>
      </div>
      </div>
      </div>
      {/* Completed Task Card 2 */}
      <div className="bg-surface-container border border-outline-variant/50 rounded p-md flex flex-col gap-sm">
      <div className="flex items-start justify-between">
      <span className="bg-surface-variant text-on-surface-variant px-1.5 py-0.5 rounded text-[10px] font-mono-tr uppercase tracking-wider">GÜVENLİK</span>
      <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
      </div>
      <h4 className="font-title-tr text-base text-on-surface-variant line-through decoration-outline-variant/50 leading-tight">Hava Kilidi Conta Denetimi</h4>
      <div className="flex items-center gap-md mt-1">
      <div className="flex items-center gap-1 text-on-surface-variant/50 text-xs">
      <span className="material-symbols-outlined text-[14px]">done_all</span>
      <span>Tamamlandı (Dün)</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
