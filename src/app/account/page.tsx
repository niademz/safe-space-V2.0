import AccountForm from './account-form'
import { createClient } from '../../../utils/supabase/server'

export default async function Account() {
  const supabase = createClient()

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error || !user) {
    console.error('Error fetching user:', error)
    return <div>You need to login to access this page!!</div>
  }

  return <AccountForm user={user} />
}
