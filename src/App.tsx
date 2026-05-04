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
import type { ScreenId, HabitatModule, CrewMember, Task, Alert } from './types/domain';

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
      return (
        <HabitatTasarimi
          {...commonProps}
          state={state}
          onSelectModule={(id: string) => {
            app.setSelectedModuleId(id);
            navigate('module-detail');
          }}
          onAddModule={() => {
            app.setSelectedModuleId(undefined);
            navigate('module-edit');
          }}
        />
      );
    case 'crew':
      return (
        <MurettebatYonetimi
          {...commonProps}
          state={state}
          onAddCrew={app.addCrew}
          onUpdateCrew={app.updateCrew}
          onRemoveCrew={app.removeCrew}
        />
      );
    case 'resources':
      return <KaynakTakibi {...commonProps} state={state} />;
    case 'alerts':
      return (
        <SistemUyarilari
          {...commonProps}
          state={state}
          onDismissAlert={app.dismissAlert}
        />
      );
    case 'settings':
      return (
        <Ayarlar
          {...commonProps}
          state={state}
          updateSettings={app.updateSettings}
          resetState={app.resetState}
        />
      );
    case 'tasks':
      return (
        <GorevPanosu
          {...commonProps}
          state={state}
          onAddTask={app.addTask}
          onUpdateTask={app.updateTask}
          onRemoveTask={app.removeTask}
        />
      );
    case 'profile':
      return <KullaniciProfili {...commonProps} state={state} />;
    case 'guide':
      return <BaslangicRehberi {...commonProps} state={state} />;
    case 'stats':
      return <Istatistikler {...commonProps} state={state} />;
    case 'module-detail':
      return (
        <ModulDetaylari
          {...commonProps}
          state={state}
          onEditModule={() => navigate('module-edit')}
          onUpdateModule={app.updateModule}
          onRemoveModule={(id: string) => {
            app.removeModule(id);
            navigate('habitat');
          }}
        />
      );
    case 'module-edit':
      return (
        <ModulEkleduzenle
          {...commonProps}
          state={state}
          onSaveModule={(module: HabitatModule) => {
            const existing = state.modules.find((m) => m.id === module.id);
            if (existing) {
              app.updateModule(module.id, module);
            } else {
              app.addModule(module);
            }
            navigate('habitat');
          }}
          onCancel={() => navigate('habitat')}
        />
      );
    case 'error':
      return (
        <HataSayfasi
          {...commonProps}
          state={state}
          onRetry={() => navigate('dashboard')}
        />
      );
    default:
      return <AnaEkranDashboard {...commonProps} state={state} />;
  }
}
