// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Başlangıç Rehberi
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface BaslangicRehberiProps {}

export function BaslangicRehberi(props: BaslangicRehberiProps) {
  return (
    <>
      {/* SideNavBar (Shared Component) */}
      <nav className="hidden md:flex flex-col h-full py-4 space-y-2 fixed left-0 h-full w-64 border-r bg-slate-950 border-slate-800 shadow-[0_0_15px_rgba(37,99,235,0.1)] z-40">
      {/* Brand/Header */}
      <div className="px-6 mb-6 flex flex-col gap-1">
      <div className="flex items-center gap-3 mb-2">
      <span className="material-symbols-outlined text-blue-500 text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>hexagon</span>
      <span className="text-lg font-bold text-blue-500 tracking-wider">SEKTÖR-7</span>
      </div>
      <span className="text-slate-400 text-xs font-mono tracking-widest uppercase">Operasyonel Durum: Aktif</span>
      </div>
      {/* Navigation Links */}
      <div className="flex-1 flex flex-col space-y-1 px-2">
      {/* Inactive */}
      <a className="flex items-center gap-3 text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded-DEFAULT font-inter text-sm font-medium tracking-tight group" href="#">
      <span className="material-symbols-outlined group-hover:scale-110 transition-transform">assignment_late</span>
      <span>Görev Panosu</span>
      </a>
      {/* Active (Intent: Setting up new habitat -> Architecture/Design) */}
      <a className="flex items-center gap-3 bg-blue-600/10 text-blue-400 border-r-4 border-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.3)] px-4 py-3 rounded-l-DEFAULT font-inter text-sm font-medium tracking-tight translate-x-1" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>architecture</span>
      <span>Habitat Tasarımı</span>
      </a>
      {/* Inactive */}
      <a className="flex items-center gap-3 text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded-DEFAULT font-inter text-sm font-medium tracking-tight group" href="#">
      <span className="material-symbols-outlined group-hover:scale-110 transition-transform">groups</span>
      <span>Mürettebat</span>
      </a>
      <a className="flex items-center gap-3 text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded-DEFAULT font-inter text-sm font-medium tracking-tight group" href="#">
      <span className="material-symbols-outlined group-hover:scale-110 transition-transform">timeline</span>
      <span>Kaynaklar</span>
      </a>
      <a className="flex items-center gap-3 text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded-DEFAULT font-inter text-sm font-medium tracking-tight group" href="#">
      <span className="material-symbols-outlined group-hover:scale-110 transition-transform">warning</span>
      <span>Uyarılar</span>
      </a>
      <a className="flex items-center gap-3 text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded-DEFAULT font-inter text-sm font-medium tracking-tight group" href="#">
      <span className="material-symbols-outlined group-hover:scale-110 transition-transform">settings</span>
      <span>Ayarlar</span>
      </a>
      </div>
      {/* Footer Links */}
      <div className="mt-auto px-2 flex flex-col space-y-1 pt-4 border-t border-slate-800/50">
      <a className="flex items-center gap-3 text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded-DEFAULT font-inter text-sm font-medium tracking-tight" href="#">
      <span className="material-symbols-outlined">account_circle</span>
      <span>Profil</span>
      </a>
      <a className="flex items-center gap-3 text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded-DEFAULT font-inter text-sm font-medium tracking-tight" href="#">
      <span className="material-symbols-outlined">logout</span>
      <span>Çıkış</span>
      </a>
      </div>
      </nav>
      {/* Main Workspace */}
      <div className="flex-1 flex flex-col md:ml-64 min-w-0 h-screen overflow-hidden bg-background">
      {/* TopNavBar (Shared Component) */}
      <header className="flex justify-between items-center w-full h-16 px-6 z-50 bg-slate-950/90 backdrop-blur-md docked full-width top-0 border-b border-slate-800 flex-shrink-0">
      {/* Brand / Search Area */}
      <div className="flex items-center gap-6">
      <h1 className="text-xl font-black text-slate-100 tracking-widest uppercase">HABİTAT KONTROL</h1>
      <div className="hidden lg:flex items-center bg-slate-900/50 border border-slate-800 rounded-DEFAULT px-3 py-1.5 focus-within:border-blue-500 focus-within:shadow-[0_0_8px_rgba(37,99,235,0.2)] transition-all">
      <span className="material-symbols-outlined text-slate-500 text-sm mr-2">search</span>
      <input className="bg-transparent border-none text-xs font-inter text-slate-300 focus:ring-0 placeholder-slate-600 w-48" placeholder="Sistem veya Modül Ara..." type="text" />
      </div>
      </div>
      {/* Telemetry & Actions */}
      <div className="flex items-center gap-6">
      {/* Navigation Links / Telemetry */}
      <div className="hidden md:flex items-center gap-4 border-r border-slate-800 pr-6 font-inter tracking-tighter text-xs font-bold uppercase">
      <div className="flex items-center gap-1.5 text-blue-600 dark:text-blue-500 bg-blue-900/10 px-2 py-1 rounded-sm border border-blue-900/30">
      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                              O2: %98
                          </div>
      <div className="flex items-center gap-1.5 text-slate-400">
      <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                              GÜÇ: %85
                          </div>
      <div className="flex items-center gap-1.5 text-slate-400">
      <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                              GIDA: %92
                          </div>
      </div>
      {/* Trailing Icon Actions */}
      <div className="flex items-center gap-2">
      <button className="p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 transition-colors duration-200 rounded-full relative">
      <span className="material-symbols-outlined">notifications</span>
      <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full border border-slate-950"></span>
      </button>
      <button className="p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 transition-colors duration-200 rounded-full">
      <span className="material-symbols-outlined">account_circle</span>
      </button>
      </div>
      </div>
      </header>
      {/* Main Canvas (Empty State) */}
      <main className="flex-1 overflow-y-auto p-margin flex flex-col">
      {/* Context Header */}
      <div className="mb-lg flex flex-col gap-1">
      <h2 className="font-headline-tr text-headline-tr text-on-background">Tesis Geliştirme Alanı</h2>
      <p className="font-body-tr text-body-tr text-on-surface-variant">Sektör-7 ana topolojisi ve modül yerleşim haritası.</p>
      </div>
      {/* Empty State Container (Bento/HUD Style) */}
      <div className="flex-1 min-h-[500px] w-full bg-surface-container rounded-xl border border-outline-variant relative flex flex-col items-center justify-center p-xl overflow-hidden hud-grid shadow-[inset_0_0_60px_rgba(0,0,0,0.5)]">
      {/* Decorative background elements */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
      <div className="w-96 h-96 rounded-full border-[1px] border-primary border-dashed animate-[spin_60s_linear_infinite]"></div>
      <div className="absolute w-64 h-64 rounded-full border-[1px] border-primary border-dotted animate-[spin_40s_linear_infinite_reverse]"></div>
      </div>
      {/* Core Empty State Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-lg bg-surface/80 p-lg rounded-xl border border-surface-variant backdrop-blur-sm shadow-2xl">
      <div className="w-20 h-20 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center mb-md shadow-[0_0_30px_rgba(37,99,235,0.15)] relative">
      <span className="absolute inset-0 rounded-full border border-primary/30 animate-ping" style={{animationDuration: "3s"}}></span>
      <span className="material-symbols-outlined text-4xl text-primary opacity-80" style={{fontVariationSettings: "'wght' 200"}}>domain_disabled</span>
      </div>
      <h3 className="font-display-tr text-display-tr text-on-surface mb-sm tracking-tight">Sistem Çevrimiçi. <br /><span className="text-on-surface-variant">Habitat Beklemede.</span></h3>
      <p className="font-body-tr text-body-tr text-on-surface-variant mb-lg leading-relaxed">
                              Sektör-7 için henüz bir yaşam veya operasyon modülü atanmadı. Telemetri akışını başlatmak ve altyapıyı kurmak için ilk mimari öğenizi tasarlayın.
                          </p>
      <button className="group relative bg-primary-container text-on-primary-container font-label-tr text-label-tr uppercase tracking-wider px-xl py-md rounded-DEFAULT hover:bg-inverse-primary transition-all duration-300 overflow-hidden shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] flex items-center gap-2">
      <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
      <span className="material-symbols-outlined text-sm">add_box</span>
      <span className="relative z-10">İlk Modülü Ekle</span>
      </button>
      </div>
      </div>
      {/* Quick Setup Guide (Bento Grid) */}
      <div className="mt-lg">
      <h4 className="font-title-tr text-title-tr text-on-surface mb-md flex items-center gap-2">
      <span className="material-symbols-outlined text-primary text-sm">tips_and_updates</span>
                          Hızlı Kurulum Rehberi
                      </h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
      {/* Guide Card 1 */}
      <div className="bg-surface-container-low border border-surface-variant rounded-lg p-md hover:border-outline-variant transition-colors group cursor-default relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-surface-variant group-hover:bg-primary transition-colors"></div>
      <div className="flex items-center gap-3 mb-3">
      <div className="w-8 h-8 rounded border border-surface-variant bg-surface flex items-center justify-center text-on-surface-variant group-hover:text-primary transition-colors">
      <span className="material-symbols-outlined text-sm">category</span>
      </div>
      <h5 className="font-title-tr text-title-tr text-on-surface text-base">Modül Seçimi</h5>
      </div>
      <p className="font-body-tr text-body-tr text-on-surface-variant text-sm">
                                  Kataloğumuzdan Laboratuvar, Yaşam Alanı veya Güç Ünitesi gibi operasyonel ihtiyaçlarınıza uygun temel modülü seçin.
                              </p>
      </div>
      {/* Guide Card 2 */}
      <div className="bg-surface-container-low border border-surface-variant rounded-lg p-md hover:border-outline-variant transition-colors group cursor-default relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-surface-variant group-hover:bg-primary transition-colors"></div>
      <div className="flex items-center gap-3 mb-3">
      <div className="w-8 h-8 rounded border border-surface-variant bg-surface flex items-center justify-center text-on-surface-variant group-hover:text-primary transition-colors">
      <span className="material-symbols-outlined text-sm">cable</span>
      </div>
      <h5 className="font-title-tr text-title-tr text-on-surface text-base">Sistem Entegrasyonu</h5>
      </div>
      <p className="font-body-tr text-body-tr text-on-surface-variant text-sm">
                                  Yaşam destek ünitesi, enerji hatları ve oksijen döngüsü gibi kritik altyapı bağlantılarını yapılandırın.
                              </p>
      </div>
      {/* Guide Card 3 */}
      <div className="bg-surface-container-low border border-surface-variant rounded-lg p-md hover:border-outline-variant transition-colors group cursor-default relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-surface-variant group-hover:bg-primary transition-colors"></div>
      <div className="flex items-center gap-3 mb-3">
      <div className="w-8 h-8 rounded border border-surface-variant bg-surface flex items-center justify-center text-on-surface-variant group-hover:text-primary transition-colors">
      <span className="material-symbols-outlined text-sm">engineering</span>
      </div>
      <h5 className="font-title-tr text-title-tr text-on-surface text-base">Mürettebat Ataması</h5>
      </div>
      <p className="font-body-tr text-body-tr text-on-surface-variant text-sm">
                                  Fiziksel kurulum tamamlandıktan sonra, modülü operasyonel hale getirmek için uzman personelinizi görevlendirin.
                              </p>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
