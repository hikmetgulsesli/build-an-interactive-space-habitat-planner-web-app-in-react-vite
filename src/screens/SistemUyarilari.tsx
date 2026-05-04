// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Sistem Uyarıları
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface SistemUyarilariProps {}

export function SistemUyarilari(props: SistemUyarilariProps) {
  return (
    <>
      {/* SideNavBar (Shared Component JSON) */}
      <nav className="hidden md:flex flex-col bg-slate-950 fixed left-0 h-full w-64 border-r border-slate-800 shadow-[0_0_15px_rgba(37,99,235,0.1)] py-4 space-y-2 z-50">
      {/* Header */}
      <div className="px-6 pb-6 border-b border-slate-800 mb-4 flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-blue-900/50 border border-blue-500/50 flex items-center justify-center text-blue-400">
      <span className="material-symbols-outlined">satellite_alt</span>
      </div>
      <div>
      <h1 className="text-lg font-bold text-blue-500 tracking-wider">SEKTÖR-7</h1>
      <p className="font-inter text-[10px] font-medium tracking-tight text-emerald-400 uppercase">Operasyonel Durum: Aktif</p>
      </div>
      </div>
      {/* Navigation Links */}
      <div className="flex-1 flex flex-col space-y-1 px-2 font-inter text-sm font-medium tracking-tight">
      <a className="flex items-center gap-3 text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded-DEFAULT" href="#">
      <span className="material-symbols-outlined">assignment_late</span>
                      Görev Panosu
                  </a>
      <a className="flex items-center gap-3 text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded-DEFAULT" href="#">
      <span className="material-symbols-outlined">architecture</span>
                      Habitat Tasarımı
                  </a>
      <a className="flex items-center gap-3 text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded-DEFAULT" href="#">
      <span className="material-symbols-outlined">groups</span>
                      Mürettebat
                  </a>
      <a className="flex items-center gap-3 text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded-DEFAULT" href="#">
      <span className="material-symbols-outlined">timeline</span>
                      Kaynaklar
                  </a>
      {/* Active Tab */}
      <a className="flex items-center gap-3 bg-blue-600/10 text-blue-400 border-r-4 border-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.3)] px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded-l-DEFAULT" href="#">
      <span className="material-symbols-filled">warning</span>
                      Uyarılar
                  </a>
      <a className="flex items-center gap-3 text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded-DEFAULT" href="#">
      <span className="material-symbols-outlined">settings</span>
                      Ayarlar
                  </a>
      </div>
      {/* Footer */}
      <div className="px-2 pt-4 border-t border-slate-800 space-y-1 font-inter text-sm font-medium tracking-tight mt-auto">
      <a className="flex items-center gap-3 text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded-DEFAULT" href="#">
      <span className="material-symbols-outlined">account_circle</span>
                      Profil
                  </a>
      <a className="flex items-center gap-3 text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded-DEFAULT text-red-400 hover:text-red-300" href="#">
      <span className="material-symbols-outlined">logout</span>
                      Çıkış
                  </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col md:ml-64 h-screen">
      {/* TopNavBar (Shared Component JSON) */}
      <header className="flex justify-between items-center w-full h-16 px-6 z-50 bg-slate-950 border-b border-slate-800">
      {/* Brand Mobile (Hidden on Desktop as SideNav has it, but JSON mandates brand logo style) */}
      <div className="md:hidden text-xl font-black text-slate-100 tracking-widest flex items-center gap-2">
      <span className="material-symbols-outlined text-blue-500">satellite_alt</span>
                      HABİTAT KONTROL
                  </div>
      {/* Empty div to push nav to right if needed, or hold telemetry */}
      <div className="hidden md:flex gap-6 font-inter tracking-tighter text-xs font-bold uppercase text-slate-400">
      <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> O2: %98</div>
      <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-yellow-500"></span> GÜÇ: %85</div>
      <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500"></span> GIDA: %92</div>
      </div>
      {/* Trailing Actions */}
      <div className="flex items-center gap-4 text-blue-600 dark:text-blue-500">
      <button className="p-2 rounded-full hover:bg-slate-900/50 transition-colors duration-200 active:scale-95 active:opacity-80 relative">
      <span className="material-symbols-outlined">notifications</span>
      <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-slate-950"></span>
      </button>
      <button className="p-2 rounded-full hover:bg-slate-900/50 transition-colors duration-200 active:scale-95 active:opacity-80">
      <span className="material-symbols-outlined">account_circle</span>
      </button>
      </div>
      </header>
      {/* Alerts Canvas (Design System Applied) */}
      <div className="flex-1 overflow-y-auto p-gutter md:p-margin bg-background relative">
      {/* Atmospheric Background Texture (Fulfilling data-alt constraint via pseudo/bg-image approach) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-screen bg-cover bg-center" data-alt="A highly detailed satellite view of a dark, alien planet surface illuminated by faint, glowing blue atmospheric grids and technological nodes. The scene evokes a deep-space, high-tech operational command center aesthetic. The lighting is extremely low-key, utilizing the deep blacks and slate grays of a minimalist SaaS dashboard, pierced only by sharp, luminescent cyan and electric blue data pathways. The mood is precise, vast, and utilitarian." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCFR7qQF4nU3sJof4g5QaTX6bK4LM0RYKz4I8vY7cI3urp_FYpNIRyoZTVbpdBpSW-8YrFBcLoyZwS_OobnYUxINXaGySckzxbHOAIr90mYX0t2Y4As-Dqn0UoSBH6rCPhzlnqj0blVBd4QvLLd1sEbh1ZdZPg9Q7HudR7fhn-HSe-dn4yi3sP7dEXHXNeXp2iIh45B-ciPMwvjnTivrcwqPmTkaf7BnKMK16CuKfhsc6hnc8szxGgB0Gv1nY03mgLwAfPE0nLZ3JQ')"}}></div>
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col gap-lg">
      {/* Page Header */}
      <div className="flex flex-col gap-xs">
      <h2 className="font-display-tr text-display-tr text-on-surface flex items-center gap-sm">
      <span className="material-symbols-filled text-error">warning</span>
                              Sistem Uyarıları
                          </h2>
      <p className="font-mono-tr text-mono-tr text-on-surface-variant uppercase tracking-widest">
                              Protokol: Aktif İzleme // UTC 14:02:45
                          </p>
      </div>
      {/* Telemetry Summary Grid (Bento Style) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
      {/* Critical Stats */}
      <div className="bg-error-container border border-error/50 rounded-lg p-md flex items-center justify-between shadow-[0_0_15px_rgba(255,180,171,0.05)]">
      <div>
      <p className="font-label-tr text-label-tr text-on-error-container/80 uppercase">Kritik Arızalar</p>
      <p className="font-display-tr text-[32px] font-bold text-on-error-container leading-none mt-1">02</p>
      </div>
      <div className="w-12 h-12 rounded-full bg-error/10 flex items-center justify-center text-error">
      <span className="material-symbols-filled text-[28px]">crisis_alert</span>
      </div>
      </div>
      {/* Moderate Stats */}
      <div className="bg-surface-container border border-tertiary/30 rounded-lg p-md flex items-center justify-between">
      <div>
      <p className="font-label-tr text-label-tr text-on-surface-variant uppercase">Orta Seviye</p>
      <p className="font-display-tr text-[32px] font-bold text-tertiary leading-none mt-1">05</p>
      </div>
      <div className="w-12 h-12 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary">
      <span className="material-symbols-outlined text-[28px]">error</span>
      </div>
      </div>
      {/* Low Stats */}
      <div className="bg-surface-container border border-outline-variant rounded-lg p-md flex items-center justify-between">
      <div>
      <p className="font-label-tr text-label-tr text-on-surface-variant uppercase">Düşük Seviye / Bilgi</p>
      <p className="font-display-tr text-[32px] font-bold text-secondary leading-none mt-1">14</p>
      </div>
      <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
      <span className="material-symbols-outlined text-[28px]">info</span>
      </div>
      </div>
      </div>
      {/* Alerts List/Grid */}
      <div className="flex flex-col gap-sm">
      <h3 className="font-label-tr text-label-tr text-outline uppercase border-b border-outline-variant pb-xs mb-xs">Aktif Bildirim Logu</h3>
      {/* Critical Alert Card 1 */}
      <div className="bg-surface-container-high rounded-lg border border-error/40 p-0 flex flex-col sm:flex-row relative overflow-hidden group shadow-[0_0_12px_rgba(255,180,171,0.08)]">
      {/* Left Accent Line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-error shadow-[0_0_8px_rgba(255,180,171,0.8)]"></div>
      <div className="p-md flex-1 flex flex-col gap-xs pl-lg">
      <div className="flex items-center gap-sm font-mono-tr text-mono-tr text-error">
      <span className="material-symbols-filled text-[16px] animate-pulse">emergency</span>
      <span>KRİTİK</span>
      <span className="text-on-surface-variant">•</span>
      <span className="text-on-surface-variant">Modül: Yaşam Destek (A-Blok)</span>
      <span className="ml-auto text-on-surface-variant">T-Eksi: 00:04:12</span>
      </div>
      <h4 className="font-title-tr text-title-tr text-on-surface">O2 Sirkülasyon Pompası Arızası</h4>
      <p className="font-body-tr text-body-tr text-on-surface-variant">
                                      Ana basınç hattında %40 oranında ani düşüş tespit edildi. Yedek sistemler devrede ancak kapasite sınırında çalışıyor. Acil mühendislik müdahalesi gereklidir.
                                  </p>
      </div>
      <div className="p-md bg-surface-container-highest border-l border-outline-variant flex sm:flex-col items-center justify-center gap-sm">
      <button className="w-full sm:w-auto px-lg py-sm bg-error text-on-error rounded-DEFAULT font-label-tr text-label-tr uppercase tracking-widest hover:bg-[#ffcdc7] transition-colors shadow-[0_0_10px_rgba(255,180,171,0.2)]">
                                      Çözüldü
                                  </button>
      <button className="w-full sm:w-auto px-lg py-sm border border-outline text-on-surface rounded-DEFAULT font-label-tr text-label-tr uppercase tracking-widest hover:bg-surface-variant transition-colors">
                                      Ertele
                                  </button>
      </div>
      </div>
      {/* Critical Alert Card 2 (Personnel) */}
      <div className="bg-surface-container-high rounded-lg border border-error/40 p-0 flex flex-col sm:flex-row relative overflow-hidden group shadow-[0_0_12px_rgba(255,180,171,0.08)]">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-error shadow-[0_0_8px_rgba(255,180,171,0.8)]"></div>
      <div className="p-md flex-1 flex flex-col gap-xs pl-lg">
      <div className="flex items-center gap-sm font-mono-tr text-mono-tr text-error">
      <span className="material-symbols-filled text-[16px]">monitor_heart</span>
      <span>KRİTİK SAĞLIK</span>
      <span className="text-on-surface-variant">•</span>
      <span className="text-on-surface-variant">Personel: Müh. K. Yılmaz (ID: 4492)</span>
      <span className="ml-auto text-on-surface-variant">T-Eksi: 00:12:05</span>
      </div>
      <div className="flex items-start gap-md mt-sm">
      <img className="w-16 h-16 rounded-DEFAULT object-cover border border-outline-variant grayscale sepia-[.2] hue-rotate-[180deg]" data-alt="A close up, low-angle portrait of an astronaut engineer in a sleek, high-tech dark space suit inside a dimly lit space station corridor. The lighting is extremely dramatic, casting deep, sharp shadows across the visor and highlighting the worn metallic textures of the life support rig. The mood is tense, urgent, and serious, perfectly suited for a sci-fi UI dashboard. The color palette relies heavily on deep navy blacks and stark whites, punctuated by a faint, warning-red LED reflection on the helmet visor." src="https://lh3.googleusercontent.com/aida-public/AB6AXuClpp4JCJbGLCBM0vjGomMGGKwJ-lwVcCH9clU0Md4mKeSYoMN-2q2Mc6E9imkI5JsfYzzR0irLEaV6x0EIdD_ISoZCxdzaYIT2pdWIsF17K3rahsCt2Wf9GTaqyWSR6A15rf0p72Ip8igsyudggVjolniwdeZ18aofN9CoocAXEY6afIdxN1IHLqxddRLhAp0AywitX2Mr0DGaZ_YVCGV86QrsWrB2Ep8ZCitgRWcFonWbucSidZUJ-MA3wykAqr87TdddTH_EsPQ" />
      <div>
      <h4 className="font-title-tr text-title-tr text-on-surface">Anormal Vital Bulgular - Sektör 4 Dış Yüzey</h4>
      <p className="font-body-tr text-body-tr text-on-surface-variant mt-1">
                                              EVA görevi sırasında kalp ritminde düzensizlik ve kask içi CO2 seviyesinde sınır aşımı tespit edildi. Otomatik geri dönüş protokolü öneriliyor.
                                          </p>
      </div>
      </div>
      </div>
      <div className="p-md bg-surface-container-highest border-l border-outline-variant flex sm:flex-col items-center justify-center gap-sm">
      <button className="w-full sm:w-auto px-lg py-sm bg-error text-on-error rounded-DEFAULT font-label-tr text-label-tr uppercase tracking-widest hover:bg-[#ffcdc7] transition-colors shadow-[0_0_10px_rgba(255,180,171,0.2)] flex items-center justify-center gap-2">
      <span className="material-symbols-outlined text-[18px]">medical_services</span> Müdahale
                                  </button>
      </div>
      </div>
      {/* Moderate Alert Card */}
      <div className="bg-surface-container rounded-lg border border-tertiary/30 p-0 flex flex-col sm:flex-row relative overflow-hidden group hover:bg-surface-container-high transition-colors">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-tertiary/50"></div>
      <div className="p-md flex-1 flex flex-col gap-xs pl-lg">
      <div className="flex items-center gap-sm font-mono-tr text-mono-tr text-tertiary">
      <span className="material-symbols-outlined text-[16px]">warning</span>
      <span>ORTA</span>
      <span className="text-on-surface-variant">•</span>
      <span className="text-on-surface-variant">Modül: Hidroponik Bahçe</span>
      <span className="ml-auto text-on-surface-variant">T-Eksi: 02:45:10</span>
      </div>
      <h4 className="font-title-tr text-title-tr text-on-surface">Nutrient Akışında Dalgalanma</h4>
      <p className="font-body-tr text-body-tr text-on-surface-variant">
                                      B-Sektörü bitki yetiştirme ünitelerine giden sıvı besin pompası #2'de basınç dalgalanmaları gözlemleniyor. Verim düşüşü riski.
                                  </p>
      </div>
      <div className="p-md border-t sm:border-t-0 sm:border-l border-outline-variant flex sm:flex-col items-center justify-center gap-sm">
      <button className="w-full sm:w-auto px-lg py-sm bg-tertiary-container text-on-tertiary-container rounded-DEFAULT font-label-tr text-label-tr uppercase tracking-widest hover:brightness-110 transition-all">
                                      Çözüldü
                                  </button>
      <button className="w-full sm:w-auto px-lg py-sm border border-outline text-on-surface rounded-DEFAULT font-label-tr text-label-tr uppercase tracking-widest hover:bg-surface-variant transition-colors">
                                      Ertele
                                  </button>
      </div>
      </div>
      {/* Low Alert Card */}
      <div className="bg-surface-container rounded-lg border border-outline-variant/50 p-0 flex flex-col sm:flex-row relative overflow-hidden group hover:bg-surface-container-high transition-colors opacity-80 hover:opacity-100">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary/30"></div>
      <div className="p-md flex-1 flex flex-col gap-xs pl-lg">
      <div className="flex items-center gap-sm font-mono-tr text-mono-tr text-secondary">
      <span className="material-symbols-outlined text-[16px]">info</span>
      <span>DÜŞÜK</span>
      <span className="text-on-surface-variant">•</span>
      <span className="text-on-surface-variant">Sistem: Yapay Zeka Çekirdeği</span>
      <span className="ml-auto text-on-surface-variant">T-Eksi: 05:12:00</span>
      </div>
      <h4 className="font-title-tr text-title-tr text-on-surface">Rutin Diagnostik Gecikmesi</h4>
      <p className="font-body-tr text-body-tr text-on-surface-variant">
                                      Alt-sistemlerin günlük otomatik kontrol protokolü planlanan süreden %5 daha uzun sürdü. Performans logları kaydedildi.
                                  </p>
      </div>
      <div className="p-md border-t sm:border-t-0 sm:border-l border-outline-variant flex sm:flex-col items-center justify-center gap-sm">
      <button className="w-full sm:w-auto px-lg py-sm border border-outline text-on-surface rounded-DEFAULT font-label-tr text-label-tr uppercase tracking-widest hover:bg-surface-variant transition-colors">
                                      Gözardı Et
                                  </button>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
