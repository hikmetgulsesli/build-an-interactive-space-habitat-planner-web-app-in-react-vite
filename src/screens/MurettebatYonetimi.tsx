// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Mürettebat Yönetimi
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface MurettebatYonetimiProps {
  currentScreen: import('../types/domain').ScreenId;
  onNavigate: (screen: import('../types/domain').ScreenId) => void;
  state?: import('../types/domain').AppState;
}

export function MurettebatYonetimi({ currentScreen, onNavigate, state }: MurettebatYonetimiProps) {
  return (
    <>
      {/* TopNavBar */}
      <header className="bg-slate-950 flex justify-between items-center w-full h-16 px-6 z-50 bg-slate-950/90 backdrop-blur-md docked full-width top-0 border-b border-slate-800 shrink-0">
      <div className="flex items-center gap-6">
      <div className="text-xl font-black text-slate-100 tracking-widest">
                      HABİTAT KONTROL
                  </div>
      <nav className="hidden md:flex gap-4">
      <div className="font-inter tracking-tighter text-xs font-bold uppercase text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 transition-colors duration-200 px-2 py-1 rounded">
                          O2: %98
                      </div>
      <div className="font-inter tracking-tighter text-xs font-bold uppercase text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 transition-colors duration-200 px-2 py-1 rounded">
                          GÜÇ: %85
                      </div>
      <div className="font-inter tracking-tighter text-xs font-bold uppercase text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 transition-colors duration-200 px-2 py-1 rounded">
                          GIDA: %92
                      </div>
      </nav>
      </div>
      <div className="flex items-center gap-4 text-blue-600 dark:text-blue-500">
      <button className="hover:bg-slate-900/50 transition-colors duration-200 p-2 rounded-full flex items-center justify-center">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="hover:bg-slate-900/50 transition-colors duration-200 p-2 rounded-full flex items-center justify-center">
      <span className="material-symbols-outlined">account_circle</span>
      </button>
      </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
      {/* SideNavBar */}
      <aside className="bg-slate-950 fixed left-0 h-full w-64 border-r border-slate-800 shadow-[0_0_15px_rgba(37,99,235,0.1)] flex flex-col py-4 space-y-2 z-40 top-16 pb-20">
      <div className="px-6 pb-6 border-b border-slate-800/50 mb-2">
      <div className="text-lg font-bold text-blue-500 mb-1">SEKTÖR-7</div>
      <div className="font-inter text-sm font-medium tracking-tight text-slate-400">Operasyonel Durum: Aktif</div>
      </div>
      <nav className="flex-1 flex flex-col space-y-1 font-inter text-sm font-medium tracking-tight">
      <a className="flex items-center gap-3 text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150" href="?screen=tasks" onClick={(e) => { e.preventDefault(); onNavigate('tasks'); }}>
      <span className="material-symbols-outlined">assignment_late</span>
      <span>Görev Panosu</span>
      </a>
      <a className="flex items-center gap-3 text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150" href="?screen=habitat" onClick={(e) => { e.preventDefault(); onNavigate('habitat'); }}>
      <span className="material-symbols-outlined">architecture</span>
      <span>Habitat Tasarımı</span>
      </a>
      <a className="flex items-center gap-3 bg-blue-600/10 text-blue-400 border-r-4 border-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.3)] px-4 py-3" href="?screen=crew" onClick={(e) => { e.preventDefault(); onNavigate('crew'); }}>
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>groups</span>
      <span>Mürettebat</span>
      </a>
      <a className="flex items-center gap-3 text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150" href="?screen=resources" onClick={(e) => { e.preventDefault(); onNavigate('resources'); }}>
      <span className="material-symbols-outlined">timeline</span>
      <span>Kaynaklar</span>
      </a>
      <a className="flex items-center gap-3 text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150" href="?screen=alerts" onClick={(e) => { e.preventDefault(); onNavigate('alerts'); }}>
      <span className="material-symbols-outlined">warning</span>
      <span>Uyarılar</span>
      </a>
      <a className="flex items-center gap-3 text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150" href="?screen=settings" onClick={(e) => { e.preventDefault(); onNavigate('settings'); }}>
      <span className="material-symbols-outlined">settings</span>
      <span>Ayarlar</span>
      </a>
      </nav>
      <div className="mt-auto px-2 pt-4 border-t border-slate-800/50">
      <a className="flex items-center gap-3 text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded" href="?screen=profile" onClick={(e) => { e.preventDefault(); onNavigate('profile'); }}>
      <span className="material-symbols-outlined">account_circle</span>
      <span>Profil</span>
      </a>
      <a className="flex items-center gap-3 text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded" href="?screen=dashboard" onClick={(e) => { e.preventDefault(); onNavigate('dashboard'); }}>
      <span className="material-symbols-outlined">logout</span>
      <span>Çıkış</span>
      </a>
      </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 ml-64 p-margin overflow-y-auto bg-surface relative">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="max-w-7xl mx-auto space-y-lg">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-md border-b border-outline-variant/30 pb-md">
      <div>
      <h1 className="font-headline-tr text-headline-tr text-on-surface mb-xs">Mürettebat Sicili</h1>
      <p className="font-body-tr text-body-tr text-on-surface-variant flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(180,197,255,0.8)]"></span>
                                  Aktif Personel: 42 / 50
                              </p>
      </div>
      <div className="flex gap-sm">
      <button className="bg-surface-container-high border border-outline-variant text-on-surface hover:bg-surface-bright px-md py-sm rounded flex items-center gap-2 transition-colors">
      <span className="material-symbols-outlined text-sm">download</span>
      <span className="font-label-tr text-label-tr uppercase">Rapor Çıktısı</span>
      </button>
      <button className="bg-primary-container text-on-primary-container hover:bg-inverse-primary px-md py-sm rounded flex items-center gap-2 transition-colors shadow-[0_0_15px_rgba(37,99,235,0.2)]">
      <span className="material-symbols-outlined text-sm">person_add</span>
      <span className="font-label-tr text-label-tr uppercase">Personel Ekle</span>
      </button>
      </div>
      </div>
      {/* Filters */}
      <div className="bg-surface-container border border-outline-variant/50 p-md rounded-lg flex flex-wrap gap-md items-center">
      <div className="flex-1 min-w-[200px] relative">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
      <input className="w-full bg-surface-container-low border border-outline-variant text-on-surface placeholder:text-on-surface-variant/50 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all font-body-tr text-body-tr" placeholder="İsim veya ID numarası ile ara..." type="text" />
      </div>
      <div className="flex gap-sm items-center">
      <span className="font-label-tr text-label-tr text-on-surface-variant uppercase tracking-wider">Filtreler:</span>
      <select className="bg-surface-container-low border border-outline-variant text-on-surface rounded-lg px-3 py-2 focus:outline-none focus:border-primary font-body-tr text-body-tr appearance-none pr-8 relative bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%238d90a0%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_8px_center] bg-[length:16px]">
      <option value="">Tüm Roller</option>
      <option value="muhendis">Mühendis</option>
      <option value="pilot">Pilot / Komuta</option>
      <option value="bilim">Bilim İnsanı</option>
      <option value="guvenlik">Güvenlik</option>
      </select>
      <select className="bg-surface-container-low border border-outline-variant text-on-surface rounded-lg px-3 py-2 focus:outline-none focus:border-primary font-body-tr text-body-tr appearance-none pr-8 relative bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%238d90a0%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_8px_center] bg-[length:16px]">
      <option value="">Tüm Durumlar</option>
      <option value="gorevde">Görevde</option>
      <option value="istirahat">İstirahatte</option>
      <option value="medikal">Tıbbi Gözlem</option>
      </select>
      </div>
      </div>
      {/* Crew Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter">
      {/* Card 1 */}
      <article className="bg-surface-container-low border border-outline-variant rounded-xl p-md flex flex-col gap-4 relative overflow-hidden group hover:border-primary/50 transition-colors duration-300">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      <div className="flex justify-between items-start z-10">
      <div className="w-16 h-16 rounded border-2 border-outline/30 overflow-hidden bg-surface-container-highest">
      <img className="w-full h-full object-cover" data-alt="A striking sci-fi portrait of a male aerospace engineer with intense focus. He is wearing a sleek, dark utilitarian jumpsuit with subtle glowing blue accents indicating high-tech integration. The lighting is dramatic, high-contrast, mimicking the stark artificial illumination of a deep space station command center. The background is pure deep black, emphasizing his features and the futuristic corporate minimalist aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIJ1kh9gxOvxLton95ZNG6RXtkxpa1yyg6m6749VIK5gnsEwZxb8sG0bt16qPlNUY6Is6oD4gFmY1d8t70LR9sCCiY7Ldu9AH8mktoKuKXRd4hI5MYuJADM1e-0tCh6GINn8qLC1DFK-zXY3nvbC1CAZFNrVhKkMfxOTM813Hlq-LrE_wDWRSO-ygjRmRAC6ImjRy6YSoSJZiH59Ev4wQGR5Jd3PIq5dub22BL2hxFj7xL_ZKOLmE2qio4dZtIgOyeU5mVbb4o0Ks" />
      </div>
      <span className="bg-primary/10 border border-primary/30 text-primary font-mono-tr text-mono-tr px-2 py-1 rounded-sm flex items-center gap-1 shadow-[0_0_8px_rgba(180,197,255,0.15)]">
      <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                                      GÖREVDE
                                  </span>
      </div>
      <div className="z-10">
      <h2 className="font-title-tr text-title-tr text-on-surface mb-xs">Kmd. Elias Vance</h2>
      <p className="font-label-tr text-label-tr text-on-surface-variant uppercase tracking-widest flex items-center gap-1">
      <span className="material-symbols-outlined text-[14px]">flight_takeoff</span>
                                      Filo Komutanı
                                  </p>
      </div>
      <div className="mt-auto pt-4 border-t border-outline-variant/30 flex flex-wrap gap-xs z-10">
      <span className="bg-surface-variant text-on-surface-variant font-mono-tr text-[11px] px-2 py-1 rounded">YÖRÜNGE DİNAMİĞİ</span>
      <span className="bg-surface-variant text-on-surface-variant font-mono-tr text-[11px] px-2 py-1 rounded">TAKTIK KOMUTA</span>
      </div>
      </article>
      {/* Card 2 */}
      <article className="bg-surface-container-low border border-outline-variant rounded-xl p-md flex flex-col gap-4 relative overflow-hidden group hover:border-primary/50 transition-colors duration-300">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      <div className="flex justify-between items-start z-10">
      <div className="w-16 h-16 rounded border-2 border-outline/30 overflow-hidden bg-surface-container-highest">
      <img className="w-full h-full object-cover grayscale contrast-125" data-alt="A portrait of a female astrobiologist in an extraterrestrial laboratory setting. She wears a crisp, sterile grey uniform with minimal insignias, reflecting a strict utilitarian design language. The lighting is cool and clinical, utilizing soft cyan tones that cast sharp shadows, conveying a sense of sterile precision. The overall mood is authoritative and scientific within a deep space environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBU8oc6wKU4uwClz6yRGnBDP-AVgfy0c152u0cyfiSbtFcT3k0pfGUc7Z3cHi6qv2YL9GsazZHlJxWmqqHFxJPk79s4cIeKUtofiro1XQz8skSZ_l5vyXmPAofYIgmwgc3nVUeICkTcJtSR0LpwRSY6N5a0uZqC9wKfQ3apIcVwqBdyL1neQDPBAOnzCNLuxqNGeCkqNfcwhLEPn4wkt57sxJoNbPVMT2Y9letpjejGH3-VZjzLSFSZ2gkIY4vjlFnpnmhR48q-thI" />
      </div>
      <span className="bg-surface-variant border border-outline text-on-surface-variant font-mono-tr text-mono-tr px-2 py-1 rounded-sm flex items-center gap-1">
      <span className="material-symbols-outlined text-[14px]">bed</span>
                                      İSTİRAHATTE
                                  </span>
      </div>
      <div className="z-10">
      <h2 className="font-title-tr text-title-tr text-on-surface mb-xs">Dr. Aris Thorne</h2>
      <p className="font-label-tr text-label-tr text-on-surface-variant uppercase tracking-widest flex items-center gap-1">
      <span className="material-symbols-outlined text-[14px]">science</span>
                                      Baş Bilim İnsanı
                                  </p>
      </div>
      <div className="mt-auto pt-4 border-t border-outline-variant/30 flex flex-wrap gap-xs z-10">
      <span className="bg-surface-variant text-on-surface-variant font-mono-tr text-[11px] px-2 py-1 rounded">BİYOMÜHENDİSLİK</span>
      <span className="bg-surface-variant text-on-surface-variant font-mono-tr text-[11px] px-2 py-1 rounded">HİDROPONİK</span>
      </div>
      </article>
      {/* Card 3 */}
      <article className="bg-surface-container-low border border-outline-variant rounded-xl p-md flex flex-col gap-4 relative overflow-hidden group hover:border-error/50 transition-colors duration-300">
      <div className="absolute inset-0 bg-gradient-to-b from-error/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      <div className="flex justify-between items-start z-10">
      <div className="w-16 h-16 rounded border-2 border-error/50 overflow-hidden bg-surface-container-highest">
      <img className="w-full h-full object-cover brightness-75" data-alt="A gritty, high-contrast portrait of a rugged male chief engineer on a space station. His face is partially obscured by harsh, directional shadows. He is clad in heavy-duty, dark slate protective gear with subtle amber warning lights embedded in the collar. The background is a dense, out-of-focus array of pipes and glowing red interfaces, establishing a high-stakes, industrial sci-fi atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuASW3soyiOymLzHA3H0dXLquwDgA9BmWky_Nry6hMsUg0abslwbAINw_tWr7D441xqDQPw7G6fP5TrjVGs6brXfLRMLhTLcAMG1kIv10Msz8qYhbvhH2vktDAgUA1S_VzgKXFVPdJdfWsTisxA323HU4O4sJjnm2tX20zhmocoxsv4Nc1gkfH1AuOdIgXqSmMW3k--flJwbbOhO7ahkLpyg4MWOY5wjgbPyd6xPlUwb734NT8MHF-OzHP1g2IToJfauTiSnFV5-5Y8" />
      </div>
      <span className="bg-error/10 border border-error/50 text-error font-mono-tr text-mono-tr px-2 py-1 rounded-sm flex items-center gap-1 shadow-[0_0_8px_rgba(255,180,171,0.15)]">
      <span className="material-symbols-outlined text-[14px]">warning</span>
                                      ONAY BEKLİYOR
                                  </span>
      </div>
      <div className="z-10">
      <h2 className="font-title-tr text-title-tr text-on-surface mb-xs">Kaelen Voss</h2>
      <p className="font-label-tr text-label-tr text-on-surface-variant uppercase tracking-widest flex items-center gap-1">
      <span className="material-symbols-outlined text-[14px]">build</span>
                                      Baş Mühendis
                                  </p>
      </div>
      <div className="mt-auto pt-4 border-t border-outline-variant/30 flex flex-wrap gap-xs z-10">
      <span className="bg-surface-variant text-on-surface-variant font-mono-tr text-[11px] px-2 py-1 rounded">REAKTÖR BAKIMI</span>
      <span className="bg-error/10 text-error border border-error/20 font-mono-tr text-[11px] px-2 py-1 rounded">HAYATİ TEHLİKE</span>
      </div>
      </article>
      {/* Card 4 */}
      <article className="bg-surface-container-low border border-outline-variant rounded-xl p-md flex flex-col gap-4 relative overflow-hidden group hover:border-primary/50 transition-colors duration-300">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      <div className="flex justify-between items-start z-10">
      <div className="w-16 h-16 rounded border-2 border-outline/30 overflow-hidden bg-surface-container-highest">
      <img className="w-full h-full object-cover" data-alt="A clean, minimalist portrait of a female communications specialist. She is wearing a modern, dark blue neural headset with glowing cyan data streams reflecting lightly on her face. Her attire is a streamlined, dark slate tunic. The environment is pitch black, with the only illumination coming from off-screen holographic displays, creating a sleek, technologically advanced corporate HUD aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWfZqKO-oiryOTNPbBkzulfeSp3O5jM40o6Nnxu045Ez1nlrGOGqwEFB1pK1vnFN0yu_d6wlCdcl90r83JxAMWhFQ5nxS-b1JmxZsqiqCmuC_vW2D3mQiyu7TD2OezCqe9hHHeMJRKjt8qpHUP7SfkKWslAsUegKwMFD0pXgqnWuYAZ-jeGCVK8xnzBwjKL91A6RRscosHUMAvVsFmv6oZOdh3NHuPjX11fz3J50v6GGzHdWezLum63B1Dqn6pLO1f2hh3AHAWvS4" />
      </div>
      <span className="bg-primary/10 border border-primary/30 text-primary font-mono-tr text-mono-tr px-2 py-1 rounded-sm flex items-center gap-1 shadow-[0_0_8px_rgba(180,197,255,0.15)]">
      <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                                      GÖREVDE
                                  </span>
      </div>
      <div className="z-10">
      <h2 className="font-title-tr text-title-tr text-on-surface mb-xs">Lyra Chen</h2>
      <p className="font-label-tr text-label-tr text-on-surface-variant uppercase tracking-widest flex items-center gap-1">
      <span className="material-symbols-outlined text-[14px]">satellite_alt</span>
                                      İletişim Uzmanı
                                  </p>
      </div>
      <div className="mt-auto pt-4 border-t border-outline-variant/30 flex flex-wrap gap-xs z-10">
      <span className="bg-surface-variant text-on-surface-variant font-mono-tr text-[11px] px-2 py-1 rounded">KRİPTOGRAFİ</span>
      <span className="bg-surface-variant text-on-surface-variant font-mono-tr text-[11px] px-2 py-1 rounded">DERİN UZAY SİNYALİ</span>
      </div>
      </article>
      {/* Add New Card Slot */}
      <article className="bg-surface-container-lowest border border-dashed border-outline-variant/50 rounded-xl p-md flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-surface-container hover:border-primary/50 transition-all duration-300 group min-h-[240px]">
      <div className="w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center group-hover:bg-primary-container/20 group-hover:text-primary transition-colors">
      <span className="material-symbols-outlined text-[24px]">person_add</span>
      </div>
      <span className="font-label-tr text-label-tr text-on-surface-variant uppercase tracking-widest group-hover:text-primary transition-colors">Yeni Personel Kaydı</span>
      </article>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
