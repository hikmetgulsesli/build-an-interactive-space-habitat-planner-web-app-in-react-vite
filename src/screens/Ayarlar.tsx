// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Ayarlar
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";
import type { ScreenId, AppState, AppSettings } from '../types/domain';

interface AyarlarProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  state?: AppState;
  updateSettings?: (settings: Partial<AppSettings>) => void;
  resetState?: () => void;
}

export function Ayarlar({ currentScreen, onNavigate, state, updateSettings, resetState }: AyarlarProps) {
  const [saved, setSaved] = useState(false);
  const settings = state?.settings ?? { theme: 'dark', language: 'tr', telemetryRate: 1.5, criticalThreshold: true };

  const handleThemeChange = (theme: 'dark' | 'light') => {
    updateSettings?.({ theme });
  };

  const handleLanguageChange = (language: 'tr' | 'en') => {
    updateSettings?.({ language });
  };

  const handleTelemetryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSettings?.({ telemetryRate: parseFloat(e.target.value) });
  };

  const handleThresholdToggle = () => {
    updateSettings?.({ criticalThreshold: !settings.criticalThreshold });
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleClearStorage = () => {
    if (confirm('Tüm yerel veriler silinecek. Emin misiniz?')) {
      resetState?.();
    }
  };

  return (
    <>
      {/* SideNavBar (Desktop) */}
      <nav className="hidden md:flex flex-col fixed left-0 h-full w-64 border-r border-slate-800 bg-slate-950 py-4 space-y-2 shadow-[0_0_15px_rgba(37,99,235,0.1)] z-40">
      <div className="px-6 pb-6 border-b border-slate-800 mb-4">
      <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-surface-container-high border border-outline-variant flex items-center justify-center overflow-hidden">
      <span className="material-symbols-outlined text-primary" data-icon="satellite_alt">satellite_alt</span>
      </div>
      <div>
      <h2 className="text-lg font-bold text-blue-500 font-headline-tr tracking-tight">SEKTÖR-7</h2>
      <p className="font-label-tr text-label-tr text-slate-400">Operasyonel Durum: Aktif</p>
      </div>
      </div>
      </div>
      <div className="flex-1 flex flex-col space-y-1 overflow-y-auto w-full">
      <a className="font-inter text-sm font-medium tracking-tight text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 flex items-center gap-3 mx-2 rounded-lg" href="?screen=tasks" onClick={(e) => { e.preventDefault(); onNavigate('tasks'); }}>
      <span className="material-symbols-outlined">assignment_late</span>
                      Görev Panosu
                  </a>
      <a className="font-inter text-sm font-medium tracking-tight text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 flex items-center gap-3 mx-2 rounded-lg" href="?screen=habitat" onClick={(e) => { e.preventDefault(); onNavigate('habitat'); }}>
      <span className="material-symbols-outlined">architecture</span>
                      Habitat Tasarımı
                  </a>
      <a className="font-inter text-sm font-medium tracking-tight text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 flex items-center gap-3 mx-2 rounded-lg" href="?screen=crew" onClick={(e) => { e.preventDefault(); onNavigate('crew'); }}>
      <span className="material-symbols-outlined">groups</span>
                      Mürettebat
                  </a>
      <a className="font-inter text-sm font-medium tracking-tight text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 flex items-center gap-3 mx-2 rounded-lg" href="?screen=resources" onClick={(e) => { e.preventDefault(); onNavigate('resources'); }}>
      <span className="material-symbols-outlined">timeline</span>
                      Kaynaklar
                  </a>
      <a className="font-inter text-sm font-medium tracking-tight text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 flex items-center gap-3 mx-2 rounded-lg" href="?screen=alerts" onClick={(e) => { e.preventDefault(); onNavigate('alerts'); }}>
      <span className="material-symbols-outlined">warning</span>
                      Uyarılar
                  </a>
      {/* Active Tab */}
      <a className="font-inter text-sm font-medium tracking-tight bg-blue-600/10 text-blue-400 border-r-4 border-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.3)] px-4 py-3 flex items-center gap-3 translate-x-1" href="?screen=settings" onClick={(e) => { e.preventDefault(); onNavigate('settings'); }}>
      <span className="material-symbols-outlined fill">settings</span>
                      Ayarlar
                  </a>
      </div>
      <div className="mt-auto px-2 pt-4 border-t border-slate-800 space-y-1">
      <a className="font-inter text-sm font-medium tracking-tight text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 flex items-center gap-3 rounded-lg" href="?screen=settings" onClick={(e) => { e.preventDefault(); onNavigate('settings'); }}>
      <span className="material-symbols-outlined">account_circle</span>
                      Profil
                  </a>
      <a className="font-inter text-sm font-medium tracking-tight text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 flex items-center gap-3 rounded-lg text-error hover:text-error-container" href="?screen=dashboard" onClick={(e) => { e.preventDefault(); onNavigate('dashboard'); }}>
      <span className="material-symbols-outlined">logout</span>
                      Çıkış
                  </a>
      </div>
      </nav>
      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col md:ml-64 w-full h-full relative">
      {/* TopNavBar */}
      <header className="flex justify-between items-center w-full h-16 px-6 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 sticky top-0 shrink-0">
      <div className="flex items-center gap-4">
      {/* Mobile Menu Trigger */}
      <button className="md:hidden text-slate-400 hover:text-slate-200">
      <span className="material-symbols-outlined">menu</span>
      </button>
      <h1 className="text-xl font-black text-slate-100 tracking-widest uppercase">HABİTAT KONTROL</h1>
      </div>
      {/* Web Links */}
      <div className="hidden md:flex items-center gap-6">
      <div className="flex gap-4 border-r border-slate-800 pr-6">
      <span className="font-inter tracking-tighter text-xs font-bold uppercase text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 transition-colors duration-200 px-2 py-1 rounded">O2: %98</span>
      <span className="font-inter tracking-tighter text-xs font-bold uppercase text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 transition-colors duration-200 px-2 py-1 rounded">GÜÇ: %85</span>
      <span className="font-inter tracking-tighter text-xs font-bold uppercase text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 transition-colors duration-200 px-2 py-1 rounded">GIDA: %92</span>
      </div>
      <div className="flex items-center gap-3">
      <button className="text-blue-600 dark:text-blue-500 hover:bg-slate-900/50 transition-colors duration-200 p-2 rounded-full flex items-center justify-center">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="text-blue-600 dark:text-blue-500 hover:bg-slate-900/50 transition-colors duration-200 p-2 rounded-full flex items-center justify-center">
      <span className="material-symbols-outlined">account_circle</span>
      </button>
      </div>
      </div>
      </header>
      {/* Page Content Canvas */}
      <main className="flex-1 overflow-y-auto p-margin md:p-xl bg-background scroll-smooth">
      <div className="max-w-6xl mx-auto space-y-lg">
      {/* Page Header */}
      <div className="flex flex-col gap-sm border-b border-surface-variant pb-md">
      <h2 className="font-display-tr text-display-tr text-on-surface">Sistem Ayarları</h2>
      <p className="font-body-tr text-body-tr text-on-surface-variant">Operasyonel tercihlerinizi, dil seçeneklerini ve yerel terminal verilerini yapılandırın.</p>
      </div>
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-min">
      {/* Theme Settings (Span 4) */}
      <div className="md:col-span-4 bg-surface-container rounded-xl border border-outline-variant p-lg flex flex-col gap-md relative overflow-hidden group hover:border-outline transition-colors">
      <div className="flex items-center gap-sm">
      <span className="material-symbols-outlined text-primary-fixed-dim">palette</span>
      <h3 className="font-title-tr text-title-tr text-on-surface">Arayüz Teması</h3>
      </div>
      <p className="font-body-tr text-body-tr text-on-surface-variant mb-auto">Terminal aydınlatma modunu seçin. Gece döngüleri için karanlık mod önerilir.</p>
      <div className="flex flex-col gap-sm mt-4">
      <label className={`flex items-center justify-between p-sm rounded-lg border cursor-pointer transition-colors ${settings.theme === 'dark' ? 'border-primary-container bg-primary-container/10 shadow-[0_0_8px_theme(colors.primary-container/20)]' : 'border-outline-variant hover:bg-surface-variant/50'}`} onClick={() => handleThemeChange('dark')}>
      <div className="flex items-center gap-md">
      <span className="material-symbols-outlined text-primary">dark_mode</span>
      <span className="font-label-tr text-label-tr text-on-surface">Karanlık {settings.theme === 'dark' && '(Aktif)'}</span>
      </div>
      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${settings.theme === 'dark' ? 'border-primary bg-primary' : 'border-outline-variant'}`}>
      {settings.theme === 'dark' && <div className="w-1.5 h-1.5 bg-background rounded-full"></div>}
      </div>
      </label>
      <label className={`flex items-center justify-between p-sm rounded-lg border cursor-pointer transition-colors ${settings.theme === 'light' ? 'border-primary-container bg-primary-container/10 shadow-[0_0_8px_theme(colors.primary-container/20)]' : 'border-outline-variant hover:bg-surface-variant/50'}`} onClick={() => handleThemeChange('light')}>
      <div className="flex items-center gap-md">
      <span className="material-symbols-outlined text-on-surface-variant">light_mode</span>
      <span className="font-label-tr text-label-tr text-on-surface-variant">Aydınlık {settings.theme === 'light' && '(Aktif)'}</span>
      </div>
      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${settings.theme === 'light' ? 'border-primary bg-primary' : 'border-outline-variant'}`}>
      {settings.theme === 'light' && <div className="w-1.5 h-1.5 bg-background rounded-full"></div>}
      </div>
      </label>
      </div>
      </div>
      {/* Language Settings (Span 4) */}
      <div className="md:col-span-4 bg-surface-container rounded-xl border border-outline-variant p-lg flex flex-col gap-md hover:border-outline transition-colors">
      <div className="flex items-center gap-sm">
      <span className="material-symbols-outlined text-primary-fixed-dim">language</span>
      <h3 className="font-title-tr text-title-tr text-on-surface">Dil ve Bölge</h3>
      </div>
      <p className="font-body-tr text-body-tr text-on-surface-variant mb-auto">Sistem arayüzü ve otonom duyurular için varsayılan dili belirleyin.</p>
      <div className="mt-4 relative">
      <select value={settings.language} onChange={(e) => handleLanguageChange(e.target.value as 'tr' | 'en')} className="w-full appearance-none bg-surface-dim border border-outline-variant text-on-surface font-body-tr text-body-tr rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all">
      <option selected={true} value="tr">Türkçe (Sektör Standart)</option>
      <option value="en">English (International)</option>
      </select>
      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">arrow_drop_down</span>
      </div>
      </div>
      {/* Data Storage (Span 4) */}
      <div className="md:col-span-4 bg-surface-container rounded-xl border border-outline-variant p-lg flex flex-col gap-md hover:border-outline transition-colors">
      <div className="flex items-center gap-sm">
      <span className="material-symbols-outlined text-error">storage</span>
      <h3 className="font-title-tr text-title-tr text-on-surface">Veri Saklama</h3>
      </div>
      <p className="font-body-tr text-body-tr text-on-surface-variant mb-auto">Terminal önbelleğini ve geçici telemetri verilerini sıfırlayın. Kritik veriler etkilenmez.</p>
      <button onClick={handleClearStorage} className="mt-4 w-full bg-error-container/20 text-error border border-error/50 hover:bg-error hover:text-on-error font-label-tr text-label-tr uppercase py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2">
      <span className="material-symbols-outlined text-[18px]">delete_sweep</span>
                                  Yerel Depolamayı Temizle
                              </button>
      </div>
      {/* System Parameters (Span 12) */}
      <div className="md:col-span-12 bg-surface-container rounded-xl border border-outline-variant p-lg flex flex-col gap-lg">
      <div className="flex items-center gap-sm border-b border-surface-variant pb-sm">
      <span className="material-symbols-outlined text-primary-fixed-dim">tune</span>
      <h3 className="font-title-tr text-title-tr text-on-surface">Sistem Parametreleri</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
      {/* Param 1 */}
      <div className="flex flex-col gap-sm">
      <div className="flex justify-between items-end">
      <label className="font-label-tr text-label-tr text-on-surface">Telemetri Yenileme Hızı</label>
      <span className="font-mono-tr text-mono-tr text-primary">{settings.telemetryRate}s</span>
      </div>
      <input onChange={handleTelemetryChange} className="w-full h-1 bg-surface-dim rounded-full appearance-none cursor-pointer accent-primary" max="5" min="0.5" step="0.5" type="range" value={settings.telemetryRate} />
      <div className="flex justify-between text-xs text-on-surface-variant">
      <span>Yüksek Performans</span>
      <span>Veri Tasarrufu</span>
      </div>
      </div>
      {/* Param 2 */}
      <div className="flex flex-col gap-sm">
      <div className="flex justify-between items-center">
      <label className="font-label-tr text-label-tr text-on-surface">Otonom Kritik Uyarı Eşiği</label>
      </div>
      <div onClick={handleThresholdToggle} className="flex items-center gap-4 bg-surface-dim p-2 rounded-lg border border-outline-variant cursor-pointer">
      <span className="material-symbols-outlined text-warning">warning_amber</span>
      <span className="font-body-tr text-body-tr text-on-surface flex-1">O2 seviyesi &lt;%85 altına düştüğünde manuel onaya geç</span>
      <div className={`w-10 h-5 rounded-full relative cursor-pointer shadow-[0_0_8px_theme(colors.primary/40)] transition-colors ${settings.criticalThreshold ? 'bg-primary' : 'bg-surface-container-highest'}`}>
      <div className={`w-4 h-4 bg-on-primary rounded-full absolute top-0.5 transition-all ${settings.criticalThreshold ? 'right-0.5' : 'left-0.5'}`}></div>
      </div>
      </div>
      </div>
      </div>
      <div className="mt-4 pt-4 border-t border-surface-variant flex justify-end">
      <button onClick={handleSave} className="bg-primary text-on-primary font-label-tr text-label-tr uppercase px-6 py-2.5 rounded-lg hover:bg-primary-fixed transition-colors shadow-[0_0_12px_theme(colors.primary/20)] flex items-center gap-2">
      <span className="material-symbols-outlined text-[18px]">{saved ? 'check' : 'save'}</span>
                                      {saved ? 'Kaydedildi' : 'Parametreleri Kaydet'}
                                  </button>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
      {/* Mobile Bottom Navigation (Visible only on md:hidden per "Responsive Pivot") */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-slate-950/95 backdrop-blur-md border-t border-slate-800 z-50 flex justify-around items-center h-16 pb-safe">
      <a className="flex flex-col items-center justify-center w-full h-full text-slate-500 hover:text-slate-300" href="?screen=tasks" onClick={(e) => { e.preventDefault(); onNavigate('tasks'); }}>
      <span className="material-symbols-outlined">assignment_late</span>
      <span className="text-[10px] font-medium mt-1">Görevler</span>
      </a>
      <a className="flex flex-col items-center justify-center w-full h-full text-slate-500 hover:text-slate-300" href="?screen=settings" onClick={(e) => { e.preventDefault(); onNavigate('settings'); }}>
      <span className="material-symbols-outlined">architecture</span>
      <span className="text-[10px] font-medium mt-1">Tasarım</span>
      </a>
      <a className="flex flex-col items-center justify-center w-full h-full text-blue-400" href="?screen=settings" onClick={(e) => { e.preventDefault(); onNavigate('settings'); }}>
      <span className="material-symbols-outlined fill text-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.5)] rounded-full">settings</span>
      <span className="text-[10px] font-medium mt-1">Ayarlar</span>
      </a>
      </nav>
    </>
  );
}
