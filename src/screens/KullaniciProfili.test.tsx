import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { KullaniciProfili } from '../screens/KullaniciProfili';
import type { AppState } from '../types/domain';

const mockState: AppState = {
  currentScreen: 'profile',
  modules: [
    { id: 'mod-1', name: 'Test Modül', type: 'core', status: 'active' },
  ],
  crew: [
    { id: 'crew-1', name: 'Ahmet Kaya', role: 'Mühendis', status: 'active' },
  ],
  resources: { oxygen: 95, power: 70, water: 88, food: 92, temperature: 26 },
  alerts: [],
  tasks: [
    { id: 'TSK-1', title: 'Test görev', module: 'Test Modül', assignee: 'Ahmet Kaya', status: 'in-progress' },
  ],
  settings: { theme: 'dark', language: 'tr', telemetryRate: 1.5, criticalThreshold: true },
};

const defaultProps = {
  currentScreen: 'profile' as const,
  onNavigate: vi.fn(),
  state: mockState,
};

// Mock window.print
vi.stubGlobal('print', vi.fn());

// Mock window.alert
vi.stubGlobal('alert', vi.fn());

describe('KullaniciProfili', () => {
  it('renders profile title', () => {
    render(<KullaniciProfili {...defaultProps} />);
    expect(screen.getByText('Personel Dosyası')).toBeInTheDocument();
  });

  it('renders default profile name', () => {
    render(<KullaniciProfili {...defaultProps} />);
    expect(screen.getByText('Dr. Elias Vance')).toBeInTheDocument();
  });

  it('allows editing profile name', () => {
    render(<KullaniciProfili {...defaultProps} />);
    const nameHeading = screen.getByText('Dr. Elias Vance');
    fireEvent.click(nameHeading);
    const input = screen.getByDisplayValue('Dr. Elias Vance');
    fireEvent.change(input, { target: { value: 'Dr. Elif Yılmaz' } });
    fireEvent.blur(input);
    expect(screen.getByText('Dr. Elif Yılmaz')).toBeInTheDocument();
  });

  it('saves name on Enter key', () => {
    render(<KullaniciProfili {...defaultProps} />);
    fireEvent.click(screen.getByText('Dr. Elias Vance'));
    const input = screen.getByDisplayValue('Dr. Elias Vance');
    fireEvent.change(input, { target: { value: 'Dr. Ahmet Kaya' } });
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(screen.getByText('Dr. Ahmet Kaya')).toBeInTheDocument();
  });

  it('triggers print on print button click', () => {
    render(<KullaniciProfili {...defaultProps} />);
    const printBtn = screen.getByText('DOSYAYI YAZDIR');
    fireEvent.click(printBtn);
    expect(window.print).toHaveBeenCalled();
  });

  it('updates avatar on update button click', () => {
    render(<KullaniciProfili {...defaultProps} />);
    const updateBtn = screen.getByText('GÜNCELLE');
    fireEvent.click(updateBtn);
    expect(screen.getByText('GÜNCELLENDİ')).toBeInTheDocument();
  });

  it('shows password updated state on valid password change', () => {
    render(<KullaniciProfili {...defaultProps} />);
    const currentPassInputs = screen.getAllByPlaceholderText('••••••••');
    fireEvent.change(currentPassInputs[0], { target: { value: 'oldpass' } });
    fireEvent.change(currentPassInputs[1], { target: { value: 'newpass' } });
    const updateBtn = screen.getByText('KODU GÜNCELLE');
    fireEvent.click(updateBtn);
    expect(screen.getByText('KOD GÜNCELLENDİ')).toBeInTheDocument();
  });

  it('shows alert on short password', () => {
    render(<KullaniciProfili {...defaultProps} />);
    const currentPassInputs = screen.getAllByPlaceholderText('••••••••');
    fireEvent.change(currentPassInputs[0], { target: { value: 'ab' } });
    fireEvent.change(currentPassInputs[1], { target: { value: 'cd' } });
    const updateBtn = screen.getByText('KODU GÜNCELLE');
    fireEvent.click(updateBtn);
    expect(window.alert).toHaveBeenCalledWith('Şifre en az 4 karakter olmalıdır.');
  });

  it('renders session history table', () => {
    render(<KullaniciProfili {...defaultProps} />);
    expect(screen.getByText('Sistem Oturum Geçmişi')).toBeInTheDocument();
    expect(screen.getAllByText('BAŞARILI').length).toBeGreaterThan(0);
    expect(screen.getByText('REDDEDİLDİ')).toBeInTheDocument();
    expect(screen.getAllByText('192.168.7.104').length).toBeGreaterThan(0);
  });

  it('navigates to alerts when notification icon clicked', () => {
    const navigate = vi.fn();
    render(<KullaniciProfili {...defaultProps} onNavigate={navigate} />);
    const notifBtn = screen.getByLabelText('Bildirimler');
    fireEvent.click(notifBtn);
    expect(navigate).toHaveBeenCalledWith('alerts');
  });

  it('navigates to profile when account icon clicked', () => {
    const navigate = vi.fn();
    render(<KullaniciProfili {...defaultProps} onNavigate={navigate} />);
    const profileBtn = screen.getByLabelText('Profil');
    fireEvent.click(profileBtn);
    expect(navigate).toHaveBeenCalledWith('profile');
  });

  it('renders sidebar with profile link active', () => {
    render(<KullaniciProfili {...defaultProps} />);
    expect(screen.getByText('Profil').closest('a')).toHaveClass('bg-blue-600/10');
  });

  it('renders dynamic telemetry in header', () => {
    render(<KullaniciProfili {...defaultProps} />);
    expect(screen.getByText('O2: %95')).toBeInTheDocument();
    expect(screen.getByText('GÜÇ: %70')).toBeInTheDocument();
    expect(screen.getByText('GIDA: %92')).toBeInTheDocument();
  });

  it('renders stats link in sidebar', () => {
    render(<KullaniciProfili {...defaultProps} />);
    expect(screen.getByText('İstatistikler')).toBeInTheDocument();
  });
});
