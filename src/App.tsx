import { useAppState } from './hooks/useAppState';
import { AnaEkranDashboard } from './screens/AnaEkranDashboard';
import { HabitatTasarimi } from './screens/HabitatTasarimi';
import { MurettebatYonetimi } from './screens/MurettebatYonetimi';
import { KaynakTakibi } from './screens/KaynakTakibi';
import { SistemUyarilari } from './screens/SistemUyarilari';
import { Ayarlar } from './screens/Ayarlar';
import { GorevPanosu } from './screens/GorevPanosu';
import { KullaniciProfili } from './screens/KullaniciProfili';
import { BaslangicRehberi } from './screens/BaslangicRehberi';
import { Istatistikler } from './screens/Istatistikler';
import { ModulDetaylari } from './screens/ModulDetaylari';
import { ModulEkleduzenle } from './screens/ModulEkleduzenle';
import { HataSayfasi } from './screens/HataSayfasi';
import type { ScreenId } from './types/domain';

export default function App() {
  const app = useAppState();
  const { state, navigate } = app;

  const commonProps = {
    currentScreen: state.currentScreen,
    onNavigate: navigate as (screen: ScreenId) => void,
  };

  switch (state.currentScreen) {
    case 'dashboard':
      return <AnaEkranDashboard {...commonProps} state={state} />;
    case 'habitat':
      return <HabitatTasarimi {...commonProps} state={state} />;
    case 'crew':
      return <MurettebatYonetimi {...commonProps} state={state} />;
    case 'resources':
      return <KaynakTakibi {...commonProps} state={state} />;
    case 'alerts':
      return <SistemUyarilari {...commonProps} state={state} />;
    case 'settings':
      return <Ayarlar {...commonProps} state={state} updateSettings={app.updateSettings} resetState={app.resetState} />;
    case 'tasks':
      return <GorevPanosu {...commonProps} state={state} />;
    case 'profile':
      return <KullaniciProfili {...commonProps} state={state} />;
    case 'guide':
      return <BaslangicRehberi {...commonProps} state={state} />;
    case 'stats':
      return <Istatistikler {...commonProps} state={state} />;
    case 'module-detail':
      return <ModulDetaylari {...commonProps} state={state} />;
    case 'module-edit':
      return <ModulEkleduzenle {...commonProps} state={state} />;
    case 'error':
      return <HataSayfasi {...commonProps} state={state} />;
    default:
      return <AnaEkranDashboard {...commonProps} state={state} />;
  }
}
