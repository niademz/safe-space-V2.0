import AccountForm from './account-form'
import { supabaseServer } from '../../../utils/supabase/server'

export default async function Account() {
  const supabase = supabaseServer()

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
