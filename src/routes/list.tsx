import { createFileRoute } from '@tanstack/react-router'
import ListPage from '../pages/list'

export const Route = createFileRoute('/list')({
  component: ListPage,
})
