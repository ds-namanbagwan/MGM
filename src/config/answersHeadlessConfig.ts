import { AnswersHeadlessProvider } from '@yext/answers-headless-react';

type HeadlessProviderProps = Parameters<typeof AnswersHeadlessProvider>[0];

export const answersHeadlessConfig: HeadlessProviderProps = {
  apiKey: 'db9fb251f6697c5529b02e93d68f6e33',
  experienceKey: 'donaldson-locator',
  locale: 'en_GB',
  sessionTrackingEnabled: true
};