export type ScreenId =
  | 'dashboard'
  | 'habitat'
  | 'crew'
  | 'resources'
  | 'alerts'
  | 'settings'
  | 'tasks'
  | 'profile'
  | 'guide'
  | 'stats'
  | 'module-detail'
  | 'module-edit'
  | 'error';

export type ModuleType = 'living' | 'power' | 'greenhouse' | 'lab' | 'core' | 'medical' | 'storage';
export type ModuleStatus = 'active' | 'warning' | 'error' | 'offline';
export type CrewStatus = 'active' | 'rest' | 'medical' | 'mission';
export type AlertLevel = 'critical' | 'warning' | 'info';
export type TaskStatus = 'in-progress' | 'completed' | 'pending';
export type Theme = 'dark' | 'light';
export type Language = 'tr' | 'en';

export interface HabitatModule {
  id: string;
  name: string;
  type: ModuleType;
  status: ModuleStatus;
  capacity?: number;
  consumption?: number;
  output?: number;
  x?: number;
  y?: number;
}

export interface CrewMember {
  id: string;
  name: string;
  role: string;
  status: CrewStatus;
  moduleId?: string;
}

export interface ResourceMetric {
  oxygen: number;
  power: number;
  water: number;
  food: number;
  temperature: number;
}

export interface Alert {
  id: string;
  code: string;
  level: AlertLevel;
  message: string;
  timestamp: string;
  moduleId?: string;
}

export interface Task {
  id: string;
  title: string;
  module: string;
  assignee: string;
  status: TaskStatus;
}

export interface AppSettings {
  theme: Theme;
  language: Language;
  telemetryRate: number;
  criticalThreshold: boolean;
}

export interface AppState {
  currentScreen: ScreenId;
  selectedModuleId?: string;
  selectedCrewId?: string;
  selectedTaskId?: string;
  modules: HabitatModule[];
  crew: CrewMember[];
  resources: ResourceMetric;
  alerts: Alert[];
  tasks: Task[];
  settings: AppSettings;
}
