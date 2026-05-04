// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: İstatistikler
//
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState, useMemo } from "react";
import type { ScreenId, AppState } from '../types/domain';

interface IstatistiklerProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  state?: AppState;
}

export function Istatistikler({ currentScreen, onNavigate, state }: IstatistiklerProps) {
  const resources = state?.resources ?? { oxygen: 98.2, power: 85.0, water: 92.4, food: 92.0, temperature: 22.4 };
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMetric, setSelectedMetric] = useState<'oxygen' | 'power' | 'water'>('oxygen');
  const [appliedIds, setAppliedIds] = useState<Set<string>>(new Set());
  const [reportDownloaded, setReportDownloaded] = useState(false);

  const sustainabilityScore = useMemo(() => {
    const tempScore = Math.max(0, 100 - Math.abs(resources.temperature - 22) * 5);
    return Math.round((resources.oxygen + resources.power + resources.water + resources.food + tempScore) / 5);
  }, [resources]);

  const scoreStatus = sustainabilityScore >= 90 ? 'MÜKEMMEL' : sustainabilityScore >= 75 ? 'İSTİKRARLI' : sustainabilityScore >= 60 ? 'DİKKAT' : 'KRİTİK';
  const scoreStatusClass = sustainabilityScore >= 90 ? 'bg-primary/20 text-primary border-primary/30' : sustainabilityScore >= 75 ? 'bg-primary/20 text-primary border-primary/30' : sustainabilityScore >= 60 ? 'bg-amber-500/20 text-amber-500 border-amber-500/30' : 'bg-error/20 text-error border-error/30';

  const circumference = 283;
  const strokeDashoffset = circumference - (circumference * sustainabilityScore / 100);

  const days = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'];
  const weeklyData = useMemo(() => {
    return days.map((_, i) => {
      const variance = Math.sin(i * 1.2) * 12;
      const base = resources[selectedMetric];
      return Math.max(30, Math.min(100, Math.round(base + variance)));
    });
  }, [resources, selectedMetric]);

  const barFillColor = selectedMetric === 'oxygen' ? 'bg-primary' : selectedMetric === 'power' ? 'bg-amber-500' : 'bg-cyan-500';
  const barShadow = selectedMetric === 'oxygen' ? 'shadow-[0_0_10px_rgba(180,197,255,0.3)]' : selectedMetric === 'power' ? 'shadow-[0_0_10px_rgba(245,158,11,0.3)]' : 'shadow-[0_0_10px_rgba(6,182,212,0.3)]';

  const suggestions = useMemo(() => {
    const items: Array<{
      id: string;
      title: string;
      desc: string;
      icon: string;
      priority: string;
      priorityClass: string;
      action: string;
      metric: string;
      barColor: string;
    }> = [];

    if (resources.power < 80 || state?.alerts.some(a => a.level === 'critical' && (a.message.includes('Güç') || a.message.includes('jeneratör')))) {
      items.push({
        id: 'sugg-power',
        title: 'Güç Optimizasyonu',
        desc: 'Güç ünitesi verimliliği düşük seviyede. Yedek sistemlerin devreye alınması ve yük dengelemesi yapılması önerilir.',
        icon: 'bolt',
        priority: 'YÜKSEK ÖNCELİK',
        priorityClass: 'bg-error/10 text-error border-error/20',
        action: 'UYGULA',
        metric: `+ %${Math.max(3, Math.round(100 - resources.power) / 5).toFixed(0)} Güç`,
        barColor: 'bg-tertiary-container text-on-tertiary-container hover:brightness-110 rounded text-xs font-bold transition-all shadow-[0_0_10px_rgba(188,72,0,0.4)]',
      });
    }

    if (resources.water < 85) {
      items.push({
        id: 'sugg-water',
        title: 'Su Geri Dönüşüm Filtresi',
        desc: 'Su rezervi kritik seviyeye yaklaşıyor. Filtre bakımı ve geri dönüşüm optimizasyonu su kaybını önleyecektir.',
        icon: 'water_drop',
        priority: 'ORTA ÖNCELİK',
        priorityClass: 'bg-secondary/10 text-secondary border-secondary/20',
        action: 'PROGRAMLA',
        metric: `+ ${Math.max(8, Math.round(100 - resources.water)).toFixed(0)}L/Gün`,
        barColor: 'border border-primary text-primary hover:bg-primary/10 rounded text-xs font-bold transition-all',
      });
    }

    if (resources.oxygen < 90) {
      items.push({
        id: 'sugg-oxygen',
        title: 'Oksijen Dağıtım Dengelemesi',
        desc: 'O2 seviyesi optimal altında. Dağıtım hatlarının yeniden yapılandırılması hava kalitesini artıracaktır.',
        icon: 'air',
        priority: 'DÜŞÜK ÖNCELİK',
        priorityClass: 'bg-surface-variant text-on-surface border-outline-variant/50',
        action: 'ONAYLA',
        metric: 'Kalite Artışı',
        barColor: 'border border-primary text-primary hover:bg-primary/10 rounded text-xs font-bold transition-all',
      });
    }

    if (resources.temperature > 25 || resources.temperature < 18) {
      items.push({
        id: 'sugg-thermal',
        title: 'Termal Regülasyon Optimizasyonu',
        desc: `İç ortam sıcaklığı ${resources.temperature.toFixed(1)}°C. Termal regülatörlerin kalibrasyonu enerji verimliliğini artıracaktır.`,
        icon: 'thermostat',
        priority: 'YÜKSEK ÖNCELİK',
        priorityClass: 'bg-error/10 text-error border-error/20',
        action: 'UYGULA',
        metric: '+ %4 Güç',
        barColor: 'bg-tertiary-container text-on-tertiary-container hover:brightness-110 rounded text-xs font-bold transition-all shadow-[0_0_10px_rgba(188,72,0,0.4)]',
      });
    }

    if (items.length === 0) {
      items.push({
        id: 'sugg-thermal',
        title: 'Termal Regülasyon Optimizasyonu',
        desc: 'Sistemler verimli çalışıyor. Gece döngüsünde termal yükün azaltılması %4 enerji tasarrufu sağlayacaktır.',
        icon: 'thermostat',
        priority: 'DÜŞÜK ÖNCELİK',
        priorityClass: 'bg-surface-variant text-on-surface border-outline-variant/50',
        action: 'UYGULA',
        metric: '+ %4 Güç',
        barColor: 'bg-tertiary-container text-on-tertiary-container hover:brightness-110 rounded text-xs font-bold transition-all shadow-[0_0_10px_rgba(188,72,0,0.4)]',
      });
      items.push({
        id: 'sugg-water',
        title: 'Su Geri Dönüşüm Filtresi',
        desc: 'Hidroponik tarım alanında filtre verimliliği izleniyor. Ters yıkama döngüsü su kaybını önleyecektir.',
        icon: 'water_drop',
        priority: 'ORTA ÖNCELİK',
        priorityClass: 'bg-secondary/10 text-secondary border-secondary/20',
        action: 'PROGRAMLA',
        metric: '+ 12L/Gün',
        barColor: 'border border-primary text-primary hover:bg-primary/10 rounded text-xs font-bold transition-all',
      });
      items.push({
        id: 'sugg-oxygen',
        title: 'Oksijen Dağıtım Dengelemesi',
        desc: 'Mürettebat dağılımı dengeli. O2 akışının optimize edilmesi hava kalitesini artıracaktır.',
        icon: 'air',
        priority: 'DÜŞÜK ÖNCELİK',
        priorityClass: 'bg-surface-variant text-on-surface border-outline-variant/50',
        action: 'ONAYLA',
        metric: 'Kalite Artışı',
        barColor: 'border border-primary text-primary hover:bg-primary/10 rounded text-xs font-bold transition-all',
      });
    }

    return items.slice(0, 3);
  }, [resources, state?.alerts]);

  const handleDownloadReport = () => {
    const report = {
      tarih: new Date().toISOString(),
      skor: sustainabilityScore,
      kaynaklar: resources,
      moduller: state?.modules.length ?? 0,
      murettebat: state?.crew.length ?? 0,
      uyarılar: state?.alerts.length ?? 0,
    };
    const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sektor7-rapor-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setReportDownloaded(true);
    setTimeout(() => setReportDownloaded(false), 3000);
  };

  const handleApply = (id: string) => {
    setAppliedIds(prev => new Set(prev).add(id));
    setTimeout(() => {
      setAppliedIds(prev => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    }, 3000);
  };

  const navLinkClass = (screen: ScreenId) => {
    const base = 'flex items-center gap-3 font-inter text-sm font-medium tracking-tight px-4 py-3 transition-all duration-150 rounded-lg';
    if (currentScreen === screen) {
      return `${base} bg-blue-600/10 text-blue-400 border-r-4 border-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.3)] rounded-l-lg translate-x-1`;
    }
    return `${base} text-slate-500 hover:text-slate-300 hover:bg-slate-900 group`;
  };

  return (
    <>
      {/* SideNavBar Component */}
      <aside className="fixed left-0 h-full w-64 border-r border-slate-800 shadow-[0_0_15px_rgba(37,99,235,0.1)] bg-slate-950 flex flex-col py-4 space-y-2 z-40">
        {/* Brand / Header */}
        <div className="px-6 pb-6 border-b border-slate-800 mb-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-900/50 border border-blue-500/30 flex items-center justify-center shadow-[0_0_10px_rgba(37,99,235,0.2)]">
              <span className="material-symbols-outlined text-blue-400" style={{fontVariationSettings: "'FILL' 1"}}>domain</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-blue-500 tracking-tight">SEKTÖR-7</h1>
              <p className="font-inter text-xs text-slate-400">Operasyonel Durum: Aktif</p>
            </div>
          </div>
        </div>
        {/* Navigation Tabs */}
        <nav className="flex-1 px-2 space-y-1">
          <a className={navLinkClass('tasks')} href="?screen=tasks" onClick={(e) => { e.preventDefault(); onNavigate('tasks'); }}>
            <span className={`material-symbols-outlined ${currentScreen !== 'tasks' ? 'group-hover:scale-110 transition-transform' : ''}`}>assignment_late</span>
            Görev Panosu
          </a>
          <a className={navLinkClass('habitat')} href="?screen=habitat" onClick={(e) => { e.preventDefault(); onNavigate('habitat'); }}>
            <span className={`material-symbols-outlined ${currentScreen !== 'habitat' ? 'group-hover:scale-110 transition-transform' : ''}`}>architecture</span>
            Habitat Tasarımı
          </a>
          <a className={navLinkClass('crew')} href="?screen=crew" onClick={(e) => { e.preventDefault(); onNavigate('crew'); }}>
            <span className={`material-symbols-outlined ${currentScreen !== 'crew' ? 'group-hover:scale-110 transition-transform' : ''}`}>groups</span>
            Mürettebat
          </a>
          <a className={navLinkClass('resources')} href="?screen=resources" onClick={(e) => { e.preventDefault(); onNavigate('resources'); }}>
            <span className={`material-symbols-outlined ${currentScreen !== 'resources' ? 'group-hover:scale-110 transition-transform' : ''}`}>timeline</span>
            Kaynaklar
          </a>
          <a className={navLinkClass('stats')} href="?screen=stats" onClick={(e) => { e.preventDefault(); onNavigate('stats'); }}>
            <span className={`material-symbols-outlined ${currentScreen !== 'stats' ? 'group-hover:scale-110 transition-transform' : ''}`} style={currentScreen === 'stats' ? {fontVariationSettings: "'FILL' 1"} : undefined}>bar_chart</span>
            İstatistikler
          </a>
          <a className={navLinkClass('alerts')} href="?screen=alerts" onClick={(e) => { e.preventDefault(); onNavigate('alerts'); }}>
            <span className={`material-symbols-outlined ${currentScreen !== 'alerts' ? 'group-hover:scale-110 transition-transform' : ''}`}>warning</span>
            Uyarılar
          </a>
          <a className={navLinkClass('settings')} href="?screen=settings" onClick={(e) => { e.preventDefault(); onNavigate('settings'); }}>
            <span className={`material-symbols-outlined ${currentScreen !== 'settings' ? 'group-hover:scale-110 transition-transform' : ''}`}>settings</span>
            Ayarlar
          </a>
        </nav>
        {/* Footer Tabs */}
        <div className="px-2 pt-4 border-t border-slate-800 space-y-1">
          <a className="flex items-center gap-3 font-inter text-sm font-medium tracking-tight text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded-lg" href="?screen=profile" onClick={(e) => { e.preventDefault(); onNavigate('profile'); }}>
            <span className="material-symbols-outlined">account_circle</span>
            Profil
          </a>
          <a className="flex items-center gap-3 font-inter text-sm font-medium tracking-tight text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded-lg text-error hover:text-error-container" href="?screen=dashboard" onClick={(e) => { e.preventDefault(); onNavigate('dashboard'); }}>
            <span className="material-symbols-outlined">logout</span>
            Çıkış
          </a>
        </div>
      </aside>
      {/* Main Workspace Area */}
      <div className="flex-1 flex flex-col ml-64 min-h-screen bg-background relative">
        {/* TopNavBar Component */}
        <header className="flex justify-between items-center w-full h-16 px-6 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 sticky top-0">
          {/* Brand */}
          <div className="text-xl font-black text-slate-100 tracking-widest flex items-center gap-2">
            HABİTAT KONTROL
            <span className="px-2 py-0.5 bg-blue-500/20 text-blue-400 text-[10px] rounded border border-blue-500/30 uppercase tracking-wider ml-2">İstatistik AğI</span>
          </div>
          {/* Navigation Links (Telemetry) */}
          <nav className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-1.5 font-inter tracking-tighter text-xs font-bold uppercase text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 transition-colors duration-200 px-3 py-1.5 rounded cursor-default">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_5px_rgba(59,130,246,0.8)]"></span>
              O2: %{resources.oxygen.toFixed(0)}
            </div>
            <div className="flex items-center gap-1.5 font-inter tracking-tighter text-xs font-bold uppercase text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 transition-colors duration-200 px-3 py-1.5 rounded cursor-default">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_5px_rgba(245,158,11,0.8)]"></span>
              GÜÇ: %{resources.power.toFixed(0)}
            </div>
            <div className="flex items-center gap-1.5 font-inter tracking-tighter text-xs font-bold uppercase text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 transition-colors duration-200 px-3 py-1.5 rounded cursor-default">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.8)]"></span>
              GIDA: %{resources.food.toFixed(0)}
            </div>
          </nav>
          {/* Search & Actions */}
          <div className="flex items-center gap-4">
            <div className="relative hidden lg:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">search</span>
              <input
                className="bg-surface-container-high border border-outline-variant rounded-full py-1.5 pl-9 pr-4 text-sm font-body-tr text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-[0_0_10px_rgba(37,99,235,0)] focus:shadow-[0_0_10px_rgba(37,99,235,0.15)] transition-all w-64"
                placeholder="Sistem Ara..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 transition-colors duration-200 p-2 rounded-full relative" onClick={() => onNavigate('alerts')} aria-label="Bildirimler">
              <span className="material-symbols-outlined">notifications</span>
              {(state?.alerts.length ?? 0) > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-tertiary shadow-[0_0_5px_rgba(255,181,150,0.8)]"></span>
              )}
            </button>
            <button className="text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 transition-colors duration-200 p-2 rounded-full" onClick={() => onNavigate('profile')} aria-label="Profil">
              <span className="material-symbols-outlined">account_circle</span>
            </button>
          </div>
        </header>
        {/* Main Content: Insights Canvas */}
        <main className="flex-1 overflow-y-auto p-gutter custom-scrollbar">
          {/* Page Header */}
          <div className="mb-gutter flex justify-between items-end">
            <div>
              <h2 className="font-display-tr text-display-tr text-on-surface">İstatistikler ve Öngörüler</h2>
              <p className="font-body-tr text-body-tr text-on-surface-variant mt-1">Yapay zeka destekli habitat verimlilik analizi ve iyileştirme tavsiyeleri.</p>
            </div>
            <div className="flex gap-2">
              <button
                className="px-4 py-2 bg-surface-container-high border border-outline-variant rounded-lg font-label-tr text-label-tr text-on-surface hover:bg-surface-variant transition-colors flex items-center gap-2"
                onClick={handleDownloadReport}
              >
                <span className="material-symbols-outlined text-[16px]">{reportDownloaded ? 'check' : 'download'}</span>
                {reportDownloaded ? 'İndirildi' : 'Raporu İndir'}
              </button>
            </div>
          </div>
          {/* Bento Grid Layout */}
          <div className="grid grid-cols-12 gap-gutter auto-rows-min">
            {/* 1. Sürdürülebilirlik Puanı (Sustainability Score) - Span 4 */}
            <div className="col-span-12 lg:col-span-4 bg-surface-container rounded-xl border border-outline-variant p-lg flex flex-col justify-between relative overflow-hidden group">
              {/* Subtle BG Glow */}
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700"></div>
              <div className="flex justify-between items-start z-10">
                <h3 className="font-title-tr text-title-tr text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">eco</span>
                  Sürdürülebilirlik Endeksi
                </h3>
                <span className={`px-2.5 py-1 rounded text-xs font-bold border ${scoreStatusClass}`}>{scoreStatus}</span>
              </div>
              <div className="flex flex-col items-center justify-center py-8 z-10">
                <div className="relative flex items-center justify-center">
                  {/* SVG Circle Progress */}
                  <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 100 100">
                    <circle className="text-surface-container-highest" cx="50" cy="50" fill="none" r="45" stroke="currentColor" strokeWidth="6"></circle>
                    <circle className="text-primary drop-shadow-[0_0_8px_rgba(180,197,255,0.6)]" cx="50" cy="50" fill="none" r="45" stroke="currentColor" strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} strokeLinecap="round" strokeWidth="6"></circle>
                  </svg>
                  <div className="absolute flex flex-col items-center">
                    <span className="text-5xl font-display-tr font-black text-on-surface drop-shadow-[0_0_10px_rgba(225,226,237,0.3)]">{sustainabilityScore}<span className="text-2xl text-on-surface-variant">%</span></span>
                    <span className="font-label-tr text-label-tr text-primary mt-1 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">arrow_upward</span> +{((sustainabilityScore - 75) / 10).toFixed(1)}%
                    </span>
                  </div>
                </div>
              </div>
              <div className="z-10 grid grid-cols-2 gap-4 mt-4">
                <div className="bg-surface-container-lowest p-3 rounded-lg border border-outline-variant/50">
                  <div className="font-label-tr text-[10px] text-on-surface-variant uppercase mb-1">Hedef Puan</div>
                  <div className="font-mono-tr text-mono-tr text-on-surface">95.0%</div>
                </div>
                <div className="bg-surface-container-lowest p-3 rounded-lg border border-outline-variant/50">
                  <div className="font-label-tr text-[10px] text-on-surface-variant uppercase mb-1">Kritik Eşik</div>
                  <div className="font-mono-tr text-mono-tr text-error">60.0%</div>
                </div>
              </div>
            </div>
            {/* 2. Haftalık Kaynak Verimliliği Trendleri (Resource Trends) - Span 8 */}
            <div className="col-span-12 lg:col-span-8 bg-surface-container rounded-xl border border-outline-variant p-lg flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-title-tr text-title-tr text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">bar_chart</span>
                  Haftalık Kaynak Tüketim Trendleri
                </h3>
                <div className="flex gap-2 bg-surface-container-lowest rounded-lg p-1 border border-outline-variant/50">
                  <button className={`px-3 py-1 text-xs font-medium rounded ${selectedMetric === 'oxygen' ? 'bg-surface-variant text-on-surface shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`} onClick={() => setSelectedMetric('oxygen')}>O2</button>
                  <button className={`px-3 py-1 text-xs font-medium rounded ${selectedMetric === 'power' ? 'bg-surface-variant text-on-surface shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`} onClick={() => setSelectedMetric('power')}>GÜÇ</button>
                  <button className={`px-3 py-1 text-xs font-medium rounded ${selectedMetric === 'water' ? 'bg-surface-variant text-on-surface shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`} onClick={() => setSelectedMetric('water')}>SU</button>
                </div>
              </div>
              {/* CSS Bar Chart Representation */}
              <div className="flex-1 flex items-end gap-2 sm:gap-4 mt-4 pt-4 border-l border-b border-outline-variant relative">
                {/* Y-Axis Labels */}
                <div className="absolute -left-8 bottom-0 top-0 flex flex-col justify-between text-[10px] text-on-surface-variant pb-6">
                  <span>%100</span>
                  <span>%50</span>
                  <span>%0</span>
                </div>
                {/* Horizontal Grid Lines */}
                <div className="absolute left-0 right-0 top-0 h-px bg-outline-variant/30"></div>
                <div className="absolute left-0 right-0 top-1/2 h-px bg-outline-variant/30"></div>
                {/* Bars */}
                {weeklyData.map((value, i) => (
                  <div key={days[i]} className="flex-1 flex flex-col items-center gap-2 group cursor-pointer relative">
                    <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-inverse-surface text-inverse-on-surface text-xs py-1 px-2 rounded whitespace-nowrap pointer-events-none z-10">{days[i]}: %{value}</div>
                    <div className={`w-full bg-primary-container/20 rounded-t-sm h-[${value}%] relative overflow-hidden group-hover:bg-primary-container/40 transition-colors`} style={{ height: `${value}%` }}>
                      <div className={`absolute bottom-0 w-full ${barFillColor} h-[95%] rounded-t-sm ${barShadow}`}></div>
                    </div>
                    <span className={`text-xs text-on-surface-variant ${i === 2 ? 'font-bold text-on-surface' : ''}`}>{days[i]}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* 3. Yapay Zeka Önerileri (AI Suggestions) - Span 12 */}
            <div className="col-span-12 bg-surface-container rounded-xl border border-outline-variant overflow-hidden">
              <div className="p-lg border-b border-outline-variant bg-surface-container-highest/30 flex justify-between items-center">
                <div>
                  <h3 className="font-title-tr text-title-tr text-on-surface flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary">psychology</span>
                    AI İyileştirme Modülü
                  </h3>
                  <p className="font-body-tr text-[13px] text-on-surface-variant mt-1">Sistem algoritmaları tarafından belirlenen proaktif eylem planları.</p>
                </div>
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-tertiary"></span>
                </span>
              </div>
              <div className="p-lg grid grid-cols-1 md:grid-cols-3 gap-6">
                {suggestions.map((sugg) => (
                  <div key={sugg.id} className="bg-surface-container-lowest border border-outline-variant/50 rounded-lg p-5 hover:border-tertiary/50 hover:shadow-[0_0_15px_rgba(255,181,150,0.1)] transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded bg-tertiary/10 flex items-center justify-center border border-tertiary/20">
                        <span className="material-symbols-outlined text-tertiary">{sugg.icon}</span>
                      </div>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${sugg.priorityClass}`}>{sugg.priority}</span>
                    </div>
                    <h4 className="font-headline-tr text-[16px] text-on-surface mb-2">{sugg.title}</h4>
                    <p className="font-body-tr text-sm text-on-surface-variant mb-4 line-clamp-3">{sugg.desc}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="font-mono-tr text-xs text-primary">{sugg.metric}</span>
                      <button
                        className={`px-3 py-1.5 ${sugg.barColor} ${appliedIds.has(sugg.id) ? 'opacity-60' : ''}`}
                        onClick={() => handleApply(sugg.id)}
                        disabled={appliedIds.has(sugg.id)}
                      >
                        {appliedIds.has(sugg.id) ? 'UYGULANDI' : sugg.action}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
