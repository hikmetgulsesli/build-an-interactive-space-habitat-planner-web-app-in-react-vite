import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import App from './App';

describe('App shell routing', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders dashboard by default', () => {
    render(<App />);
    expect(screen.getByText('Ana Sistem Özeti')).toBeInTheDocument();
  });

  it('navigates to settings and back', () => {
    render(<App />);
    fireEvent.click(screen.getAllByText('Ayarlar')[0]);
    expect(screen.getByText('Sistem Ayarları')).toBeInTheDocument();
    fireEvent.click(screen.getAllByText('Görev Panosu')[0]);
    expect(screen.getByText('Operasyon Panosu')).toBeInTheDocument();
  });

  it('navigates to habitat design screen', () => {
    render(<App />);
    fireEvent.click(screen.getAllByText('Habitat Tasarımı')[0]);
    expect(screen.getByText('Habitat Builder')).toBeInTheDocument();
  });

  it('persists screen choice in localStorage', () => {
    const { unmount } = render(<App />);
    fireEvent.click(screen.getAllByText('Mürettebat')[0]);
    unmount();
    render(<App />);
    expect(screen.getAllByText('Mürettebat')[0]).toBeInTheDocument();
  });
});
