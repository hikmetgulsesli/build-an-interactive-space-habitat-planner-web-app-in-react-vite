import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { useAppState } from './useAppState';

describe('useAppState', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('initializes with default state', () => {
    const { result } = renderHook(() => useAppState());
    expect(result.current.state.currentScreen).toBe('dashboard');
    expect(result.current.state.modules.length).toBeGreaterThan(0);
    expect(result.current.state.crew.length).toBeGreaterThan(0);
    expect(result.current.state.alerts.length).toBeGreaterThan(0);
    expect(result.current.state.tasks.length).toBeGreaterThan(0);
    expect(result.current.state.settings.theme).toBe('dark');
  });

  it('navigates between screens', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.navigate('settings'));
    expect(result.current.state.currentScreen).toBe('settings');
    act(() => result.current.navigate('habitat'));
    expect(result.current.state.currentScreen).toBe('habitat');
  });

  it('persists state to localStorage', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.navigate('crew'));
    const saved = JSON.parse(localStorage.getItem('habitat_habitat-app-state')!);
    expect(saved.currentScreen).toBe('crew');
  });

  it('adds and removes modules', () => {
    const { result } = renderHook(() => useAppState());
    const newModule = { id: 'mod-test', name: 'Test Modül', type: 'living' as const, status: 'active' as const };
    act(() => result.current.addModule(newModule));
    expect(result.current.state.modules.some(m => m.id === 'mod-test')).toBe(true);
    act(() => result.current.removeModule('mod-test'));
    expect(result.current.state.modules.some(m => m.id === 'mod-test')).toBe(false);
  });

  it('updates crew members', () => {
    const { result } = renderHook(() => useAppState());
    const id = result.current.state.crew[0].id;
    act(() => result.current.updateCrew(id, { status: 'rest' }));
    expect(result.current.state.crew.find(c => c.id === id)?.status).toBe('rest');
  });

  it('dismisses alerts', () => {
    const { result } = renderHook(() => useAppState());
    const id = result.current.state.alerts[0].id;
    act(() => result.current.dismissAlert(id));
    expect(result.current.state.alerts.find(a => a.id === id)).toBeUndefined();
  });

  it('updates settings', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.updateSettings({ language: 'en' }));
    expect(result.current.state.settings.language).toBe('en');
  });

  it('resetState clears everything', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.navigate('settings'));
    act(() => result.current.resetState());
    expect(result.current.state.currentScreen).toBe('dashboard');
    expect(result.current.state.modules.length).toBe(4);
    expect(result.current.state.crew.length).toBe(3);
  });
});
