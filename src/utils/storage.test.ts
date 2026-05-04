import { describe, it, expect, beforeEach } from 'vitest';
import { loadState, saveState, removeState } from './storage';

describe('storage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('loadState returns null when key does not exist', () => {
    expect(loadState('missing')).toBeNull();
  });

  it('saveState and loadState round-trip objects', () => {
    const data = { modules: [{ id: 'm1', name: 'Test' }], count: 3 };
    saveState('test-key', data);
    expect(loadState('test-key')).toEqual(data);
  });

  it('removeState deletes the item', () => {
    saveState('tmp', { a: 1 });
    removeState('tmp');
    expect(loadState('tmp')).toBeNull();
  });

  it('loadState returns null on invalid JSON', () => {
    localStorage.setItem('habitat_bad', 'not-json');
    expect(loadState('bad')).toBeNull();
  });
});
