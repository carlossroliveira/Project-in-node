import { Content } from '@application/entities/content';
import {
  Notification,
  NotificationProps,
} from '@application/entities/notification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}): Notification {
  return new Notification({
    recipientId: 'recipient-1',
    content: new Content('Você recebeu uma solicitação de amizade'),
    category: 'social',
    ...override,
  });
}
