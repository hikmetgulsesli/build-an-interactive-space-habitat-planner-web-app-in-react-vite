import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { Istatistikler } from '../screens/Istatistikler';
import type { AppState } from '../types/domain';

const mockState: AppState = {
  currentScreen: 'stats',
  modules: [
    { id: 'mod-1', name: 'Test Modül', type: 'core', status: 'active' },
  ],
  crew: [
    { id: 'crew-1', name: 'Ahmet Kaya', role: 'Mühendis', status: 'active' },
  ],
  resources: { oxygen: 95, power: 70, water: 88, food: 92, temperature: 26 },
  alerts: [
    { id: 'alert-1', code: 'PWR-01', level: 'critical', message: 'Güç düşük', timestamp: new Date().toISOString() },
  ],
  tasks: [
    { id: 'TSK-1', title: 'Test görev', module: 'Test Modül', assignee: 'Ahmet Kaya', status: 'in-progress' },
  ],
  settings: { theme: 'dark', language: 'tr', telemetryRate: 1.5, criticalThreshold: true },
};

const defaultProps = {
  currentScreen: 'stats' as const,
  onNavigate: vi.fn(),
  state: mockState,
};

// Mock download APIs for jsdom
beforeEach(() => {
  vi.stubGlobal('URL', {
    createObjectURL: vi.fn(() => 'blob:test'),
    revokeObjectURL: vi.fn(),
  });
  const originalCreateElement = document.createElement.bind(document);
  vi.spyOn(document, 'createElement').mockImplementation((tagName: string) => {
    if (tagName === 'a') {
      const anchor = originalCreateElement('a');
      anchor.click = vi.fn();
      return anchor;
    }
    return originalCreateElement(tagName);
  });
});

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe('Istatistikler', () => {
  it('renders statistics title', () => {
    render(<Istatistikler {...defaultProps} />);
    expect(screen.getByText('İstatistikler ve Öngörüler')).toBeInTheDocument();
  });

  it('computes sustainability score from resources', () => {
    render(<Istatistikler {...defaultProps} />);
    // Score = (95 + 70 + 88 + 92 + (100 - |26-22|*5)) / 5 = (95+70+88+92+80)/5 = 85
    expect(screen.getByText('85')).toBeInTheDocument();
  });

  it('shows correct score status label', () => {
    render(<Istatistikler {...defaultProps} />);
    expect(screen.getByText('İSTİKRARLI')).toBeInTheDocument();
  });

  it('renders dynamic telemetry values', () => {
    render(<Istatistikler {...defaultProps} />);
    expect(screen.getByText('O2: %95')).toBeInTheDocument();
    expect(screen.getByText('GÜÇ: %70')).toBeInTheDocument();
    expect(screen.getByText('GIDA: %92')).toBeInTheDocument();
  });

  it('toggles chart metric between O2, power, and water', () => {
    render(<Istatistikler {...defaultProps} />);
    const powerBtn = screen.getByText('GÜÇ');
    fireEvent.click(powerBtn);
    expect(powerBtn.className).toContain('bg-surface-variant');
  });

  it('renders AI suggestions based on resource conditions', () => {
    render(<Istatistikler {...defaultProps} />);
    // Power is 70 (<80) so power suggestion should appear
    expect(screen.getByText('Güç Optimizasyonu')).toBeInTheDocument();
    // Temperature is 26 (>25) so thermal suggestion should appear
    expect(screen.getByText('Termal Regülasyon Optimizasyonu')).toBeInTheDocument();
  });

  it('shows applied state when suggestion button is clicked', () => {
    render(<Istatistikler {...defaultProps} />);
    const applyBtns = screen.getAllByText('UYGULA');
    expect(applyBtns.length).toBeGreaterThan(0);
    fireEvent.click(applyBtns[0]);
    expect(screen.getByText('UYGULANDI')).toBeInTheDocument();
  });

  it('download report button shows downloaded state after click', () => {
    render(<Istatistikler {...defaultProps} />);
    const downloadBtn = screen.getByText('Raporu İndir');
    fireEvent.click(downloadBtn);
    expect(screen.getByText('İndirildi')).toBeInTheDocument();
  });

  it('search input is controlled', () => {
    render(<Istatistikler {...defaultProps} />);
    const input = screen.getByPlaceholderText('Sistem Ara...');
    fireEvent.change(input, { target: { value: 'test query' } });
    expect(input).toHaveValue('test query');
  });

  it('navigates to alerts when notification icon clicked', () => {
    const navigate = vi.fn();
    render(<Istatistikler {...defaultProps} onNavigate={navigate} />);
    const notifBtn = screen.getByLabelText('Bildirimler');
    fireEvent.click(notifBtn);
    expect(navigate).toHaveBeenCalledWith('alerts');
  });

  it('navigates to profile when account icon clicked', () => {
    const navigate = vi.fn();
    render(<Istatistikler {...defaultProps} onNavigate={navigate} />);
    const profileBtn = screen.getByLabelText('Profil');
    fireEvent.click(profileBtn);
    expect(navigate).toHaveBeenCalledWith('profile');
  });

  it('renders sidebar with stats link active', () => {
    render(<Istatistikler {...defaultProps} />);
    expect(screen.getByText('İstatistikler').closest('a')).toHaveClass('bg-blue-600/10');
  });

  it('shows fallback suggestions when resources are healthy', () => {
    const healthyState: AppState = {
      ...mockState,
      resources: { oxygen: 98, power: 90, water: 95, food: 96, temperature: 22 },
      alerts: [],
    };
    render(<Istatistikler {...defaultProps} state={healthyState} />);
    // Should show default suggestions
    expect(screen.getByText('Termal Regülasyon Optimizasyonu')).toBeInTheDocument();
    expect(screen.getByText('Su Geri Dönüşüm Filtresi')).toBeInTheDocument();
    expect(screen.getByText('Oksijen Dağıtım Dengelemesi')).toBeInTheDocument();
  });
});
