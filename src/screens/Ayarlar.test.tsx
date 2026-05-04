import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Ayarlar } from '../screens/Ayarlar';
import type { AppState, AppSettings } from '../types/domain';

const mockState: AppState = {
  currentScreen: 'settings',
  modules: [],
  crew: [],
  resources: { oxygen: 95, power: 70, water: 88, food: 92, temperature: 26 },
  alerts: [],
  tasks: [],
  settings: { theme: 'dark', language: 'tr', telemetryRate: 1.5, criticalThreshold: true },
};

const defaultProps = {
  currentScreen: 'settings' as const,
  onNavigate: vi.fn(),
  state: mockState,
  updateSettings: vi.fn(),
  resetState: vi.fn(),
};

vi.stubGlobal('confirm', vi.fn(() => true));

describe('Ayarlar', () => {
  it('renders settings title', () => {
    render(<Ayarlar {...defaultProps} />);
    expect(screen.getByText('Sistem Ayarları')).toBeInTheDocument();
  });

  it('renders theme options', () => {
    render(<Ayarlar {...defaultProps} />);
    expect(screen.getByText('Karanlık (Aktif)')).toBeInTheDocument();
    expect(screen.getByText('Aydınlık')).toBeInTheDocument();
  });

  it('calls updateSettings when dark theme selected', () => {
    const updateSettings = vi.fn();
    render(<Ayarlar {...defaultProps} updateSettings={updateSettings} />);
    const darkLabel = screen.getByText('Karanlık (Aktif)').closest('label');
    fireEvent.click(darkLabel!);
    expect(updateSettings).toHaveBeenCalledWith({ theme: 'dark' });
  });

  it('calls updateSettings when light theme selected', () => {
    const updateSettings = vi.fn();
    render(<Ayarlar {...defaultProps} updateSettings={updateSettings} />);
    const lightLabel = screen.getByText('Aydınlık').closest('label');
    fireEvent.click(lightLabel!);
    expect(updateSettings).toHaveBeenCalledWith({ theme: 'light' });
  });

  it('calls updateSettings when language changed', () => {
    const updateSettings = vi.fn();
    render(<Ayarlar {...defaultProps} updateSettings={updateSettings} />);
    const select = screen.getByDisplayValue('Türkçe (Sektör Standart)');
    fireEvent.change(select, { target: { value: 'en' } });
    expect(updateSettings).toHaveBeenCalledWith({ language: 'en' });
  });

  it('calls updateSettings when telemetry rate changed', () => {
    const updateSettings = vi.fn();
    render(<Ayarlar {...defaultProps} updateSettings={updateSettings} />);
    const range = screen.getByDisplayValue('1.5');
    fireEvent.change(range, { target: { value: '2' } });
    expect(updateSettings).toHaveBeenCalledWith({ telemetryRate: 2 });
  });

  it('calls updateSettings when threshold toggled', () => {
    const updateSettings = vi.fn();
    render(<Ayarlar {...defaultProps} updateSettings={updateSettings} />);
    const toggle = screen.getByText('O2 seviyesi <%85 altına düştüğünde manuel onaya geç').closest('div');
    fireEvent.click(toggle!);
    expect(updateSettings).toHaveBeenCalledWith({ criticalThreshold: false });
  });

  it('shows saved state on save button click', () => {
    render(<Ayarlar {...defaultProps} />);
    const saveBtn = screen.getByText('Parametreleri Kaydet');
    fireEvent.click(saveBtn);
    expect(screen.getByText('Kaydedildi')).toBeInTheDocument();
  });

  it('calls resetState when clear storage clicked', () => {
    const resetState = vi.fn();
    render(<Ayarlar {...defaultProps} resetState={resetState} />);
    const clearBtn = screen.getByText('Yerel Depolamayı Temizle');
    fireEvent.click(clearBtn);
    expect(resetState).toHaveBeenCalled();
  });

  it('renders sidebar with settings link active', () => {
    render(<Ayarlar {...defaultProps} />);
    const ayarlarLinks = screen.getAllByText('Ayarlar');
    // Desktop sidebar link should have active class
    const activeLink = ayarlarLinks.find(el => el.closest('a')?.className.includes('bg-blue-600/10'));
    expect(activeLink).toBeTruthy();
  });

  it('navigates to alerts when notification icon clicked', () => {
    const navigate = vi.fn();
    render(<Ayarlar {...defaultProps} onNavigate={navigate} />);
    const notifBtn = screen.getByLabelText('Bildirimler');
    fireEvent.click(notifBtn);
    expect(navigate).toHaveBeenCalledWith('alerts');
  });

  it('navigates to profile when account icon clicked', () => {
    const navigate = vi.fn();
    render(<Ayarlar {...defaultProps} onNavigate={navigate} />);
    const profileBtn = screen.getByLabelText('Profil');
    fireEvent.click(profileBtn);
    expect(navigate).toHaveBeenCalledWith('profile');
  });

  it('renders stats link in sidebar', () => {
    render(<Ayarlar {...defaultProps} />);
    expect(screen.getByText('İstatistikler')).toBeInTheDocument();
  });
});
