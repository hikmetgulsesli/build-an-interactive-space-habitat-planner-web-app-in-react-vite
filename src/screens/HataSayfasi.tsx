// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Hata Sayfası
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface HataSayfasiProps {}

export function HataSayfasi(props: HataSayfasiProps) {
  return (
    <>
      {/* Atmospheric background glow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
      <div className="w-[600px] h-[600px] bg-error-container rounded-full blur-[150px] opacity-20"></div>
      </div>
      {/* Main Content Canvas (Navigation Suppressed per Logic rules for Error/Dead-end pages) */}
      <main className="relative z-10 w-full max-w-2xl">
      {/* Error Card (Bento/Glassmorphism inspired HUD panel) */}
      <div className="bg-surface/90 backdrop-blur-md border border-outline rounded-xl shadow-[0_0_40px_rgba(255,180,171,0.08)] overflow-hidden relative">
      {/* Decorative HUD Brackets */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-error/50 rounded-tl-xl"></div>
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-error/50 rounded-tr-xl"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-error/50 rounded-bl-xl"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-error/50 rounded-br-xl"></div>
      {/* Top Header Bar */}
      <div className="bg-surface-container border-b border-outline px-lg py-sm flex justify-between items-center">
      <span className="font-mono-tr text-mono-tr text-error flex items-center gap-xs">
      <span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
                          SYS_ERR // CRITICAL_FAILURE
                      </span>
      <span className="font-mono-tr text-mono-tr text-outline-variant">
                          SEKTÖR-7 // OTO-TANI
                      </span>
      </div>
      {/* Core Content Area */}
      <div className="p-xl flex flex-col items-center text-center">
      {/* Icon */}
      <div className="mb-lg relative">
      <div className="absolute inset-0 bg-error blur-[20px] opacity-30 rounded-full"></div>
      <span className="material-symbols-outlined text-[72px] text-error relative z-10" style={{fontVariationSettings: "'FILL' 1"}}>
                              warning
                          </span>
      </div>
      {/* Titles & Messages */}
      <h1 className="font-display-tr text-display-tr text-on-surface mb-sm">
                          BAĞLANTI KESİLDİ
                      </h1>
      <p className="font-body-tr text-body-tr text-on-surface-variant max-w-md mb-xl">
                          Habitat ana kontrol modülü ile senkronizasyon kaybedildi. Kritik yaşam destek verileri şu anda okunamıyor. Lütfen iletişim portlarını kontrol edin.
                      </p>
      {/* Technical Details Code Block */}
      <div className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-md text-left mb-xl overflow-x-auto relative group">
      <div className="absolute top-0 right-0 bg-outline-variant/30 px-sm py-xs rounded-bl-lg font-mono-tr text-mono-tr text-on-surface-variant text-[10px]">
                              HATA_KAYDI.LOG
                          </div>
      <code className="font-mono-tr text-mono-tr text-error/80 block mt-xs whitespace-pre">
      [ERR_CODE]: 0x8F4A2_TIMEOUT
      [MODULE]: Telemetry.Core.DataStream
      [TRACE_ID]: 8f9a2b4c-7d1e-4568-b902-1c3d4e5f6a7b
      [TIMESTAMP]: <span id="timestamp">2024-05-20T14:32:01.442Z</span>
      [DETAIL]: Handshake failed at gateway S7-ALPHA. No response from remote host.
                          </code>
      </div>
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-md w-full sm:w-auto">
      <button className="bg-primary-container hover:bg-primary-container/80 text-on-primary-container border border-primary/50 px-xl py-md rounded-lg font-label-tr text-label-tr uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-sm shadow-[0_0_15px_rgba(37,99,235,0.2)]">
      <span className="material-symbols-outlined text-[18px]">refresh</span>
                              TEKRAR DENE
                          </button>
      <button className="bg-transparent hover:bg-surface-container-high text-on-surface border border-outline px-xl py-md rounded-lg font-label-tr text-label-tr uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-sm">
      <span className="material-symbols-outlined text-[18px]">support_agent</span>
                              DESTEKLE İLETİŞİME GEÇ
                          </button>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
