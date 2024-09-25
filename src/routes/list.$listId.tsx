import { createFileRoute } from '@tanstack/react-router';
import SingleListPage from '../pages/singleListPage';

export const Route = createFileRoute('/list/$listId')({
  component: SingleListPage,
})
