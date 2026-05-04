import { useState, useEffect, useCallback } from 'react';
import type {
  AppState,
  ScreenId,
  HabitatModule,
  CrewMember,
  Alert,
  Task,
  ResourceMetric,
  AppSettings,
} from '../types/domain';
import { loadState, saveState } from '../utils/storage';

const DEFAULT_SETTINGS: AppSettings = {
  theme: 'dark',
  language: 'tr',
  telemetryRate: 1.5,
  criticalThreshold: true,
};

const DEFAULT_RESOURCES: ResourceMetric = {
  oxygen: 98.2,
  power: 85.0,
  water: 92.4,
  food: 92.0,
  temperature: 22.4,
};

const DEFAULT_MODULES: HabitatModule[] = [
  {
    id: 'mod-core-1',
    name: 'Merkezi Çekirdek',
    type: 'core',
    status: 'active',
    capacity: 0,
    consumption: 42,
    x: 300,
    y: 250,
  },
  {
    id: 'mod-lab-1',
    name: 'Laboratuvar-A',
    type: 'lab',
    status: 'active',
    capacity: 8,
    x: 320,
    y: 80,
  },
  {
    id: 'mod-pwr-1',
    name: 'Güç Ünitesi',
    type: 'power',
    status: 'warning',
    output: 500,
    x: 50,
    y: 260,
  },
  {
    id: 'mod-green-1',
    name: 'Sera-1',
    type: 'greenhouse',
    status: 'active',
    output: 5,
    x: 600,
    y: 260,
  },
];

const DEFAULT_CREW: CrewMember[] = [
  { id: 'crew-1', name: 'Müh. K. Yılmaz', role: 'Mühendis', status: 'active', moduleId: 'mod-lab-1' },
  { id: 'crew-2', name: 'Dr. E. Kaya', role: 'Bilim İnsanı', status: 'active', moduleId: 'mod-lab-1' },
  { id: 'crew-3', name: 'Bot Birimi D-4', role: 'Otonom Sistem', status: 'active', moduleId: 'mod-green-1' },
];

const DEFAULT_ALERTS: Alert[] = [
  {
    id: 'alert-1',
    code: 'TH-092',
    level: 'critical',
    message: 'Sektör-7C Termal regülatör yanıt vermiyor. Manuel müdahale bekleniyor.',
    timestamp: new Date(Date.now() - 12 * 60 * 1000).toISOString(),
    moduleId: 'mod-core-1',
  },
  {
    id: 'alert-2',
    code: 'PWR-LVL',
    level: 'warning',
    message: 'Yedek jeneratör 2 kapasite altına düştü. Yük dengeleme önerilir.',
    timestamp: new Date(Date.now() - 45 * 60 * 1000).toISOString(),
    moduleId: 'mod-pwr-1',
  },
  {
    id: 'alert-3',
    code: 'COM-SYNC',
    level: 'info',
    message: 'Dünya ile telemetri senkronizasyonu tamamlandı. Paket kaybı: %0.01.',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
  },
];

const DEFAULT_TASKS: Task[] = [
  {
    id: 'TSK-8902',
    title: 'Hava filtre ünitesi kalibrasyonu',
    module: 'Laboratuvar-A',
    assignee: 'Müh. K. Yılmaz',
    status: 'in-progress',
  },
  {
    id: 'TSK-8901',
    title: 'Rutin teşhis taraması',
    module: 'Reaktör Çekirdeği',
    assignee: 'Oto. Sistem',
    status: 'completed',
  },
  {
    id: 'TSK-8899',
    title: 'Nem sensörü değişimi',
    module: 'Sera Modülü',
    assignee: 'Bot Birimi D-4',
    status: 'pending',
  },
];

function createDefaultState(): AppState {
  return {
    currentScreen: 'dashboard',
    modules: DEFAULT_MODULES,
    crew: DEFAULT_CREW,
    resources: DEFAULT_RESOURCES,
    alerts: DEFAULT_ALERTS,
    tasks: DEFAULT_TASKS,
    settings: DEFAULT_SETTINGS,
  };
}

