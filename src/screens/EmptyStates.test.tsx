import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { HabitatTasarimi } from './HabitatTasarimi';
import { MurettebatYonetimi } from './MurettebatYonetimi';
import { GorevPanosu } from './GorevPanosu';
import { SistemUyarilari } from './SistemUyarilari';

const emptyState = {
  currentScreen: 'dashboard' as const,
  modules: [],
  crew: [],
  resources: { oxygen: 98, power: 85, water: 92, food: 92, temperature: 22 },
  alerts: [],
  tasks: [],
  settings: { theme: 'dark' as const, language: 'tr' as const, telemetryRate: 1.5, criticalThreshold: true }
};

describe('Empty states', () => {
  describe('HabitatTasarimi', () => {
    it('shows empty state when no modules', () => {
      const onAddModule = vi.fn();
      render(
        <HabitatTasarimi
          currentScreen="habitat"
          onNavigate={vi.fn()}
          state={{ ...emptyState, currentScreen: 'habitat' }}
          onSelectModule={vi.fn()}
          onAddModule={onAddModule}
        />
      );
      expect(screen.getByText('Modül Bulunmuyor')).toBeInTheDocument();
      expect(screen.getByText('Habitat yapılandırması boş. Yeni bir modül ekleyerek yapılandırmaya başlayın.')).toBeInTheDocument();
      fireEvent.click(screen.getByText('İlk Modülü Ekle'));
      expect(onAddModule).toHaveBeenCalled();
    });
  });

  describe('MurettebatYonetimi', () => {
    it('shows empty state when no crew', () => {
      const onAddCrew = vi.fn();
      render(
        <MurettebatYonetimi
          currentScreen="crew"
          onNavigate={vi.fn()}
          state={{ ...emptyState, currentScreen: 'crew' }}
          onAddCrew={onAddCrew}
          onUpdateCrew={vi.fn()}
          onRemoveCrew={vi.fn()}
        />
      );
      expect(screen.getByText('Personel Bulunmuyor')).toBeInTheDocument();
      expect(screen.getByText('Mürettebat listesi boş. Yeni personel ekleyerek ekibi oluşturun.')).toBeInTheDocument();
    });

    it('shows empty state for filtered results with clear filters button', () => {
      render(
        <MurettebatYonetimi
          currentScreen="crew"
          onNavigate={vi.fn()}
          state={{ ...emptyState, currentScreen: 'crew', crew: [{ id: '1', name: 'Ali', role: 'Mühendis', status: 'active' }] }}
          onAddCrew={vi.fn()}
          onUpdateCrew={vi.fn()}
          onRemoveCrew={vi.fn()}
        />
      );
      const searchInput = screen.getByPlaceholderText('İsim veya ID numarası ile ara...');
      fireEvent.change(searchInput, { target: { value: 'olmayanpersonel' } });
      expect(screen.getByText('Filtreleme kriterlerine uygun personel bulunamadı.')).toBeInTheDocument();
      expect(screen.getByText('Filtreleri Temizle')).toBeInTheDocument();
    });
  });

  describe('GorevPanosu', () => {
    it('shows empty states for all kanban columns', () => {
      render(
        <GorevPanosu
          currentScreen="tasks"
          onNavigate={vi.fn()}
          state={{ ...emptyState, currentScreen: 'tasks' }}
          onAddTask={vi.fn()}
          onUpdateTask={vi.fn()}
          onRemoveTask={vi.fn()}
        />
      );
      expect(screen.getByText('Bekleyen görev yok')).toBeInTheDocument();
      expect(screen.getByText('Aktif görev yok')).toBeInTheDocument();
      expect(screen.getByText('Tamamlanmış görev yok')).toBeInTheDocument();
    });

    it('shows add task button in empty pending column', () => {
      render(
        <GorevPanosu
          currentScreen="tasks"
          onNavigate={vi.fn()}
          state={{ ...emptyState, currentScreen: 'tasks' }}
          onAddTask={vi.fn()}
          onUpdateTask={vi.fn()}
          onRemoveTask={vi.fn()}
        />
      );
      const addButton = screen.getByText('+ Yeni Görev');
      fireEvent.click(addButton);
      expect(screen.getByText('Yeni Görev')).toBeInTheDocument();
    });
  });

  describe('SistemUyarilari', () => {
    it('shows empty state when no alerts', () => {
      render(
        <SistemUyarilari
          currentScreen="alerts"
          onNavigate={vi.fn()}
          state={{ ...emptyState, currentScreen: 'alerts' }}
          onDismissAlert={vi.fn()}
        />
      );
      expect(screen.getByText('Sistem Stabil')).toBeInTheDocument();
      expect(screen.getByText('Aktif uyarı bulunmuyor. Tüm sistemler nominal çalışma aralığında.')).toBeInTheDocument();
    });
  });
});
