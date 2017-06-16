import { JSDOM } from 'jsdom';

const dom = new JSDOM('<html><body></body></html>');

global.window = dom.window;
global.document = dom.window.document;
global.navigator = dom.window.navigator;