export function useAppState() {
  const [state, setState] = useState<AppState>(() => {
    const saved = loadState<AppState>('habitat-app-state');
    if (saved) {
      return { ...createDefaultState(), ...saved };
    }
    return createDefaultState();
  });

  useEffect(() => {
    saveState('habitat-app-state', state);
  }, [state]);

  const navigate = useCallback((screen: ScreenId) => {
    setState((prev) => ({ ...prev, currentScreen: screen }));
  }, []);

  const setResources = useCallback((resources: ResourceMetric) => {
    setState((prev) => ({ ...prev, resources }));
  }, []);

  const setModules = useCallback((modules: HabitatModule[]) => {
    setState((prev) => ({ ...prev, modules }));
  }, []);

  const addModule = useCallback((module: HabitatModule) => {
    setState((prev) => ({ ...prev, modules: [...prev.modules, module] }));
  }, []);

  const updateModule = useCallback((id: string, updates: Partial<HabitatModule>) => {
    setState((prev) => ({
      ...prev,
      modules: prev.modules.map((m) => (m.id === id ? { ...m, ...updates } : m)),
    }));
  }, []);

  const removeModule = useCallback((id: string) => {
    setState((prev) => ({
      ...prev,
      modules: prev.modules.filter((m) => m.id !== id),
      crew: prev.crew.map((c) => (c.moduleId === id ? { ...c, moduleId: undefined } : c)),
    }));
  }, []);

  const setCrew = useCallback((crew: CrewMember[]) => {
    setState((prev) => ({ ...prev, crew }));
  }, []);

  const addCrew = useCallback((member: CrewMember) => {
    setState((prev) => ({ ...prev, crew: [...prev.crew, member] }));
  }, []);

  const updateCrew = useCallback((id: string, updates: Partial<CrewMember>) => {
    setState((prev) => ({
      ...prev,
      crew: prev.crew.map((c) => (c.id === id ? { ...c, ...updates } : c)),
    }));
  }, []);

  const removeCrew = useCallback((id: string) => {
    setState((prev) => ({
      ...prev,
      crew: prev.crew.filter((c) => c.id !== id),
    }));
  }, []);

  const setAlerts = useCallback((alerts: Alert[]) => {
    setState((prev) => ({ ...prev, alerts }));
  }, []);

  const dismissAlert = useCallback((id: string) => {
    setState((prev) => ({
      ...prev,
      alerts: prev.alerts.filter((a) => a.id !== id),
    }));
  }, []);

  const setTasks = useCallback((tasks: Task[]) => {
    setState((prev) => ({ ...prev, tasks }));
  }, []);

  const addTask = useCallback((task: Task) => {
    setState((prev) => ({ ...prev, tasks: [...prev.tasks, task] }));
  }, []);

  const updateTask = useCallback((id: string, updates: Partial<Task>) => {
    setState((prev) => ({
      ...prev,
      tasks: prev.tasks.map((t) => (t.id === id ? { ...t, ...updates } : t)),
    }));
  }, []);

  const removeTask = useCallback((id: string) => {
    setState((prev) => ({
      ...prev,
      tasks: prev.tasks.filter((t) => t.id !== id),
    }));
  }, []);

  const updateSettings = useCallback((settings: Partial<AppSettings>) => {
    setState((prev) => ({
      ...prev,
      settings: { ...prev.settings, ...settings },
    }));
  }, []);

  const resetState = useCallback(() => {
    setState(createDefaultState());
    localStorage.removeItem('habitat-app-state');
  }, []);

  const setSelectedModuleId = useCallback((id: string | undefined) => {
    setState((prev) => ({ ...prev, selectedModuleId: id }));
  }, []);

  const setSelectedCrewId = useCallback((id: string | undefined) => {
    setState((prev) => ({ ...prev, selectedCrewId: id }));
  }, []);

  const setSelectedTaskId = useCallback((id: string | undefined) => {
    setState((prev) => ({ ...prev, selectedTaskId: id }));
  }, []);

  return {
    state,
    navigate,
    setResources,
    setModules,
    addModule,
    updateModule,
    removeModule,
    setSelectedModuleId,
    setCrew,
    addCrew,
    updateCrew,
    removeCrew,
    setSelectedCrewId,
    setAlerts,
    dismissAlert,
    setTasks,
    addTask,
    updateTask,
    removeTask,
    setSelectedTaskId,
    updateSettings,
    resetState,
  };
}
