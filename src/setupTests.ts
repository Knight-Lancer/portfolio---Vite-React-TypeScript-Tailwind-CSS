import '@testing-library/jest-dom';
import { jest } from '@jest/globals';

Object.defineProperty(Element.prototype, "scrollIntoView", {
  value: jest.fn(),
  writable: true,
});

window.matchMedia = jest.fn().mockImplementation((query: string) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(),
  removeListener: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
})) as typeof window.matchMedia;

window.alert = jest.fn();