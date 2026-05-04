import { useState, useEffect } from "react";
import type { ScreenId, AppState } from '../types/domain';

interface HataSayfasiProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  state?: AppState;
  onRetry?: () => void;
  errorCode?: string;
  errorMessage?: string;
}

export function HataSayfasi({ currentScreen, onNavigate, state, onRetry, errorCode, errorMessage }: HataSayfasiProps) {
  const [timestamp, setTimestamp] = useState(new Date().toISOString());
  const [isRetrying, setIsRetrying] = useState(false);
  const [supportOpened, setSupportOpened] = useState(false);

  useEffect(() => {
    setTimestamp(new Date().toISOString());
  }, [currentScreen]);

  const handleRetry = () => {
    setIsRetrying(true);
    setTimeout(() => {
      setIsRetrying(false);
      if (onRetry) {
        onRetry();
      } else {
        onNavigate('dashboard');
      }
    }, 1500);
  };

  const handleSupport = () => {
    setSupportOpened(true);
  };

  const displayCode = errorCode || '0x8F4A2_TIMEOUT';
  const displayMessage = errorMessage || 'Habitat ana kontrol modülü ile senkronizasyon kaybedildi. Kritik yaşam destek verileri şu anda okunamıyor. Lütfen iletişim portlarını kontrol edin.';

  return (
    <div className="flex items-center justify-center min-h-screen relative">
      {/* Atmospheric background glow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
      <div className="w-[600px] h-[600px] bg-error-container rounded-full blur-[150px] opacity-20"></div>
      </div>
      {/* Main Content Canvas (Navigation Suppressed per Logic rules for Error/Dead-end pages) */}
      <main className="relative z-10 w-full max-w-2xl px-4">
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
                          {displayMessage}
                      </p>
      {/* Technical Details Code Block */}
      <div className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-md text-left mb-xl overflow-x-auto relative group">
      <div className="absolute top-0 right-0 bg-outline-variant/30 px-sm py-xs rounded-bl-lg font-mono-tr text-mono-tr text-on-surface-variant text-[10px]">
                              HATA_KAYDI.LOG
                          </div>
      <code className="font-mono-tr text-mono-tr text-error/80 block mt-xs whitespace-pre">
      [ERR_CODE]: {displayCode}
      [MODULE]: Telemetry.Core.DataStream
      [TRACE_ID]: 8f9a2b4c-7d1e-4568-b902-1c3d4e5f6a7b
      [TIMESTAMP]: <span>{timestamp}</span>
      [DETAIL]: Handshake failed at gateway S7-ALPHA. No response from remote host.
                          </code>
      </div>
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-md w-full sm:w-auto">
      <button
        onClick={handleRetry}
        disabled={isRetrying}
        className="bg-primary-container hover:bg-primary-container/80 text-on-primary-container border border-primary/50 px-xl py-md rounded-lg font-label-tr text-label-tr uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-sm shadow-[0_0_15px_rgba(37,99,235,0.2)] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
      <span className={`material-symbols-outlined text-[18px] ${isRetrying ? 'animate-spin' : ''}`}>{isRetrying ? 'sync' : 'refresh'}</span>
                              {isRetrying ? 'YENİDEN BAĞLANILIYOR...' : 'TEKRAR DENE'}
                          </button>
      <button
        onClick={handleSupport}
        className="bg-transparent hover:bg-surface-container-high text-on-surface border border-outline px-xl py-md rounded-lg font-label-tr text-label-tr uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-sm cursor-pointer"
      >
      <span className="material-symbols-outlined text-[18px]">support_agent</span>
                              DESTEKLE İLETİŞİME GEÇ
                          </button>
      </div>
      {/* Support Modal */}
      {supportOpened && (
        <div className="mt-lg w-full bg-surface-container border border-outline-variant rounded-lg p-md text-left">
          <div className="flex justify-between items-start mb-md">
            <h3 className="font-title-tr text-title-tr text-on-surface">Destek İletişimi</h3>
            <button onClick={() => setSupportOpened(false)} className="text-on-surface-variant hover:text-on-surface transition-colors" aria-label="Kapat">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <div className="space-y-sm font-body-tr text-body-tr text-on-surface-variant">
            <p><span className="text-on-surface font-medium">Komuta Merkezi:</span> komuta@sektor7.uzay</p>
            <p><span className="text-on-surface font-medium">Teknik Destek:</span> teknik@sektor7.uzay</p>
            <p><span className="text-on-surface font-medium">Acil Hat:</span> #77-ACIL-DESTEK</p>
          </div>
          <button onClick={() => setSupportOpened(false)} className="mt-md w-full py-2 bg-primary-container text-on-primary-container rounded hover:bg-inverse-primary transition-colors text-sm font-label-tr uppercase tracking-widest">
            Anladım
          </button>
        </div>
      )}
      </div>
      </div>
      </main>
    </div>
  );
}
