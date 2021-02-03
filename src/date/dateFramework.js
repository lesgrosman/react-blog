import { parseISO, format } from 'date-fns'

export const getDate = (date) => {
  const parsedDate = parseISO(date)
  return format(parsedDate, 'yyyy-MM-dd HH:mm:ss')
}


