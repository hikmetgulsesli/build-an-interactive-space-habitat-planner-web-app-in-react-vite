// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Modül Detayları
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface ModulDetaylariProps {}

export function ModulDetaylari(props: ModulDetaylariProps) {
  return (
    <>
      {/* TopNavBar */}
      <nav className="docked full-width top-0 border-b border-slate-800 flex justify-between items-center w-full h-16 px-6 z-50 bg-slate-950/90 backdrop-blur-md">
      <div className="flex items-center gap-6">
      <div className="text-xl font-black text-slate-100 tracking-widest font-display-tr text-display-tr">
                      HABİTAT KONTROL
                  </div>
      <div className="hidden md:flex gap-4">
      <a className="font-inter tracking-tighter text-xs font-bold uppercase text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 transition-colors duration-200 px-3 py-2 rounded-DEFAULT" href="#">O2: %98</a>
      <a className="font-inter tracking-tighter text-xs font-bold uppercase text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 transition-colors duration-200 px-3 py-2 rounded-DEFAULT" href="#">GÜÇ: %85</a>
      <a className="font-inter tracking-tighter text-xs font-bold uppercase text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 transition-colors duration-200 px-3 py-2 rounded-DEFAULT" href="#">GIDA: %92</a>
      </div>
      </div>
      <div className="flex items-center gap-4">
      <div className="hidden md:flex relative group">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant text-sm">search</span>
      <input className="bg-[#0F172A] border border-surface-variant rounded-DEFAULT py-1.5 pl-9 pr-3 text-sm text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container/50 focus:shadow-[0_0_8px_rgba(37,99,235,0.3)] transition-all w-64 placeholder-outline-variant font-mono-tr text-mono-tr" placeholder="Sistem Ara..." type="text" />
      </div>
      <button className="p-2 text-primary-fixed-dim hover:bg-slate-900/50 rounded-full transition-colors duration-200 Active: scale-95 opacity-80">
      <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
      </button>
      <button className="p-2 text-primary-fixed-dim hover:bg-slate-900/50 rounded-full transition-colors duration-200 Active: scale-95 opacity-80">
      <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
      </button>
      </div>
      </nav>
      <div className="flex flex-1 overflow-hidden">
      {/* SideNavBar */}
      <aside className="hidden md:flex fixed left-0 h-full w-64 border-r border-slate-800 shadow-[0_0_15px_rgba(37,99,235,0.1)] bg-slate-950 flex-col py-4 space-y-2 z-40 relative">
      <div className="px-6 py-4 mb-4 border-b border-surface-variant">
      <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center border border-surface-variant">
      <span className="material-symbols-outlined text-primary-container">satellite_alt</span>
      </div>
      <div>
      <h2 className="text-lg font-bold text-blue-500 font-headline-tr text-headline-tr leading-none mb-1">SEKTÖR-7</h2>
      <p className="text-xs text-outline font-label-tr text-label-tr">Operasyonel Durum: Aktif</p>
      </div>
      </div>
      </div>
      <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
      <a className="flex items-center gap-3 px-4 py-3 rounded-DEFAULT font-inter text-sm font-medium tracking-tight text-slate-500 hover:text-slate-300 hover:bg-slate-900 transition-all duration-150 Press: translate-x-1 group" href="#">
      <span className="material-symbols-outlined text-outline-variant group-hover:text-primary-fixed-dim transition-colors" data-icon="assignment_late">assignment_late</span>
      <span>Görev Panosu</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 rounded-DEFAULT font-inter text-sm font-medium tracking-tight bg-blue-600/10 text-blue-400 border-r-4 border-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.3)] transition-all duration-150 Press: translate-x-1" href="#">
      <span className="material-symbols-outlined" data-icon="architecture" style={{fontVariationSettings: "'FILL' 1"}}>architecture</span>
      <span>Habitat Tasarımı</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 rounded-DEFAULT font-inter text-sm font-medium tracking-tight text-slate-500 hover:text-slate-300 hover:bg-slate-900 transition-all duration-150 Press: translate-x-1 group" href="#">
      <span className="material-symbols-outlined text-outline-variant group-hover:text-primary-fixed-dim transition-colors" data-icon="groups">groups</span>
      <span>Mürettebat</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 rounded-DEFAULT font-inter text-sm font-medium tracking-tight text-slate-500 hover:text-slate-300 hover:bg-slate-900 transition-all duration-150 Press: translate-x-1 group" href="#">
      <span className="material-symbols-outlined text-outline-variant group-hover:text-primary-fixed-dim transition-colors" data-icon="timeline">timeline</span>
      <span>Kaynaklar</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 rounded-DEFAULT font-inter text-sm font-medium tracking-tight text-slate-500 hover:text-slate-300 hover:bg-slate-900 transition-all duration-150 Press: translate-x-1 group" href="#">
      <span className="material-symbols-outlined text-outline-variant group-hover:text-primary-fixed-dim transition-colors" data-icon="warning">warning</span>
      <span>Uyarılar</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 rounded-DEFAULT font-inter text-sm font-medium tracking-tight text-slate-500 hover:text-slate-300 hover:bg-slate-900 transition-all duration-150 Press: translate-x-1 group" href="#">
      <span className="material-symbols-outlined text-outline-variant group-hover:text-primary-fixed-dim transition-colors" data-icon="settings">settings</span>
      <span>Ayarlar</span>
      </a>
      </nav>
      <div className="mt-auto px-3 py-4 border-t border-surface-variant space-y-1">
      <a className="flex items-center gap-3 px-4 py-2 rounded-DEFAULT font-inter text-sm font-medium tracking-tight text-slate-500 hover:text-slate-300 hover:bg-slate-900 transition-all duration-150 group" href="#">
      <span className="material-symbols-outlined text-outline-variant group-hover:text-primary-fixed-dim transition-colors text-[20px]" data-icon="account_circle">account_circle</span>
      <span>Profil</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-2 rounded-DEFAULT font-inter text-sm font-medium tracking-tight text-error hover:text-error-container hover:bg-error/10 transition-all duration-150 group" href="#">
      <span className="material-symbols-outlined text-[20px]" data-icon="logout">logout</span>
      <span>Çıkış</span>
      </a>
      </div>
      </aside>
      {/* Main Canvas */}
      <main className="flex-1 overflow-y-auto bg-surface-container-lowest p-gutter lg:p-margin pb-24 relative">
      {/* Contextual Header */}
      <div className="mb-lg flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-surface-variant pb-md">
      <div>
      <div className="flex items-center gap-2 mb-2">
      <span className="font-label-tr text-label-tr text-primary-fixed uppercase tracking-widest bg-primary-container/20 px-2 py-0.5 rounded-sm border border-primary-container/30 shadow-[0_0_8px_rgba(37,99,235,0.2)]">ENERJİ SİSTEMLERİ</span>
      <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
      <span className="font-label-tr text-label-tr text-outline">MODÜL ID: PWR-A-092</span>
      </div>
      <h1 className="font-display-tr text-display-tr text-on-surface m-0">Güç Reaktörü Alpha</h1>
      </div>
      <div className="flex gap-sm">
      <button className="bg-transparent border border-surface-variant text-on-surface font-label-tr text-label-tr px-4 py-2 rounded-DEFAULT hover:bg-surface-container-high transition-colors flex items-center gap-2">
      <span className="material-symbols-outlined text-[18px]">build</span>
                              Bakım Başlat
                          </button>
      <button className="bg-error-container/20 border border-error/50 text-error font-label-tr text-label-tr px-4 py-2 rounded-DEFAULT hover:bg-error-container/40 transition-colors flex items-center gap-2">
      <span className="material-symbols-outlined text-[18px]">power_settings_new</span>
                              Devre Dışı Bırak
                          </button>
      </div>
      </div>
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
      {/* Primary Telemetry Card (Hero) */}
      <div className="md:col-span-8 bg-[#0F172A] border border-[#334155] rounded-lg p-md shadow-[0_0_15px_rgba(37,99,235,0.05)] flex flex-col">
      <div className="flex justify-between items-start mb-md">
      <h3 className="font-title-tr text-title-tr text-on-surface flex items-center gap-2">
      <span className="material-symbols-outlined text-primary-container">bolt</span>
                                  Çekirdek Çıkış Verileri
                              </h3>
      <div className="flex items-center gap-2 bg-primary-container/10 px-3 py-1 rounded-full border border-primary-container/30 shadow-[0_0_8px_rgba(37,99,235,0.2)]">
      <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
      <span className="font-label-tr text-label-tr text-primary-fixed">AKTİF - OPTİMAL</span>
      </div>
      </div>
      <div className="grid grid-cols-3 gap-sm mb-lg">
      <div className="bg-surface-container-high border border-surface-variant rounded-DEFAULT p-3">
      <p className="font-mono-tr text-mono-tr text-outline-variant mb-1 uppercase text-[10px]">Anlık Üretim</p>
      <p className="font-headline-tr text-headline-tr text-primary">4.2 GW</p>
      </div>
      <div className="bg-surface-container-high border border-surface-variant rounded-DEFAULT p-3">
      <p className="font-mono-tr text-mono-tr text-outline-variant mb-1 uppercase text-[10px]">Çekirdek Sıcaklığı</p>
      <p className="font-headline-tr text-headline-tr text-on-surface">840 °C</p>
      </div>
      <div className="bg-surface-container-high border border-surface-variant rounded-DEFAULT p-3">
      <p className="font-mono-tr text-mono-tr text-outline-variant mb-1 uppercase text-[10px]">Plazma Stabilitesi</p>
      <p className="font-headline-tr text-headline-tr text-on-surface">%99.8</p>
      </div>
      </div>
      <div className="flex-1 bg-surface-container-low border border-surface-variant rounded-DEFAULT p-4 relative min-h-[200px] flex items-end justify-center overflow-hidden">
      {/* Placeholder for Graph */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(37,99,235,0)_0%,rgba(37,99,235,0.05)_100%)]"></div>
      <div className="w-full h-full flex items-end gap-1 opacity-60">
      <div className="w-full bg-primary-container/30 h-[40%] rounded-t-sm"></div>
      <div className="w-full bg-primary-container/40 h-[50%] rounded-t-sm"></div>
      <div className="w-full bg-primary-container/30 h-[45%] rounded-t-sm"></div>
      <div className="w-full bg-primary-container/50 h-[60%] rounded-t-sm"></div>
      <div className="w-full bg-primary-container/40 h-[55%] rounded-t-sm"></div>
      <div className="w-full bg-primary-container/70 h-[80%] rounded-t-sm shadow-[0_0_10px_rgba(37,99,235,0.4)]"></div>
      <div className="w-full bg-primary-container/60 h-[75%] rounded-t-sm"></div>
      <div className="w-full bg-primary-container/50 h-[65%] rounded-t-sm"></div>
      <div className="w-full bg-primary-container/40 h-[60%] rounded-t-sm"></div>
      <div className="w-full bg-primary-container/60 h-[70%] rounded-t-sm"></div>
      </div>
      <div className="absolute top-4 right-4 font-mono-tr text-mono-tr text-primary-fixed-dim text-[10px] bg-surface-container-lowest px-2 py-1 rounded border border-surface-variant">T-MINUS 1H GRAPH</div>
      </div>
      </div>
      {/* Systems Integration (Connections) */}
      <div className="md:col-span-4 bg-[#0F172A] border border-[#334155] rounded-lg p-md shadow-[0_0_15px_rgba(37,99,235,0.05)] flex flex-col">
      <div className="flex justify-between items-start mb-md">
      <h3 className="font-title-tr text-title-tr text-on-surface flex items-center gap-2">
      <span className="material-symbols-outlined text-outline-variant">hub</span>
                                  Bağlı Sistemler
                              </h3>
      </div>
      <div className="space-y-sm flex-1">
      {/* Integration Item */}
      <div className="bg-surface-container-high border border-surface-variant p-3 rounded-DEFAULT flex items-center justify-between group hover:border-primary-container/50 transition-colors">
      <div className="flex items-center gap-3">
      <span className="material-symbols-outlined text-outline-variant text-[20px]">air</span>
      <div>
      <p className="font-label-tr text-label-tr text-on-surface">O2 Geri Kazanım Ağı</p>
      <p className="font-mono-tr text-mono-tr text-outline-variant text-[10px]">Tüketim: 1.2 GW</p>
      </div>
      </div>
      <span className="material-symbols-outlined text-primary-container text-[16px]">check_circle</span>
      </div>
      {/* Integration Item */}
      <div className="bg-surface-container-high border border-surface-variant p-3 rounded-DEFAULT flex items-center justify-between group hover:border-primary-container/50 transition-colors">
      <div className="flex items-center gap-3">
      <span className="material-symbols-outlined text-outline-variant text-[20px]">thermostat</span>
      <div>
      <p className="font-label-tr text-label-tr text-on-surface">Termal Kalkan B</p>
      <p className="font-mono-tr text-mono-tr text-outline-variant text-[10px]">Tüketim: 0.8 GW</p>
      </div>
      </div>
      <span className="material-symbols-outlined text-primary-container text-[16px]">check_circle</span>
      </div>
      {/* Integration Item */}
      <div className="bg-error-container/10 border border-error/30 p-3 rounded-DEFAULT flex items-center justify-between shadow-[0_0_8px_rgba(255,180,171,0.1)]">
      <div className="flex items-center gap-3">
      <span className="material-symbols-outlined text-error text-[20px]">router</span>
      <div>
      <p className="font-label-tr text-label-tr text-error">İletişim Dizisi - Uzak</p>
      <p className="font-mono-tr text-mono-tr text-error/70 text-[10px]">Durum: Düşük Güç Uyarı</p>
      </div>
      </div>
      <span className="material-symbols-outlined text-error text-[16px]">warning</span>
      </div>
      </div>
      <button className="mt-md w-full py-2 border border-surface-variant text-outline hover:text-on-surface hover:bg-surface-container-high rounded-DEFAULT font-label-tr text-label-tr transition-colors">
                              Tüm Ağı Görüntüle
                          </button>
      </div>
      {/* Maintenance History */}
      <div className="md:col-span-12 bg-[#0F172A] border border-[#334155] rounded-lg p-md shadow-[0_0_15px_rgba(37,99,235,0.05)]">
      <div className="flex justify-between items-center mb-md">
      <h3 className="font-title-tr text-title-tr text-on-surface flex items-center gap-2">
      <span className="material-symbols-outlined text-outline-variant">history</span>
                                  Bakım Geçmişi &amp; Loglar
                              </h3>
      <div className="flex gap-2">
      <span className="font-mono-tr text-mono-tr text-outline-variant text-[10px] bg-surface-container-high px-2 py-1 rounded">SON 30 GÜN</span>
      </div>
      </div>
      <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
      <thead>
      <tr className="border-b border-surface-variant font-mono-tr text-mono-tr text-outline-variant text-[11px] uppercase">
      <th className="pb-2 font-normal pl-2">Tarih/Zaman</th>
      <th className="pb-2 font-normal">Teknisyen</th>
      <th className="pb-2 font-normal">Aksiyon</th>
      <th className="pb-2 font-normal">Durum</th>
      <th className="pb-2 font-normal text-right pr-2">Rapor</th>
      </tr>
      </thead>
      <tbody className="font-body-tr text-body-tr text-sm">
      <tr className="border-b border-surface-variant/50 hover:bg-surface-container-high/50 transition-colors">
      <td className="py-3 pl-2 font-mono-tr text-mono-tr text-outline-variant">2084.11.12 - 08:45</td>
      <td className="py-3 text-on-surface">Müh. Kaelen R.</td>
      <td className="py-3 text-outline">Soğutma Pompası Kalibrasyonu</td>
      <td className="py-3">
      <span className="inline-flex items-center gap-1 text-[11px] text-primary-fixed bg-primary-container/10 border border-primary-container/20 px-2 py-0.5 rounded-sm">
                                                  Başarılı
                                              </span>
      </td>
      <td className="py-3 text-right pr-2">
      <button className="text-outline-variant hover:text-primary-fixed transition-colors"><span className="material-symbols-outlined text-[16px]">description</span></button>
      </td>
      </tr>
      <tr className="border-b border-surface-variant/50 hover:bg-surface-container-high/50 transition-colors">
      <td className="py-3 pl-2 font-mono-tr text-mono-tr text-outline-variant">2084.11.05 - 14:20</td>
      <td className="py-3 text-on-surface">Oto-Sistem Droid</td>
      <td className="py-3 text-outline">Rutin Teşhis Taraması</td>
      <td className="py-3">
      <span className="inline-flex items-center gap-1 text-[11px] text-primary-fixed bg-primary-container/10 border border-primary-container/20 px-2 py-0.5 rounded-sm">
                                                  Başarılı
                                              </span>
      </td>
      <td className="py-3 text-right pr-2">
      <button className="text-outline-variant hover:text-primary-fixed transition-colors"><span className="material-symbols-outlined text-[16px]">description</span></button>
      </td>
      </tr>
      <tr className="hover:bg-surface-container-high/50 transition-colors">
      <td className="py-3 pl-2 font-mono-tr text-mono-tr text-error/80">2084.10.28 - 02:11</td>
      <td className="py-3 text-on-surface">Müh. Sarah T.</td>
      <td className="py-3 text-outline">Acil Kapatma &amp; Yeniden Başlatma</td>
      <td className="py-3">
      <span className="inline-flex items-center gap-1 text-[11px] text-tertiary bg-tertiary-container/20 border border-tertiary-container/30 px-2 py-0.5 rounded-sm">
                                                  Uyarı - Çözüldü
                                              </span>
      </td>
      <td className="py-3 text-right pr-2">
      <button className="text-outline-variant hover:text-primary-fixed transition-colors"><span className="material-symbols-outlined text-[16px]">description</span></button>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
