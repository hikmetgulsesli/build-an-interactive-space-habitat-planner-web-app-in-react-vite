import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { HataSayfasi } from './HataSayfasi';

describe('HataSayfasi', () => {
  it('renders error page with default content', () => {
    render(<HataSayfasi currentScreen="error" onNavigate={vi.fn()} />);
    expect(screen.getByText('BAĞLANTI KESİLDİ')).toBeInTheDocument();
    expect(screen.getByText('TEKRAR DENE')).toBeInTheDocument();
    expect(screen.getByText('DESTEKLE İLETİŞİME GEÇ')).toBeInTheDocument();
  });

  it('displays custom error code and message when provided', () => {
    render(
      <HataSayfasi
        currentScreen="error"
        onNavigate={vi.fn()}
        errorCode="0xCUSTOM_ERR"
        errorMessage="Özel hata mesajı."
      />
    );
    expect(screen.getByText(/0xCUSTOM_ERR/)).toBeInTheDocument();
    expect(screen.getByTestId('err-detail')).toHaveTextContent('Özel hata mesajı.');
  });

  it('updates timestamp dynamically', () => {
    const { container } = render(<HataSayfasi currentScreen="error" onNavigate={vi.fn()} />);
    const timestamp = container.querySelector('code');
    expect(timestamp?.textContent).toContain(new Date().getFullYear().toString());
  });

  it('retry button calls onRetry when provided', async () => {
    const onRetry = vi.fn();
    render(<HataSayfasi currentScreen="error" onNavigate={vi.fn()} onRetry={onRetry} />);
    fireEvent.click(screen.getByText('TEKRAR DENE'));
    await waitFor(() => expect(onRetry).toHaveBeenCalled(), { timeout: 2000 });
  });

  it('retry button navigates to dashboard when no onRetry provided', async () => {
    const onNavigate = vi.fn();
    render(<HataSayfasi currentScreen="error" onNavigate={onNavigate} />);
    fireEvent.click(screen.getByText('TEKRAR DENE'));
    await waitFor(() => expect(onNavigate).toHaveBeenCalledWith('dashboard'), { timeout: 2000 });
  });

  it('shows loading state during retry', () => {
    render(<HataSayfasi currentScreen="error" onNavigate={vi.fn()} />);
    fireEvent.click(screen.getByText('TEKRAR DENE'));
    expect(screen.getByText('YENİDEN BAĞLANILIYOR...')).toBeInTheDocument();
    const button = screen.getByText('YENİDEN BAĞLANILIYOR...').closest('button');
    expect(button).toBeDisabled();
  });

  it('opens support contact modal', () => {
    render(<HataSayfasi currentScreen="error" onNavigate={vi.fn()} />);
    fireEvent.click(screen.getByText('DESTEKLE İLETİŞİME GEÇ'));
    expect(screen.getByText('Destek İletişimi')).toBeInTheDocument();
    expect(screen.getByText('komuta@sektor7.uzay')).toBeInTheDocument();
    expect(screen.getByText('teknik@sektor7.uzay')).toBeInTheDocument();
  });

  it('closes support contact modal', () => {
    render(<HataSayfasi currentScreen="error" onNavigate={vi.fn()} />);
    fireEvent.click(screen.getByText('DESTEKLE İLETİŞİME GEÇ'));
    expect(screen.getByText('Destek İletişimi')).toBeInTheDocument();
    const closeButton = screen.getByLabelText('Kapat');
    fireEvent.click(closeButton);
    expect(screen.queryByText('Destek İletişimi')).not.toBeInTheDocument();
  });

  it('closes support modal with Anladım button', () => {
    render(<HataSayfasi currentScreen="error" onNavigate={vi.fn()} />);
    fireEvent.click(screen.getByText('DESTEKLE İLETİŞİME GEÇ'));
    fireEvent.click(screen.getByText('Anladım'));
    expect(screen.queryByText('Destek İletişimi')).not.toBeInTheDocument();
  });
});
